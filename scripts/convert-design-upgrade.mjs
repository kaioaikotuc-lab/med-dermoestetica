// Converte o export "upgrade premium" do Claude Design (`.dc.html`) no HTML
// estático publicado em https://kaioaikotuc-lab.github.io/med-dermoestetica/.
//
// Uso: node scripts/convert-design-upgrade.mjs <diretorio-de-saida>
//
// O export do Claude Design traz três coisas que não existem em HTML puro:
//   - bindings `{{ … }}` alimentados pelo `<script type="text/x-dc">`;
//   - atributos `style-hover` / `style-focus`;
//   - elementos `<image-slot>` do runtime editorial.
// Cada um vira, respectivamente: estado inicial + `assets/med.js`, regras CSS
// geradas, e `<img>` (quando a foto é local) ou moldura de foto pendente
// (quando o export apontava para uma pré-visualização de banco de imagens).

import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const projectDir = dirname(scriptsDir);
const sourceDir = join(projectDir, "source", "upgrade-2026-07-29");

const outDir = process.argv[2];
assert.ok(outDir, "Informe o diretório de saída.");
assert.equal(isAbsolute(outDir), true, "O diretório de saída deve ser absoluto.");

const source = (
  await readFile(join(sourceDir, "Med DermoEstetica.dc.html"), "utf8")
).replace(/\r\n/g, "\n");

// --- 1. cabeça -------------------------------------------------------------

function slice(text, start, end, label) {
  const from = text.indexOf(start);
  assert.notEqual(from, -1, `Início ausente: ${label}`);
  const contentStart = from + start.length;
  const to = text.indexOf(end, contentStart);
  assert.notEqual(to, -1, `Fim ausente: ${label}`);
  return text.slice(contentStart, to);
}

const helmet = slice(source, "<helmet>", "</helmet>", "helmet")
  .replace(/\s*<script src="\.\/assets\/image-slot\.js"><\/script>\s*/g, "\n")
  .trim();

assert.equal(helmet.includes("<script"), false, "Restou script no helmet.");

// --- 2. corpo --------------------------------------------------------------

const rootStart = source.indexOf(`<div style="font-family:'Karla'`);
assert.notEqual(rootStart, -1, "Raiz visual ausente.");
const rootEnd = source.lastIndexOf("\n</div>\n\n</x-dc>");
assert.notEqual(rootEnd, -1, "Fim da raiz visual ausente.");
let body = source.slice(rootStart, rootEnd + "\n</div>".length);

function replaceOnce(pattern, replacement, label) {
  const before = body;
  body = body.replace(pattern, replacement);
  assert.notEqual(body, before, `Substituição não aplicada: ${label}`);
}

function replaceAllChecked(trecho, replacement, expected, label) {
  assert.equal(body.split(trecho).length - 1, expected, `Ocorrências inesperadas: ${label}`);
  body = body.replaceAll(trecho, replacement);
}

// 2a. textura de papel — prop `granoPapel` tem default `true`.
replaceOnce("opacity:{{ grainOpacity }}", "opacity:.04", "grão do papel");

// 2b. cabeçalho: estado inicial é o topo da página (ainda não rolado).
replaceOnce(
  "<header style=\"position:fixed;top:0;left:0;right:0;z-index:500;background:{{ headerBg }};backdrop-filter:{{ headerBlur }};box-shadow:{{ headerShadow }};",
  "<header id=\"med-header\" style=\"position:fixed;top:0;left:0;right:0;z-index:500;background:rgba(253,251,248,0);backdrop-filter:none;box-shadow:none;",
  "cabeçalho",
);
replaceOnce(
  "<div style=\"max-width:1200px;margin-inline:auto;padding:{{ headerPaddingBlock }} ",
  "<div id=\"med-header-inner\" style=\"max-width:1200px;margin-inline:auto;padding:1.5rem ",
  "padding do cabeçalho",
);

