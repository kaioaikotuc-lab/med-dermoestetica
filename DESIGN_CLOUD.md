# Espaço de design na nuvem — MED DermoEstética

Configurado em 04/08/2026. Conta Adobe do Kaio (`auth`, completa — não é sessão
de convidado, então exportar para o Adobe Express funciona).

## Regra de imagem — sem trava

**Imagem de pessoa real está autorizada pela clínica.** Não há etapa de
aprovação, sinalização ou "segunda olhada" antes de usar foto com pessoa —
nem aqui, nem em nenhuma outra peça gráfica. Detalhe e os três limites que
continuam valendo (licença, consentimento de paciente identificável, nada de
antes/depois enganoso) estão no `ASSET_MANIFEST.md`.

## Pastas no Creative Cloud

Criadas na raiz de Arquivos da conta:

| Pasta | O que vai dentro |
|---|---|
| `MED-DermoEstetica/01-Fotos-Clinica` | Fotos próprias: fachada, recepção, consultório, equipamentos, equipe, atendimento |
| `MED-DermoEstetica/02-Imagens-Licenciadas` | Originais do Adobe Stock em resolução cheia, antes de redimensionar para web |
| `MED-DermoEstetica/03-Pecas-Site` | Exports do site, Open Graph, versões de revisão |
| `MED-DermoEstetica/04-Redes-Sociais` | Post, story, capa — canvas fixo |

O repositório continua guardando só as versões redimensionadas para web
(`assets/images/`). Original grande fica na nuvem, não versionado — foi a
decisão de 30/07 (38 MB → 1 MB).

## Como cada tipo de peça é feita

| Preciso de | Caminho |
|---|---|
| Post, story, flyer, cartão, infográfico | `create_visual_design_express_skill` → autora em HTML → `html_export_readiness_skill` → `export_html_to_express` |
| Peça a partir de template pronto | `search_design` |
| Tirar fundo, vetorizar, expandir imagem | `image_remove_background`, `image_vectorize`, `image_generative_expand` |
| Ajuste de foto (luz, cor, corte) | `image_apply_adjustments`, `image_apply_preset`, `image_crop_and_resize` |
| Licenciar imagem de banco | `asset_search` (`entityScope: StockAsset`) → `asset_license_and_download_stock` |

Toda imagem licenciada entra na tabela do `ASSET_MANIFEST.md` com o ID do
Stock — é site de cliente pago, a proveniência precisa estar escrita.

## O que a nuvem não resolve

`clinica-recepcion.png` (foto real da recepção) vive no projeto do **Claude
Design**, que é outro serviço — não aparece no Creative Cloud. Conferido em
04/08 por busca em `CCAsset`: não há cópia lá. Para usá-la, o Kaio precisa
salvar o arquivo em `assets/images/` à mão. Ver pendência 2 do `README.md`.
