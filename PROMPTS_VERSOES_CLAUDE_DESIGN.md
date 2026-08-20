# 5 versões para o Claude Design — MED DermoEstética

Criado em 2026-08-15 com três versões; **D e E acrescentadas em 2026-08-16**.
Base: **este repo**, que é o site no ar em
`https://kaioaikotuc-lab.github.io/med-dermoestetica/`.

Cinco prompts prontos para colar, **um por sessão**. Cada um é autossuficiente:
não precisa colar mais nada junto. A repetição entre eles é proposital —
prompt que depende de outro colado antes é prompt que chega quebrado na
quinta sessão.

## Como usar

1. Uma sessão do Claude Design **por versão**. Não peça duas na mesma
   conversa: ele funde as direções e as duas saem parecidas, que é o oposto de
   ter opção para escolher.
2. Cole o prompt inteiro, do `---` de abertura ao de fechamento.
3. Exporte o `.dc.html` e guarde em `source/v-<nome>/`.
4. Converta com `scripts/convert-export.mjs` e compare no navegador.
5. Só a versão escolhida vai para `index.html` na raiz.

## O que NÃO muda em nenhuma delas — leia antes de mexer nos prompts

**As imagens já existem e estão licenciadas. Não se gera imagem nova.**
As sete imagens de `assets/images/` são Adobe Stock licenciadas pela sua conta,
com ID registrado no `ASSET_MANIFEST.md`. Imagem nova significa licença nova,
custo novo e linha nova no manifesto — decisão sua, não da sessão de design.
Todas as versões usam **as mesmas fotos**, e se diferenciam por corte,
proporção, escala e tratamento. Isso é o que torna a comparação honesta: com
imagens diferentes, você compararia bancos de imagem, não design.

**Pessoas nas imagens estão liberadas.** A regra "evitar pessoas" morreu em
04/08 por decisão sua, com autorização da clínica, e está registrada no
`ASSET_MANIFEST.md` e no `DESIGN_CLOUD.md`. Seis das sete fotos mostram
profissional e paciente com o tratamento acontecendo — é o que faz a página
parecer uma clínica em funcionamento. Os prompts abaixo dizem isso
explicitamente, porque um modelo lendo "clínica premium discreta" tende a
voltar sozinho para natureza-morta.

**As duas fontes não mudam.** Cormorant Garamond e Karla já estão
auto-hospedadas em `assets/fonts/` e o site roda sem dependência externa.
Fonte nova significaria novo `.woff2`, nova licença e ajuste de CSP — três
problemas para um ganho que hierarquia e escala resolvem de graça.

**A paleta HEX oficial ainda não existe.** Os valores abaixo saíram do CSS
atual e são proposta, não identidade da marca. Nenhuma delas pode ser
apresentada à Dra. Rocío como "a identidade da MED".

**Conteúdo, ética e técnica são idênticos.** Só muda a pele.

---

## Versão A — `Nocturno`

Luxo íntimo. Fundo escuro dominante, joalheria em vez de clínica. É a que
comunica **privacidade e exclusividade** com mais força — e a de maior risco:
escuro mal resolvido vira boate, e as fotos de tratamento perdem leitura.

