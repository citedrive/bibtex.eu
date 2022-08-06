---
title: Ein kurzer Leitfaden zur Verwaltung von Referenzen mit natbib und BibTeX
description: "Natbib ist ein LaTeX-Paket, mit dem Sie Zitate im Text um den Befehl \\CITE herum anpassen können. Dieser kurze Lehrgang zeigt Ihnen, wie Sie Ihre Referenzen mit BibTeX und natbib verwalten können. "
sidebar_label: Bei der verwendung von natbib (Schnellstart)
sidebar_position: 3
---

# Ein kurzer Leitfaden zur Verwaltung von Referenzen mit natbib und BibTeX

Das natbib-Paket fügt dem Standardbefehl `\cite{*}` in LaTeX neue Funktionen hinzu, die In-Text-Zitate mit verschiedenen Optionen und Anpassungen umfassen, insbesondere für Autor-Jahres-Schemata und die Anzeige des Textes und des Klammerzusatzes bei Verwendung von BibTeX.

:::tip
Es ist erwähnenswert, dass das Paket sowohl mit Autor-Jahres-Zitaten als auch mit numerischen Zitaten und mit den Standard-Bibliographie-`*.bst`-Dateien kompatibel ist.
:::

Dieser Artikel erklärt, wie man natbib zum Formatieren und Zitieren von bibliografischen Quellen verwendet.

## Erste Schritte: Parenthetische und textliche/erzählerische In-Text-Zitate mit natbib verwenden
Wir spezifizieren eine minimale Struktur, ähnlich der, die im vorherigen Abschnitt beschrieben wurde. Um dies zu tun, laden wir die Bibliothek mit `usepackage{natbib}`. Die Bibliothek bietet Optionen, die mit `\usepackagee[options]{{natbib}` übergeben werden können, die wir später behandeln. Die grundlegenden Zitierbefehle in Natbib sind `\citet{*}` für textliche/erzählerische Zitate und `\citep{*}` für parenthesenartige Zitate.


```latex
\documentclass{article}
\usepackage{natbib}
\bibliographystyle{apalike}
\title{A Short Guide to Reference Management using natbib with BibTeX}
\author{CiteDrive}
\date {January 1988}

\begin{document}

\maketitle
\textbf{Narrative citation:} \citet{Doe:1966} investigated the risks of incorrectly \\
recorded [...], which results in distortion.
\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion
\citep{Doe:1966}.

\medskip

\bibliography{sample}

\end{document}

```
Mit `\bibliography{sample}` verweisen wir auf unsere .bib-Datei, die zwei Beispieleinträge enthält:

```latex
@article{Doe:1966,
	title        = {Study on the risks of incorrectly recorded [...] and their impact on [...].},
	author       = {John Doe},
	year         = 1966,
	journal      = {BibTeX Publishing},
	volume       = 44,
	number       = 44,
	pages        = {123--456}
}
@article{smith201X,
	title        = {An interesting article},
	author       = {John Smith},
	year         = {201X},
	journal      = {Journal of Interesting Articles}
}

```
(fig)

Ein Beispiel dafür, dass natbib wunderbar mit numerischen Zitierweisen funktioniert; ändern wir die entsprechenden Befehle des obigen Codes:
```latex
\usepackage[square,numbers]{natbib}
\bibliographystyle{abbrvnat}
```
(fig)


## `cite{*}`-Befehle, die von natbib bereitgestellt werden

Die folgende Tabelle fasst die Unterschiede zwischen den Befehlen, die auf `cite{*}` basieren, und dem, was Sie erwarten könnten, zusammen. Sowohl numerische als auch Autor-Jahres-Stile sind enthalten, ebenso wie Mehrfachzitate.

:::caution
Wie wir später feststellen werden, ist die Auswahl einiger Beispiele nicht sehr sinnvoll: Kaum je werden sich zwei verschiedene Quellen ein Kapitel teilen. Bei `citet*{...}` werden alle Autoren ohne et. al. aufgeführt.   Nichtsdestotrotz sollte die Tabelle ein solides Verständnis dafür vermitteln, wie sich die Befehle verhalten.
:::

