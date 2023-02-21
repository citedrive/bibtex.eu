---
title: "Guide to BibTeX Type `Proceedings`"
sidebar_label: proceedings
---

# Guide to BibTeX Type "Proceedings"

BibTeX is a reference management tool that is commonly used in LaTeX documents. The "proceedings" BibTeX type is used for conference proceedings, such as a collection of papers presented at a conference. In this guide, we will explain the required and optional fields for the "proceedings" BibTeX type.

## Required Fields

The "proceedings" BibTeX type requires the following fields:

-   `title`: The title of the conference proceedings.
-   `year`: The year the conference proceedings were published.

## Optional Fields

In addition to the required fields, the "proceedings" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:

-   `editor`: The name(s) of the editor(s) of the conference proceedings.
-   `volume`: The volume number of the conference proceedings, if applicable.
-   `number`: The issue number of the conference proceedings, if applicable.
-   `series`: The name of the series that the conference proceedings belong to, if applicable.
-   `address`: The location of the conference.
-   `month`: The month the conference was held.
-   `publisher`: The name of the publisher of the conference proceedings.

## Example

Here is an example of how to use the "proceedings" BibTeX type:

```bibtex
@proceedings{myproceedings,
	title        = {Proceedings of the International Conference on Example},
	year         = 2022,
	month        = {June},
	publisher    = {ACM Press},
	address      = {New York, NY},
	series       = {Example Conference Proceedings},
	volume       = 1,
	number       = 2,
	editor       = {Jane Doe and John Smith}
}

```

In this example, the BibTeX entry defines a set of conference proceedings titled "Proceedings of the International Conference on Example". The proceedings were published in 2022 and edited by Jane Doe and John Smith. The conference was held in June in New York, NY, and the proceedings were published as volume 1, issue 2 of the "Example Conference Proceedings" series by ACM Press.