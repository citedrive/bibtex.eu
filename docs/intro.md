---
title: Reference management with BibTeX -- A short guide
description: "This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format."
sidebar_label: Using LaTeX (Quick start)
sidebar_position: 1
slug: "/"
---

# Reference management with BibTeX: A short guide

**BibTeX** can be daunting to many newcomers because of all the specifics about LaTeX packages, citation styles, and formatting. Yet, many aspects are mostly unimportant, and the structure is usually always the same.

And that is exactly what this little guide aims to accomplish: give you a basic set-up using an example, and show you how to use BibTeX from the ground up. In the future, we'll refer to document systems other than LaTeX, and details on this website, but for now, we'll stay focused on the basics.


## Step 1: Create a .bib-file and create some entries.

We begin by generating a .bib-file, such as `bibliography.bib`, which is then filled with BibTeX entries. A BibTeX entry is written in the following format and represents each literature source (book, essay, etc.) with the information required for citation and inclusion in the bibliography.
Let's say we want to cite the book "The Old Man and the Sea" by Ernest Hemingway, then the entry would look like this:

```latex
@book{Hemingway1952,
  title={The Old Man and the Sea},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

If you break down the "anatomy" of this entry, you only have to look at the following three components to understand how each BibTeX entry is defined:

* **Entry-type**: With `@book` we define the type of reference, i.e. (and this example refers to itself) as a book. There are also `@article` for academic articles and others possible. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature.
* **Entry fields**: in this example, these are `title`, `author`, `year`, and `publisher`. (Cf. [fields](./fields))
* **citation-key**: This example is `Hemingway1952` and is used to indicate in-text citation in LaTeX, i.e., to refer to the source. Using the same example, we do this with `\cite{Hemingway1952}`. The citation key can be any string of characters - often as a combination of author, year, and a word from the title.



## Step 2: Create a LaTeX document and connect

Let's start by inserting our reference into a LaTeX document. You can copy and use the following example, a minimal basic framework sufficient to format the citation.

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
After compiling the LaTeX document, we will notice that the command `\cite{Hemingway1952}` is replaced by the reference given in the BibTeX file with this ID in the example `[1]`.



!["BibTeX - LaTeX - Overleaf"](LaTeX_Overleaf_BibTeX-Example.png)

The .bib file, which we have called `bibliography.bib`, is defined in `\bibliography{bibliography}` and the citation/bibliography style `\bibliographystyle{unsrt}`, where unsrt refers to the `.bst file,` in this case to `unsrt.bst`, which contains all the macros to format your references in style. You can use other styles like `apalike.bst` instead.  

## Reference managers

Formatting BibTeX files by hand can be tedious, which is why it is generally recommended to use a reference manager. Here are a few that are well suited for this:

* [CiteDrive](https://www.citedrive.com/) -
* [JabRef](https://www.jabref.org/) -
* [Zotero](https://www.zotero.org/) -

## Further notes

We said in the introduction that you don't need to understand most of this to get started. That's true, but in the future, you may stumble upon the fact that BibTeX can mean two different things depending on the context.

BibTeX is the name of a program that converts TeX markups into bibliographic information. The file that contains all your TeX markups and references is known as a *.bib file, often referred to as a BibTeX file. Confusion can arise when using new implementations such as BibLaTeX, a superset of fields and types in the data structure.
