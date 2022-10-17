---
slug: crossref
title: "BibTeX field type: crossref"
sidebar_label: crossref
---

# BibTeX field type: crossref

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
