---
slug: citing-and-using-references-on-overleaf-a-guide-for-researchers
title: "Zitate und Verweise auf Overleaf: Ein Leitfaden für WissenschaftlerInnen"
authors:
  name: CiteDrive
  title: https://www.citedrive.com/
  url: https://www.citedrive.com/
  image_url: https://avatars.githubusercontent.com/u/65911387?s=200&v=4
tags: [citedrive, overleaf, latex, bibtex, biblatex,natbib]
---

Wenn Sie eine wissenschaftliche Arbeit schreiben, ist es wichtig, dass Sie Ihre Behauptungen durch Quellenangaben belegen. Die korrekte Zitierung Ihrer Quellen ist der Schlüssel zu einer soliden Argumentation und zur Vermeidung von Plagiaten. In diesem Leitfaden erfahren Sie, wie Sie mit CiteDrive Referenzen auf Overleaf zitieren können. Außerdem geben wir Ihnen Tipps, wie Sie zuverlässige Quellen im Internet finden. Los geht's!



## Schritt 1: CiteDrive mit Overleaf verbinden

Wenn Sie noch nicht bei [Overleaf](https://www.overleaf.com/) angemeldet sind, müssen Sie dies jetzt tun. Gehen Sie dann zu [CiteDrive](https://www.citedrive.com/), erstellen Sie ein Overleaf-Projekt und fügen Sie [Referenzen hinzufügen](https://citedrive.medium.com/adding-bibliographic-references-to-overleaf-with-citedrive-325f131e3ca2) zu Ihrem neuen Projekt hinzu. Ihr Projekt könnte wie folgt aussehen:

![CiteDrive - Beispiel](@site/static/img/tutorial/citedrive_project_example.png)

Danach klicken Sie auf "bib" oben links in Ihrem Projekt. Dadurch wird eine neue Registerkarte zur dynamischen BibTeX-Datei geöffnet, die Sie für Ihr Deckblatt verwenden können und die automatisch aktualisiert wird, wenn Sie oder Ihre Teamkollegen Referenzen in Ihrem Projekt hinzufügen, aktualisieren oder löschen.

Gehen Sie schließlich zu Overleaf, erstellen Sie eine neue Datei, wählen Sie "From External URL" und fügen Sie die URL aus dem dynamischen BibTeX in "URL to fetch the file from" ein, nennen Sie sie hier *references.bib*.
Ihr CiteDrive-Projekt ist nun mit Overleaf verbunden! Denken Sie daran, dass Sie auf Aktualisieren klicken müssen, wenn Sie Änderungen in unserem CiteDrive-Projekt vornehmen, damit Overleaf den neuesten Stand erhält.

![Dateien zu Overleaf hinzufügen](@site/static/img/tutorial/export_bib_to_overleaf.png)

## Schritt 2: Erstellen eines TeX-Dokuments in Overleaf

Erstellen wir nun eine neue TeX-Datei für Overleaf, die wir "document.tex" nennen könnten, können wir die Bibliographie, die BibTeX-Datei von CiteDrive mit `\bibliography{references}` definieren. Aber welche Bibliographie-Tools sollten wir verwenden? Für die Verwaltung von Bibliographien in LaTeX/Overleaf gibt es viele Möglichkeiten: am ehesten natbib, bibtex und biblatex. Für die Verwaltung von Bibliographien in LaTeX ist BibTeX die Grundlage für das Format. Mit natbib wird BibTeX mit einer Erweiterung versehen, die mehr Gestaltungsfreiheit für In-Text-Zitate bietet, und biblatex ist eine komplette Überarbeitung von BibTeX, die mehr Referenztypen, Sortier- und Filteroptionen für Bibliographien und Lokalisierungsoptionen bietet. Während BibteX das bekannteste Programm ist, ist BibLaTex nicht nur genauso robust, sondern auch das am meisten empfohlene Programm für Neueinsteiger. Die Zitier- und bibliographischen Daten für Referenzen und Listings werden in der sogenannten .bib-Datei gespeichert, genau wie in der BibTeX-Datei von CiteDrive. Sie hat immer das gleiche Format:

 ```latex
 @article{smith201X,
 	title        = {An interesting article},
 	author       = {John Smith},
 	year         = {201X},
 	journal      = {Journal of Interesting Articles}
 }
 ```

 Hier ist `@article` der Quellentyp, `title`, `author`, `year` und `journal` die Attribute, die für die Anzeige in Ihren Literaturlisten und Zitaten verwendet werden, und schließlich `smith201X`, ein eindeutiger Bezeichner, den Sie für Referenzen in Ihrem Dokument verwenden können, hauptsächlich mit cite(key). CiteDrive ist nicht wählerisch in Bezug auf das Format; jedes Feld und jeder Eintragstyp, der für das bibliographische Paket Ihrer Wahl geeignet ist, wird akzeptiert. Da das grundsätzliche Ziel von CiteDrive die Trennung der bibliographischen Daten vom Dokument und den Zitierweisen ist, werden alle Alternativen von CiteDrive unterstützt.


 Daher stellen wir Ihnen im Folgenden drei Vorlagen zur Verfügung, um Ihnen den Einstieg zu erleichtern.

 ### Erste Schritte mit BibTeX:

Wenn Sie mit BibTeX beginnen möchten, verwenden Sie die folgende Vorlage oder öffnen Sie Overleaf direkt. Weitere Informationen zu BibTeX finden Sie in der Dokumentation.

 ```latex title="document.tex"
 \documentclass{article}
 \usepackage[utf8]{inputenc}

 \title{BibTeX references in \LaTeX}
 \author{John Smith}

 \begin{document}

 \maketitle

 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \cite{Hemingway1952}
 \medskip

 \bibliographystyle{unsrt}
 \bibliography{references}

 \end{document}
 ```


 ### Erste Schritte mit natbib:

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

 \bibliography{references}

 \end{document}

 ```

 Für weitere Informationen über natbib klicken Sie bitte hier.

 ### Erste Schritte mit BibLaTeX.

 ```latex
 \documentclass{article}
 \usepackage{biblatex}
 \addbibresource{references.bib}

 \begin{document}
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \cite{Hemingway1952}
 \medskip

 \printbibliography

 \end{document}
 ```

 Für weitere Informationen zu BibLaTeX klicken Sie bitte hier.

 ## Schritt 3: In-Text-Zitate

 Wenn Sie die Browsererweiterung installiert haben, können Sie Zitate erstellen, indem Sie den Text markieren und auf das CiteDrive-Symbol in Ihrer Symbolleiste klicken.
 Sie können Referenzen auch manuell mit dem Befehl cite zitieren. Wenn Sie z. B. Smith (201X) zitieren möchten, verwenden Sie "cite{smith201X}". Oder verwenden Sie die Referenzsuche in Overleaf.
 Bibliographiestile sind in Overleaf vorinstalliert und je nachdem, welches Paket Sie verwendet haben, finden Sie auf den folgenden Seiten Verweise:
 Das war's! Sie sollten nun alles haben, was Sie brauchen, um Referenzen in Overleaf zu verwenden. Bitte lassen Sie uns per E-Mail an hello@citedrive.com wissen, wenn Sie Fragen oder Anregungen haben.



 Viel Spaß beim TeXen!
