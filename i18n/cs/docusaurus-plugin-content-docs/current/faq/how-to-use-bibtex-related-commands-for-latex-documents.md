# How to Use BibTeX-Related Commands for LaTeX Documents

:::note
Tato stránka je v současné době k dispozici pouze v angličtině, ale velmi bychom potřebovali vaši pomoc s jejím překladem do vašeho jazyka! Pokud máte zájem, podívejte se na naše úložiště GitHub, kde najdete další informace o tom, jak přispět.
:::


In order to use BibTeX in LaTeX, you need to know the following commands: `\bibliographystyle{<style name>}`, `\bibliography{bib-file}`, and `\cite{KEY}`. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.


## bibliographystyle
The citation style is defined by `bibliographystyle{<style name>}`. BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a `.bst` extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers `plain`, `unsrt`, `alpha`, and `abbrv` as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example.

## bibliography

The bibliography is created in the document by the command `\bibliography{bibfile}` if the file name of the BibTeX file with literature records is `bibfile.bib`.

## cite

In a LaTeX document, the command `\cite{KEY}` is replaced by the citation given in the BibTeX file with this ID, which, for example, is `(Author, Year)` in the final PDF.
