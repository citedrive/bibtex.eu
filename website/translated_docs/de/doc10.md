---
id: email
title: BibTeX Field types: email
sidebar_label: email
---

E-Mail enthält die E-Mail-Adressen der angegebenen Autoren, falls Sie diese angeben möchten. Dies ist kein übliches Feld und wird möglicherweise nicht unterstützt.
Für die Angabe von E-Mail-Adressen werden die folgenden Varianten empfohlen:

## Als Hinweis, der am Ende der Referenz angezeigt werden soll:

```tex
@book{ ... ,
 author = {Muller, John},

 ...

 note = "{\tt john.muller@example.com}"
}
```

## Zur Anzeige hinter dem Familiennamen:

```tex

@book{ ... ,
 author = {Muller {\tt john.muller@example.de}, John },

 ...

}
```
