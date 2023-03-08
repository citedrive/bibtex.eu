---
title: "Guide to Managing Citations, Bibliographies, and References in Overleaf -- BibTeX, BibLaTeX, Natbib"
description: "Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive."
sidebar_label: Using Overleaf (Quick start)
sidebar_position: 2
---

# Guide to Managing Citations, Bibliographies, and References in Overleaf

If you're writing a research paper or a thesis, it's essential to have a proper citation and reference management system in place. In this guide, we will cover how to manage citations, bibliographies, and references using BibTeX, Natbib, and BibLaTeX in Overleaf.

## CiteDrive

CiteDrive is a robust citation and reference management tool that works in tandem with Overleaf. 
It is compatible with all popular reference management systems, such as BibTeX, Natbib, and BibLaTeX. Read more:

[Overleaf.com | Blog -- Better bibliography management with Overleaf, CiteDrive, and BibTeX/BibLaTeX — about 3.0 and an updated guide](https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex)


## BibTeX

BibTeX is a popular reference management system used in LaTeX. It allows you to create a separate bibliography file with all your references and then cite them in your LaTeX document. Here are the steps to using BibTeX in Overleaf:

1.  Create a new file in your Overleaf project and name it "references.bib."
2.  Open the "references.bib" file and add your references in the following format:

```bibtex
`@article{AuthorYear,   
	author = {Author, First and Author, Second},   
	title = {Title of the Article},   
	journal = {Journal Name},   
	volume = {Volume Number},   
	number = {Issue Number},   
	pages = {Page Numbers},   
	year = {Year Published},   
	publisher = {Publisher Name} 
}
```

3.  In your LaTeX document, add the following commands where you want your citations to appear:


```latex
\bibliography{references} 
\bibliographystyle{plain}
```

The `bibliography` command tells LaTeX where to find your bibliography file, while the `bibliographystyle` command specifies the citation style you want to use.

4.  To cite a reference, use the `\cite{AuthorYear}` command in your LaTeX document. This command will generate a citation in the format specified by the `bibliographystyle` command.

## Natbib

Natbib is another popular citation management system used in LaTeX. It provides more flexibility in formatting citations and references than BibTeX. Here are the steps to using Natbib in Overleaf:

1.  Add the following commands to your LaTeX document's preamble:

```latex
\usepackage{natbib} 
\bibliographystyle{plainnat}
```

2.  In your LaTeX document, use the `\citep{AuthorYear}` command to create a parenthetical citation or the `\citet{AuthorYear}` command to create a citation in the text.
    
3.  To create a bibliography, add the following command to the end of your document:
    

```latex
\bibliography{references}
```

4.  In your "references.bib" file, add your references in the following format:

```bibtex
@article{AuthorYear,   
	author = {Author, First and Author, Second},   
	title = {Title of the Article},   
	journal = {Journal Name},   
	volume = {Volume Number},   
	number = {Issue Number},   
	pages = {Page Numbers},   
	year = {Year Published},   
	publisher = {Publisher Name} 
}
```

## BibLaTeX

BibLaTeX is a newer reference management system that provides even more flexibility than Natbib. It allows you to use different citation styles within the same document and provides more control over the formatting of references. Here are the steps to using BibLaTeX in Overleaf:

1.  Add the following commands to your LaTeX document's preamble:

```latex
\usepackage[style=authoryear,backend=bibtex]{biblatex} 
\bibliography{references}
```

The `style` option specifies the citation style you want to use, and the `backend` option specifies the reference management system you want to use (BibTeX in this case).

2.  In your LaTeX document, use the `\parencite{AuthorYear}` command to create a parenthetical citation or the `\textcite{Author