```text
---
Trabalhe sobre o projeto existente da MED DermoEstética. Não crie uma landing
page genérica do zero, não reescreva o conteúdo e não reorganize as seções.

OBJETIVO DESTA VERSÃO — nome interno "Nocturno".
Redesenhe a superfície visual do site como uma peça editorial noturna de luxo
discreto: a sensação de entrar num consultório privado à noite, com luz baixa e
atenção total. Referência de categoria: alta joalheria e hotelaria boutique.
Nunca: bar, boate, spa genérico, hospital.

DIREÇÃO VISUAL
- Fundo dominante escuro quente #241D1A; superfícies alternadas em #2E2622.
- Texto em #FDFBF8. Nunca branco puro #FFFFFF.
- Dourado escovado #C2A878 exclusivamente em filetes de 1px, numeração de
  capítulo e sublinhado de foco. Nunca em preenchimento, nunca com brilho nem
  gradiente metálico.
- Rosa velho #B98D8A apenas em hover e em detalhe.
- Cormorant Garamond protagonista: h1 em escala grande (clamp entre 3.5rem e
  7rem), peso leve, entrelinha fechada entre 0.95 e 1.05, itálico em uma única
  palavra de destaque por seção.
- Karla em papel de etiqueta: 0.75–0.85rem, maiúsculas, letter-spacing entre
  0.12em e 0.18em, para rótulos, numeração de capítulo e navegação.
- Espaço negativo generoso e assimetria controlada.
- Movimento: reveals lentos de baixo para cima e fade de opacidade, sem
  paralaxe agressiva. Sempre respeitando prefers-reduced-motion.

BLOCO A BLOCO — a estrutura atual permanece, na ordem
- Hero (#inicio): foto sangrando na tela inteira, gradiente de legibilidade por
  cima, headline em serifa grande alinhada à esquerda, um único CTA para
  WhatsApp.
- Lo que cuidamos / La atención (#filosofia): Privacidad, Protocolo e Criterio
  em três colunas numeradas 01/02/03 em dourado, separadas por filete de 1px,
  sem cartão e sem caixa.
- Cuidados / cards (#tratamientos): Aclarado íntimo, Depilación láser e Otros
  cuidados com imagem em cima e texto embaixo, sem borda e sem sombra; o corte
  da imagem é o que separa um card do outro.
- Cuatro capítulos (Facial, Corporal, Depilación y cuidado íntimo, Lesiones de
  piel): sequência vertical com numeração grande em dourado e imagem alternando
  de lado.
- Detrás de MED (#clinica): imagem vertical à direita, texto à esquerda com
  respiro grande.
- Preguntas (#preguntas): acordeão em filetes, sem fundo de caixa.
- Contacto (#contacto): a seção mais clara da página, invertendo a lógica —
  fundo #FDFBF8 com texto #241D1A, para que o CTA final seja o ponto de maior
  contraste do site inteiro.

IMAGENS — não gerar, não trocar
Use exatamente as sete imagens que já estão em assets/images/: hero-clinica,
card-aclarado-intimo, card-depilacion-laser, card-otros-cuidados, cap-facial,
cap-corporal, cap-depilacion, cap-lesiones, clinica-ambiente e
og-med-dermoestetica. São Adobe Stock licenciadas com ID registrado em
ASSET_MANIFEST.md. NÃO gere imagem nova, NÃO substitua por outra de banco, NÃO
use URL remota, CDN ou hotlink. O que você pode fazer: recortar, mudar
proporção, mudar escala e aplicar overlay ou gradiente de legibilidade.
Seis das sete mostram pessoas, com profissional e paciente durante o
tratamento. Isso é intencional e autorizado pela clínica desde 2026-08-04 — não
substitua por natureza-morta, ambiente vazio ou still life. Se um enquadramento
não couber no layout escuro, mude o crop, não a foto.
Nesta versão o overlay escuro é forte: verifique que ele NÃO altera o tom de
pele das pessoas nas fotos. Escurecer a cena é aceitável; mudar a cor da pele
não é.

ATENÇÃO ESPECIAL DESTA VERSÃO
Fundo escuro é onde contraste morre. Verifique WCAG AA em cada par de cores,
inclusive texto sobre imagem e estado de foco. Se um par não passar, mude a
cor — não reduza o tamanho do texto para disfarçar.

CONTEÚDO — não altere
Idioma espanhol com voseo. Preserve todo texto confirmado. Não invente e não
altere: sobrenome da Dra. Rocío (publica-se só "Dra. Rocío"), registro
profissional, razão social, identificação fiscal, formação, biografia,
horários, preços, promoções, tratamentos, depoimentos, estatísticas, URL de
Facebook ou domínio. Os únicos tratamentos nomeados são "Aclarado íntimo" e
"Depilación láser". Contato, endereço e redes vêm de assets/site-config.js e
não podem ser duplicados em outro arquivo — WhatsApp +595 982 879 555,
Instagram @meddermoesteticacde, Av. Las Tórtolas km 4, Ciudad del Este.

REGRAS INEGOCIÁVEIS
- Nenhuma promessa de cura ou de resultado clínico. Manter a forma hedge que já
  existe no texto ("puede ayudarte a mejorar la apariencia").
- Nenhum alt de imagem pode afirmar que a pessoa da foto é a Dra. Rocío, a
  equipe ou uma paciente da clínica — são modelos de banco.
- Nada de antes/depois sugerindo resultado clínico.
- Manter o aviso "Versión de prueba / Datos en revisión".
- Manter noindex, nofollow e noarchive.
- Não adicionar formulário, captura de dado de saúde, analytics, cookies, mapa
  incorporado, chat, pixel ou script de terceiros.
- Um CTA principal por contexto, sempre levando ao WhatsApp.
- Não transformar a clínica em MedicalBusiness nem alegar especialidade médica
  não confirmada. A categoria estruturada continua HealthAndBeautyBusiness.

TÉCNICA — não pode quebrar
HTML, CSS e JavaScript estáticos, sem framework e sem dependência externa.
Fontes auto-hospedadas em assets/fonts/, sem Google Fonts e sem CDN — não
acrescente fonte nova. O export deste projeto é convertido por um script
versionado com asserts que falham se a marcação mudar de forma inesperada.
Por isso, preserve: as âncoras #inicio, #filosofia, #tratamientos, #clinica,
#preguntas, #contacto; os IDs #med-header, #med-burger, #menu-movil,
#contenido; e os atributos data-wa, data-map, data-instagram, data-*-display e
data-reveal. Preserve também FAQ acessível, foco visível e
prefers-reduced-motion.

ENTREGA
Site completo e responsivo, não moodboard. Verificação final em 360px, 768px e
1440px. Imagens com width e height definidos, sem layout shift, lazy loading
fora do hero. Meta: acessibilidade 100 e Lighthouse performance ≥ 90.
Entregue também um CHANGELOG_DESIGN.md com as decisões e screenshots em 1440px
e 390px. Nenhuma credencial, dado de paciente ou artefato de build.
Se faltar algum dado, deixe-o explicitamente pendente em vez de inventar.
---
```

---

## Versão B — `Luz`

Claridade e método. Comunica **critério profissional** sem cair no branco
hospitalar azulado, que está nas anti-referências. A mais segura das cinco, e a
que mais depende de tipografia impecável para não ficar sem graça.

