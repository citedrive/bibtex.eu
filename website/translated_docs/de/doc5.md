---
id: address
title: BibTeX Field types: Address
sidebar_label: Address
---
Das Adressfeld enthält die Adresse des Verlegers (oder einer anderen Institution).
In vielen Fällen wird die vollständige Adresse bei allen bedeutenden und bekannten Verlagen nicht eingetragen oder weggelassen (vgl. Van Lauen).

Der Autor kann die Adresse der amerikanischen Publikation, den Namen der Stadt, gefolgt vom Bundesstaat (USPS-Abkürzung) in Klammern hinzufügen.

> Zum Beispiel wird "Columbus, Ohio" als "Columbus, OH" angegeben.

In Europa wird der Bundesstaat nicht abgekürzt, sondern vollständig angegeben.

> Zum Beispiel "Düsseldorf, Deutschland".



## Beispiele

### ``phdthesis``

Der Autor könnte die Adresse der Universität hinzufügen, an der der begünstigte Doktorand seine Doktorarbeit geschrieben hat, die der Autor zitieren möchte.


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
### ``PROCEEDINGS`` / ``INPROCEEDINGS``

Obwohl kontrovers diskutiert, kann der Autor die Adresse angeben, wo die Konferenz stattfand. Im Gegensatz dazu wird die Adresse des Herausgebers/Organisators, falls erforderlich, dem Feld "publisher" / organizer in den oben genannten Verweisarten hinzugefügt.
