# Origem das imagens

Todas as imagens do site são servidas de `assets/images/` — nenhuma depende de
servidor de terceiros.

## Adobe Stock — licenciadas em 2026-07-29

Licenciadas pela conta Adobe do Kaio (licença padrão) e baixadas em resolução
original; os arquivos no repositório são versões redimensionadas para web.

| Arquivo | Adobe Stock ID | Onde aparece | Original |
|---|---|---|---|
| `card-aclarado-intimo.jpg` | 454084588 | Card 01 — Aclarado íntimo | 5616×3745 |
| `card-depilacion-laser.jpg` | 496779538 | Card 02 — Depilación láser | 5712×3808 |
| `card-otros-cuidados.jpg` | 369011641 | Card 03 — Otros cuidados | 6571×4381 |
| `cap-facial.jpg` | 446391592 | Cap. 01 — Facial | 6240×4160 |
| `cap-corporal.jpg` | 255328355 | Cap. 02 — Corporal | 5760×3840 |
| `cap-depilacion.jpg` | 468971752 | Cap. 03 — Depilación y cuidado íntimo | 4500×3001 |
| `cap-lesiones.jpg` | 475998587 | Cap. 04 — Lesiones de piel | 6647×4368 |

### Para revisão da cliente

Duas dessas imagens mostram pessoas, o que o briefing original evitava. Foram
mantidas por decisão do Kaio, mas ficam registradas aqui:

- **`card-depilacion-laser.jpg`** — mulher de roupa íntima deitada na maca, com
  tatuagens grandes visíveis, durante aplicação do laser. É a imagem mais
  exposta da página e a que mais pesa em anúncio pago.
- **`card-otros-cuidados.jpg`** — profissional de jaleco atendendo uma paciente.
  Pode ser lida como equipe própria da clínica.

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
