"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,f=c["".concat(s,".").concat(d)]||c[d]||b[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},7963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const a={},l="How to Use URLs in BibTeX Entries",s={unversionedId:"faq/how-to-use-urls-in-bibtex-entries",id:"faq/how-to-use-urls-in-bibtex-entries",title:"How to Use URLs in BibTeX Entries",description:"If you're using BibTeX to create bibliographies for your research papers, you may have wondered how to include URLs in your entries.",source:"@site/docs/faq/how-to-use-urls-in-bibtex-entries.mdx",sourceDirName:"faq",slug:"/faq/how-to-use-urls-in-bibtex-entries",permalink:"/ja/faq/how-to-use-urls-in-bibtex-entries",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-urls-in-bibtex-entries.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Use BibTeX-Related Commands for LaTeX Documents",permalink:"/ja/faq/how-to-use-bibtex-related-commands-for-latex-documents"},next:{title:"What is BibTeX, and What Can It Do for You?",permalink:"/ja/faq/what-is-bibtex-and-what-can-it-do-for-you"}},u={},p=[{value:"Use the note field type:",id:"use-the-note-field-type",level:2},{value:"Use the howpublished field type:",id:"use-the-howpublished-field-type",level:2},{value:"Use biblatex and its built-in URL field type:",id:"use-biblatex-and-its-built-in-url-field-type",level:2}],c={toc:p},b="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-urls-in-bibtex-entries"},"How to Use URLs in BibTeX Entries"),(0,i.kt)("p",null,"If you're using BibTeX to create bibliographies for your research papers, you may have wondered how to include URLs in your entries."),(0,i.kt)("p",null,"The URL field type is not yet formally supported in BibTeX, although it was planned for version 1.0 by Oren Patashnik. Despite this, the debate regarding this version and its intentions dates back to ",(0,i.kt)("a",{parentName:"p",href:"https://tug.org/TUGboat/tb24-1/patashnik.pdf"},"Patashnik's paper from 2003"),", which is gradually being replaced by Biber-backed biblatex."),(0,i.kt)("p",null,"Therefore, it is likely that you will need to use one of the following workarounds, for example, when citing websites:"),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"use-the-note-field-type"},"Use the note field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},'@misc{...,\n  howpublished = "\\url{http://...}"\n}\n')),(0,i.kt)("h2",{id:"use-the-howpublished-field-type"},"Use the howpublished field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},'@misc{...,\n  note = "Available from \\url{http://...}"\n}\n')),(0,i.kt)("h2",{id:"use-biblatex-and-its-built-in-url-field-type"},"Use biblatex and its built-in URL field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@online{...,\n  url = {http://...}\n}\n")),(0,i.kt)("p",null,"If you choose biblatex, you will need to use Biber as your backend instead of BibTeX. If you want to know more about biblatex and Biber, read our getting started guide.\nIf you have any questions or comments, please let us know. We hope this helped!"))}d.isMDXComponent=!0}}]);