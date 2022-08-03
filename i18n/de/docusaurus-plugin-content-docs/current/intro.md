---
title: Literaturverwaltung mit BibTeX -- Ein kurzer Leitfaden
description: "BibTeX ist eine Software zur Verwaltung von Referenzen, mit der Sie Ihre Referenzen in einem einfachen, benutzerfreundlichen Format speichern und organisieren können."
sidebar_label: Bei der verwendung von LaTeX (Schnellstart)
sidebar_position: 1
slug: "/"
---

# Literaturverwaltung mit BibTeX

**BibTeX** kann für viele Neulinge entmutigend sein, weil es so viele Besonderheiten bei LaTeX-Paketen, Zitierweisen und Formatierungen gibt. Dennoch sind viele Aspekte meist unwichtig, und die Struktur ist in der Regel immer die gleiche.

Und genau das ist das Ziel dieses kleinen Leitfadens: Er soll Dir einen grundlegenden Aufbau anhand eines Beispiels vermitteln und Dir zeigen, wie Du BibTeX von Grund auf verwenden kannst. In Zukunft werden wir auch auf andere Dokumentensysteme als LaTeX und auf Details auf dieser Website eingehen, aber vorerst werden wir uns auf die Grundlagen beschränken.

## Schritt 1: Erstelle eine .bib-Datei und fülle sie mit Einträgen.


Wir erzeugen zunächst eine .bib-Datei, z. B. `bibliography.bib`, die dann mit BibTeX-Einträgen gefüllt wird. Ein BibTeX-Eintrag wird im nachfolgenden Format geschrieben und stellt jede Literaturquelle (Buch, Aufsatz usw.) mit den für die Zitierung und Aufnahme in die Bibliographie erforderlichen Informationen dar.
Angenommen, wir wollen das Buch "The Old Man and the Sea" von Ernest Hemingway zitieren, dann würde der Eintrag wie folgt aussehen:

```latex
@book{Hemingway1952,ur
  title={The Old Man and the Sea},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

Wenn Sie die "Anatomie" dieses Eintrags aufschlüsseln, müssen Sie sich nur die folgenden drei Komponenten ansehen, um zu verstehen, wie jeder BibTeX-Eintrag definiert ist:

* **Eintragstyp**: Mit `@book` definieren wir die Art der Referenz, d.h. (und dieses Beispiel bezieht sich auf sich selbst) als ein Buch. Es sind auch `@article` für wissenschaftliche Artikel und andere möglich. BibTeX legt gerne fest, welche Felder optional und welche erforderlich sind, um sie in der Literatur korrekt anzugeben.
* **Eingabefelder**: in diesem Beispiel sind dies `Titel`, `Autor`, `Jahr` und `Verlag`. (Vgl. [Felder](./fields))
* **Zitat-Schlüssel**: Dieses Beispiel lautet `Hemingway1952` und wird verwendet, um in LaTeX In-Text-Zitate anzugeben, d.h. um auf die Quelle zu verweisen. Mit dem gleichen Beispiel machen wir dies mit `\cite{Hemingway1952}`. Der Zitierschlüssel kann eine beliebige Zeichenkette sein - oft eine Kombination aus Autor, Jahr und einem Wort aus dem Titel.


## Schritt 2: Ein LaTeX-Dokument erstellen und eine Verbindung herstellen

Beginnen wir damit, unsere Referenz in ein LaTeX-Dokument einzufügen. Sie können das folgende Beispiel kopieren und verwenden, ein minimales Grundgerüst, das für die Formatierung des Zitats ausreicht.

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{BibTeX references in \LaTeX}
\author{John Smith}

\begin{document}

\maketitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \cite{Hemingway1952}
\medskip

\bibliographystyle{unsrt}
\bibliography{bibliography}

\end{document}
```

Nach dem Kompilieren des LaTeX-Dokuments werden wir feststellen, dass der Befehl `\cite{Hemingway1952}` durch die in der BibTeX-Datei angegebene Referenz mit dieser ID im Beispiel `[1]` ersetzt wird.


(bild)

Die .bib-Datei, die wir `bibliography.bib` genannt haben, ist in `\bibliography{bibliography}` definiert und der Zitier-/Bibliographiestil `\bibliographystyle{unsrt}`, wobei sich unsrt auf die `.bst-Datei` bezieht, in diesem Fall auf `unsrt.bst`, die alle Makros zur Formatierung Ihrer Referenzen im Stil enthält. Sie können stattdessen auch andere Stile wie `apalike.bst` verwenden.

## Referenz-Manager

Die Formatierung von BibTeX-Dateien von Hand kann mühsam sein, weshalb es sich im Allgemeinen empfiehlt, einen Referenzmanager zu verwenden. Hier sind einige, die dafür gut geeignet sind:

* [CiteDrive](https://www.citedrive.com/) ist ein Bibtex-gesteuertes, kollaboratives und webbasiertes Tool zur Verwaltung Ihrer Referenzen und Teams in Projekten. Es bietet einen Ein-Klick-Export zu Overleaf ([*Vgl. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf*](https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf)) sowie R Markdown ([*Vgl. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio*](https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619)), um Zitate synchron zu halten.
* [Zotero](https://www.zotero.org/) ist eine kostenlose, quelloffene Literaturverwaltungssoftware, die bibliografische Daten und zugehörige Forschungsmaterialien (wie PDF-Dateien) verwaltet. Die beste Leistung für BibTeX in Zotero wird mit [Better BibTeX For Zotero](https://retorque.re/zotero-better-bibtex/) von retorque erreicht.
* Die freie, quelloffene Software [JabRef](https://www.jabref.org/) ist ein BibTeX-gestützter Referenzmanager, der auf Windows, Mac und Linux läuft. Er basiert auf Java und wird von JabRef e.V. gepflegt.
