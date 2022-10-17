# How do I create a .BIB file to manage my BibTeX references?

:::note
Tato stránka je v současné době k dispozici pouze v angličtině, ale velmi bychom potřebovali vaši pomoc s jejím překladem do vašeho jazyka! Pokud máte zájem, podívejte se na naše úložiště GitHub, kde najdete další informace o tom, jak přispět.
:::


If you're looking for a way to manage your `BibTeX` references, you may be wondering how to create a `.BIB file`. In this article, we'll show you how to do it! We'll also provide some tips on how to use ".BIB" files effectively.

:::tip
[CiteDrive](https://citedrive.com/) is a web-based collaborative reference management tool built on BibTeX that auto-syncs with publishing systems such as [Overleaf](https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf) and [RStudio](https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619) and does the formatting around your bib file for you.
:::

## Creating a bib file by hand

Creating a `.BIB file` is actually quite simple. All you need to do is create a text file with the `.bib` extension. You can then add your BibTeX references to this file, one per line. For example:


```latex
@article{smith201X,
	title        = {An interesting article},
	author       = {John Smith},
	year         = {201X},
	journal      = {Journal of Interesting Articles}
}
```



Once you have your `.BIB file` created, you can then use it in your LaTeX documents by specifying the `\bibliography{filename}` command. For example:


```latex
\documentclass{article}
\usepackage{natbib}

\begin{document}

...

\bibliography{filename}

\end{document}
```

That's all there is to it! Creating a `.BIB file` is a simple way to manage your BibTeX references. Be sure to check out our other articles on BibTeX for more tips and tricks!
