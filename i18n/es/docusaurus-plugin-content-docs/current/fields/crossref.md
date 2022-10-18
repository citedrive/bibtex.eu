---
slug: crossref
title: "BibTeX field type: crossref"
sidebar_label: crossref
---

# BibTeX field type: crossref

:::note
Esta página sólo está disponible en inglés, pero necesitamos tu ayuda para traducirla a tu idioma. Si estás interesado, consulta nuestro repositorio de GitHub para obtener más información sobre cómo contribuir.
:::

If you have several entries referring to the same `proceedings`, you can use `crossref` to specify fields common to several entries only once by defining `crossref = {citationkey}`. Where `citationkey` is the citation key of the cross-referenced entry.

```tex
@inproceedings{...,
    crossref = {CITATIONKEY},
}

@proceedings{CITATIONKEY,
    title = {...},
    ... = {...},
}
```