```text
---
Trabalhe sobre o projeto existente da MED DermoEstética. Não crie uma landing
page genérica do zero, não reescreva o conteúdo e não reorganize as seções.

OBJETIVO DESTA VERSÃO — nome interno "Luz".
Redesenhe a superfície visual do site como uma peça clara, arejada e metódica:
a sensação de um consultório impecável de manhã, onde tudo está no lugar por
decisão e não por acaso. A promessa visual é critério, não sedução. Referência
de categoria: editorial de arquitetura e publicação científica bem desenhada.
Nunca: branco hospitalar azulado, clínica popular, template de startup,
folheto promocional.

DIREÇÃO VISUAL
- Fundo dominante off-white quente #FDFBF8. Nunca branco puro e nunca branco
  com viés azul.
- Texto em #2E2622. Cobre #8A5E44 como acento único e disciplinado: links,
  numeração e estado ativo. O dourado #C2A878 fica de fora desta versão.
- Rosa velho #B98D8A apenas em superfície de apoio, em áreas grandes e
  lavadas, nunca em texto pequeno.
- Karla protagonista: corpo entre 1.05rem e 1.15rem, entrelinha 1.6, medida de
  linha entre 62 e 72 caracteres. É a fonte que conduz a leitura.
- Cormorant Garamond reservado ao h1, aos números de capítulo e a uma citação
  por página. Serifa aqui é pontuação, não voz.
- Grid rigoroso de 12 colunas, com filetes horizontais de 1px em #2E2622 a 12%
  de opacidade marcando o início de cada seção. Alinhamento óptico impecável é
  o efeito especial desta versão.
- Movimento mínimo: fade curto, nada de deslocamento longo. Respeitar
  prefers-reduced-motion.

BLOCO A BLOCO — a estrutura atual permanece, na ordem
- Hero (#inicio): dividido — texto à esquerda em coluna estreita sobre fundo
  liso, foto à direita ocupando altura total, sem texto sobreposto à imagem. O
  contraste vem do papel, não de gradiente.
- Lo que cuidamos / La atención (#filosofia): Privacidad, Protocolo e Criterio
  em três colunas com rótulo em maiúsculas pequenas, título em serifa e
  parágrafo curto, com filete acima de cada uma.
- Cuidados / cards (#tratamientos): grade de três com proporção de imagem
  idêntica e legenda alinhada pela base; a disciplina do alinhamento é o
  argumento visual.
- Cuatro capítulos (Facial, Corporal, Depilación y cuidado íntimo, Lesiones de
  piel): grade regular de quatro, todas com o mesmo recorte e numeração em
  cobre; nenhuma exceção de tamanho.
- Detrás de MED (#clinica): imagem vertical grande com texto em coluna estreita
  ao lado e muito espaço em branco entre os dois.
- Preguntas (#preguntas): lista tipográfica limpa, sem caixa e sem ícone
  decorativo além do indicador de estado.
- Contacto (#contacto): bloco calmo em nude lavado, com o WhatsApp como único
  elemento de cobre saturado da página.

IMAGENS — não gerar, não trocar
Use exatamente as sete imagens que já estão em assets/images/: hero-clinica,
card-aclarado-intimo, card-depilacion-laser, card-otros-cuidados, cap-facial,
cap-corporal, cap-depilacion, cap-lesiones, clinica-ambiente e
og-med-dermoestetica. São Adobe Stock licenciadas com ID registrado em
ASSET_MANIFEST.md. NÃO gere imagem nova, NÃO substitua por outra de banco, NÃO
use URL remota, CDN ou hotlink. O que você pode fazer: recortar, mudar
proporção, mudar escala e aplicar overlay ou gradiente de legibilidade.
Seis das sete mostram pessoas, com profissional e paciente durante o
tratamento. Isso é intencional e autorizado pela clínica desde 2026-08-04 — não
substitua por natureza-morta, ambiente vazio ou still life. Se um enquadramento
não couber no layout, mude o crop, não a foto.
Nesta versão as fotos aparecem limpas, sem overlay escuro: garanta o contraste
do texto pelo layout, colocando-o fora da imagem em vez de escurecê-la.

ATENÇÃO ESPECIAL DESTA VERSÃO
Claro e minimalista falha por parecer vazio ou inacabado. O que carrega a
página é ritmo tipográfico e alinhamento, não mais elementos. Se uma seção
parecer pobre, aumente a diferença de escala entre título e corpo antes de
acrescentar qualquer ornamento.

CONTEÚDO — não altere
Idioma espanhol com voseo. Preserve todo texto confirmado. Não invente e não
altere: sobrenome da Dra. Rocío (publica-se só "Dra. Rocío"), registro
profissional, razão social, identificação fiscal, formação, biografia,
horários, preços, promoções, tratamentos, depoimentos, estatísticas, URL de
Facebook ou domínio. Os únicos tratamentos nomeados são "Aclarado íntimo" e
"Depilación láser". Contato, endereço e redes vêm de assets/site-config.js e
não podem ser duplicados em outro arquivo — WhatsApp +595 982 879 555,
Instagram @meddermoesteticacde, Av. Las Tórtolas km 4, Ciudad del Este.

REGRAS INEGOCIÁVEIS
- Nenhuma promessa de cura ou de resultado clínico. Manter a forma hedge que já
  existe no texto ("puede ayudarte a mejorar la apariencia").
- Nenhum alt de imagem pode afirmar que a pessoa da foto é a Dra. Rocío, a
  equipe ou uma paciente da clínica — são modelos de banco.
- Nada de antes/depois sugerindo resultado clínico.
- Manter o aviso "Versión de prueba / Datos en revisión".
- Manter noindex, nofollow e noarchive.
- Não adicionar formulário, captura de dado de saúde, analytics, cookies, mapa
  incorporado, chat, pixel ou script de terceiros.
- Um CTA principal por contexto, sempre levando ao WhatsApp.
- Não transformar a clínica em MedicalBusiness nem alegar especialidade médica
  não confirmada. A categoria estruturada continua HealthAndBeautyBusiness.

TÉCNICA — não pode quebrar
HTML, CSS e JavaScript estáticos, sem framework e sem dependência externa.
Fontes auto-hospedadas em assets/fonts/, sem Google Fonts e sem CDN — não
acrescente fonte nova. O export deste projeto é convertido por um script
versionado com asserts que falham se a marcação mudar de forma inesperada.
Por isso, preserve: as âncoras #inicio, #filosofia, #tratamientos, #clinica,
#preguntas, #contacto; os IDs #med-header, #med-burger, #menu-movil,
#contenido; e os atributos data-wa, data-map, data-instagram, data-*-display e
data-reveal. Preserve também FAQ acessível, foco visível e
prefers-reduced-motion.

ENTREGA
Site completo e responsivo, não moodboard. Verificação final em 360px, 768px e
1440px. Imagens com width e height definidos, sem layout shift, lazy loading
fora do hero. Meta: acessibilidade 100 e Lighthouse performance ≥ 90.
Entregue também um CHANGELOG_DESIGN.md com as decisões e screenshots em 1440px
e 390px. Nenhuma credencial, dado de paciente ou artefato de build.
Se faltar algum dado, deixe-o explicitamente pendente em vez de inventar.
---
```

