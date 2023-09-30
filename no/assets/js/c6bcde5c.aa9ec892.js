"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7896],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,p=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(p,o(o({ref:t},b),{},{components:a})):n.createElement(p,o({ref:t},b))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8009:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const r=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},4953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var n=a(7462),r=(a(7294),a(3905)),i=a(8009);const o={},s="What is BibTeX, and What Can It Do for You?",c={unversionedId:"faq/what-is-bibtex-and-what-can-it-do-for-you",id:"faq/what-is-bibtex-and-what-can-it-do-for-you",title:"What is BibTeX, and What Can It Do for You?",description:"BibTeX is a LaTeX bibliography management tool that makes creating and managing bibliographies much easier. It can create citations and references for articles, books, websites, etc. BibTeX files have the file extension .bib.",source:"@site/docs/faq/what-is-bibtex-and-what-can-it-do-for-you.mdx",sourceDirName:"faq",slug:"/faq/what-is-bibtex-and-what-can-it-do-for-you",permalink:"/no/faq/what-is-bibtex-and-what-can-it-do-for-you",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/what-is-bibtex-and-what-can-it-do-for-you.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Use URLs in BibTeX Entries",permalink:"/no/faq/how-to-use-urls-in-bibtex-entries"},next:{title:"When to Enclose .bib File Entry Fields: quotation marks vs. braces",permalink:"/no/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces"}},l={},b=[],u={toc:b},d="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-bibtex-and-what-can-it-do-for-you"},"What is BibTeX, and What Can It Do for You?"),(0,r.kt)("p",null,"BibTeX is a LaTeX bibliography management tool that makes creating and managing bibliographies much easier. It can create citations and references for articles, books, websites, etc. BibTeX files have the file extension .bib."),(0,r.kt)(i.Z,{mdxType:"CiteDrive"}),(0,r.kt)("p",null,"The tool is mainly used to create bibliographies and citations for LaTeX documents, a typesetting system often used by mathematicians, physicists, and computer scientists - or students of these disciplines. However, LaTeX has also found its way into other fields such as psychology, biology, sociology, and even law (see jurabib). It is also used for Pandoc-based systems such as R Markdown."),(0,r.kt)("p",null,"While some maintain bibliographic data by hand, LaTeX is mainly used in conjunction with literature management software such as CiteDrive or JabRef, both of which were developed to meet BibTeX reference management needs and facilitate online searching, importing, and collaboration to better manage bibliographic data."))}f.isMDXComponent=!0}}]);