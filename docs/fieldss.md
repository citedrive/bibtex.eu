---
sidebar_position: 4
---
# Fields

## address

The address-field contains the publisher's (or any other institution) address.
In many cases, the full address is not entered or is omitted for any significant and known publishers (cf. Van Lauen).

The author can add the American publication's address, the city's name, followed by the state (USPS abbreviation) in brackets.

> For example, "Columbus, Ohio" is indicated as "Columbus, OH."

In Europe, the state is not abbreviated but given in full.

> For example, "Dusseldorf, Germany."



**Example**

``phdthesis``

The author could add the university's address where the beneficiary PhD-Candidate has written his doctoral thesis, which the author wants to cite.

```tex
@phdthesis{Peterson2003very,
  author  = {Arnold Peterson},
  title   = {My very own PhD-Thesis by Arnold Peterson},
  school  = {The university / school name},
  year    = 2004,
  address = {The address of the University / school},
  month   = 1,
  ...
}
```

``PROCEEDINGS`` / ``INPROCEEDINGS``

Although controversially argued the author may add the address where the conference took place. In contrast, the publisher/organizer's address, if necessary, will be added to the "publisher" / organizer field in the reference above types.


```tex
@PROCEEDINGS{ (...),

  ...

  address = {The address of the proceedings},

  ...
}
```

## annote

BibTeX Field type: ``annote`` for 'Annotated bibliography':

In the ``annote`` field type, the user can store an annotation - a short, descriptive, and also an evaluative summary of the content of the reference the user wants to cite, typically displayed in the bibliography.

``annote`` is then of interest to the reader to determine the sources' quality, relevance, and accuracy in question.

**Example**  

```tex
@article{Mueller2014The,

  ...

  annote={The authors offer a detailed overview of the...  }

  ...

}
```

**Reference types**

All ``Entry types`` can process ``annote``. This attribute is considered atypical and is deemed to be optional in all cases.


## author

In the ``author``-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name.

**Notation: ``{Firstname Lastname}``**

A natural indication such as ``{Firstname Lastname}`` is possible, but not vice versa, "Lastname Firstname."

**Example, ``{Firstname Lastname}``**

```tex
@article{ (...),

  ...

  author={Isaac Newton}

  ...

}
```


**Notation: ``{Lastname, Firstname}``**
However, we recommend the following way ``{Lastname, Firstname}`` i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name.

**Example, ``{Lastname, Firstname}``**

```tex
@article{ (...),

  ...

  author={Newton, Isaac}

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

  author={King, Jr , Luther}

  ...

}
```

**How to add multiple Authors in BibTeX?**

You specify the individual authors in the manner described above. The separator, AND, divides multiple authors. So in this way:
``{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}``


**Example, "How to add multiple Authors?""**

```tex
@article{ (...),

  ...

  author={Fisher, James AND Clark, John}

  ...

}
```


**How to add a cooperation in BibTeX?**

## booktitle

To cite an ``incollection``, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an ``inproceedings``, the ``booktitle``-field is used to distinguish. At the same time, ``title`` contains the title of the ``book``, or ``incproceedings``.

## email

Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.

To specify email addresses, the following variants are recommended:

**As a note to display at the end of the reference:**


```tex
@book{ ... ,
 author = {Muller, John},

 ...

 note = "{\tt john.muller@example.com}"
}
```

**To display behind the family name:**

```tex

@book{ ... ,
 author = {Muller {\tt john.muller@example.com}, John },

 ...

}
```

## chapter

A chapter, section, or a range of pages of a book is stored numerically in ``chapter``.
This BibTeX-field is used for ``inbook`` and ``incollection``. The former is mandatory.
``chapter`` is not supported in the entry-type ``book`` because for the latter, the whole book is intended to be cited.

## doi

``doi`` is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in ``article``, but more rarely also in ``chapter``, ``book``, or ``inproceedings`` / ``conference``. This field is optional in all cases.

## edition

## howpublished

## institution

## journal

The name of the journal in which the paper was published

## key

## month

The month of publication, or creation if unpublished.

## note

## number

## organization

## pages

## publisher

## school

## series

## title

The title of the publication / work

## type

## volume

## year

The year of publication, or creation if unpublished.

**Example**

```tex

@book{ ... ,
 year = {2007},

 ...

}
```
