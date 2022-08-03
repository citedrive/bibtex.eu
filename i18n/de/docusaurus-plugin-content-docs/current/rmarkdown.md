---
title: Reference management with BibTeX, when using R Markdown -- A short guide
description: "This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format."
sidebar_label: Bei der verwendung von R Markdown (Schnellstart)
sidebar_position: 2
---

# Literaturverwaltung in R Markdown mit BibTeX

R-Markdown ist ein großartiges Werkzeug, um reproduzierbare Berichte, Papiere, Präsentationen und mehr zu erstellen. Eine der Funktionen, die R-Markdown so leistungsfähig machen, ist seine Fähigkeit, sich in andere Tools und Software zu integrieren. Ein solches Tool ist BibTeX, ein Referenzmanagementsystem für LaTeX-Dokumente, mit dem du ganz einfach Quellen in deinem Dokument zitieren und ein Literaturverzeichnis erstellen kannst.


## Schritt 1: Erstelle eine .bib-Datei und fülle diese mit Einträgen.

Wie im vorangegangenen Abschnitt wird zunächst eine .bib-Datei, z. B. `bibliography.bib`, erzeugt, die anschließend mit BibTeX-Einträgen gefüllt wird.
BibTeX-Einträge sind im folgenden Format aufgebaut und enthalten für jede Literaturquelle (Buch, Aufsatz usw.) genügend Informationen für die Zitierung und Aufnahme in die Bibliographie.

Wir verwenden das Beispiel aus dem vorherigen Abschnitt und zitieren das Buch "The Old Man and the Sea" von Ernest Hemingway. Der Eintrag sieht dann wie folgt aus:

```latex
@book{Hemingway1952,
  title={The Old Man and the Sea},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

Auch hier wird die "Anatomie" dieses Eintrags aufgeschlüsselt, wobei drei Komponenten betrachtet werden, um zu verstehen, wie jeder BibTeX-Eintrag definiert ist:

* **Eintragstyp**: Mit `@book` definieren wir den Typ entsprechend dem Schema `@type` der Referenz. Möglich sind `@article` für wissenschaftliche Artikel und andere. BibTeX legt gerne fest, welche Felder optional und welche obligatorisch sind, um sie in der Literatur korrekt anzugeben.
**Eingabefelder**: in diesem Fall unseres `@book`-Beispiels sind dies `title`, `author`, `year` und `publisher`. (Vgl. [Felder](./Felder))
* **citation-key**: in unserem Beispiel ist es `Hemingway1952` und wird verwendet, um ein In-Text-Zitat in LaTeX anzugeben, d.h., um auf die Quelle zu verweisen. in R Markdown tun wir dies mit `[@Hemingway1952]`. Der Zitierschlüssel kann eine beliebige Zeichenfolge sein - oft eine Kombination aus Autor, Jahr und einem Wort aus dem Titel.



## Schritt 2: Erstellen eines R Markdown-Dokuments und Verbinden

Die Integration von BibTeX mit R Markdown ist sehr einfach. Alles, was du tun musst, ist, die Bib-Datei mit `bibliography: bibliography.bib` in YAML anzugeben und das Zitat mit `[@Hemingway1952]` an der Stelle, an der du das In-Text-Zitat platzieren willst.

```md
---
title: "BibTeX references in R Markdown"
author: "John Doe"
date: '2022-07-19'
bibliography: bibliography.bib
output: html_document
---


## BibTeX references in R Markdown

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent enim urna, dapibus et bibendum vel, consectetur et turpis.
Cras a molestie nulla. [@Hemingway1952]


```


## Literaturverwaltungsprogramme

Das Formatieren von BibTeX-Dateien von Hand kann mühsam sein. Deshalb wird allgemein empfohlen, einen Referenzmanager zu verwenden. Hier sind einige, die dafür gut geeignet sind:

* [CiteDrive](https://www.citedrive.com/) ist ein Bibtex-basiertes, kollaboratives und cloudbasiertes Tool zur Verwaltung deiner Referenzen und Teams in Projekten. Es bietet einen Ein-Klick-Export zu Overleaf ([*Vgl. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf*](https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf)) zusammen mit R Markdown ([*Vgl. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio*](https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619)), während Zitate synchronisiert werden.
* [Zotero](https://www.zotero.org/) ist ein kostenloses, quelloffenes Literaturverwaltungsprogramm, das bibliografische Daten und zugehörige Forschungsmaterialien (wie PDF-Dateien) verwaltet. Die beste Leistung für BibTeX in Zotero wird mit **[Better BibTeX For Zotero](https://retorque.re/zotero-better-bibtex/)** von retorque erreicht.
* Die freie, quelloffene Software [JabRef](https://www.jabref.org/) ist ein BibTeX-unterstützter Referenzmanager, der auf Windows, Mac und Linux läuft. Sie basiert auf Java und wird von JabRef e.V. gepflegt.
