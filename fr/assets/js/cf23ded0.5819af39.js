"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1375],{441:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/01/25/overleaf-grammarly","metadata":{"permalink":"/fr/blog/2023/01/25/overleaf-grammarly","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2023-01-25-overleaf-grammarly.md","source":"@site/blog/2023-01-25-overleaf-grammarly.md","title":"overleaf-grammarly","description":"","date":"2023-01-25T00:00:00.000Z","formattedDate":"25 janvier 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"How do you cite a video game in BibTeX?","permalink":"/fr/blog/how-do-you-cite-a-video-game-in-bibtex"}},"content":""},{"id":"how-do-you-cite-a-video-game-in-bibtex","metadata":{"permalink":"/fr/blog/how-do-you-cite-a-video-game-in-bibtex","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-12-18-game.md","source":"@site/blog/2022-12-18-game.md","title":"How do you cite a video game in BibTeX?","description":"Here is an example of how you could cite a game in BibTeX:","date":"2022-12-18T00:00:00.000Z","formattedDate":"18 d\xe9cembre 2022","tags":[{"label":"citedrive","permalink":"/fr/blog/tags/citedrive"},{"label":"bibtex","permalink":"/fr/blog/tags/bibtex"},{"label":"doi","permalink":"/fr/blog/tags/doi"},{"label":"game","permalink":"/fr/blog/tags/game"}],"readingTime":0.975,"hasTruncateMarker":false,"authors":[{"name":"BibTeX QA","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-do-you-cite-a-video-game-in-bibtex","title":"How do you cite a video game in BibTeX?","authors":{"name":"BibTeX QA","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","bibtex","doi","game"]},"prevItem":{"title":"overleaf-grammarly","permalink":"/fr/blog/2023/01/25/overleaf-grammarly"},"nextItem":{"title":"How to cite music in bibtex?","permalink":"/fr/blog/how-to-cite-music-in-bibtex"}},"content":"Here is an example of how you could cite a game in BibTeX:\\n\\n ```latex\\n@misc{game_title,\\n  title = {Game Title},\\n  publisher = {Publisher},\\n  year = {Year},\\n  url = {URL of game},\\n}\\n ```\\n \\nIn this example, the @misc entry type is used to indicate that the item being cited is a miscellaneous type of work, such as a game. The title field specifies the title of the game, the publisher field specifies the name of the publisher, the year field specifies the year in which the game was published, and the url field specifies a URL where the game can be accessed.\\n\\nYou can then use the \\\\cite{game_title} command to insert a citation to the game in your document. The specific format of the citation will depend on the citation style you are using.\\n\\nIt is important to note that the above example is just one way to cite a game in BibTeX, and there may be other approaches depending on the specific requirements of your project. If you are uncertain about how to properly cite a game in BibTeX, you may want to consult a style guide or seek guidance from your instructor or editor."},{"id":"how-to-cite-music-in-bibtex","metadata":{"permalink":"/fr/blog/how-to-cite-music-in-bibtex","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-12-18-music.md","source":"@site/blog/2022-12-18-music.md","title":"How to cite music in bibtex?","description":"To cite music in BibTeX, you can use the @misc entry type and include the following fields:","date":"2022-12-18T00:00:00.000Z","formattedDate":"18 d\xe9cembre 2022","tags":[{"label":"biblatex","permalink":"/fr/blog/tags/biblatex"},{"label":"bibtex","permalink":"/fr/blog/tags/bibtex"},{"label":"music","permalink":"/fr/blog/tags/music"}],"readingTime":0.795,"hasTruncateMarker":false,"authors":[{"name":"BibTeX QA","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-cite-music-in-bibtex","title":"How to cite music in bibtex?","authors":{"name":"BibTeX QA","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["biblatex","bibtex","music"]},"prevItem":{"title":"How do you cite a video game in BibTeX?","permalink":"/fr/blog/how-do-you-cite-a-video-game-in-bibtex"},"nextItem":{"title":"Overleaf and RStudio users, we have great news!","permalink":"/fr/blog/overleaf-and-rstudio-users-we-have-great-news"}},"content":"To cite music in BibTeX, you can use the `@misc` entry type and include the following fields:\\n\\n-   `author`: The composer or artist who created the music.\\n-   `title`: The title of the piece of music.\\n-   `howpublished`: The format in which the music was accessed (e.g. CD, vinyl, online streaming service).\\n-   `year`: The year the music was published or recorded.\\n\\nHere is an example of how you might cite a piece of music in BibTeX:\\n\\nCopy code\\n\\n`@misc{beethoven_symphony_2018,   author = {Beethoven, Ludwig van},   title = {Symphony No. 5 in C Minor},   howpublished = {CD},   year = {2018} }`\\n\\nIf you are citing a specific recording of a piece of music, you may want to use the `@music` entry type instead of `@misc`. This entry type includes additional fields such as `performer` and `publisher` that you can use to provide more specific information about the recording.\\n\\nI hope this helps! Let me know if you have any questions."},{"id":"overleaf-and-rstudio-users-we-have-great-news","metadata":{"permalink":"/fr/blog/overleaf-and-rstudio-users-we-have-great-news","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-12-10-citedrive-30.md","source":"@site/blog/2022-12-10-citedrive-30.md","title":"Overleaf and RStudio users, we have great news!","description":"CiteDrive 3.0 is here to make your life 10 times easier by keeping track of all your bibliographies, references, and citations in one place.","date":"2022-12-10T00:00:00.000Z","formattedDate":"10 d\xe9cembre 2022","tags":[{"label":"citedrive","permalink":"/fr/blog/tags/citedrive"},{"label":"bibtex","permalink":"/fr/blog/tags/bibtex"},{"label":"overleaf","permalink":"/fr/blog/tags/overleaf"},{"label":"rstudio","permalink":"/fr/blog/tags/rstudio"},{"label":"rmarkdown","permalink":"/fr/blog/tags/rmarkdown"},{"label":"quarto","permalink":"/fr/blog/tags/quarto"},{"label":"latex","permalink":"/fr/blog/tags/latex"}],"readingTime":1.18,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"overleaf-and-rstudio-users-we-have-great-news","title":"Overleaf and RStudio users, we have great news!","authors":{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","bibtex","overleaf","rstudio","rmarkdown","quarto","latex"]},"prevItem":{"title":"How to cite music in bibtex?","permalink":"/fr/blog/how-to-cite-music-in-bibtex"},"nextItem":{"title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","permalink":"/fr/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto"}},"content":"## CiteDrive 3.0 is here to make your life 10 times easier by keeping track of all your bibliographies, references, and citations in one place.\\n\\n  \\n\\nWe\'re happy to announce that CiteDrive 3.0 is now available! We\'ve made a number of improvements, such as streamlining the design, increasing focus on reference management with BibTeX compatibility, and upgrading performance. If you use Overleaf or RStudio, definitely give it a try!\\n\\n  \\n\\n**Read more:** [Better bibliography management with Overleaf, CiteDrive, and BibTeX/BibLaTeX \u2014 about 3.0 and an updated guide | Overleaf.com](https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex)\\n\\n  \\n\\n## Better Bib[La]TeX Overleaf workflow\\n\\nCiteDrive offers seamless integration with Overleaf as well as BibLaTeX support. You can easily and quickly organize your references without feeling limited by field or type restrictions. No matter if you use BibTeX, BibLaTex, jurabib, or JBibTEX-- we\'ve got you covered!\\n\\n  \\n\\n## New user interface and dark mode\\n\\nBased on what our users have been saying and the various drafts and prototypes we\'ve come up with, this next update will greatly improve the user experience. Be sure to check out dark mode!\\n\\n  \\n\\n## Reference, bibliography, and citation management in RStudio (Posit) in Quarto and R Markdown.\xa0\\n\\nRStudio is now compatible with the 3.0 update, which means you can use BibTeX-first referencing in Quarto and R Markdown. CiteDrive lets you store your references in a different location from your Quarto/R Markdown project, so you can easily and instantly update your bibliography anytime, just like Overleaf."},{"id":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","metadata":{"permalink":"/fr/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2022-08-28-quarto.md","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","description":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.","date":"2022-08-28T00:00:00.000Z","formattedDate":"28 ao\xfbt 2022","tags":[{"label":"citedrive","permalink":"/fr/blog/tags/citedrive"},{"label":"rstudio","permalink":"/fr/blog/tags/rstudio"},{"label":"quarto","permalink":"/fr/blog/tags/quarto"},{"label":"rmarkdown","permalink":"/fr/blog/tags/rmarkdown"}],"readingTime":2.48,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","rstudio","quarto","rmarkdown"]},"prevItem":{"title":"Overleaf and RStudio users, we have great news!","permalink":"/fr/blog/overleaf-and-rstudio-users-we-have-great-news"},"nextItem":{"title":"Citer et utiliser les r\xe9f\xe9rences sur Overleaf : Guide pour les chercheurs","permalink":"/fr/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},"content":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.\\n\\n\\n## Get started\\n\\nTo format citations and bibliographies in RStudio with CiteDrive and Quarto, follow these steps:\\n\\n\\n### Step 1: Include references in your project\\n\\nFirst, you must create a CiteDrive account by going to their website and selecting the \'Sign Up\' button. Completing your account will then enable you to make an \'R-Markdown\' (*it works for Quarto, don\'t you worry*) project; simply name it and [fill the project with references](https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6). Yours might look something like this:\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_project_example.png)\\n\\n### Step 2:  Connect your Quarto document to CiteDrive\\n\\nNow, let\'s connect your new CiteDrive to your Quarto document. To do this, click the \'bib\' button. This will open up a new tab with all your entries in BibTeX format. Copy the URL from the new tab and paste it into the YAML part of your QMD file.\\n\\n\\n````md\\n---\\nbibliography: \\"https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib\\"\\n---\\n````\\n\\nThe following clip shows the flow when using R Markdown. However, the principle of Quarto is the same:\\n\\n<iframe width=\\"100%\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/7ON96F0GD-Y\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n### Step 3: Copy the citation keys.\\n\\nOnce your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_copy_citation.gif)\\n\\nPaste your citation key in the necessary passage of your Quarto document.\\n\\n![CiteDrive - Paste citationkey](@site/static/img/tutorial/citedrive_paste_citation_rstudio.gif)\\n\\n\\nAfter you insert the key in the section, click \u201crender.\u201d The citation will be outputted in your desired style, and the reference will appear at the end of your document.\\n\\nThat\'s all! CiteDrive is the perfect tool to help you manage your bibliography and insert citations into Quarto documents. Test it out now and see how much time it can save you!\\n\\n## Additional information\\n\\n### Quarto\\nQuarto is a powerful research writing tool that can automatically generate citations and bibliographies in various styles. It supports bibliography files in BibTeX and other formats, making it easy to keep track of your references.\\n\\n\\n### CiteDrive\\nCiteDrive is a reference management tool that allows you to organize, store easily, and search your bibliographic data. Organize your teams and references in projects, for example, for a dedicated Quarto paper. CiteDrive automatically keeps your references in Quarto up-to-date whenever you or one of your teammates updates the bibliographic data within your project.\\n\\nDo you prefer BibLaTeX? No problem, CiteDrive is 100 % BibTeX empowered and provides freedom in fields and types for each entry, meaning you can use any BibTeX-based package or alternative, like BibLaTeX."},{"id":"citing-and-using-references-on-overleaf-a-guide-for-researchers","metadata":{"permalink":"/fr/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-16-doi-bibtex.md","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2022-08-16-doi-bibtex.md","title":"Citer et utiliser les r\xe9f\xe9rences sur Overleaf : Guide pour les chercheurs","description":"Lorsque vous r\xe9digez un document de recherche, il est important d\'utiliser des r\xe9f\xe9rences pour \xe9tayer vos affirmations. Citer correctement vos sources est essentiel pour cr\xe9er un argument solide et \xe9viter le plagiat. Ce guide vous montrera comment citer des r\xe9f\xe9rences sur Overleaf en utilisant CiteDrive. Nous vous donnerons \xe9galement des conseils pour trouver des sources fiables en ligne. Commen\xe7ons !","date":"2022-08-16T00:00:00.000Z","formattedDate":"16 ao\xfbt 2022","tags":[{"label":"citedrive","permalink":"/fr/blog/tags/citedrive"},{"label":"overleaf","permalink":"/fr/blog/tags/overleaf"},{"label":"latex","permalink":"/fr/blog/tags/latex"},{"label":"bibtex","permalink":"/fr/blog/tags/bibtex"},{"label":"biblatex","permalink":"/fr/blog/tags/biblatex"},{"label":"natbib","permalink":"/fr/blog/tags/natbib"}],"readingTime":4.26,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"citing-and-using-references-on-overleaf-a-guide-for-researchers","title":"Citer et utiliser les r\xe9f\xe9rences sur Overleaf : Guide pour les chercheurs","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","overleaf","latex","bibtex","biblatex","natbib"]},"prevItem":{"title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","permalink":"/fr/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto"},"nextItem":{"title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","permalink":"/fr/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive"}},"content":"Lorsque vous r\xe9digez un document de recherche, il est important d\'utiliser des r\xe9f\xe9rences pour \xe9tayer vos affirmations. Citer correctement vos sources est essentiel pour cr\xe9er un argument solide et \xe9viter le plagiat. Ce guide vous montrera comment citer des r\xe9f\xe9rences sur Overleaf en utilisant CiteDrive. Nous vous donnerons \xe9galement des conseils pour trouver des sources fiables en ligne. Commen\xe7ons !\\n\\n\\n\\n## \xc9tape 1 : Connexion de CiteDrive \xe0 Overleaf\\n\\nSi vous n\'\xeates pas d\xe9j\xe0 connect\xe9 \xe0 [Overleaf] (https://www.overleaf.com/), vous devez le faire maintenant. Ensuite, allez sur [CiteDrive](https://www.citedrive.com/), cr\xe9ez un projet Overleaf, et [ajoutez des r\xe9f\xe9rences](https://citedrive.medium.com/adding-bibliographic-references-to-overleaf-with-citedrive-325f131e3ca2) \xe0 votre nouveau projet. Votre projet pourrait ressembler \xe0 ceci :\\n\\n!CiteDrive - Exemple](@site/static/img/tutorial/citedrive_project_example.png)\\n\\nApr\xe8s cela, cliquez sur \\"bib\\" en haut \xe0 gauche de votre projet. Cela ouvrira un nouvel onglet vers le fichier BibTeX dynamique que vous pouvez utiliser pour votre Overleaf, qui se mettra \xe0 jour automatiquement lorsque vous ou vos co\xe9quipiers ajouteront, mettront \xe0 jour ou supprimeront des r\xe9f\xe9rences de votre projet.\\n\\n\\n\\nEnfin, allez dans Overleaf, cr\xe9ez un nouveau fichier, s\xe9lectionnez \\"From External URL\\", et collez l\'URL du BibTeX dynamique dans \\"URL to fetch the file from\\" nommez-le ici *references.bib*.\\nVotre projet CiteDrive est maintenant connect\xe9 \xe0 Overleaf ! Rappelez-vous que vous devez cliquer sur rafra\xeechir lorsque vous faites des changements dans notre projet CiteDrive afin qu\'Overleaf obtienne le dernier \xe9tat.\\n\\n![Ajouter des fichiers \xe0 Overleaf](@site/static/img/tutorial/export_bib_to_overleaf.png)\\n\\n## \xc9tape 2 : Cr\xe9er un document TeX dans Overleaf\\n\\nMaintenant, cr\xe9ons un nouveau fichier tex pour Overleaf, que nous pourrions appeler \\"document.tex\\" ; nous pouvons d\xe9finir la bibliographie, le fichier BibTeX de CiteDrive avec `\\\\bibliography{references}`. Mais quels outils de bibliographie devons-nous utiliser ? Pour la gestion des bibliographies dans LaTeX/Overleaf, il existe de nombreuses options : tr\xe8s probablement, natbib, bibtex, et biblatex. Pour la gestion des bibliographies dans LaTeX, BibTeX est le pilier qui constitue la base du format. Avec natbib, BibTeX est dot\xe9 d\'une extension qui offre une plus grande libert\xe9 de conception pour les citations in-text, et biblatex est une r\xe9vision compl\xe8te de BibTeX qui offre plus de types de r\xe9f\xe9rences, d\'options de tri et de filtrage pour les bibliographies et des options de localisation. Si BibteX est le programme le plus connu, BibLaTex est non seulement tout aussi robuste mais aussi le programme le plus recommand\xe9 aux nouveaux venus. Les donn\xe9es de citation et de bibliographie pour les r\xe9f\xe9rences et les listes sont conserv\xe9es dans le fichier .bib, comme dans le fichier BibTeX de CiteDrive. Il s\'agit toujours du m\xeame format :\\n\\n ```latex\\n @article{smith201X,\\n \\ttitle        = {An interesting article},\\n \\tauthor       = {John Smith},\\n \\tyear         = {201X},\\n \\tjournal      = {Journal of Interesting Articles}\\n }\\n ```\\n\\n Ici, `@article` est le type de source, `title`, `author`, `year` et `journal`, les attributs utilis\xe9s pour afficher dans vos listes de r\xe9f\xe9rences et vos citations et enfin, `smith201X`, un identifiant unique que vous pouvez utiliser pour faire r\xe9f\xe9rence dans votre document, principalement avec cite(key). CiteDrive n\'est pas pointilleux sur le format ; tout champ et type d\'entr\xe9e permettant de travailler avec le paquet bibliographique de votre choix est acceptable. Comme l\'objectif fondamental de CiteDrive est de s\xe9parer les donn\xe9es bibliographiques du document et des styles de citation, toutes les alternatives sont support\xe9es par CiteDrive.\\n\\n\\n Par cons\xe9quent, nous fournissons trois mod\xe8les ci-dessous pour vous aider \xe0 d\xe9marrer.\\n\\n ### Commencer avec BibTeX :\\n\\n Si vous voulez commencer avec BibTeX, utilisez le mod\xe8le suivant ou ouvrez directement \xe0 Overleaf. Pour plus d\'informations sur BibTeX, consultez la documentation.\\n\\n ```latex title=\\"document.tex\\"\\n \\\\documentclass{article}\\n \\\\usepackage[utf8]{inputenc}\\n\\n \\\\title{BibTeX references in \\\\LaTeX}\\n \\\\author{John Smith}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\bibliographystyle{unsrt}\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n ```\\n\\n\\n ### D\xe9marrer avec natbib:\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{natbib}\\n \\\\bibliographystyle{apalike}\\n \\\\title{A Short Guide to Reference Management using natbib with BibTeX}\\n \\\\author{CiteDrive}\\n \\\\date {January 1988}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n \\\\textbf{Narrative citation:} \\\\citet{Doe:1966} investigated the risks of incorrectly \\\\\\\\\\n recorded [...], which results in distortion.\\n \\\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\\n \\\\citep{Doe:1966}.\\n\\n \\\\medskip\\n\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n\\n ```\\n\\n\\n Pour en savoir plus sur natbib, veuillez cliquer ici.\\n\\n ### D\xe9marrer avec BibLaTeX :\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{biblatex}\\n \\\\addbibresource{references.bib}\\n\\n \\\\begin{document}\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\printbibliography\\n\\n \\\\end{document}\\n ```\\n\\n\\n\\n Pour en savoir plus sur BibLaTeX, veuillez cliquer ici.\\n\\n\\n\\n ## \xc9tape 3 : citations dans le texte\\n\\n\\n\\n Si l\'extension du navigateur est install\xe9e, vous pouvez cr\xe9er des citations en s\xe9lectionnant le texte et en cliquant sur l\'ic\xf4ne CiteDrive dans votre barre d\'outils.\\n\\n\\n\\n Vous pouvez \xe9galement citer des r\xe9f\xe9rences manuellement en utilisant la commande cite. Par exemple, si vous voulez citer Smith (201X), vous utiliserez ``cite{smith201X}``. Vous pouvez \xe9galement utiliser la recherche de r\xe9f\xe9rences dans overleaf.\\n\\n\\n\\n Les styles de bibliographie sont pr\xe9install\xe9s sur Overleaf et selon le paquetage que vous avez utilis\xe9 les r\xe9f\xe9rences sur les pages suivantes :\\n\\n\\n\\n C\'est tout ! Vous devriez maintenant avoir tout ce dont vous avez besoin pour commencer \xe0 utiliser les r\xe9f\xe9rences dans Overleaf. Si vous avez des questions ou des commentaires, n\'h\xe9sitez pas \xe0 nous en faire part par e-mail \xe0 hello@citedrive.com.\\n\\n\\n\\n Bon travail avec TeX !"},{"id":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","metadata":{"permalink":"/fr/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-12-overleaf-cite.md","source":"@site/i18n/fr/docusaurus-plugin-content-blog/2022-08-12-overleaf-cite.md","title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","description":"If you\'re a researcher, then you know the importance of bibliographies and citations. And if you\'re using CiteDrive, then you know that it\'s the easiest way to create bibliographies and citations for your research papers. But what do you do if you come across a DOI instead of an ISBN or URL? Don\'t worry - we\'ve got you covered! In this blog post, we\'ll show you how to convert a DOI to a BibTeX citation using CiteDrive. Let\'s get started!","date":"2022-08-12T00:00:00.000Z","formattedDate":"12 ao\xfbt 2022","tags":[{"label":"citedrive","permalink":"/fr/blog/tags/citedrive"},{"label":"bibtex","permalink":"/fr/blog/tags/bibtex"},{"label":"doi","permalink":"/fr/blog/tags/doi"}],"readingTime":1.61,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","title":"How to Convert a DOI to a BibTeX Citation Using CiteDrive","authors":{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","bibtex","doi"]},"prevItem":{"title":"Citer et utiliser les r\xe9f\xe9rences sur Overleaf : Guide pour les chercheurs","permalink":"/fr/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},"content":"If you\'re a researcher, then you know the importance of bibliographies and citations. And if you\'re using [CiteDrive](https://www.citedrive.com/), then you know that it\'s the easiest way to create bibliographies and citations for your research papers. But what do you do if you come across a [DOI](/fields/doi/) instead of an ISBN or URL? Don\'t worry - we\'ve got you covered! In this blog post, we\'ll show you how to convert a DOI to a BibTeX citation using CiteDrive. Let\'s get started!\\n\\n\\n\\n## Using the browser extension\\nConverting a DOI to a BibTeX citation is easy if you\'re using the \'CiteDrive Companion\' browser extension. Just highlight the DOI with the mouse, open the context menu with the right mouse button, and select \'Search doi\'.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/browserextension-search-doi.png)\\n\\nAfter that, you\'ll see a BibTeX entry preview where you may change it before saving it to a project of your choosing.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/browserextension-bibtex-preview.png)\\n\\n\\n\\n That\'s it! You will find the companion available from the following browsers:\\n\\n* [CiteDrive Companion Plugin for Google Chrome](https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik)\\n* [CiteDrive Companion Plugin for Mozilla Firefox](https://addons.mozilla.org/af/firefox/addon/citedrive-companion/)\\n* [CiteDrive Companion Plugin for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo)\\n\\n\\n## Using the online tool:\\nIf you\'re not using the browser extension, don\'t worry - you can still use CiteDrive to convert your DOI to a BibTeX citation. Just go to the CiteDrive website and paste your DOI into the \'Enter DOI\' field, which you can find under Search via Doi when you call up the plus symbol in the upper navigation bar. . Then click on the \'Convert\' button, and voila! - your BibTeX citation will be generated automatically.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive-search-doi.png)\\n\\n\\n\\n\\n\\n\\nWe hope this blog post has been helpful. If you have any questions, please don\'t hesitate to contact us. We\'re always happy to help!\\n\\nCiteDrive is the easiest way to create bibliographies and citations for your research papers. Convert a DOI to BibTeX citation using CiteDrive today! Try it for free at CiteDrive.com.\\n\\nHappy citing! :)"}]}')}}]);