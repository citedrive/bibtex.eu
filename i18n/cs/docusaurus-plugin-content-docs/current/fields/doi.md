---
slug: doi
title: "BibTeX field type: doi"
sidebar_label: doi
---

# BibTeX field type: doi

:::note
Tato stránka je v současné době k dispozici pouze v angličtině, ale velmi bychom potřebovali vaši pomoc s jejím překladem do vašeho jazyka! Pokud máte zájem, podívejte se na naše úložiště GitHub, kde najdete další informace o tom, jak přispět.
:::


``doi`` is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in ``article``, but more rarely also in ``chapter``, ``book``, or ``inproceedings`` / ``conference``. This field is optional in all cases.

## Format

```tex
@article{Mueller2014The,

  ...

  doi={ https://doi.org/xxxxx }

  ...

}
```

## Example

```tex
@article{steinbeck2003chemistry,
  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},
  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},
  journal={Journal of chemical information and computer sciences},
  volume={43},
  number={2},
  pages={493--500},
  year={2003},
  publisher={ACS Publications}
  doi={https://doi.org/10.1021/ci025584y}
}
```
