"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[65],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=i,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8009:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},1744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),r=a(8009);const o={},s="How can I use BibTeX to cite a website in LaTeX?",c={unversionedId:"faq/how-can-i-use-bibtex-to-cite-a-website",id:"faq/how-can-i-use-bibtex-to-cite-a-website",title:"How can I use BibTeX to cite a website in LaTeX?",description:"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.",source:"@site/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-use-bibtex-to-cite-a-website",permalink:"/ja/faq/how-can-i-use-bibtex-to-cite-a-website",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BibTeX FAQ",permalink:"/ja/faq/"},next:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/ja/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"}},l={},p=[{value:"Using BibTeX",id:"using-bibtex",level:2},{value:"Using BibLaTeX",id:"using-biblatex",level:2},{value:"Using <code>natbib</code>",id:"using-natbib",level:2}],u={toc:p},b="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-can-i-use-bibtex-to-cite-a-website-in-latex"},"How can I use BibTeX to cite a website in LaTeX?"),(0,i.kt)("p",null,"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.citedrive.com/"},"CiteDrive")," is a collaborative online reference management tool based on BibTeX that automatically synchronizes with publication systems such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},"Overleaf")," and ",(0,i.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},"RStudio"),". They offer a ",(0,i.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/the-citedrive-companion-for-overleaf-and-rstudio-d8022adb9370"},"browser extension")," that allows you to save academic articles directly from the browser and in the correct BibTeX format so that you can, for example, cite them directly in the Overleaf project without having to switch between browser windows/tabs. The extension can also save web pages in BibLaTeX format, automatically capturing the title, URL, and access date.")),(0,i.kt)(r.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"using-bibtex"},"Using BibTeX"),(0,i.kt)("p",null,"In BibTeX we use ",(0,i.kt)("inlineCode",{parentName:"p"},"@misc")," as a workaround and make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field to specify the URl and usually an access date. In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," (",(0,i.kt)("em",{parentName:"p"},"or ",(0,i.kt)("inlineCode",{parentName:"em"},"hyperref")),") is required using ",(0,i.kt)("inlineCode",{parentName:"p"},"usepackage{url}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {\\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}\n}\n")),(0,i.kt)("p",null,"Alternatively, the ",(0,i.kt)("inlineCode",{parentName:"p"},"howpublished")," field can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {Accessed: (Use the date of access)},\n    howpublished = {\\url{https://www.citedrive.com/overleaf}}\n}\n")),(0,i.kt)("h2",{id:"using-biblatex"},"Using BibLaTeX"),(0,i.kt)("p",null,"If you use BibLaTeX, which we recommend, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@online")," entry type is inherently supported and works without a further tweak. You can enter the URL and access date in the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"urldate"),", respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@online{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    url          = {https://www.citedrive.com/overleaf},\n    urldate      = {Use the date of access}\n}\n")),(0,i.kt)("h2",{id:"using-natbib"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,i.kt)("p",null,"People frequently inquire about how to cite web pages using ",(0,i.kt)("a",{parentName:"p",href:"/natbib"},"natbib"),". We emphasize that it works in the same way as BibTeX. Natbib is a tool for styling in-text citations, and it depends on BibTeX as a backend."))}d.isMDXComponent=!0}}]);