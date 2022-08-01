---
title: A Short Guide to Reference Management using natbib with BibTeX
description: "Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. "
sidebar_label: Using Natbib (Quick start)
sidebar_position: 3
---

# A Short Guide to Reference Management using natbib with BibTeX

The natbib package adds new features to the standard `\cite{*}` command in LaTeX that includes in-text citations with various options and customizations, especially for author-year schemes and displaying the textual and parenthetical when using BibTeX.

It is worth noting that the package is compatible with both author-year and numerical citations and with the standard bibliography (`*.bst`) files. This article explains how to use natbib to format and cite bibliographic sources.


## Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib
We specify a minimal structure, similar to the one discussed in the previous section. To do this, we load the library with `\usepackage{natbib}`. The library provides options that can be passed via `\usepackagee[options]{{natbib}`, which we cover later. The basic citation commands in Natbib are `\citet{*}` for textual/narrative citations and `\citep{*}` for parenthetical citations.


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
![A Short Guide to Reference Management using natbib with BibTeX](output_example_bibtex_natbib.png)

## Basic `cite{*}` commands provided by natbib

| Command (single citation) | Output (author-year) | Output (Numeric) | Command (Multiple citations) | Output (author-year) | Output (Numeric) |
|---------------------------|----------------------|------------------|------------------------------|---|---|
|`\citet{Doe:1966}`|Doe (1966) |Doe [1]|`\citet{Doe:1966,smith201X}`|Doe (1966); Smith (201X)|Doe [1], Smith [2]|
|`\citet[chap.~4]{Doe:1966}`|Doe (1966, chap. 4)|Doe [1, chap. 4]|`\citet[chap.~4]{Doe:1966,smith201X}`|Doe (1966); Smith (201X, chap. 4)|Doe [1], Smith [2, chap. 4]|
|`\citep{Doe:1966}`|(Doe, 1966)|[1]|`\citep{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X)|[1, 2|
|`\citep[chap.~4]{Doe:1966}`|(Doe, 1966, chap. 4)|[1, chap. 4|`\citep[chap.~4]{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X, chap. 4)|1, 2, chap. 4]|
|`\citep[see][]{Doe:1966}`|(see Doe, 1966)|[see 1]|`\citep[see][]{Doe:1966,smith201X}`|(see Doe, 1966; Smith, 201X)|[see 1, 2]|
|`\citep[see][chap.~4]{Doe:1966}`|(see Doe, 1966, chap. 4)|[see 1, chap. 4]|`\citep[see][chap.~4]{Doe:1966,smith201X}`|(see Doe, 1966; Smith, 201X, chap. 4)|[see 1, 2, chap. 4]|
|`\citet*{Doe:1966}`|Doe (1966)|Doe [1]|`\citet*{Doe:1966,smith201X}`|Doe (1966); Smith (201X)|Doe [1], Smith [2]|
|`\citep*{Doe:1966}`|(Doe, 1966)|[1]|`\citep*{Doe:1966,smith201X}`|(Doe, 1966; Smith, 201X)|[1, 2]|

## Options for `natbib`

## References and more
