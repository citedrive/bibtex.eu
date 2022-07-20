---
slug: booktitle
title: booktitle
---

# booktitle

To cite an ``incollection``, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an ``inproceedings``, the ``booktitle``-field is used to distinguish. At the same time, ``title`` contains the title of the ``book``, or ``incproceedings``.


## Format

```tex
@incollection{Mueller2014The,
  booktitle={ ... }
}
```

## Example

```tex
@incollection{Mihalcea2006Knowledge,
	title        = {Knowledge-Based Methods for {WSD}},
	author       = {Rada Mihalcea},
	year         = 2006,
	booktitle    = {Word Sense Disambiguation: Algorithms and Applications},
	publisher    = {Springer},
	address      = {Dordrecht, the Netherlands},
	pages        = {107--132},
	editor       = {Eneko Agirre and Philip Edmonds}
}
```