// 2c. menu móvel.
replaceOnce(
  "<button class=\"med-burger\" onclick=\"{{ toggleMenu }}\" aria-expanded=\"{{ menuOpen }}\"",
  "<button id=\"med-burger\" class=\"med-burger\" aria-expanded=\"false\"",
  "botão do menu",
);
replaceOnce(
  "transition:transform 320ms ease;transform:{{ burgerLine1 }}\"",
  "transition:transform 320ms ease;transform:none\" data-burger-line=\"1\"",
  "traço 1 do menu",
);
replaceOnce(
  "transition:transform 320ms ease,opacity 320ms;transform:{{ burgerLine2 }}\"",
  "transition:transform 320ms ease,opacity 320ms;transform:none\" data-burger-line=\"2\"",
  "traço 2 do menu",
);
replaceOnce("max-height:{{ menuMaxHeight }}", "max-height:0px", "altura do menu");
replaceAllChecked(" onclick=\"{{ closeMenu }}\"", " data-close-menu", 6, "fechar menu");

// 2d. FAQ — acordeão de cinco perguntas, todas fechadas no início
//     (a prop `faqInicial` tem default -1).
for (let i = 0; i < 5; i += 1) {
  replaceOnce(
    `<button onclick="{{ toggleFaq${i} }}" aria-expanded="{{ faq${i}Open }}"`,
    `<button data-faq="${i}" aria-expanded="false"`,
    `botão da FAQ ${i}`,
  );
  replaceOnce(
    `transform:translate(-50%,-50%) rotate({{ faq${i}Rot }})"`,
    `transform:translate(-50%,-50%) rotate(90deg)" data-faq-icon="${i}"`,
    `ícone da FAQ ${i}`,
  );
  replaceOnce(
    `<div style="overflow:hidden;max-height:{{ faq${i}Max }};`,
    `<div data-faq-panel="${i}" style="overflow:hidden;max-height:0px;`,
    `painel da FAQ ${i}`,
  );
}

// 2e. WhatsApp flutuante e selo de versão de prueba — ambos aparecem no scroll.
replaceAllChecked(
  "opacity:{{ waOpacity }};visibility:{{ waVisibility }};transform:{{ waTransform }};",
  "opacity:0;visibility:hidden;transform:translateY(12px) scale(.9);",
  2,
  "revelação no scroll",
);
replaceOnce(
  "<a href=\"https://wa.me/595982879555?text=Hola%2C%20quisiera%20agendar%20una%20evaluaci%C3%B3n.\" target=\"_blank\" rel=\"noopener\" aria-label=\"Escribinos al WhatsApp\"",
  "<a data-wa-reveal href=\"https://wa.me/595982879555?text=Hola%2C%20quisiera%20agendar%20una%20evaluaci%C3%B3n.\" target=\"_blank\" rel=\"noopener\" aria-label=\"Escribinos al WhatsApp\"",
  "botão flutuante do WhatsApp",
);
replaceOnce(
  "<aside aria-label=\"Versión de prueba, datos en revisión\"",
  "<aside data-wa-reveal aria-label=\"Versión de prueba, datos en revisión\"",
  "selo de versão de prueba",
);

assert.equal(body.includes("{{"), false, "Restou binding editorial no HTML.");

// 2f. no site publicado o aviso legal é uma página estática.
replaceAllChecked('href="Legal.dc.html"', 'href="legal.html"', 1, "link do aviso legal");
assert.equal(body.includes(".dc.html"), false, "Restou link para Design Component.");

// --- 3. imagens -----------------------------------------------------------
//
// O Claude Design compõe com pré-visualizações do Adobe Stock servidas por URL
// externa. O site não pode depender de servidor de fora nem publicar imagem sem
// licença, então cada URL é trocada pelo arquivo já licenciado e redimensionado
// em `assets/images/`.

const imagensStock = new Map([
  ["https://t4.ftcdn.net/jpg/04/54/08/45/240_F_454084588_cgVr5z8ZmumeMPKYtkgZBMyfOyAnkfxn.jpg", "assets/images/card-aclarado-intimo.jpg"],
  ["https://t4.ftcdn.net/jpg/04/96/77/95/240_F_496779538_ueHuNV4yYUCyNL1WE75Did9Dtn2ahum8.jpg", "assets/images/card-depilacion-laser.jpg"],
  ["https://t3.ftcdn.net/jpg/03/69/01/16/240_F_369011641_IU2KHKAADZM7pdsxUDSQHa2QJFwguhl2.jpg", "assets/images/card-otros-cuidados.jpg"],
  ["https://t4.ftcdn.net/jpg/04/46/39/15/240_F_446391592_G0Irk5wcPblTupPZAKq5zInuHAxjyXln.jpg", "assets/images/cap-facial.jpg"],
  ["https://t4.ftcdn.net/jpg/02/55/32/83/240_F_255328355_TaGwzi1PXc36rb57G2iixdEEXHy4Y9Gr.jpg", "assets/images/cap-corporal.jpg"],
  ["https://t4.ftcdn.net/jpg/04/68/97/17/240_F_468971752_RbkZL4cLxP6J0EHOriWhmEfMckrpvfhd.jpg", "assets/images/cap-depilacion.jpg"],
  ["https://t4.ftcdn.net/jpg/04/75/99/85/240_F_475998587_hqWjT2BTChFzkPBKUQAbYuwEScGKFItt.jpg", "assets/images/cap-lesiones.jpg"],
]);