---

## Versão C — `Materia`

Tátil e autoral. Assimetria, imagem sangrando e sobreposição. É a que menos
parece template — e a mais difícil de manter consistente quando entrarem as
fotos reais da clínica, que não têm o mesmo padrão de enquadramento do banco.

```text
---
Trabalhe sobre o projeto existente da MED DermoEstética. Não crie uma landing
page genérica do zero, não reescreva o conteúdo e não reorganize as seções.

OBJETIVO DESTA VERSÃO — nome interno "Materia".
Redesenhe a superfície visual do site como uma peça tátil e material: gesso,
travertino, linho e pele como assunto visual, com composição assimétrica e
imagens grandes. A sensação é de boutique de cuidado, onde cada superfície foi
escolhida. Referência de categoria: marca de skincare independente de alto
padrão e editorial de interiores. Nunca: spa genérico com velas e orquídeas,
rústico, artesanal amador, textura de fundo tipo papel de parede.

DIREÇÃO VISUAL
- Base em nude quente derivado do off-white #FDFBF8, escurecido para tom areia
  (por volta de #F0E6DC) como cor de página, com blocos alternados em #FDFBF8.
- Texto em #2E2622. Rosa velho #B98D8A e cobre #8A5E44 com presença real,
  ocupando áreas e não só detalhes. Dourado #C2A878 apenas em filete fino.
- Textura sutil e não repetitiva nas superfícies grandes: grão de gesso ou
  papel em opacidade muito baixa, sem virar padrão visível nem pesar o
  carregamento. Se não for possível manter leve, use cor sólida e descarte a
  textura — peso de página tem prioridade sobre efeito.
- Cormorant Garamond e Karla dividem o palco: serifa nos títulos com itálico
  usado de verdade, sans em blocos curtos com entrelinha aberta.
- Composição assimétrica: imagens sangrando por uma borda da tela, texto
  deslocado do eixo, sobreposição controlada entre título e imagem — sempre com
  contraste AA garantido na área de sobreposição.
- Movimento: revelação em máscara (a imagem aparece por trás de uma cortina que
  sobe) e zoom quase imperceptível ao entrar na viewport. Respeitar
  prefers-reduced-motion, com fallback estático completo.

BLOCO A BLOCO — a estrutura atual permanece, na ordem
- Hero (#inicio): foto sangrando à direita até a borda da tela, título em
  serifa grande à esquerda invadindo levemente a imagem, CTA abaixo em cobre.
- Lo que cuidamos / La atención (#filosofia): Privacidad, Protocolo e Criterio
  em três blocos escalonados verticalmente, cada um deslocado do anterior,
  separados por muito ar em vez de linha.
- Cuidados / cards (#tratamientos): alturas de imagem deliberadamente
  diferentes entre os três, alinhados pela base do texto; o desencontro é o
  ritmo.
- Cuatro capítulos (Facial, Corporal, Depilación y cuidado íntimo, Lesiones de
  piel): alternância de lado a cada capítulo, com a imagem sangrando pela borda
  correspondente e o número em serifa grande sobreposto ao canto.
- Detrás de MED (#clinica): imagem vertical sangrando pela esquerda, texto em
  bloco nude sobreposto parcialmente à imagem.
- Preguntas (#preguntas): acordeão sobre fundo areia, pergunta em serifa e
  resposta em sans.
- Contacto (#contacto): bloco cheio em cobre profundo com texto off-white e o
  WhatsApp em botão sólido claro.

IMAGENS — não gerar, não trocar
Use exatamente as sete imagens que já estão em assets/images/: hero-clinica,
card-aclarado-intimo, card-depilacion-laser, card-otros-cuidados, cap-facial,
cap-corporal, cap-depilacion, cap-lesiones, clinica-ambiente e
og-med-dermoestetica. São Adobe Stock licenciadas com ID registrado em
ASSET_MANIFEST.md. NÃO gere imagem nova, NÃO substitua por outra de banco, NÃO
use URL remota, CDN ou hotlink. O que você pode fazer: recortar, mudar
proporção, mudar escala e aplicar overlay ou gradiente de legibilidade.
Seis das sete mostram pessoas, com profissional e paciente durante o
tratamento. Isso é intencional e autorizado pela clínica desde 2026-08-04 — não
substitua por natureza-morta, ambiente vazio ou still life. Esta versão usa
recortes fechados: pode aproximar em mão, textura de pele e gesto, mas sem
cortar rosto pela metade e sem enquadramento que sugira exposição corporal.
Se aplicar tonalização quente na foto, ela não pode alterar o tom de pele das
pessoas — tonalize a cena, não a pele.

ATENÇÃO ESPECIAL DESTA VERSÃO
Assimetria e sangria quebram no mobile antes de qualquer outra coisa. Resolva
360px primeiro e só depois suba para desktop: nenhuma imagem pode causar scroll
horizontal, nenhum texto sobreposto pode perder contraste no crop estreito, e
todo bloco deslocado precisa de uma versão empilhada que não pareça erro de
layout.

CONTEÚDO — não altere
Idioma espanhol com voseo. Preserve todo texto confirmado. Não invente e não
altere: sobrenome da Dra. Rocío (publica-se só "Dra. Rocío"), registro
profissional, razão social, identificação fiscal, formação, biografia,
horários, preços, promoções, tratamentos, depoimentos, estatísticas, URL de
Facebook ou domínio. Os únicos tratamentos nomeados são "Aclarado íntimo" e
"Depilación láser". Contato, endereço e redes vêm de assets/site-config.js e
não podem ser duplicados em outro arquivo — WhatsApp +595 982 879 555,
Instagram @meddermoesteticacde, Av. Las Tórtolas km 4, Ciudad del Este.

REGRAS INEGOCIÁVEIS
- Nenhuma promessa de cura ou de resultado clínico. Manter a forma hedge que já
  existe no texto ("puede ayudarte a mejorar la apariencia").
- Nenhum alt de imagem pode afirmar que a pessoa da foto é a Dra. Rocío, a
  equipe ou uma paciente da clínica — são modelos de banco.
- Nada de antes/depois sugerindo resultado clínico.
- Manter o aviso "Versión de prueba / Datos en revisión".
- Manter noindex, nofollow e noarchive.
- Não adicionar formulário, captura de dado de saúde, analytics, cookies, mapa
  incorporado, chat, pixel ou script de terceiros.
- Um CTA principal por contexto, sempre levando ao WhatsApp.
- Não transformar a clínica em MedicalBusiness nem alegar especialidade médica
  não confirmada. A categoria estruturada continua HealthAndBeautyBusiness.

TÉCNICA — não pode quebrar
HTML, CSS e JavaScript estáticos, sem framework e sem dependência externa.
Fontes auto-hospedadas em assets/fonts/, sem Google Fonts e sem CDN — não
acrescente fonte nova. O export deste projeto é convertido por um script
versionado com asserts que falham se a marcação mudar de forma inesperada.
Por isso, preserve: as âncoras #inicio, #filosofia, #tratamientos, #clinica,
#preguntas, #contacto; os IDs #med-header, #med-burger, #menu-movil,
#contenido; e os atributos data-wa, data-map, data-instagram, data-*-display e
data-reveal. Preserve também FAQ acessível, foco visível e
prefers-reduced-motion.

ENTREGA
Site completo e responsivo, não moodboard. Verificação final em 360px, 768px e
1440px. Imagens com width e height definidos, sem layout shift, lazy loading
fora do hero. Meta: acessibilidade 100 e Lighthouse performance ≥ 90.
Entregue também um CHANGELOG_DESIGN.md com as decisões e screenshots em 1440px
e 390px. Nenhuma credencial, dado de paciente ou artefato de build.
Se faltar algum dado, deixe-o explicitamente pendente em vez de inventar.
---
```

