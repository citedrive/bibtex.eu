# Wie erstelle ich eine .BIB-Datei zur Verwaltung meiner BibTeX-Referenzen?

Wenn Sie nach einer Möglichkeit suchen, Ihre "BibTeX"-Referenzen zu verwalten, fragen Sie sich vielleicht, wie Sie eine "BIB-Datei" erstellen können. In diesem Artikel zeigen wir Ihnen, wie das geht! Wir geben Ihnen auch einige Tipps, wie Sie ".BIB"-Dateien effektiv nutzen können.

:::tip
[CiteDrive](https://www.citedrive.com/) ist ein webbasiertes kollaboratives Referenzmanagement-Tool, das auf BibTeX aufbaut und sich automatisch mit Publikationssystemen wie [Overleaf](https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf) und [RStudio](https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619) synchronisiert und die Formatierung Ihrer Bib-Datei für Sie übernimmt.
:::

## Erstellen einer Bib-Datei von Hand

Das Erstellen einer `.BIB-Datei` ist eigentlich ganz einfach. Alles, was Sie tun müssen, ist, eine Textdatei mit der Erweiterung `.bib` zu erstellen. Sie können dann Ihre BibTeX-Referenzen in diese Datei einfügen, eine pro Zeile. Zum Beispiel:


```latex
@article{smith201X,
	title        = {An interesting article},
	author       = {John Smith},
	year         = {201X},
	journal      = {Journal of Interesting Articles}
}
```

Sobald Sie Ihre `.BIB-Datei` erstellt haben, können Sie sie in Ihren LaTeX-Dokumenten verwenden, indem Sie den Befehl `\bibliography{filename}` angeben. Zum Beispiel:


```latex
\documentclass{article}
\usepackage{natbib}

\begin{document}

...

\bibliography{filename}

\end{document}
```

Das ist alles, was es zu tun gibt! Das Erstellen einer "BIB-Datei" ist eine einfache Möglichkeit, Ihre BibTeX-Referenzen zu verwalten. In unseren anderen Artikeln über BibTeX finden Sie weitere Tipps und Tricks!
