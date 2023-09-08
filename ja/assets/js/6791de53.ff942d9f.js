"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"Overleaf: Online LaTeX Editor",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",sidebar_label:"Using Overleaf (Quick start)",sidebar_position:8},o="Overleaf: Online LaTeX Editor",l={unversionedId:"overleaf",id:"overleaf",title:"Overleaf: Online LaTeX Editor",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",source:"@site/docs/overleaf.md",sourceDirName:".",slug:"/overleaf",permalink:"/ja/overleaf",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/overleaf.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Overleaf: Online LaTeX Editor",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",sidebar_label:"Using Overleaf (Quick start)",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Using R Markdown (Quick start)",permalink:"/ja/rmarkdown"},next:{title:"CiteDrive",permalink:"/ja/citedrive/"}},s={},m=[{value:"Getting started",id:"getting-started",level:2},{value:"Bibliography management in Overleaf/LaTeX",id:"bibliography-management-in-overleaflatex",level:2},{value:"CiteDrive",id:"citedrive",level:3},{value:"BibTeX",id:"bibtex",level:3},{value:"Natbib",id:"natbib",level:3},{value:"BibLaTeX",id:"biblatex",level:3},{value:"LaTeX basics",id:"latex-basics",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overleaf-online-latex-editor"},"Overleaf: Online LaTeX Editor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Overleaf.com"),", created from the merger of ",(0,i.kt)("strong",{parentName:"p"},"WriteLaTeX")," and ",(0,i.kt)("strong",{parentName:"p"},"ShareLaTeX"),", is a cloud-based LaTeX editor tailored for collaborative creation and publication of academic documents. "),(0,i.kt)("p",null,"With more than 10 million users worldwide, it is a top editor for academics. It features a wide range of pre-installed tools that can be easily activated. Overleaf offers a wide range of templates that meet the design guidelines of most academic journals. This is complemented by a range of templates for university journals, compiled from the user-maintained collection in the Overleaf Gallery."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"The following explains how to create a new project in Overleaf, either by starting from scratch, uploading your own files or using one of the many templates available."),(0,i.kt)("h2",{id:"bibliography-management-in-overleaflatex"},"Bibliography management in Overleaf/LaTeX"),(0,i.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,i.kt)("p",null,"CiteDrive is a robust citation and reference management tool that works in tandem with Overleaf.\nIt is compatible with all popular reference management systems, such as BibTeX, Natbib, and BibLaTeX. Read more:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex"},"Overleaf.com | Blog -- Better bibliography management with Overleaf, CiteDrive, and BibTeX/BibLaTeX \u2014 about 3.0 and an updated guide")),(0,i.kt)("h3",{id:"bibtex"},"BibTeX"),(0,i.kt)("p",null,"BibTeX is a popular reference management system used in LaTeX. It allows you to create a separate bibliography file with all your references and then cite them in your LaTeX document. Here are the steps to using BibTeX in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Create a new file in your Overleaf project and name it "references.bib."'),(0,i.kt)("li",{parentName:"ol"},'Open the "references.bib" file and add your references in the following format:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"`@article{AuthorYear,   \n    author = {Author, First and Author, Second},   \n    title = {Title of the Article},   \n    journal = {Journal Name},   \n    volume = {Volume Number},   \n    number = {Issue Number},   \n    pages = {Page Numbers},   \n    year = {Year Published},   \n    publisher = {Publisher Name} \n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, add the following commands where you want your citations to appear:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\bibliography{references} \n\\bibliographystyle{plain}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography")," command tells LaTeX where to find your bibliography file, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliographystyle")," command specifies the citation style you want to use."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"To cite a reference, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\cite{AuthorYear}")," command in your LaTeX document. This command will generate a citation in the format specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"bibliographystyle")," command.")),(0,i.kt)("h3",{id:"natbib"},"Natbib"),(0,i.kt)("p",null,"Natbib is another popular citation management system used in LaTeX. It provides more flexibility in formatting citations and references than BibTeX. Here are the steps to using Natbib in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following commands to your LaTeX document's preamble:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage{natbib} \n\\bibliographystyle{plainnat}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citep{AuthorYear}")," command to create a parenthetical citation or the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citet{AuthorYear}")," command to create a citation in the text."),(0,i.kt)("li",{parentName:"ol"},"To create a bibliography, add the following command to the end of your document:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\bibliography{references}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'In your "references.bib" file, add your references in the following format:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{AuthorYear,   \n    author = {Author, First and Author, Second},   \n    title = {Title of the Article},   \n    journal = {Journal Name},   \n    volume = {Volume Number},   \n    number = {Issue Number},   \n    pages = {Page Numbers},   \n    year = {Year Published},   \n    publisher = {Publisher Name} \n}\n")),(0,i.kt)("h3",{id:"biblatex"},"BibLaTeX"),(0,i.kt)("p",null,"BibLaTeX is a newer reference management system that provides even more flexibility than Natbib. It allows you to use different citation styles within the same document and provides more control over the formatting of references. Here are the steps to using BibLaTeX in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following commands to your LaTeX document's preamble:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[style=authoryear,backend=bibtex]{biblatex} \n\\bibliography{references}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," option specifies the citation style you want to use, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," option specifies the reference management system you want to use (BibTeX in this case)."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\parencite{AuthorYear}")," command to create a parenthetical citation or the `\\textcite{Author")),(0,i.kt)("h2",{id:"latex-basics"},"LaTeX basics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\n\\usepackage{graphicx}\n\\usepackage{caption}\n\\usepackage{biblatex}\n\n\\addbibresource{references.bib} % Replace \"references.bib\" with your bibliography file\n\n\\title{My First LaTeX Document}\n\\author{Your Name}\n\n\\begin{document}\n\n\\maketitle\n\n\\section{Introduction}\nThis is a sample document demonstrating the basics of LaTeX.\n\n\\section{Formatting}\nYou can format text in \\textbf{bold}, \\textit{italic}, \\underline{underline}, or \\texttt{typewriter} font.\n\n\\section{Lists}\nHere's an example of a bulleted list:\n\\begin{itemize}\n  \\item First item\n  \\item Second item\n  \\item Third item\n\\end{itemize}\n\n\\section{Mathematics}\nLaTeX is great for typesetting mathematical formulas. Here's an example of an equation:\n\\begin{equation}\n  E = mc^2\n\\end{equation}\n\n\\section{Figures and Tables}\nYou can include figures and tables in your document. Here's an example of a figure:\n\\begin{figure}[ht]\n  \\centering\n  \\includegraphics[width=0.5\\textwidth]{example-image}\n  \\caption{An example figure}\n  \\label{fig:example}\n\\end{figure}\n\nAnd here's an example of a table:\n\\begin{table}[ht]\n  \\centering\n  \\begin{tabular}{|c|c|}\n    \\hline\n    \\textbf{Item} & \\textbf{Quantity} \\\\\n    \\hline\n    Apple & 3 \\\\\n    Orange & 5 \\\\\n    \\hline\n  \\end{tabular}\n  \\caption{An example table}\n  \\label{tab:example}\n\\end{table}\n\n\\section{References}\nYou can refer to labeled sections, equations, figures, and tables. For example, see Figure~\\ref{fig:example} and Table~\\ref{tab:example}.\n\n\\section{Citations and Bibliography}\nCite references using \\cite{author2022}. Here's an example citation.\n\n\\printbibliography\n\n\\end{document}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Document class"),": Begin your LaTeX document by selecting a document class, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"article"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"report"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"book"),". This determines the overall layout and formatting."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Preamble"),": The preamble is the area between ",(0,i.kt)("inlineCode",{parentName:"li"},"\\documentclass")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"\\begin{document}"),". It's where you load packages, define commands, and set document-wide settings."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sections"),": Use ",(0,i.kt)("inlineCode",{parentName:"li"},"\\section"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\\subsection"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"\\subsubsection")," to organize your document into sections. LaTeX automatically numbers them."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Text formatting"),": You can format text using commands like ",(0,i.kt)("inlineCode",{parentName:"li"},"\\textbf")," for bold, ",(0,i.kt)("inlineCode",{parentName:"li"},"\\textit")," for italics, ",(0,i.kt)("inlineCode",{parentName:"li"},"\\underline")," for underline, and ",(0,i.kt)("inlineCode",{parentName:"li"},"\\texttt")," for typewriter font."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lists"),": Create bulleted lists with the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemize")," environment, numbered lists with the ",(0,i.kt)("inlineCode",{parentName:"li"},"enumerate")," environment, and description lists with the ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," environment."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mathematics"),": LaTeX excels at typesetting mathematical formulas. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"$...$")," for inline math and ",(0,i.kt)("inlineCode",{parentName:"li"},"\\[...\\]")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"equation")," environment for displayed math. You can use symbols, equations, matrices, fractions, and more."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Figures and tables"),": Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"graphicx")," package to include figures (",(0,i.kt)("inlineCode",{parentName:"li"},"\\includegraphics"),"). For tables, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"tabular")," environment, and you can add captions using the ",(0,i.kt)("inlineCode",{parentName:"li"},"caption")," package."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"References"),": Label important sections, equations, figures, or tables with ",(0,i.kt)("inlineCode",{parentName:"li"},"\\label")," and refer to them later using ",(0,i.kt)("inlineCode",{parentName:"li"},"\\ref")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"\\eqref"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Citations and bibliography"),": Manage references using BibTeX or BibLaTeX. Cite references in your document with ",(0,i.kt)("inlineCode",{parentName:"li"},"\\cite")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"\\parencite")," and create a bibliography using ",(0,i.kt)("inlineCode",{parentName:"li"},"\\bibliography")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"\\printbibliography"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compilation"),": Save your LaTeX file with a ",(0,i.kt)("inlineCode",{parentName:"li"},".tex")," extension. Compile it using a LaTeX distribution like TeX Live or MiKTeX, either through a command-line tool or a LaTeX editor like TeXstudio, Overleaf, or ShareLaTeX.")))}u.isMDXComponent=!0}}]);