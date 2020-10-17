---
id: intro
title: Introduction to BibTeX
sidebar_label: Introduction
---

## Einstieg

In diesem Abschnitt

## Format

Jede Literaturquelle (Buch, Paper etc.) kann mit den Informationsattributen, die für das Zitieren und für die Angabe im Literaturverzeichnis gebraucht werden, in folgender Weise gespeichert werden:

```tex
@Entry-type{citeID,
  title={the title of the work}
  author={lastname_1, firstnam_1 AND lastname_2, firstname_2 AND ... AND lastname_n, firstname_n}
  field_type_1={ ... }
  field_type_2={ ... }
  ...
  field_type_n={ ... }
}
```

Wobei `Entry-type` für Literaturtypen der zu zitierenden Quelle, wie etwa `book`, `article`, `manual` (*.t. Buch, Zeitungs- oder Zeitschriftenartikel, Technische Dokumentation etc.*) handeln kann. Alle gültigen Entry-Types und dazugehörige Hinweise können im entsprechenden Kapitel Entry-types gelesen werden.

Ein Beispiel für Buch:
```tex
@book{article1,
  ...
}
```
`citeID` steht für eindeutige Kennzeichnung (Identifikation) einer Literaturquelle, auf die man sich beim Zitieren bezieht. Innerhalb eines Projektes und in allen .bib-Dateien muss die ID einmalig sein.
Die `citeID` kann ein beliebiger String sein, wie etwa *article1*, wie im obigen Beispiel. In vielen Fällen setzt sich diese Identifikation aus dem Nachnamen des ersten Authoren, dem Erscheinungsjahr und einem beliebiegen Wort aus dem Titel - letzteres um Kollisionen zu vermeiden.

>  Citedrive setzt einmalige und vollautomatische uuid, um Literaturquellen auch im Nachhinein zu bearbeiten.

Hinweis: Manchmal und vorallem in älteren Dokumentation, wie etwa aus ... (edit here)


```tex
@book(article1,
  ...
)
```





*emph *with emph* in it*
**strong **with strong** in it**

## Literaturdatenbank `.bib-Datei`

Die Literaturdatenbank ist eine einfache Textdatei (`.bib-datei`) in der alle Literaturquellen in der oben beschrieben Weise, die der Nutzer zum Zitieren einer beliebigen Arbeit nutzen möchte, nacheinander gesammelt werden. Eine bestimmte Reihenfolge ist nicht notwendig.

### Beispiel

```tex
@article{sedelis2000mptp,
  title={MPTP susceptibility in the mouse: behavioral, neurochemical, and histological analysis of gender and strain differences},
  author={Sedelis, Marco and Hofele, Katja and Auburger, Georg W and Morgan, Sarah and Huston, Joseph P and Schwarting, Rainer KW},
  journal={Behavior genetics},
  volume={30},
  number={3},
  pages={171--182},
  year={2000},
  publisher={Springer}
}

@article{steinbeck2003chemistry,
  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},
  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},
  journal={Journal of chemical information and computer sciences},
  volume={43},
  number={2},
  pages={493--500},
  year={2003},
  publisher={ACS Publications}
}

@article{einstein1935can,
  title={Can quantum-mechanical description of physical reality be considered complete?},
  author={Einstein, Albert and Podolsky, Boris and Rosen, Nathan},
  journal={Physical review},
  volume={47},
  number={10},
  pages={777},
  year={1935},
  publisher={APS}
}

@Book{abramowitz+stegun,
 author    = "Milton {Abramowitz} and Irene A. {Stegun}",
 title     = "Handbook of Mathematical Functions with
              Formulas, Graphs, and Mathematical Tables",
 publisher = "Dover",
 year      =  1964,
 address   = "New York City",
 edition   = "ninth Dover printing, tenth GPO printing"
}

```

## Zitieren





## Quellen und Litaratur
