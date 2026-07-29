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

## Pendente antes de publicar de verdade

1. **As 4 fotos dos capítulos do catálogo** (Facial, Corporal, Depilación y
   cuidado íntimo, Lesiones de piel) — hoje aparecem como moldura "Foto
   pendiente" com a legenda do que fotografar. O export do Claude Design tinha
   preenchido esses espaços com pré-visualizações de banco de imagens em
   servidor externo: não foram publicadas porque a licença não está confirmada
   e o site não pode depender de terceiros. Fotos próprias, sem pessoas.
2. Número de registro profissional e razão social — hoje marcados como
   "a completar antes de la publicación" no aviso legal. Não podem ser
   inventados.
3. Formação e trajetória da Dra. Rocío.
4. Horários de atendimento (hoje consta apenas "con cita previa").
5. Decisão de nome: MED DermoEstética ou DERMOCLÍNICA.
6. Domínio próprio em nome da clínica, e remover o `noindex` só no lançamento.