| Befehl (Einzelzitat) | Ausgabe (Autor-Jahr) | Ausgabe (Numerisch) | Befehl (Mehrfachzitate) | Ausgabe (Autor-Jahr) | Ausgabe (Numerisch) |
|---------------------------|----------------------|------------------|------------------------------|---|---|
|`\citet{Doe:1966}`|Doe (1966) |Doe [1]|`\citet{Doe:1966,smith201X}`|Doe (1966); Smith (201X)|Doe [1], Smith [2]|
|`\citet[chap.~4]{Doe:1966}`|Doe (1966, chap. 4)|Doe [1, chap. 4]|`\citet[chap.~4]{Doe:1966,smith201X}`|Doe (1966); Smith (201X, chap. 4)|Doe [1], Smith [2, chap. 4]|
|`\citep{Doe:1966}`|(Doe, 1966)|[1]|`\citep{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X)|[1, 2|
|`\citep[chap.~4]{Doe:1966}`|(Doe, 1966, chap. 4)|[1, chap. 4|`\citep[chap.~4]{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X, chap. 4)|1, 2, chap. 4]|
|`\citep[see][]{Doe:1966}`|(see Doe, 1966)|[see 1]|`\citep[see][]{Doe:1966,smith201X}`|(see Doe, 1966; Smith, 201X)|[see 1, 2]|
|`\citep[see][chap.~4]{Doe:1966}`|(see Doe, 1966, chap. 4)|[see 1, chap. 4]|`\citep[see][chap.~4]{Doe:1966,smith201X}`|(see Doe, 1966; Smith, 201X, chap. 4)|[see 1, 2, chap. 4]|
|`\citet*{Doe:1966}`|Doe (1966)|Doe [1]|`\citet*{Doe:1966,smith201X}`|Doe (1966); Smith (201X)|Doe [1], Smith [2]|
|`\citep*{Doe:1966}`|(Doe, 1966)|[1]|`\citep*{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X)|[1, 2]|

Andere Optionen sind zum Beispiel unterdrückte Klammern mit `\citealp` und `\citealt` entsprechend den Befehlen `\citep` und `\citet`. Mit `\citeauthor` kann man das Jahr unterdrücken, und mit `\citeyear` die Autoren. Weitere Befehle und Optionen rund um `\cite` in natbib finden Sie im *Reference sheet for natbib usage* [PDF]: https://gking.harvard.edu/files/natnotes2.pdf  

## Anhang
### Optionen für natbib
Nachfolgend sind die Optionen aufgeführt, die über `\usepackagee[options]{{natbib}` angegeben werden können:

| Option | Beschreibung |
|----------------------|----------|
|round|zeigt runde Klammern an|
|square|zeigt eckige Klammern an|
|curly|zeigt geschweifte Klammern an|
|angle|zeigt Winkelstreben an|
|semicolon|mehrere Zitate werden durch Semikolon getrennt|
|colon|wie *semicolon*|
|comma|mehrere Zitate werden durch ein Koma getrennt|
|authoryear|Autor-Jahres-Zitate anzeigen|
|numbers|Numerische Zitate anzeigen|
|super|zeigt hochgestellte Zahlen für numerische Zitate an|
|sort|sortiert mehrere Zitate in der Reihenfolge der im Literaturverzeichnis angezeigten Referenzen. |
|compress|Sortierung und mehrfache numerische Zitate werden gegebenenfalls komprimiert|
|sort&compress|Mehrfache numerische Zitate werden gegebenenfalls komprimiert.|
|longnamesfirst|der vollständige Name des Autors erscheint in der ersten Quellenangabe|
|sectionbib|definiert `\thebibliography` so um, dass statt `\section` nun `\chapter` ausgegeben wird|
|nonamebreak|Zeigt alle Autorennamen eines Zitats in einer Zeile an|


### Ressourcen

* *Bibliography management with natbib* via [Overleaf](https://www.overleaf.com/learn/latex/Bibliography_management_with_natbib)
* *Natbib bibliography styles* via [Overleaf](https://www.overleaf.com/learn/latex/Natbib_bibliography_styles)
* *Reference sheet for natbib usage* [PDF]: https://gking.harvard.edu/files/natnotes2.pdf
