---
title: "BibTeX: The Essential Tool for Managing Your Bibliographies-- A short guide"
description: "This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format."
sidebar_label: Using LaTeX (Quick start)
sidebar_position: 1
slug: "/"
---

# BibTeX: The Essential Tool for Managing Your Bibliographies

**BibTeX** can be daunting to many newcomers because of all the specifics about LaTeX packages, citation styles, and formatting. Yet, many aspects are mostly unimportant, and the structure is usually always the same.

And that is exactly what this little guide aims to accomplish: give you a basic set-up using an example, and show you how to use BibTeX from the ground up. In the future, we'll refer to document systems other than LaTeX, and details on this website, but for now, we'll stay focused on the basics.


## BibTeX Overview

BibTeX is a software program created in the mid-1980s by Oren Patashnik and Leslie Lamport that is widely used for managing and formatting bibliographies in LaTeX (*but also markdown*) documents. It is widely used as a standard method of formatting bibliographic references in academia, particularly in math, computer science, and physics. The author saves references in plain text files with the extension `.bib,` and each one is assigned a unique key that is used to cite it in the main LaTeX document. The entries in the `.bib-file` can be of various types, such as articles, books, conference papers, and so on, and they can include fields such as authors, title, journal, volume, year, and so on, depending on the type of reference.

Because you only need to enter the details once in the '.bib-file' and then refer to them using the unique keys in the main LaTeX document, it is a convenient way for LaTeX and Markdown users to format and manage references. When the LaTeX document is compiled, BibTeX generates the formatted bibliography using the information in the.bib file and the style specified in the LaTeX file.

### Why should you use BibTeX?

As previously stated, BibTeX can help ensure citation style consistency and reduce the risk of human error in formatting citations if the information is correct and the entries are error-free (see problems in section bellow). If you automate the formatting process in terms of styles, you can reuse old references or change the style without having to rewrite everything, while maintaining the intended separation of concerns between formatting and bibliographic data. It works with a variety of tools and platforms, including Pandoc for Markdown. Most importantly, you have complete control over the fields and types, allowing you to include any information, notes, etc. without jeopardizing your bibliography. Because the database is text-file based, it is simple to backup and share, as opposed to other types of libraries, which can be SQL-based and cause the entire file to corrupt quickly.

### Why not use BibTeX instead?

