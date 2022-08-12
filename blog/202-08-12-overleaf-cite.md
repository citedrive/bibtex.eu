---
slug: citing-and-using-references-on-overleaf-a-guide-for-researchers
title: "Citing and Using References on Overleaf: A Guide for Researchers"
authors:
  name: CiteDrive
  title: https://www.citedrive.com/
  url: https://www.citedrive.com/
  image_url: https://avatars.githubusercontent.com/u/65911387?s=200&v=4
tags: [citedrive, overleaf, latex, bibtex, biblatex,natbib]
---

When writing a research paper, it's important to use references to support your claims. Citing your sources correctly is key to creating a solid argument and avoiding plagiarism. This guide will show you how to cite references on Overleaf using CiteDrive. We'll also give you tips for finding reliable sources online. Let's get started!



## Step 1: Connecting CiteDrive with Overleaf

If you're not already signed in to Overleaf, you'll need to do so now. Then, go to CiteDrive, create an Overleaf project, and add references to your new project. Your project could look like this:

(fig)

After that, click on "bib" on the top left of your project. This will open a new tab to the dynamic BibTeX file that you can use for your Overleaf, which will auto-update whenever you or your teammates add, update, or deletes references from your project.

(fig)

Finally, go to Overleaf, create a new file, select "From External URL", and paste the URL from the dynamic BibTeX to "URL to fetch the file from" name it here "references.bib".
Your CiteDrive project is now connected to Overleaf! Remember that you need to click on refresh when you make changes in our CiteDrive project so that Overleaf gets the latest state.

## Step 2: Create a TeX document in Overleaf


Now let's create a new tex-file for Overleaf, which we could call "paper.tex" we can define the bibliography, the BibTeX file from CiteDrive with COMMAND. But what bibliography tools should we use? For Bibliography management in LaTeX/Overleaf, there are many options: most likely, natbib, bibtex, and biblatex. For the management of bibliographies in LaTeX, BibTeX is the mainstay that forms the basis for the format. With natbib, BibTeX is provided with an extension that offers more design freedom for in-text citations, and biblatex is a complete revision of BibTeX that offers more reference types, sorting, and filtering options for bibliographies and localization options. While BibteX is the best-known program, BibLaTex is not only just as robust but also the most recommended program for newcomers. The citation and bibliographical data for references and listings are kept in the so-called .bib-file, just as you see in the BibTeX file from CiteDrive. It's always in the same format:

 ```latex
 @article{smith201X,
 	title        = {An interesting article},
 	author       = {John Smith},
 	year         = {201X},
 	journal      = {Journal of Interesting Articles}
 }
 ```

 Here `@article` is the source type, `title`, `author`, `year` and `journal`, the attributes used to display in your references lists and citations and lastly, `smith201X`, a unique identifier you can use to reference in your document, mainly with cite(key). CiteDrive is not picky about the format; any field and entry type making it work for the bibliographic package of your choice is acceptable. Because CiteDrive's fundamental goal is to separate bibliographic data from the document and citation styles, all alternatives are supported by CiteDrive.


 As a result, we provide three templates below to get you started.

 ### Getting started with BibTeX:

 If you want to start with BibTeX, use the following template or open directly to Overleaf. For more information on BibTeX, see the documentation.

 ```latex
...
 ```


 ### Getting started with natbib:

 ```latex
...
 ```





 For more on natbib, please click here.

 ### Getting started with BibLaTeX:​

 ```latex
...
 ```



 For more on BibLaTeX, please click here.



 ## Step 3: In-Text citations



 If you have the browser extension installed, you can create citations by selecting the text and clicking on the CiteDrive icon in your toolbar.



 You can also cite references manually using the cite command. For example, if you wanted to cite Smith (201X), you would use `\cite{smith201X}`, which would give you [Smith, 201X]. Or use the reference search in overleaf.



 Bibliography styles are preinstalled on Overleaf and depending which package you used references on the following pages:



 That's it! You should now have everything you need to start using references in Overleaf. Please let us know by e-mail at hello@citedrive.com  if you have any questions or feedback.



 Happy TeXing!
