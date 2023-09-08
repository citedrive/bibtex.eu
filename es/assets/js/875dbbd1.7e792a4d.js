"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={title:"Introduction to BibTeX and the Conference Type Entry",sidebar_label:"conference"},a="Introduction to BibTeX and the Conference Type Entry",l={unversionedId:"types/conference",id:"types/conference",title:"Introduction to BibTeX and the Conference Type Entry",description:"BibTeX is a reference management system used to format lists of references in a document. It is widely used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the conference entry type in BibTeX and show you how to use it in your LaTeX documents.",source:"@site/docs/types/conference.md",sourceDirName:"types",slug:"/types/conference",permalink:"/es/types/conference",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/conference.md",tags:[],version:"current",frontMatter:{title:"Introduction to BibTeX and the Conference Type Entry",sidebar_label:"conference"},sidebar:"tutorialSidebar",previous:{title:"booklet",permalink:"/es/types/booklet"},next:{title:"inbook",permalink:"/es/types/inbook"}},c={},p=[{value:"The Conference Entry Type",id:"the-conference-entry-type",level:2},{value:"Using the Conference Entry Type in LaTeX",id:"using-the-conference-entry-type-in-latex",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-bibtex-and-the-conference-type-entry"},"Introduction to BibTeX and the Conference Type Entry"),(0,i.kt)("p",null,"BibTeX is a reference management system used to format lists of references in a document. It is widely used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry type in BibTeX and show you how to use it in your LaTeX documents."),(0,i.kt)("h2",{id:"the-conference-entry-type"},"The Conference Entry Type"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry type is used to refer to papers published in conference proceedings. The required fields for a ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author"),": The name(s) of the author(s) of the paper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title of the paper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"booktitle"),": The name of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year"),": The year the conference was held.")),(0,i.kt)("p",null,"Optional fields for a ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": The number of the proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"series"),": The name of the series or set of books that the conference proceedings belong to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages"),": The page numbers on which the paper appears."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),": The location of the conference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"month"),": The month in which the conference was held."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"organization"),": The organization that sponsored the conference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),": The publisher of the proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"note"),": Miscellaneous information.")),(0,i.kt)("p",null,"Here is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@conference{example_conference,\n    title        = {The Effects of Climate Change},\n    author       = {John Smith and Jane Doe},\n    year         = 2022,\n    month        = {June},\n    booktitle    = {Proceedings of the Annual Conference on Climate Change},\n    publisher    = {Springer},\n    address      = {Los Angeles, CA},\n    pages        = {55--62},\n    note         = {This is a sample entry for a paper in conference proceedings.},\n    editor       = {Bob Johnson},\n    organization = {Climate Change Association}\n}\n\n")),(0,i.kt)("h2",{id:"using-the-conference-entry-type-in-latex"},"Using the Conference Entry Type in LaTeX"),(0,i.kt)("p",null,"Once you have created a ",(0,i.kt)("inlineCode",{parentName:"p"},"conference")," entry in your BibTeX file, you can reference it in your LaTeX document using the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite")," command. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}  \n\\begin{document}  \nAccording to \\cite{example_conference}, climate change has significant effects on the planet.  \n\\bibliography{references} \n\\bibliographystyle{plain}  \n\\end{document}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"example_conference")," entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"references.bib")," file is cited using the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite")," command. The bibliography is then generated using the ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," style."))}d.isMDXComponent=!0}}]);