---

## Versão D — `Cerca`

Proximidade e acesso. É a única desenhada a partir do telefone, que é de onde a
clínica é encontrada de verdade — Instagram e WhatsApp. Comunica **"falar comigo
é fácil"** com mais força que qualquer outra, e é a que mais rápido vira folheto
promocional se a hierarquia tipográfica escorregar.

```text
---
Trabalhe sobre o projeto existente da MED DermoEstética. Não crie uma landing
page genérica do zero, não reescreva o conteúdo e não reorganize as seções.

OBJETIVO DESTA VERSÃO — nome interno "Cerca".
Redesenhe a superfície visual do site como uma peça pensada primeiro para o
telefone, porque é de lá que a clínica é encontrada: Instagram e WhatsApp, tela
de 390px, muitas vezes de pé na rua. A sensação é de proximidade e acesso — dá
para entender o que se faz e falar com alguém em menos de trinta segundos.
Referência de categoria: publicação bem desenhada para leitura no telefone e
loja de bairro que tem orgulho do que vende. Nunca: folheto promocional, banner
de oferta, template de startup, spa genérico.

DIREÇÃO VISUAL
- Base nude quente #F7EFE9 com blocos alternados em #FDFBF8. Texto em #2E2622.
- Cobre #8A5E44 em preenchimento sólido. Esta é a única versão em que o acento
  vira botão cheio, porque toque precisa de alvo óbvio. Rosa velho #B98D8A em
  rótulo e estado. O dourado #C2A878 fica de fora.
- Karla protagonista em escala maior que o habitual: corpo entre 1.15rem e
  1.25rem, entrelinha 1.65, parágrafo de no máximo três linhas no telefone.
- Cormorant Garamond apenas no h1 e na numeração de capítulo. Serifa aqui é
  assinatura, não voz.
- Imagens em proporção vertical 4:5 — o mesmo formato que a clínica já usa no
  Instagram. É a mesma foto, recortada em pé.
- Alvo de toque de no mínimo 48px, com espaço real entre um e outro.
- Movimento quase nulo: só o estado de toque. Nada que atrase o primeiro
  contato. Respeitar prefers-reduced-motion.

BLOCO A BLOCO — a estrutura atual permanece, na ordem
- Hero (#inicio): foto vertical no topo, título logo abaixo em coluna estreita,
  e um botão sólido de WhatsApp acima da dobra.
- Lo que cuidamos / La atención (#filosofia): Privacidad, Protocolo e Criterio
  empilhados como blocos curtos com rótulo — sem colunas no telefone, no máximo
  duas no desktop.
- Cuidados / cards (#tratamientos): um embaixo do outro, foto vertical, título e
  uma linha de texto; o card inteiro é área de toque.
- Cuatro capítulos (Facial, Corporal, Depilación y cuidado íntimo, Lesiones de
  piel): lista vertical com número, foto 4:5 e três linhas de texto. Sem
  alternância de lado, que só funciona no desktop.
- Detrás de MED (#clinica): foto vertical seguida do texto, sem sobreposição.
- Preguntas (#preguntas): acordeão de área de toque grande, um item aberto por
  vez.
- Contacto (#contacto): bloco em cobre sólido com o WhatsApp em botão claro. No
  telefone, uma barra fixa no rodapé com o mesmo destino — e quando ela estiver
  visível, nenhum outro CTA se repete na mesma dobra.

IMAGENS — não gerar, não trocar
Use exatamente as imagens que já estão em assets/images/: as sete licenciadas
(card-aclarado-intimo, card-depilacion-laser, card-otros-cuidados, cap-facial,
cap-corporal, cap-depilacion, cap-lesiones) mais hero-clinica, clinica-ambiente
e og-med-dermoestetica, que vêm da v1 do site. As sete são Adobe Stock
licenciadas com ID registrado em ASSET_MANIFEST.md. NÃO gere imagem nova, NÃO
substitua por outra de banco, NÃO use URL remota, CDN ou hotlink. O que você
pode fazer: recortar, mudar proporção, mudar escala e aplicar overlay ou
gradiente de legibilidade.
Seis das sete licenciadas mostram pessoas, com profissional e paciente durante o
tratamento. Isso é intencional e autorizado pela clínica desde 2026-08-04 — não
substitua por natureza-morta, ambiente vazio ou still life. Se um enquadramento
não couber no layout, mude o crop, não a foto.
Nesta versão todo recorte é vertical: garanta que o corte 4:5 não decapite
cabeça nem centralize o quadro numa parte do corpo que sugira exposição.

ATENÇÃO ESPECIAL DESTA VERSÃO
Desenhe 360px e 390px primeiro e só depois suba. No desktop não estique: coluna
central de no máximo 720px com respiro grande dos lados. É a única versão em que
o desktop é o caso secundário, e isso é proposital. Escala grande sem hierarquia
vira folheto — mantenha diferença clara entre rótulo, título e corpo, e não
troque contraste tipográfico por mais peso de fonte.

CONTEÚDO — não altere
Idioma espanhol com voseo. Preserve todo texto confirmado. Não invente e não
altere: sobrenome da Dra. Rocío (publica-se só "Dra. Rocío"), registro
profissional, razão social, identificação fiscal, formação, biografia,
horários, preços, promoções, tratamentos, depoimentos, estatísticas, URL de
Facebook ou domínio. Os únicos tratamentos nomeados são "Aclarado íntimo" e
"Depilación láser". Contato, endereço e redes vêm de assets/site-config.js e
não podem ser duplicados em outro arquivo — WhatsApp +595 982 879 555,
Instagram @meddermoesteticacde, Av. Las Tórtolas km 4, Ciudad del Este.

REGRAS INEGOCIÁVEIS
- Nenhuma promessa de cura ou de resultado clínico. Manter a forma hedge que já
  existe no texto ("puede ayudarte a mejorar la apariencia").
- Nenhum alt de imagem pode afirmar que a pessoa da foto é a Dra. Rocío, a
  equipe ou uma paciente da clínica — são modelos de banco.
- Nada de antes/depois sugerindo resultado clínico.
- Manter o aviso "Versión de prueba / Datos en revisión".
- Manter noindex, nofollow e noarchive.
- Não adicionar formulário, captura de dado de saúde, analytics, cookies, mapa
  incorporado, chat, pixel ou script de terceiros.
- Um CTA principal por contexto, sempre levando ao WhatsApp.
- Não transformar a clínica em MedicalBusiness nem alegar especialidade médica
  não confirmada. A categoria estruturada continua HealthAndBeautyBusiness.

TÉCNICA — não pode quebrar
HTML, CSS e JavaScript estáticos, sem framework e sem dependência externa.
Fontes auto-hospedadas em assets/fonts/, sem Google Fonts e sem CDN — não
acrescente fonte nova. O export deste projeto é convertido por um script
versionado com asserts que falham se a marcação mudar de forma inesperada.
Por isso, preserve: as âncoras #inicio, #filosofia, #tratamientos, #clinica,
#preguntas, #contacto; os IDs #med-header, #med-burger, #menu-movil,
#contenido; e os atributos data-wa, data-map, data-instagram, data-*-display e
data-reveal. Preserve também FAQ acessível, foco visível e
prefers-reduced-motion.

ENTREGA
Site completo e responsivo, não moodboard. Verificação final em 360px, 768px e
1440px. Imagens com width e height definidos, sem layout shift, lazy loading
fora do hero. Meta: acessibilidade 100 e Lighthouse performance ≥ 90.
Entregue também um CHANGELOG_DESIGN.md com as decisões e screenshots em 1440px
e 390px. Nenhuma credencial, dado de paciente ou artefato de build.
Se faltar algum dado, deixe-o explicitamente pendente em vez de inventar.
---
```

