import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(scriptsDir);
const sourceDir = join(projectDir, "source");

function extract(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert.notEqual(startIndex, -1, `Início ausente: ${label}`);
  const contentStart = startIndex + start.length;
  const endIndex = source.indexOf(end, contentStart);
  assert.notEqual(endIndex, -1, `Fim ausente: ${label}`);
  return source.slice(contentStart, endIndex);
}

function replaceConditional(body, expression, replacer) {
  const escaped = expression.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    String.raw`\s*<sc-if value="\{\{ ${escaped} \}\}"[^>]*>\s*([\s\S]*?)\s*</sc-if>`,
    "g",
  );
  let replaced = false;
  const result = body.replace(pattern, (_match, inner) => {
    replaced = true;
    return replacer(inner);
  });
  assert.equal(replaced, true, `Bloco condicional ausente: ${expression}`);
  return result;
}

function convertMain(source) {
  let head = extract(source, "<helmet>", "</helmet>", "helmet principal")
    .replace(/\s*<script src="\.\/image-slot\.js"><\/script>\s*/g, "\n")
    .trim();

  const rootStart = source.indexOf('<div style="font-family:');
  assert.notEqual(rootStart, -1, "Raiz visual principal ausente");
  const rootEndMarker = "\n</div>\n</x-dc>";
  const rootEnd = source.lastIndexOf(rootEndMarker);
  assert.notEqual(rootEnd, -1, "Fim da raiz visual principal ausente");
  let body = source.slice(rootStart, rootEnd + "\n</div>".length);

  body = replaceConditional(body, "isMobile", (inner) => {
    const button = inner.replace(
      'onClick="{{ toggleMenu }}"',
      'id="menu-toggle" aria-expanded="false"',
    );
    return `<div class="mobile-only">${button}</div>`;
  });

  body = replaceConditional(
    body,
    "isDesktop",
    (inner) => `<div class="desktop-only">${inner}</div>`,
  );

  body = replaceConditional(body, "menuOpen", (inner) =>
    inner.replace(
      '<div id="menu-movil" style="',
      '<div id="menu-movil" class="mobile-menu" hidden style="',
    ),
  );

  body = replaceConditional(body, "waVisible", (inner) =>
    inner.replace("<a href=", '<a class="wa-float" hidden href='),
  );

  body = replaceConditional(body, "showPending", () => "");
  body = body
    .replaceAll('onClick="{{ closeMenu }}"', "data-close-menu")
    .replace(
      '<a href="#contenido" style="',
      '<a class="skip-link" href="#contenido" style="',
    )
    .replace(/\sstyle-focus="[^"]*"/g, "")
    .replaceAll('href="Legal.dc.html"', 'href="legal.html"');

  const images = new Map([
    [
      '<image-slot id="hero-bg" shape="rect" src="assets/images/hero-clinica.jpg" fit="cover" placeholder="Foto ambiente de la clínica — sin personas"></image-slot>',
      '<img class="site-image" src="assets/images/hero-clinica.jpg" alt="Ambiente sereno con luz natural cálida" width="1200" height="1500" fetchpriority="high" decoding="async">',
    ],
    [
      '<image-slot id="card-aclarado" shape="rect" src="assets/images/tratamiento-aclarado.jpg" fit="cover" placeholder="Still life simbólico — aclarado íntimo"></image-slot>',
      '<img class="site-image" src="assets/images/tratamiento-aclarado.jpg" alt="Composición simbólica de cuidado delicado y privacidad" width="1200" height="900" loading="lazy" decoding="async">',
    ],
    [
      '<image-slot id="card-laser" shape="rect" src="assets/images/tratamiento-laser.jpg" fit="cover" placeholder="Still life simbólico — depilación láser"></image-slot>',
      '<img class="site-image" src="assets/images/tratamiento-laser.jpg" alt="Detalle simbólico de precisión y cuidado profesional" width="1200" height="900" loading="lazy" decoding="async">',
    ],
    [
      '<image-slot id="card-otros" shape="rect" src="assets/images/tratamiento-otros.jpg" fit="cover" placeholder="Still life simbólico — otros cuidados"></image-slot>',
      '<img class="site-image" src="assets/images/tratamiento-otros.jpg" alt="Composición editorial que representa una consulta personalizada" width="1200" height="900" loading="lazy" decoding="async">',
    ],
    [
      '<image-slot id="clinica-foto" shape="rect" src="assets/images/clinica-ambiente.jpg" fit="cover" placeholder="Espacio de atención — sin retrato inventado"></image-slot>',
      '<img class="site-image" src="assets/images/clinica-ambiente.jpg" alt="Espacio de atención privado y sereno" width="1120" height="1400" loading="lazy" decoding="async">',
    ],
  ]);

  for (const [slot, image] of images) {
    assert.equal(body.includes(slot), true, `Slot de imagem ausente: ${slot}`);
    body = body.replace(slot, image);
  }

  assert.equal(body.includes("<sc-if"), false, "Restou sc-if no HTML convertido");
  assert.equal(body.includes("<image-slot"), false, "Restou image-slot no HTML convertido");
  assert.equal(body.includes("{{"), false, "Restou binding editorial no HTML convertido");

  const supplementalStyle = `
<style>
html{scroll-behavior:smooth}
section{scroll-margin-top:5.5rem}
.desktop-only{display:flex;align-items:center;gap:2rem}
.mobile-only,.mobile-menu{display:none}
.mobile-menu[hidden],.wa-float[hidden]{display:none!important}
.site-image{display:block;width:100%;height:100%;object-fit:cover;transition:transform 700ms cubic-bezier(.22,.61,.36,1)}
article:hover .site-image{transform:scale(1.025)}
.skip-link:focus{left:.5rem!important;top:.5rem!important}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:2px solid #8A5E44;outline-offset:4px}
@media (max-width:980px){
  .desktop-only{display:none}
  .mobile-only{display:block}
  .mobile-menu:not([hidden]){display:block}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .site-image{transition:none}
}
</style>`;

  head = head.replace("</style>", `</style>\n${supplementalStyle}`);

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}
<script src="assets/site.js" defer></script>
</head>
<body>
${body}
</body>
</html>
`;
}

function convertLegal(source) {
  const cdata = extract(source, "<![CDATA[", "]]>", "CDATA legal");
  const head = extract(cdata, "<helmet>", "</helmet>", "helmet legal")
    .replace(
      '<meta name="robots" content="noindex">',
      '<meta name="robots" content="noindex, nofollow, noarchive">',
    )
    .trim();
  const bodyStart = cdata.indexOf('<div style="font-family:');
  assert.notEqual(bodyStart, -1, "Raiz visual legal ausente");
  const body = cdata
    .slice(bodyStart)
    .replaceAll('href="MED DermoEstetica.dc.html"', 'href="index.html"');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}
</head>
<body>
${body}
</body>
</html>
`;
}

const [mainSource, legalSource] = await Promise.all([
  readFile(join(sourceDir, "MED DermoEstetica.dc.html"), "utf8"),
  readFile(join(sourceDir, "Legal.dc.html"), "utf8"),
]);

const indexHtml = convertMain(mainSource);
const legalHtml = convertLegal(legalSource);

await Promise.all([
  writeFile(join(projectDir, "index.html"), indexHtml, "utf8"),
  writeFile(join(projectDir, "legal.html"), legalHtml, "utf8"),
]);

console.log("Export do Claude Design convertido para HTML estático.");
