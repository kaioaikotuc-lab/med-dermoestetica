# MED DermoEstética — preview

Versão pública de revisão do site institucional. Os dados ainda serão
confirmados pela cliente antes do lançamento definitivo.

Site: https://kaioaikotuc-lab.github.io/med-dermoestetica/

O site está com `noindex, nofollow, noarchive` e com o selo "Versión de
prueba" — é um endereço de revisão, não o lançamento.

## De onde vem este HTML

`index.html` é **gerado**, não editado à mão. A fonte é o projeto do Claude
Design, exportado como `.dc.html` e convertido por:

    cd ../med-dermoestetica-claude-prototype
    node scripts/convert-design-upgrade.mjs <caminho-deste-repo>

`legal.html` e `assets/med.js` acompanham o mesmo desenho. Editar `index.html`
diretamente faz o próximo export sobrescrever a mudança — mexa no Claude
Design, ou no conversor.

Os arquivos `assets/styles.css`, `assets/main.js` e `assets/site-config.js`
são da versão anterior do site e não são mais carregados por nenhuma página.

Origem e licença de cada imagem: `ASSET_MANIFEST.md`.

## Pendente antes de publicar de verdade

1. **Revisão das imagens com a Dra. Rocío** — as 7 fotos são de banco
   (licenciadas), não da clínica. Duas merecem uma segunda olhada dela,
   detalhadas no `ASSET_MANIFEST.md`. Trocar por fotos próprias continua sendo
   o melhor caminho quando houver.
2. **Foto real da recepção** — existe no projeto do Claude Design mas não foi
   possível baixá-la; a seção "La clínica" segue com a foto de ambiente.
3. Número de registro profissional e razão social — hoje marcados como
   "a completar antes de la publicación" no aviso legal. Não podem ser
   inventados.
4. Formação e trajetória da Dra. Rocío.
5. Horários de atendimento (hoje consta apenas "con cita previa").
6. Decisão de nome: MED DermoEstética ou DERMOCLÍNICA.
7. Domínio próprio em nome da clínica, e remover o `noindex` só no lançamento.
