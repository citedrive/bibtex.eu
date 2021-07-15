---
sidebar_position: 1
---

# Introduction to BibTeX

## Format

Each literature source (book, paper, etc.) can be stored with the information attributes needed for citation and for inclusion in the bibliography in the following way:

```tex
@Entry-type{citeID,
  title={the title of the work}
  author={lastname_1, firstnam_1 AND lastname_2, firstname_2 AND ... AND lastname_n, firstname_n}
  field_type_1={ ... }
  field_type_2={ ... }
  ...
  field_type_n={ ... }
}
```

Where 'entry-type' can act for literature types of the source to be cited, such as 'book', 'article', 'manual'. All valid entry types and related notes can be read in the corresponding chapter 'Entry-types'.

An example for book:
```tex
@book{article1,
  ...
}
```
`citeID` stands for unique identification of a literature source to which one refers when citing. Within a project and in all .bib files the ID must be unique.
The 'citeID' can be any string, such as *article1*, as in the example above. In many cases this identification is composed of the surname of the first author, the year of publication and any word from the title - the latter to avoid collisions.

> Citedrive sets unique and fully automatic uuid to edit literature sources also afterwards.

Note: Sometimes and especially in older documentation, such as from ... (edit here)


```tex
@book(article1,
  ...
)
```

## Literature database 'bib file

The bibliographic database is a simple text file ('bib-file') in which all bibliographic sources are collected one after the other in the manner described above which the user wishes to use to cite any work. A certain order is not necessary.

### Example

```tex
@article{sedelis2000mptp,
  title={MPTP susceptibility in the mouse: behavioral, neurochemical, and histological analysis of gender and strain differences},
  author={Sedelis, Marco and Hofele, Katja and Auburger, Georg W and Morgan, Sarah and Huston, Joseph P and Schwarting, Rainer KW},
  journal={Behavior genetics},
  volume={30},
  number={3},
  pages={171--182},
  year={2000},
  publisher={Springer}
}

@article{steinbeck2003chemistry,
  title={{The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},
  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},
  journal={Journal of chemical information and computer sciences},
  volume={43},
  number={2},
  pages={493--500},
  year={2003},
  publisher={ACS Publications}
}

@article{einstein1935can,
  title={Can quantum-mechanical description of physical reality be considered complete?},
  author={Einstein, Albert and Podolsky, Boris and Rosen, Nathan},
  journal={Physical review},
  volume={47},
  number={10},
  pages={777},
  year={1935},
  publisher={APS}
}

@Book{abramowitz+stegun,
 author = "Milton {Abramowitz} and Irene A. {Stegun}"
 title = "Handbook of Mathematical Functions with
              Formulas, Graphs, and Mathematical Tables",
 publisher = "Dover",
 year = 1964,
 address = "New York City",
 edition = "ninth Dover printing, tenth GPO printing
}

```
