---
title: ussagus (stellenbosch)
---

# How to use ussagus (stellenbosch) to cite in Overleaf? 
`ussagus.bst` is already integrated with Overleaf and does not need to be explicitly uploaded. As soon as you define ussagus in your work's document structure (with the command `\bibliographystyle{ussagus}` - The file extension `.bst` can be omitted.), this style is recognized immediately, and you start can to work with it.

## Here is an example of how ussagus (stellenbosch) is declared in a document:
The following example includes the style definition and the connection to the literature database `samples.bib`.
```tex
   \documentclass[a4paper,10pt]{article}
   \begin{document}
   \section{First chapter}
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.
   \medskip
   %bibliographystyle 'ussagus.bst'
   \bibliographystyle{ussagus}
   %bibliography file 'samples.bib'.
   \bibliography{sample}
   \end{document}
```

## With CiteDrive you can easily create your bibliography and connect it to Overleaf. 
Creating a bibliography manually in BibTeX can be a time consuming and erroneous process - especially when several people are working on the same .bib file. CiteDrive is a collaborative platform-based bibliography and citation manager with native BibTeX support. Export your data straight to Overleaf. Modifications to the data are automatically in-sync, regardless of by whom or when. Find out more