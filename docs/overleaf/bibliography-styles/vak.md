---
sidebar_position: 307
---

# How to use vak (vak) at Overleaf?
`vak.bst` has already been installed on the Overleaf servers and is ready for use. Thus, in order to use the file in question, simply define the style directly in your document: `\bibliographystyle{vak}` The file extension `.bst` can be omitted.

## Example document with vak (vak)
The following example includes the style definition and the connection to the literature database `samples.bib`.
```tex
   \documentclass[a4paper,10pt]{article}
   \begin{document}
   \section{First chapter}
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum justo massa, ut maximus mauris sodales et. Aenean vel elit a erat rhoncus pharetra.
   \medskip
   %bibliographystyle 'vak.bst'
   \bibliographystyle{vak}
   %bibliography file 'samples.bib'.
   \bibliography{sample}
   \end{document}
```

## Create your bibliography with CiteDrive and synchronize it with Overleaf
Creating a bibliography in BibTeX by hand can be time-consuming and error-prone - especially when several people are working on the .bib file. CiteDrive is a platform-based and collaborative bibliography and citation manager with native BibTeX support. Export your data directly to Overleaf. Changes to the data are automatically synchronized, no matter who makes them or when. Find out more