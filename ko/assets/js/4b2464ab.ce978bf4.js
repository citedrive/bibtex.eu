"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,u=m["".concat(c,".").concat(p)]||m[p]||b[p]||o;return n?r.createElement(u,i(i({ref:t},f),{},{components:n})):r.createElement(u,i({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="How do I create a .BIB file to manage my BibTeX references?",l={unversionedId:"faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references",id:"faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references",title:"How do I create a .BIB file to manage my BibTeX references?",description:"If you're looking for a way to manage your BibTeX references, you may be wondering how to create a .BIB file. In this article, we'll show you how to do it! We'll also provide some tips on how to use \".BIB\" files effectively.",source:"@site/docs/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references.md",sourceDirName:"faq",slug:"/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references",permalink:"/ko/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How can I use BibTeX to cite a website in LaTeX?",permalink:"/ko/faq/how-can-i-use-bibtex-to-cite-a-website"},next:{title:"How to Use BibTeX-Related Commands for LaTeX Documents",permalink:"/ko/faq/how-to-use-bibtex-related-commands-for-latex-documents"}},c={},s=[{value:"Creating a bib file by hand",id:"creating-a-bib-file-by-hand",level:2}],f={toc:s},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},"How do I create a .BIB file to manage my BibTeX references?"),(0,a.kt)("p",null,"If you're looking for a way to manage your ",(0,a.kt)("inlineCode",{parentName:"p"},"BibTeX")," references, you may be wondering how to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".BIB file"),". In this article, we'll show you how to do it! We'll also provide some tips on how to use \".BIB\" files effectively."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.citedrive.com/"},"CiteDrive")," is a web-based collaborative reference management tool built on BibTeX that auto-syncs with publishing systems such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},"Overleaf")," and ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},"RStudio")," and does the formatting around your bib file for you.")),(0,a.kt)("h2",{id:"creating-a-bib-file-by-hand"},"Creating a bib file by hand"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("inlineCode",{parentName:"p"},".BIB file")," is actually quite simple. All you need to do is create a text file with the ",(0,a.kt)("inlineCode",{parentName:"p"},".bib")," extension. You can then add your BibTeX references to this file, one per line. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@article{smith201X,\n    title        = {An interesting article},\n    author       = {John Smith},\n    year         = {201X},\n    journal      = {Journal of Interesting Articles}\n}\n")),(0,a.kt)("p",null,"Once you have your ",(0,a.kt)("inlineCode",{parentName:"p"},".BIB file")," created, you can then use it in your LaTeX documents by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliography{filename}")," command. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage{natbib}\n\n\\begin{document}\n\n...\n\n\\bibliography{filename}\n\n\\end{document}\n")),(0,a.kt)("p",null,"That's all there is to it! Creating a ",(0,a.kt)("inlineCode",{parentName:"p"},".BIB file")," is a simple way to manage your BibTeX references. Be sure to check out our other articles on BibTeX for more tips and tricks!"))}b.isMDXComponent=!0}}]);