# How can I use BibTeX to cite a website in LaTeX?


There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.

## Using BibTeX

In BibTeX we use `@misc` as a workaround and make use of the `note` field to specify the URl and usually an access date. In this example, `url` (*or `hyperref`*) is required using `usepackage{url}`.

```latex
@misc{CiteDrive2022,
	title        = {CiteDrive brings reference management to Overleaf},
	author       = {CiteDrive, Inc},
	year         = 2022,
	note         = {\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}
}
```


Alternatively, the `howpublished` field can be used:

```latex
@misc{CiteDrive2022,
	title        = {CiteDrive brings reference management to Overleaf},
	author       = {CiteDrive, Inc},
	year         = 2022,
	note         = {Accessed: (Use the date of access)},
	howpublished = {\url{https://www.citedrive.com/overleaf}}
}
```


## Using BibLaTeX

If you use BibLaTeX, which we recommend, the `@online` entry type is inherently supported and works without a further tweak. You can enter the URL and access date in the fields `url` and `urldate`, respectively.

```latex
@online{CiteDrive2022,
	title        = {CiteDrive brings reference management to Overleaf},
	author       = {CiteDrive, Inc},
	year         = 2022,
	url          = {https://www.citedrive.com/overleaf},
	urldate      = {Use the date of access}
}
```

## Using CiteDrive

CiteDrive is a collaborative online reference management tool based on BibTeX that automatically synchronizes with publication systems such as Overleaf and RStudio. They offer a browser extension that allows you to save academic articles directly from the browser and in the correct BibTeX format so that you can, for example, cite them directly in the Overleaf project without having to switch between browser windows/tabs. The extension can also save web pages in BibLaTeX format, automatically capturing the title, URL, and access date.


## Using `natbib`

People frequently inquire about how to cite web pages using [natbib](/natbib). We emphasize that it works in the same way as BibTeX. Natbib is a tool for styling in-text citations, and it depends on BibTeX as a backend.