---

## Versão E — `Consultorio`

Sobriedade. Uma coluna, texto grande, foto pequena e **nenhum efeito**. Comunica
**autoridade tranquila** — quem não precisa impressionar. É a mais fácil de
construir e a mais difícil de acertar: sem cor e sem movimento, só sobram
espaçamento e ritmo tipográfico, e erro de 4px aparece.

```text
---
Trabalhe sobre o projeto existente da MED DermoEstética. Não crie uma landing
page genérica do zero, não reescreva o conteúdo e não reorganize as seções.

OBJETIVO DESTA VERSÃO — nome interno "Consultorio".
Redesenhe a superfície visual do site como uma página sóbria que não tenta
impressionar: uma coluna só, texto grande, pouca decoração e nenhum efeito. A
sensação é de ler alguém que não precisa vender. Referência de categoria: livro
bem composto e papelaria de consultório antigo, bem impressa. Nunca: hospital,
branco azulado, spa, marca de skincare, landing page de campanha.

DIREÇÃO VISUAL
- Papel #FDFBF8, texto #241D1A. Sem dourado e sem rosa. Cobre #8A5E44 apenas no
  sublinhado de link e no estado de foco.
- A única cor da página vem das fotos. Por isso elas entram pequenas e exatas,
  em largura de coluna, nunca sangrando pela borda.
- Uma coluna do topo ao rodapé, medida entre 60 e 66 caracteres, centralizada.
  Nenhuma seção em grade de cartões.
- Cormorant Garamond no h1 e nos títulos de seção, peso 400, sem exagero de
  escala: o maior título não passa de 3.4rem. Escala contida é o argumento.
- Karla no corpo em 1.15rem com entrelinha 1.7 — texto para ser lido, não
  escaneado.
- Régua horizontal grossa de 2px em #241D1A separando as seções, no lugar do
  filete de 1px. É o único ornamento da página.
- Nenhuma animação: sem revelação por scroll, sem parallax, sem zoom, sem
  transição de entrada. Hover e foco mudam apenas cor e sublinhado. A página
  precisa ficar idêntica com e sem prefers-reduced-motion.

BLOCO A BLOCO — a estrutura atual permanece, na ordem
- Hero (#inicio): sem imagem de fundo e sem texto sobre foto. Título, duas
  linhas de texto e o link de WhatsApp; a foto do hero entra logo abaixo, em
  largura de coluna, com legenda.
- Lo que cuidamos / La atención (#filosofia): Privacidad, Protocolo e Criterio
  como parágrafos com título corrido, um depois do outro. Lê-se como texto, não
  como grade.
- Cuidados / cards (#tratamientos): lista com foto quadrada pequena (por volta
  de 120px) à esquerda e texto à direita. Sem cartão, sem borda, sem sombra.
- Cuatro capítulos (Facial, Corporal, Depilación y cuidado íntimo, Lesiones de
  piel): quatro entradas numeradas, cada uma com uma foto em largura de coluna e
  um parágrafo. Mesmo tamanho para as quatro, sem nenhuma exceção de destaque.
- Detrás de MED (#clinica): texto primeiro, foto depois, com legenda.
- Preguntas (#preguntas): pergunta em peso forte e resposta logo abaixo. Mantenha
  details/summary pelo comportamento acessível, mas com o primeiro item aberto —
  se está escrito, é para ser lido.
- Contacto (#contacto): fecha com o mesmo peso do resto da página, sem bloco
  colorido e sem inversão de fundo: régua grossa, uma frase e o link.

IMAGENS — não gerar, não trocar
Use exatamente as imagens que já estão em assets/images/: as sete licenciadas
(card-aclarado-intimo, card-depilacion-laser, card-otros-cuidados, cap-facial,
cap-corporal, cap-depilacion, cap-lesiones) mais hero-clinica, clinica-ambiente
e og-med-dermoestetica, que vêm da v1 do site. As sete são Adobe Stock
licenciadas com ID registrado em ASSET_MANIFEST.md. NÃO gere imagem nova, NÃO
substitua por outra de banco, NÃO use URL remota, CDN ou hotlink. O que você
pode fazer: recortar, mudar proporção, mudar escala e aplicar overlay ou
gradiente de legibilidade.
Seis das sete licenciadas mostram pessoas, com profissional e paciente durante o
tratamento. Isso é intencional e autorizado pela clínica desde 2026-08-04 — não
substitua por natureza-morta, ambiente vazio ou still life. Se um enquadramento
não couber no layout, mude o crop, não a foto.
Nesta versão as fotos aparecem limpas, sem overlay e sem tonalização: nenhum
texto é colocado sobre imagem, então o contraste se resolve no layout. Foto
pequena não é foto espremida — mantenha o assunto legível no recorte.

ATENÇÃO ESPECIAL DESTA VERSÃO
Sem cor e sem efeito, tudo depende de espaçamento e ritmo tipográfico. Use uma
escala de espaço única e repetida, verifique o alinhamento vertical entre as
seções e mantenha a mesma distância entre título e corpo em toda a página. Se
uma seção parecer pobre, ajuste o intervalo e a escala do título — não
acrescente ornamento, não aumente uma foto e não invente um bloco colorido no
final para "fechar com força".

CONTEÚDO — não altere
Idioma espanhol com voseo. Preserve todo texto confirmado. Não invente e não
altere: sobrenome da Dra. Rocío (publica-se só "Dra. Rocío"), registro
profissional, razão social, identificação fiscal, formação, biografia,
horários, preços, promoções, tratamentos, depoimentos, estatísticas, URL de
Facebook ou domínio. Os únicos tratamentos nomeados são "Aclarado íntimo" e
"Depilación láser". Contato, endereço e redes vêm de assets/site-config.js e
não podem ser duplicados em outro arquivo — WhatsApp +595 982 879 555,
Instagram @meddermoesteticacde, Av. Las Tórtolas km 4, Ciudad del Este.

REGRAS INEGOCIÁVEIS
- Nenhuma promessa de cura ou de resultado clínico. Manter a forma hedge que já
  existe no texto ("puede ayudarte a mejorar la apariencia").
- Nenhum alt de imagem pode afirmar que a pessoa da foto é a Dra. Rocío, a
  equipe ou uma paciente da clínica — são modelos de banco.
- Nada de antes/depois sugerindo resultado clínico.
- Manter o aviso "Versión de prueba / Datos en revisión".
- Manter noindex, nofollow e noarchive.
- Não adicionar formulário, captura de dado de saúde, analytics, cookies, mapa
  incorporado, chat, pixel ou script de terceiros.
- Um CTA principal por contexto, sempre levando ao WhatsApp.
- Não transformar a clínica em MedicalBusiness nem alegar especialidade médica
  não confirmada. A categoria estruturada continua HealthAndBeautyBusiness.

TÉCNICA — não pode quebrar
HTML, CSS e JavaScript estáticos, sem framework e sem dependência externa.
Fontes auto-hospedadas em assets/fonts/, sem Google Fonts e sem CDN — não
acrescente fonte nova. O export deste projeto é convertido por um script
versionado com asserts que falham se a marcação mudar de forma inesperada.
Por isso, preserve: as âncoras #inicio, #filosofia, #tratamientos, #clinica,
#preguntas, #contacto; os IDs #med-header, #med-burger, #menu-movil,
#contenido; e os atributos data-wa, data-map, data-instagram, data-*-display e
data-reveal. Preserve também FAQ acessível, foco visível e
prefers-reduced-motion.

ENTREGA
Site completo e responsivo, não moodboard. Verificação final em 360px, 768px e
1440px. Imagens com width e height definidos, sem layout shift, lazy loading
fora do hero. Meta: acessibilidade 100 e Lighthouse performance ≥ 90.
Entregue também um CHANGELOG_DESIGN.md com as decisões e screenshots em 1440px
e 390px. Nenhuma credencial, dado de paciente ou artefato de build.
Se faltar algum dado, deixe-o explicitamente pendente em vez de inventar.
---
```

---

## Na hora de mostrar para a cliente

**Mostre três, não cinco.** Cinco opções não é mais escolha, é indecisão
transferida para a cliente — ela para de escolher posicionamento e começa a
comparar detalhe. Rode as cinco para você ver, e leve à Dra. Rocío as três que
estiverem mais distantes entre si.

Mostre-as **sem dizer qual você prefere** e faça uma pergunta só:
*"¿Cuál se parece más a cómo querés que te vean?"*. Escolha de design com
opinião do fornecedor embutida vira discussão de gosto; sem ela, vira decisão
de posicionamento — que é dela.

Todas continuam sendo versão de teste, com o aviso e o `noindex` de pé. O que
falta para qualquer uma sair de teste é o mesmo de sempre: WhatsApp
reconfirmado, registro profissional, endereço e horário, razão social e
domínio.
