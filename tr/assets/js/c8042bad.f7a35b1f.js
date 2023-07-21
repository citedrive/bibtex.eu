"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(3117),i=(n(7294),n(3905));const r={title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},o="Reference management with BibTeX: A short guide",s={unversionedId:"intro",id:"intro",title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/tr/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Reference management with BibTeX -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using R Markdown (Quick start)",permalink:"/tr/rmarkdown"}},l={},c=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a LaTeX document and connect",id:"step-2-create-a-latex-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reference-management-with-bibtex-a-short-guide"},"Reference management with BibTeX: A short guide"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BibTeX")," can be daunting to many newcomers because of all the specifics about LaTeX packages, citation styles, and formatting. Yet, many aspects are mostly unimportant, and the structure is usually always the same."),(0,i.kt)("p",null,"And that is exactly what this little guide aims to accomplish: give you a basic set-up using an example, and show you how to use BibTeX from the ground up. In the future, we'll refer to document systems other than LaTeX, and details on this website, but for now, we'll stay focused on the basics."),(0,i.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,i.kt)("p",null,"We begin by generating a .bib-file, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),', which is then filled with BibTeX entries. A BibTeX entry is written in the following format and represents each literature source (book, essay, etc.) with the information required for citation and inclusion in the bibliography.\nLet\'s say we want to cite the book "The Old Man and the Sea" by Ernest Hemingway, then the entry would look like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="bibliography.bib"',title:'"bibliography.bib"'},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,i.kt)("p",null,'If you break down the "anatomy" of this entry, you only have to look at the following three components to understand how each BibTeX entry is defined:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entry-type"),": With ",(0,i.kt)("inlineCode",{parentName:"li"},"@book")," we define the type of reference, i.e. (and this example refers to itself) as a book. There are also ",(0,i.kt)("inlineCode",{parentName:"li"},"@article")," for academic articles and others possible. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entry fields"),": in this example, these are ",(0,i.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"year"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,i.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"citation-key"),": This example is ",(0,i.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate in-text citation in LaTeX, i.e., to refer to the source. Using the same example, we do this with ",(0,i.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". The citation key can be any string of characters - often as a combination of author, year, and a word from the title.")),(0,i.kt)("h2",{id:"step-2-create-a-latex-document-and-connect"},"Step 2: Create a LaTeX document and connect"),(0,i.kt)("p",null,"Let's start by inserting our reference into a LaTeX document. You can copy and use the following example, a minimal basic framework sufficient to format the citation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="document.tex"',title:'"document.tex"'},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{BibTeX references in \\LaTeX}\n\\author{John Smith}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,i.kt)("p",null,"After compiling the LaTeX document, we will notice that the command ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," is replaced by the reference given in the BibTeX file with this ID in the example ",(0,i.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:n(1049).Z,width:"1146",height:"784"})),(0,i.kt)("p",null,"The .bib file, which we have called ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),", is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," and the citation/bibliography style ",(0,i.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),", where unsrt refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},".bst file,")," in this case to ",(0,i.kt)("inlineCode",{parentName:"p"},"unsrt.bst"),", which contains all the macros to format your references in style. You can use other styles like ",(0,i.kt)("inlineCode",{parentName:"p"},"apalike.bst")," instead.  "),(0,i.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,i.kt)("p",null,"Formatting BibTeX files by hand can be tedious, which is why it is generally recommended to use a reference manager. Here are a few that are well suited for this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-driven, collaborative and web-based tool to manage your references and teams in projects. It offers a one-click export to Overleaf (",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,i.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") as well as R Markdown (",(0,i.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,i.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio")),"), keeping citations in sync."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source bibliographic management software that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,i.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero")," by retorque."),(0,i.kt)("li",{parentName:"ul"},"The free, open source software ",(0,i.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac and Linux. It is based on Java and is maintained by JabRef e.V.")))}m.isMDXComponent=!0},1049:function(e,t,n){t.Z=n.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);