# Origem das imagens

Todas as imagens do site são servidas de `assets/images/` — nenhuma depende de
servidor de terceiros.

## Adobe Stock — licenciadas pela conta do Kaio

Licenciadas com licença padrão e baixadas em resolução original; os arquivos no
repositório são versões redimensionadas para web (crop central + bicúbica de
alta qualidade, JPEG 82).

| Arquivo | Adobe Stock ID | Onde aparece | Original | Licenciada |
|---|---|---|---|---|
| `card-aclarado-intimo.jpg` | 454084588 | Card 01 — Aclarado íntimo | 5616×3745 | 29/07 |
| `card-depilacion-laser.jpg` | 529440234 | Card 02 — Depilación láser | 6240×4160 | **04/08** |
| `card-otros-cuidados.jpg` | 369011641 | Card 03 — Otros cuidados | 6571×4381 | 29/07 |
| `cap-facial.jpg` | 481112001 | Cap. 01 — Facial | 6610×4450 | **04/08** |
| `cap-corporal.jpg` | 423425795 | Cap. 02 — Corporal | 6016×4016 | **04/08** |
| `cap-depilacion.jpg` | 468971752 | Cap. 03 — Depilación y cuidado íntimo | 4500×3001 | 29/07 |
| `cap-lesiones.jpg` | 468970949 | Cap. 04 — Lesiones de piel | 5653×3769 | **04/08** |

### Troca de 04/08 — quatro imagens

Quatro imagens saíram. **Nenhuma por mostrar pessoas** — a razão foi que não
sustentavam o registro editorial do site:

| Arquivo | Saiu (ID antigo) | Por quê |
|---|---|---|
| `card-depilacion-laser.jpg` | 496779538 | Enquadramento de biquíni com tatuagens grandes dominando o quadro — destoava do tom sóbrio da página, e era a imagem mais exposta do site |
| `cap-facial.jpg` | 446391592 | Pedras de gua sha sobre fundo bege: spa genérico, nada de medicina estética |
| `cap-corporal.jpg` | 255328355 | Maca vazia com toalhas e parede rosa — natureza-morta, e a cor brigava com a paleta |
| `cap-lesiones.jpg` | 475998587 | Sala vazia com lupa, num capítulo que fala de lesões de pele |

As três últimas eram natureza-morta ou sala vazia — resultado direto da regra
antiga de evitar pessoas. As substitutas mostram o tratamento acontecendo.

O `alt` de `cap-facial`, `cap-corporal` e `cap-lesiones` foi reescrito junto com
a imagem, na fonte do Claude Design — os antigos descreviam objeto ou sala vazia
e passariam a mentir para quem usa leitor de tela. O de
`card-depilacion-laser` continua valendo sem mudança.

### Imagem com pessoa real — autorizado pela clínica (2026-08-04)

A clínica autorizou o uso de imagem de pessoa real no site. **A restrição do
briefing original ("evitar pessoas na imagem") está encerrada** e não vale mais
para nenhuma peça deste projeto — site, catálogo, redes ou anúncio.

Depois da troca de 04/08, **seis das sete imagens mostram pessoas** — profissional
e paciente, com o tratamento acontecendo. Era exatamente o que a regra antiga
impedia, e é o que faz a página parecer uma clínica em funcionamento em vez de um
catálogo de sala vazia. A exceção é `card-aclarado-intimo.jpg`, um detalhe de
pele sem rosto, mantido por ser a melhor imagem da página.

Todas são de banco (Adobe Stock, licenciadas — IDs na tabela acima), com modelos
que assinaram release na origem. Nenhuma é equipe ou paciente da clínica, e
nenhum `alt` afirma que seja.

**O que continua obrigatório** (é licença e lei, não preferência do briefing):

1. Toda imagem publicada precisa de licença registrada nesta tabela.
2. Foto de **paciente identificável** da clínica exige consentimento assinado,
   guardado pela clínica — o site não é o lugar onde esse papel vive.
3. Nada de antes/depois que sugira resultado clínico não comprovado.

## Imagens do site anterior

`hero-clinica.jpg`, `clinica-ambiente.jpg`, `tratamiento-laser.jpg`,
`og-med-dermoestetica.jpg` — vêm da v1 do site. `tratamiento-aclarado.jpg` e
`tratamiento-otros.jpg` não são mais usados.

## Foto real da clínica — pendente

O Claude Design tem uma foto real da recepção (`clinica-recepcion.png`,
enviada pelo Kaio) aplicada na seção "La clínica". O arquivo passa do limite
de leitura da API do projeto e não pôde ser baixado; a seção segue com
`clinica-ambiente.jpg`. Para trocar: salvar a foto em
`assets/images/clinica-recepcion.png` e ajustar a substituição em
`med-dermoestetica-claude-prototype/scripts/convert-design-upgrade.mjs`.

## 2026-10-25 — fotos da clínica (proposta A)

- `assets/images/clinica-recepcion.jpg` e `clinica-fachada.jpg`: Google Maps,
  perfil "Med DermoEstetica" (fotos da própria clínica). Sem pessoas
  identificáveis. Trocar pelos originais da clínica quando houver.

- 2026-10-30: clinica-fachada.jpg e clinica-recepcion.jpg atualizadas da reconstrucao 23/10 (fotos originais da clinica); clinica-detalle-logo.jpg adicionada na galeria (substitui recepcao duplicada).
