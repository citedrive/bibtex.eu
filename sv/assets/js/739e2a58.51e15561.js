"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using R Markdown (Quick start)",sidebar_position:2},o="Reference management in R Markdown with BibTeX: A short guide",s={unversionedId:"rmarkdown",id:"rmarkdown",title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/rmarkdown.md",sourceDirName:".",slug:"/rmarkdown",permalink:"/sv/rmarkdown",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/rmarkdown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using R Markdown (Quick start)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Litteraturhantering i LaTeX med BibTeX (Snabbstart)",permalink:"/sv/"},next:{title:"Using Natbib (Quick start)",permalink:"/sv/natbib"}},l={},c=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a R Markdown document and connect",id:"step-2-create-a-r-markdown-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-management-in-r-markdown-with-bibtex-a-short-guide"},"Reference management in R Markdown with BibTeX: A short guide"),(0,a.kt)("p",null,"R Markdown is an great tool for creating reproducible reports, papers, presentations, and more. One of the things that makes R-Markdown so powerful is its ability to integrate with other tools and software. One such tool is BibTeX, which is a reference management system for LaTeX documents. BibTeX allows you to cite sources easily in your document and create a bibliography."),(0,a.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,a.kt)("p",null,"As with the previous section, we start by generating a .bib-file, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),", which is subsequently filled with BibTeX entries.\nBibTeX entries are constructed in the following format and contain enough information for citation and inclusion in the bibliography for each literature source (book, essay, etc.)."),(0,a.kt)("p",null,'We use the example from the previous section and quote the book "The Old Man and the Sea" by Ernest Hemingway. The entry then looks like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,'Again, we break down the "anatomy" of this entry, looking at three components to understand how each BibTeX entry is defined:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry-type"),": with ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," we define the type according to the schema ",(0,a.kt)("inlineCode",{parentName:"li"},"@type")," of the reference. Possible are ",(0,a.kt)("inlineCode",{parentName:"li"},"@article")," for scientific articles and others. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry fields"),": in this case of our ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," example, these are ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"year")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,a.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"citation-key"),": in our example, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate an in-text citation in LaTeX, i.e., to refer to the source. in R Markdown we do this with ",(0,a.kt)("inlineCode",{parentName:"li"},"[@Hemingway1952]"),". The citation key can be any string - often a combination of author, year, and a word from the title.")),(0,a.kt)("h2",{id:"step-2-create-a-r-markdown-document-and-connect"},"Step 2: Create a R Markdown document and connect"),(0,a.kt)("p",null,"Integrating BibTeX with R Markdown is very simple. All you have to do is specify the bib-file with ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography: bibliography.bib")," in YAML and the citation with ",(0,a.kt)("inlineCode",{parentName:"p"},"[@Hemingway1952]")," at the place where you want to place the in-text citation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "BibTeX references in R Markdown"\nauthor: "John Doe"\ndate: \'2022-07-19\'\nbibliography: bibliography.bib\noutput: html_document\n---\n\n\n## BibTeX references in R Markdown\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent enim urna, dapibus et bibendum vel, consectetur et turpis.\nCras a molestie nulla. [@Hemingway1952]\n\n\n')),(0,a.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,a.kt)("p",null,"Formatting BibTeX files by hand can be tedious, which is why it is generally recommended to use a reference manager. Here are a few that are well suited for this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-powered, collaborative and cloud-based tool to manage your references and teams in projects. It offers a single-click export to Overleaf (",(0,a.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,a.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") along with R Markdown (",(0,a.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,a.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio")),"), while keeping citations in sync."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source literature management tool that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"))," by retorque."),(0,a.kt)("li",{parentName:"ul"},"The free, open-source software ",(0,a.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac, and Linux. It is based on Java and is maintained by JabRef e.V.")))}d.isMDXComponent=!0}}]);