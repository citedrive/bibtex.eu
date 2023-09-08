"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||r;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},l="BibTeX field type: booktitle",a={unversionedId:"fields/booktitle",id:"fields/booktitle",title:"BibTeX field type: booktitle",description:"To cite an `incollection, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an inproceedings, the booktitle-field is used to distinguish. At the same time, title contains the title of the book, or incproceedings`.",source:"@site/docs/fields/booktitle.md",sourceDirName:"fields",slug:"/fields/booktitle",permalink:"/it/fields/booktitle",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/booktitle.md",tags:[],version:"current",frontMatter:{slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},sidebar:"tutorialSidebar",previous:{title:"author",permalink:"/it/fields/author"},next:{title:"chapter",permalink:"/it/fields/chapter"}},c={},p=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-booktitle"},"BibTeX field type: booktitle"),(0,o.kt)("p",null,"To cite an ",(0,o.kt)("inlineCode",{parentName:"p"},"incollection"),", i.e., a part of a book/collection with its own title, or to give a title to an article, part of an ",(0,o.kt)("inlineCode",{parentName:"p"},"inproceedings"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"booktitle"),"-field is used to distinguish. At the same time, ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," contains the title of the ",(0,o.kt)("inlineCode",{parentName:"p"},"book"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"incproceedings"),"."),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mueller2014The,\n  booktitle={ ... }\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mihalcea2006Knowledge,\n    title        = {Knowledge-Based Methods for {WSD}},\n    author       = {Rada Mihalcea},\n    year         = 2006,\n    booktitle    = {Word Sense Disambiguation: Algorithms and Applications},\n    publisher    = {Springer},\n    address      = {Dordrecht, the Netherlands},\n    pages        = {107--132},\n    editor       = {Eneko Agirre and Philip Edmonds}\n}\n")))}u.isMDXComponent=!0}}]);