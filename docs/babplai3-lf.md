---
title: babplai3-lf (babelbib)
---

# How to use babplai3-lf (babelbib) to cite in Overleaf? 
`babplai3-lf.bst` is already integrated with Overleaf and does not need to be explicitly uploaded. As soon as you define babplai3-lf in your work's document structure (with the command `\bibliographystyle{babplai3-lf}` - The file extension `.bst` can be omitted.), this style is recognized immediately, and you start can to work with it.

## Here is an example of how babplai3-lf (babelbib) is declared in a document:
The following example includes the style definition and the connection to the literature database `samples.bib`.
```tex
   \documentclass[a4paper,10pt]{article}
   \begin{document}
   \section{First chapter}
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.
   \medskip
   %bibliographystyle 'babplai3-lf.bst'
   \bibliographystyle{babplai3-lf}
   %bibliography file 'samples.bib'.
   \bibliography{sample}
   \end{document}
```

## With CiteDrive you can easily create your bibliography and connect it to Overleaf. 
Creating a bibliography manually in BibTeX can be a time consuming and erroneous process - especially when several people are working on the same .bib file. CiteDrive is a collaborative platform-based bibliography and citation manager with native BibTeX support. Export your data straight to Overleaf. Modifications to the data are automatically in-sync, regardless of by whom or when. Find out more