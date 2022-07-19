---
title: Reference management with BibTeX, when using R Markdown -- A short guide
description: "This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format."
sidebar_label: Using R Markdown (Quick start)
sidebar_position: 1
---

# Reference management in R Markdown with BibTeX: A short guide

R Markdown is an great tool for creating reproducible reports, papers, presentations, and more. One of the things that makes R-Markdown so powerful is its ability to integrate with other tools and software. One such tool is BibTeX, which is a reference management system for LaTeX documents. BibTeX allows you to cite sources easily in your document and create a bibliography.



## Step 1: Create a .bib-file and create some entries.

As with the previous section, we start by generating a .bib-file, such as `bibliography.bib`, which is subsequently filled with BibTeX entries.
BibTeX entries are constructed in the following format and contain enough information for citation and inclusion in the bibliography for each literature source (book, essay, etc.).

We use the example from the previous section and quote the book "The Old Man and the Sea" by Ernest Hemingway. The entry then looks like this:

```latex
@book{Hemingway1952,
  title={The Old Man and the Sea},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

Again, we break down the "anatomy" of this entry, looking at three components to understand how each BibTeX entry is defined:

* **Entry-type**: with `@book` we define the type according to the schema `@type` of the reference. Possible are `@article` for scientific articles and others. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature.
* **Entry fields**: in this case of our `@book` example, these are `title`, `author`, `year` and `publisher`. (Cf. [fields](./fields))
* **citation-key**: in our example, it is `Hemingway1952` and is used to indicate an in-text citation in LaTeX, i.e., to refer to the source. in R Markdown we do this with `[@Hemingway1952]`. The citation key can be any string - often a combination of author, year, and a word from the title.



## Step 2: Create a R Markdown document and connect

Integrating BibTeX with R Markdown is very simple. All you need to do is add one line of code to your r markdown file, as follows:

```md
----
```


## Reference managers

Formatting BibTeX files by hand can be tedious, which is why it is generally recommended to use a reference manager. Here are a few that are well suited for this:

* [CiteDrive](https://www.citedrive.com/) -
* [JabRef](https://www.jabref.org/) -
* [Zotero](https://www.zotero.org/) -
