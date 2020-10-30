---
id: author
title: BibTeX Field types: Author
sidebar_label: Author
---
Im ``author``-Feld können Sie alle Mitwirkenden an dem Werk, das Sie zitieren möchten, angeben. BibTeX hat mehrere Möglichkeiten, Autorennamen anzugeben, erwartet aber in allen Fällen eine konsistente und genaue Anordnung, so dass ungenaue Angaben zur unerwünschten Ausgabe des Autorennamens führen könnten.

## Notation: ``{Vorname Nachname}``

Eine natürliche Angabe wie ``{Vorname Nachname}`` ist möglich, aber nicht umgekehrt, "Nachname Vorname".

### Beispiel, ``{Vorname Nachname}``

```tex
@article{ (...),

  ...

  author={Isaac Newton}

  ...

}
```



## Notation: ``{Nachname, Vorname}``
Wir empfehlen jedoch den folgenden Weg ``{Nachname, Vorname}``, d.h. Nachname und Vorname durch ein Komma getrennt. Auf diese Weise ist eine bessere Kontrolle zur Unterscheidung zwischen Vor- und Nachname möglich.

### Beispiel, ``{Nachname, Vorname}``

```tex
@article{ (...),

  ...

  author={Newton, Isaac}

  ...

}
```


## Notation: ``{Nachname, Suffix, Vorname}``

Wenn Sie ein beliebiges Suffix angeben möchten, z.B. Junior, Senior, die 5. (Jr. Sr. V), so tun Sie dies strikt in dieser Reihenfolge und trennen Sie die einzelnen Komponenten durch ein Komma:

``{Nachname, Suffix, Vorname}``

### Beispiel, ``{Nachname, Suffix, Vorname}``

```tex
@article{ (...),

  ...

  author={King, Jr , Luther}

  ...

}
```

## Wie fügt man mehrere Autoren in BibTeX hinzu?

Sie geben die einzelnen Autoren auf die oben beschriebene Weise an. Das Trennzeichen AND teilt mehrere Autoren. Also auf diese Weise:
``{Nachname, Vorname AND Nachname, Vorname AND Nachname, Vorname AND Nachname, Vorname AND ...}``


### Beispiel, "Wie man mehrere Autoren hinzufügt?""

```tex
@article{ (...),

  ...

  author={Fisher, James AND Clark, John}

  ...

}
```
### Hinweise zur Angabe ...

## Wie fügt man eine Kooperation in BibTeX hinzu?
