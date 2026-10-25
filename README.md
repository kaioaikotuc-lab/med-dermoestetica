# MED DermoEstética — preview

Versão pública de revisão do site institucional. Os dados ainda serão
confirmados pela cliente antes do lançamento definitivo.

Site: https://kaioaikotuc-lab.github.io/med-dermoestetica/

O site está com `noindex, nofollow, noarchive` e com o selo "Versión de
prueba" — é um endereço de revisão, não o lançamento.

## De onde vem este HTML

Desde 25/10/2026 o `index.html` é a **proposta A "Clínica"**, escolhida pelo Kaio,
e passa a ser **editado à mão** (HTML + CSS inline, sem build). Fonte da
montagem: `Workspace\output\meddermo\propuestas-2026-10-06ersiones\clinica`.
O conversor `.dc.html` (repo `med-dermoestetica-claude-prototype`) e `source/`
ficam como histórico da versão anterior; `assets/med.js`, `styles.css`,
`main.js` e `site-config.js` não são mais carregados. `legal.html` segue o da
versão anterior.

Sem foto de equipe e sem credenciais da Dra. no ar: só entram com original em
alta e autorização.

Origem e licença de cada imagem: `ASSET_MANIFEST.md`.

## Pendente antes de publicar de verdade

1. ~~**Revisão das imagens com a Dra. Rocío**~~ — **resolvido em 04/08.** A
   clínica autorizou imagem de pessoa real; não há mais nada travado por isso.
   As 7 fotos são de banco licenciado e podem ficar. Trocar por fotos próprias
   da clínica continua sendo o melhor caminho quando houver, mas é melhoria,
   não bloqueio. Ver `ASSET_MANIFEST.md`.
2. **Foto real da recepção** — o arquivo `clinica-recepcion.png` está no projeto
   do Claude Design e não foi possível baixá-lo por lá (passa do limite de
   leitura da API). Não está no Creative Cloud do Kaio — conferido em 04/08.
   Caminho mais curto: o Kaio salvar o arquivo em
   `assets/images/clinica-recepcion.png` e ajustar a substituição em
   `med-dermoestetica-claude-prototype/scripts/convert-design-upgrade.mjs`.
   Enquanto isso a seção "La clínica" segue com a foto de ambiente.
3. Número de registro profissional e razão social — hoje marcados como
   "a completar antes de la publicación" no aviso legal. Não podem ser
   inventados.
4. Formação e trajetória da Dra. Rocío.
5. Horários de atendimento (hoje consta apenas "con cita previa").
6. Decisão de nome: MED DermoEstética ou DERMOCLÍNICA.
7. Domínio próprio em nome da clínica, e remover o `noindex` só no lançamento.
