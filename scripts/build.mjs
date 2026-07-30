import assert from "node:assert/strict";
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(scriptsDir);
const outputDir = join(projectDir, "dist");
const workerPath = join(outputDir, "server", "index.js");
const clientDir = join(outputDir, "client");
const hostingSourcePath = join(projectDir, ".openai", "hosting.json");
const hostingOutputPath = join(outputDir, ".openai", "hosting.json");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const textExtensions = new Set([".css", ".html", ".js", ".json", ".svg"]);

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    }),
  );
  return nested.flat();
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(dirname(workerPath), { recursive: true });
await mkdir(clientDir, { recursive: true });
await mkdir(dirname(hostingOutputPath), { recursive: true });

const publicFiles = [
  join(projectDir, "index.html"),
  join(projectDir, "legal.html"),
  ...(await listFiles(join(projectDir, "assets"))).filter(
    (file) => extname(file).toLowerCase() !== ".md",
  ),
];

const textAssets = [];
const binaryAssets = [];

for (const file of publicFiles) {
  const projectRelative = relative(projectDir, file).split(sep).join("/");
  const route = `/${projectRelative}`;
  const extension = extname(file).toLowerCase();
  const contentType = mimeTypes[extension];
  assert.ok(contentType, `Tipo MIME não mapeado: ${projectRelative}`);

  if (textExtensions.has(extension)) {
    textAssets.push([
      route,
      { body: await readFile(file, "utf8"), contentType },
    ]);
  } else {
    binaryAssets.push([
      route,
      { bodyBase64: (await readFile(file)).toString("base64"), contentType },
    ]);
  }
}

const commonHeaders = {
  "cache-control": "no-store",
  "content-security-policy":
    "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'none'",
  "permissions-policy": "geolocation=(), microphone=(), camera=(), interest-cohort=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
  "x-robots-tag": "noindex, nofollow, noarchive",
};

const workerSource = `
const TEXT_ASSETS = new Map(${JSON.stringify(textAssets)});
const BINARY_ASSETS = new Map(${JSON.stringify(binaryAssets)});
const COMMON_HEADERS = ${JSON.stringify(commonHeaders)};

function response(body, contentType, request, status = 200, extraHeaders = {}) {
  return new Response(request.method === "HEAD" ? null : body, {
    status,
    headers: {
      ...COMMON_HEADERS,
      "content-type": contentType,
      ...extraHeaders,
    },
  });
}

function decodeBase64(value) {
  const decoded = atob(value);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return response("Method not allowed", "text/plain; charset=utf-8", request, 405, {
        allow: "GET, HEAD",
      });
    }

    const url = new URL(request.url);
    const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
    const textAsset = TEXT_ASSETS.get(requestedPath);
    if (textAsset) return response(textAsset.body, textAsset.contentType, request);

    const binaryAsset = BINARY_ASSETS.get(requestedPath);
    if (binaryAsset) {
      return response(decodeBase64(binaryAsset.bodyBase64), binaryAsset.contentType, request);
    }

    return response("Not found", "text/plain; charset=utf-8", request, 404);
  },
};
`.trimStart();

JSON.parse(await readFile(hostingSourcePath, "utf8"));
await writeFile(workerPath, workerSource, "utf8");
await cp(hostingSourcePath, hostingOutputPath);
await cp(join(projectDir, "index.html"), join(clientDir, "index.html"));
await cp(join(projectDir, "legal.html"), join(clientDir, "legal.html"));
await cp(join(projectDir, "assets"), join(clientDir, "assets"), { recursive: true });

const workerModule = await import(`${pathToFileURL(workerPath).href}?build=${Date.now()}`);
assert.equal(typeof workerModule.default?.fetch, "function");

for (const [route, expectedType] of [
  ["/", /^text\/html/],
  ["/legal.html", /^text\/html/],
  ["/assets/med.js", /^text\/javascript/],
  ["/assets/images/hero-clinica.jpg", /^image\/jpeg/],
  ["/assets/fonts/karla-latin.woff2", /^font\/woff2/],
]) {
  const result = await workerModule.default.fetch(
    new Request(`https://prototype.local${route}`),
  );
  assert.equal(result.status, 200, route);
  assert.match(result.headers.get("content-type") ?? "", expectedType, route);
}

const missing = await workerModule.default.fetch(
  new Request("https://prototype.local/nao-existe"),
);
assert.equal(missing.status, 404);

console.log("Pacote Worker do protótipo gerado e validado em dist/.");
