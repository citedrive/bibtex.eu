---
title: A Short Guide to Reference Management using natbib with BibTeX
description: "Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. "
sidebar_label: Using Natbib (Quick start)
sidebar_position: 3
---

# A Short Guide to Reference Management using natbib with BibTeX

The natbib package adds new features to the standard `\cite{*}` command in LaTeX that includes in-text citations with various options and customizations, especially for author-date schemes and displaying the textual and parenthetical when using BibTeX.

It is worth noting that the package is compatible with both author-year and numerical citations and with the standard bibliography (`*.bst`) files. This article explains how to use natbib to format and cite bibliographic sources.


## Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib

The basic citation commands in Natbib are `\citet{*}` for textual/narrative citations and `\citep{*}` for parenthetical citations.


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

![](output_example_bibtex_natbib.png)

## Other Basic `citet` commands

... coming soon

## More Customizations

... coming soon


## Options for `natbib`

## Using `natbib` in Overleaf

... coming soon

## Using CiteDrive

... coming soon
