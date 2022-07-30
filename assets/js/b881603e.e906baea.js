"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[65],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var i=n(3117),a=(n(7294),n(3905));const r={},o="How can I use BibTeX to cite a website in LaTeX?",s={unversionedId:"faq/how-can-i-use-bibtex-to-cite-a-website",id:"faq/how-can-i-use-bibtex-to-cite-a-website",title:"How can I use BibTeX to cite a website in LaTeX?",description:"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example.",source:"@site/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-use-bibtex-to-cite-a-website",permalink:"/faq/how-can-i-use-bibtex-to-cite-a-website",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-can-i-use-bibtex-to-cite-a-website.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BibTeX FAQ",permalink:"/faq/"},next:{title:"BibTeX Fields",permalink:"/fields/"}},c={},l=[{value:"Using BibTeX",id:"using-bibtex",level:2},{value:"Using BibLaTeX",id:"using-biblatex",level:2},{value:"Using CiteDrive",id:"using-citedrive",level:2},{value:"Using <code>natbib</code>",id:"using-natbib",level:2}],u={toc:l};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-can-i-use-bibtex-to-cite-a-website-in-latex"},"How can I use BibTeX to cite a website in LaTeX?"),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:card",content:"summary"}),(0,a.kt)("meta",{name:"twitter:site",content:"@bibtex_eu"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@bibtex_eu"}),(0,a.kt)("meta",{name:"twitter:title",content:"How can I use BibTeX to cite a website in LaTeX?"}),(0,a.kt)("meta",{name:"twitter:image",content:"/img/how-can-i-use-bibtex-to-cite-a-website.png"})),(0,a.kt)("p",null,"There are several ways to cite a website in LaTeX. In this short answer to the question, we give three, the easiest being BibLaTeX via the CiteDrive browser extension in the last example."),(0,a.kt)("h2",{id:"using-bibtex"},"Using BibTeX"),(0,a.kt)("p",null,"In BibTeX we use ",(0,a.kt)("inlineCode",{parentName:"p"},"@misc")," as a workaround and make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"note")," field to specify the URl and usually an access date. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," (",(0,a.kt)("em",{parentName:"p"},"or ",(0,a.kt)("inlineCode",{parentName:"em"},"hyperref")),") is required using ",(0,a.kt)("inlineCode",{parentName:"p"},"usepackage{url}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {\\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}\n}\n")),(0,a.kt)("p",null,"Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"howpublished")," field can be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {Accessed: (Use the date of access)},\n    howpublished = {\\url{https://www.citedrive.com/overleaf}}\n}\n")),(0,a.kt)("h2",{id:"using-biblatex"},"Using BibLaTeX"),(0,a.kt)("p",null,"If you use BibLaTeX, which we recommend, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@online")," entry type is inherently supported and works without a further tweak. You can enter the URL and access date in the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"urldate"),", respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@online{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    url          = {https://www.citedrive.com/overleaf},\n    urldate      = {Use the date of access}\n}\n")),(0,a.kt)("h2",{id:"using-citedrive"},"Using CiteDrive"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://citedrive.com/"},"CiteDrive")," is a collaborative online reference management tool based on BibTeX that automatically synchronizes with publication systems such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},"Overleaf")," and ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},"RStudio"),". They offer a ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/the-citedrive-companion-for-overleaf-and-rstudio-d8022adb9370"},"browser extension")," that allows you to save academic articles directly from the browser and in the correct BibTeX format so that you can, for example, cite them directly in the Overleaf project without having to switch between browser windows/tabs. The extension can also save web pages in BibLaTeX format, automatically capturing the title, URL, and access date."),(0,a.kt)("h2",{id:"using-natbib"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,a.kt)("p",null,"People frequently inquire about how to cite web pages using ",(0,a.kt)("a",{parentName:"p",href:"/natbib"},"natbib"),". We emphasize that it works in the same way as BibTeX. Natbib is a tool for styling in-text citations, and it depends on BibTeX as a backend."))}b.isMDXComponent=!0}}]);