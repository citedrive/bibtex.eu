---
slug: address
title: "BibTeX field type: address"
sidebar_label: address
---

# BibTeX field type: address

:::note
Tato stránka je v současné době k dispozici pouze v angličtině, ale velmi bychom potřebovali vaši pomoc s jejím překladem do vašeho jazyka! Pokud máte zájem, podívejte se na naše úložiště GitHub, kde najdete další informace o tom, jak přispět.
:::


The address-field contains the publisher's (or any other institution) address.
In many cases, the full address is not entered or is omitted for any significant and known publishers (cf. Van Lauen).

The author can add the American publication's address, the city's name, followed by the state (USPS abbreviation) in brackets.

> For example, "Columbus, Ohio" is indicated as "Columbus, OH."

In Europe, the state is not abbreviated but given in full.

> For example, "Dusseldorf, Germany."



## Example

### phdthesis

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

### PROCEEDINGS / INPROCEEDINGS

Although controversially argued the author may add the address where the conference took place. In contrast, the publisher/organizer's address, if necessary, will be added to the "publisher" / organizer field in the reference above types.


```tex
@PROCEEDINGS{ (...),

  ...

  address = {The address of the proceedings},

  ...
}
```