for (const [url, local] of imagensStock) {
  replaceAllChecked(url, local, 1, `imagem de banco ${local}`);
}

// A foto real da recepção só existe dentro do projeto do Claude Design e passa
// do limite de leitura da API. Até o arquivo chegar em `assets/images/`, a
// seção "La clínica" segue com a foto de ambiente que já estava publicada.
assert.equal(body.includes("clinica-recepcion"), false, "Restou referência à foto da recepção.");

assert.equal(body.includes("<image-slot"), false, "Restou image-slot no HTML.");
assert.equal(/https?:\/\/(?!wa\.me|www\.google\.com|www\.instagram\.com|www\.w3\.org)/.test(body), false,
  "Restou dependência externa no HTML.");

// --- 4. `style-hover` / `style-focus` --------------------------------------

const reglas = [];

function extrairEstadoVisual(atributo, sufixoCss) {
  const pattern = new RegExp(`\\s${atributo}="([^"]*)"`, "g");
  body = body.replace(pattern, (_match, declaracoes) => {
    const clase = `med-x${reglas.length}`;
    reglas.push(`.${clase}${sufixoCss}{${declaracoes}}`);
    return ` data-med-class="${clase}"`;
  });
}

extrairEstadoVisual("style-hover", ":hover");
extrairEstadoVisual("style-focus", ":focus");

// Move cada classe gerada para o atributo `class`, preservando o que já existia.
body = body.replace(/<([a-z][a-z0-9-]*)([^>]*?)\sdata-med-class="([^"]+)"([^>]*)>/gi,
  (_match, tag, antes, clase, depois) => {
    const resto = `${antes}${depois}`;
    if (/\sclass="/.test(resto)) {
      return `<${tag}${resto.replace(/\sclass="([^"]*)"/, ` class="$1 ${clase}"`)}>`;
    }
    return `<${tag} class="${clase}"${resto}>`;
  });

assert.equal(body.includes("data-med-class"), false, "Restou classe gerada sem destino.");
assert.equal(/style-(hover|focus)=/.test(body), false, "Restou atributo de estado visual.");

// --- 5. montagem -----------------------------------------------------------

const estilosGerados = `
<style>
${reglas.join("\n")}
</style>`;

const html = `<!DOCTYPE html>
<html lang="es-PY">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MEÐ DermoEstética — Cuidado estético con mirada clínica</title>
<meta name="description" content="MEÐ DermoEstética. Tratamientos estéticos con protocolo clínico, privacidad y atención profesional. Agendá tu evaluación.">
<meta property="og:type" content="website">
<meta property="og:title" content="MEÐ DermoEstética">
<meta property="og:description" content="Cuidado estético con mirada clínica, privacidad y protocolo profesional.">
<meta property="og:locale" content="es_PY">
<meta property="og:url" content="https://kaioaikotuc-lab.github.io/med-dermoestetica/">
<meta property="og:image" content="https://kaioaikotuc-lab.github.io/med-dermoestetica/assets/images/og-med-dermoestetica.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="MEÐ DermoEstética — Cuidado estético con mirada clínica">
${helmet}
${estilosGerados}
<script src="assets/med.js" defer></script>
</head>
<body>
${body}
</body>
</html>
`;

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), html, "utf8");

console.log(`index.html gerado em ${outDir}`);
console.log(`regras de hover/focus geradas: ${reglas.length}`);
console.log(`imagens de banco trocadas por arquivo local: ${imagensStock.size}`);