It is compatible with a number of excellent systems, including the previously mentioned LaTeX and Markdown, but it is underutilized with Microsoft Word, Libre Office, and Google Docs. There are some workarounds, converters, and tools available, such as [Bibtex4Word](http://www.ee.ic.ac.uk/hp/staff/dmb/perl/index.html), which is only available for Windows; however, if you frequently use these writing tools, you may want to consider [Zotero](https://www.zotero.org/) instead.
While the BibTeX software is extremely robust, it is not (really) maintained, so a few types and fields for your needs may be missing, forcing you to workaround or manually create references, such as citing websites. Natbib can assist with in-text citation cusomazation, but BibTeX customization is limited.
While the human-readable format is simple, missing paranthesis, information, or bad characters can cause incorrect bibliography output or even break your LaTeX / Pandoc; thus, we strongly recommend using a BibTeX-tool, such as [CiteDrive](https://www.citedrive.com/) or [jabRef](https://www.jabref.org/). CiteDrive prevents duplication, which brings us to our final issue: you can add anything to your text file at any time, which means there is no real error control until the information is compiled with your document. If the database contains duplicate keys, for example, they can easily conflict.

### Biber, BibLaTeX 

Please keep some of the alternatives in mind, especially Biber in conjunction with BibLaTeX. It is a complete reimplementation of BibTeX's bibliographic features; in addition to a large number of supported types and fields, it supports a wide range of customizations, including sorting bibliographies by types, keywords, authors, and other fields, as well as full Unicode and multi-language support and customizations with in-text citations without the need for additional packages, such as natbib. Although BibTeX is still highly regarded for its durability, it should be noted that bibLatex is far more powerful and well-maintained, as many significant BibTeX updates occurred decades ago. Although the tutorial is primarily geared toward BibTeX, much of it also applies to biblatex, making it an excellent place to start. The format remains the same; entries are saved in bib files with additional fields and types. Additional biblatex tutorials can be found on this page.

### Pandoc

In a markdown file, you can specify your bibliography '.bib-file'in the YAML section for use with citations and in conjunction with Pandoc, which formats your document using Citation Style Language as a formatter and CiteProc as a processesor as a backend. More information is available on their website, or in our guides. 


## Quick start guide

As mentioned above: We are aware that BibTeX is becoming increasingly popular with Markdown-based systems such as Pandoc, Juypter, Obsidian, Quarto, and R Markdown, and we will devote guides to those in the near future. 

The following assumes LaTeX. Also, see the section above for more information on BibLaTeX, a complete reimplementation with many features that BibTeX lacks. It is frequently regarded as a better starting point for newcomers in the community. 

### Preperations

#### Install a LaTeX distribution

To use BibTeX, you must have a LaTeX distribution installed on your computer. Free and open-source LaTeX distributions include TeX Live and MikTeX. Simply choose an option and follow the installation instructions. You can skip this section if you're using something out of the box, such as Overleaf, where all packages, styles, and so on are already installed.

#### Document strucutre

For this tutorial, your folder structure (for example, on your desktop) may look something like this, containing the files we'll go over in the next three steps:

```bash
desktop 
├── thesis # root directory of your LaTeX project
│   └── document.tex
│   └── bibliography.bib
│   └── style.bst
├── ...
```

### Step 1: Create a .bib-file and create some entries.

To begin, we create a `.bib-file`, such as `bibliography.bib,` which is then filled with **BibTeX entries** and serves as your BibTeX database. You'll need a text editor like Notepad or Sublime Text to create a database, or you can use a reference manager like CiteDrive (Online) or JabRef (Desktop), which are both BibTeX-based research tools and as we have introduced above. A **BibTeX entry** is written in the format shown below and contains the information required for citation and bibliography inclusion for each literature source (book, essay, etc.).
The entry for Ernest Hemingway's book "The Old Man and the Sea" would look like this:

```latex title="bibliography.bib"
@book{Hemingway1952,
  title={The Old Man and the Sea},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

When breaking down the "anatomy" of this entry, you only need to look at the three components listed below to understand how each BibTeX entry is defined:

* **Entry-type**: With `@book` we define the type of reference, i.e. (and this example refers to itself) as a book. There are also `@article` for academic articles and others possible. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature.
* **Entry fields**: in this example, these are `title`, `author`, `year`, and `publisher`. (Cf. [fields](./fields))
* **citation-key**: This example is `Hemingway1952` and is used to indicate in-text citation in LaTeX, i.e., to refer to the source. Using the same example, we do this with `\cite{Hemingway1952}`. The citation key can be any string of characters - often as a combination of author, year, and a word from the title.


#### Entry Types
Next to `@book` from our example above, BibTeX supports a wide range of reference types, including journal articles, theses, conference papers, and much more. Here's a list of some of the most commonly used reference types in BibTeX:

* `@article`: used for articles in journals or magazines
* `@book`: used for complete books
* `@inbook`: used for chapters in a book
* `@incollection`: used for articles in a collection
* `@inproceedings`: used for conference or workshop papers
* `@phdthesis`: used for PhD theses
* `@mastersthesis`: used for Master's theses
* `@techreport`: used for technical reports
* `@manual`: used for software manuals or guides




#### Entry fields

For each reference type, you'll need to provide a set of fields that describe the reference. The ones you'll need are determined by the type of reference and citation style you're using. For example, a @article reference will typically include fields for the author, title, journal, year, volume, and pages.

* `author`: the author of the reference
* `title`: the title of the reference
* `journal`: the name of the journal or magazine
* `year`: the year the reference was published
* `volume`: the volume number of the journal or book
* `pages`: the page numbers of the reference
* `booktitle`: the title of the book in which the reference was published (for @inbook and @incollection references)
* `editor`: the editor of the book in which the reference was published (for @book references)
* `series`: the series in which the book was published (for @book references)
* `chapter`: the chapter number of the reference (for @inbook references)
* `address`: the address of the publisher
* `edition`: the edition of the book
* `publisher`: the name of the publisher
* `school`: the name of the school at which the thesis was written (for @phdthesis and @mastersthesis references)
* `institution`: the name of the institution that published the report (for @techreport references)
* `howpublished`: any special instructions for publishing the reference
* `note`: any additional notes about the reference

It is important to note that not all citation styles support all reference types and fields, but you should enter as much information into your BibTeX database as accurately and completely as possible. This ensures that your references are formatted correctly and that the information is correct. Fields that are not supported are simply ignored, so the more, the better. You should double-check any journal requirements. 

### Step 2: Choose your style

After creating our bibliographic database, our `.bib-file`, it is time to select a citation style. Overleaf includes some of the most important ones, but you can also look for them on ctan. These are saved as specified in our document structure and have the file extension '.bst'. We define the style (the `.bst-file`), as stated directly in the next step, in our document with the following command:


```latex title="document.tex"
\bibliographystyle{style-name}
```

where `style-name` is the name of the bibliography style you want to use. For example, if you want to use the `plain` bibliography style, you would include the following command in your LaTeX document:

```latex title="document.tex"
\bibliographystyle{plain}
```

Note that the `.bst` extension is omitted. There are many different bibliography styles available, each with its own set of rules for formatting references. Some of the most commonly used bibliography styles include:

-   `plain`: a simple, plain-text bibliography style
-   `alpha`: an alphabetic bibliography style
-   `unsrt`: an unsorted bibliography style
-   `abbrv`: an abbreviated bibliography style
-   `ieee`: a bibliography style used by the IEEE
-   `apalike`: a bibliography style similar to the Harvard referencing style
-   `apa`: a bibliography style used in the American Psychological Association (APA) style
-   `acm`: a bibliography style used by the Association for Computing Machinery (ACM)

To choose the best bibliography style for your needs, consider the following factors:

-   The citation style required by your publisher or institution
-   Your personal preference for the appearance of your bibliography
-   The type of reference you're using (not all bibliography styles support all reference types)
-   If you're writing a home assignment or a final project, you may want to ask your instructor.

### Step 3: Create a LaTeX document and connect

Now that we have a database and a style, we can begin defining these in our document and inserting our reference into it. You can copy and paste the following example, which provides a basic framework for formatting the citation.

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
\bibliography{bibliography}

\end{document}
```
After compiling the LaTeX document, we will notice that the command `\cite{Hemingway1952}` is replaced by the reference given in the BibTeX file with this ID in the example `[1]`.


![BibTeX - LaTeX - Overleaf](@site/static/img/tutorial/LaTeX_Overleaf_BibTeX-Example.png)

As we previously discussed, the.bib file, which we have named `bibliography.bib,` is defined in `\bibliography{bibliography}` and the citation/bibliography style `\bibliographystyle{unsrt},` where unsrt refers to the `.bst file,` in this case to `unsrt.bst,` which contains all the macros to format your references in style. You can substitute other styles, such as `apalike.bst,` from our list above.

## Tools, Editors and Reference managers

Manually formatting BibTeX files can be time-consuming, which is why it is generally recommended to use a reference manager. Here are a few that are ideal for this:

* [CiteDrive](https://www.citedrive.com/) is a bibtex-driven, collaborative and web-based tool to manage your references and teams in projects. It offers a one-click export to Overleaf ([*Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf*](https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf)) as well as R Markdown ([*Cf. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio*](https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619)), keeping citations in sync.
* [Zotero](https://www.zotero.org/) is a free, open-source bibliographic management software that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with [Better BibTeX For Zotero](https://retorque.re/zotero-better-BibTeX/) by retorque.
* The free, open source software [JabRef](https://www.jabref.org/) is a BibTeX-supported reference manager that runs on Windows, Mac and Linux. It is based on Java and is maintained by JabRef e.V.

## Databases

Coming soon ...

## Materials

Coming soon ...

