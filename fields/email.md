---
slug: email
title: email
author: CiteDrive
author_title: Seamless BibTeX reference management for Overleaf and other modern LaTeX editors.
author_url: https://citedrive.com/en/
author_image_url: https://avatars.githubusercontent.com/u/65911387?s=200&v=4
tags: [bibtex, biblatex, address]
date: 2022-01-17
---

# email

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
