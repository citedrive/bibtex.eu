---
slug: editor
title: editor
author: CiteDrive
author_title: Seamless BibTeX reference management for Overleaf and other modern LaTeX editors.
author_url: https://citedrive.com/en/
author_image_url: https://avatars.githubusercontent.com/u/65911387?s=200&v=4
tags: [bibtex, biblatex, editor]
date: 2022-01-18
---

# editor

In the ``editor``-field, you can specify all editors to the work you want to cite. BibTeX has several ways of specifying editor names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the editor's name.

**Notation: ``{Firstname Lastname}``**

A natural indication such as ``{Firstname Lastname}`` is possible, but not vice versa, "Lastname Firstname."

**Example, ``{Firstname Lastname}``**

```tex
@article{ (...),

  ...

  editor={Isaac Newton}

  ...

}
```


**Notation: ``{Lastname, Firstname}``**
However, we recommend the following way ``{Lastname, Firstname}`` i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name.

**Example, ``{Lastname, Firstname}``**

```tex
@article{ (...),

  ...

  editor={Newton, Isaac}

  ...

}
```


**Notation: ``{Lastname, Suffix, Firstname}``**

If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:

``{Lastname, Suffix, Firstname}``

**Example, ``{Lastname, Suffix, Firstname}``**

```tex
@article{ (...),

  ...

  editor={King, Jr , Luther}

  ...

}
```

**How to add multiple editors in BibTeX?**

You specify the individual editors in the manner described above. The separator, AND, divides multiple editors. So in this way:
``{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}``


**Example, "How to add multiple editors?""**

```tex
@article{ (...),

  ...

  editor={Fisher, James AND Clark, John}

  ...

}
```
