"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,f=b["".concat(l,".").concat(d)]||b[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[b]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="How to Use URLs in BibTeX Entries",s={unversionedId:"faq/how-to-use-urls-in-bibtex-entries",id:"faq/how-to-use-urls-in-bibtex-entries",title:"How to Use URLs in BibTeX Entries",description:"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/faq/how-to-use-urls-in-bibtex-entries.mdx",sourceDirName:"faq",slug:"/faq/how-to-use-urls-in-bibtex-entries",permalink:"/es/faq/how-to-use-urls-in-bibtex-entries",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-urls-in-bibtex-entries.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Use BibTeX-Related Commands for LaTeX Documents",permalink:"/es/faq/how-to-use-bibtex-related-commands-for-latex-documents"},next:{title:"What is BibTeX, and What Can It Do for You?",permalink:"/es/faq/what-is-bibtex-and-what-can-it-do-for-you"}},l={},u=[{value:"Use the note field type:",id:"use-the-note-field-type",level:2},{value:"Use the howpublished field type:",id:"use-the-howpublished-field-type",level:2},{value:"Use biblatex and its built-in URL field type:",id:"use-biblatex-and-its-built-in-url-field-type",level:2}],p={toc:u},b="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-urls-in-bibtex-entries"},"How to Use URLs in BibTeX Entries"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.")),(0,i.kt)("p",null,"If you're using BibTeX to create bibliographies for your research papers, you may have wondered how to include URLs in your entries."),(0,i.kt)("p",null,"The URL field type is not yet formally supported in BibTeX, although it was planned for version 1.0 by Oren Patashnik. Despite this, the debate regarding this version and its intentions dates back to ",(0,i.kt)("a",{parentName:"p",href:"https://tug.org/TUGboat/tb24-1/patashnik.pdf"},"Patashnik's paper from 2003"),", which is gradually being replaced by Biber-backed biblatex."),(0,i.kt)("p",null,"Therefore, it is likely that you will need to use one of the following workarounds, for example, when citing websites:"),(0,i.kt)("h2",{id:"use-the-note-field-type"},"Use the note field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},'@misc{...,\n  howpublished = "\\url{http://...}"\n}\n')),(0,i.kt)("h2",{id:"use-the-howpublished-field-type"},"Use the howpublished field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},'@misc{...,\n  note = "Available from \\url{http://...}"\n}\n')),(0,i.kt)("h2",{id:"use-biblatex-and-its-built-in-url-field-type"},"Use biblatex and its built-in URL field type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@online{...,\n  url = {http://...}\n}\n")),(0,i.kt)("p",null,"If you choose biblatex, you will need to use Biber as your backend instead of BibTeX. If you want to know more about biblatex and Biber, read our getting started guide.\nIf you have any questions or comments, please let us know. We hope this helped!"))}c.isMDXComponent=!0}}]);