---
slug: "using-citations-in-overleaf-with-bibtex"
title: "Using Citations in Overleaf with BibTeX"
authors:
  name: BibTeX FAQ
  title: https://www.CiteDrive.com/
  mail: hello@citedrive.com
  url: https://www.CiteDrive.com/
  image_url: https://avatars.githubusercontent.com/u/65911387?s=200&v=4
tags: ["LaTeX", "Overleaf", "CiteDrive", "typesetting", "technical documents", "scientific documents", "research papers", "theses", "markup language", "formatting", "text editor", "collaboration", "citation management"]
---

# Using Citations in Overleaf with BibTeX

Citations are an important aspect of academic writing, as they allow authors to give credit to the sources they have used in their work. In this post, we will discuss how to use citations in Overleaf, a popular online LaTeX editor, with BibTeX, a tool for managing bibliographic references.

## Adding a bibliography to your Overleaf project

The first step in using citations in Overleaf is to add a bibliography to your project. This can be done by creating a new file in your project and naming it `references.bib`. This file will contain all of the references that you wish to cite in your document. An alternative option is to use [CiteDrive](https://www.citedrive.com/) which connects to Overleaf and allows you to collaborate on your bibliography and citations. CiteDrive supports BibTeX natively and also Biblatex.

To add a reference to this file, you can use the following format:

`@article{key,   author = {Author, A.},   title = {Title},   journal = {Journal},   year = {Year}, }`

The `key` is a unique identifier for the reference and will be used to cite it in your document. The `author`, `title`, `journal`, and `year` fields are required for a basic reference, but there are many other fields that can be included as well.

## Citing references in your document

Once you have added your references to the `references.bib` file, you can cite them in your document using the `cite` command. For example, to cite the reference with the key `key`, you would use the following command:

`\cite{key}`

This will insert the citation into your document in the format specified by the bibliography style you have chosen.

## Formatting your bibliography

In order to format your bibliography, you need to specify a bibliography style. This can be done by including the following command in the preamble of your document:


`\bibliographystyle{style}`

Where `style` is the name of the bibliography style you wish to use. Some commonly used styles include `plain`, `unsrt`, and `apalike`.

Finally, you need to include the following command at the end of your document to generate the bibliography:


`\bibliography{references}`

Where `references` is the name of your bibliography file (`references.bib` in our example).

## Conclusion

In this post, we have discussed how to use citations in Overleaf with BibTeX. By following the steps outlined above, you can easily add references to your project, cite them in your document, and format your bibliography to meet the requirements of your academic institution or publisher. Additionally, the use of CiteDrive, which connects to Overleaf, allows for easy collaboration on your references and citations. CiteDrive natively supports both BibTeX and Biblatex making it a versatile option for managing your bibliographic references.
