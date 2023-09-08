"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,b=u["".concat(c,".").concat(d)]||u[d]||f[d]||l;return r?i.createElement(b,a(a({ref:t},p),{},{components:r})):i.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const l={slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},a="BibTeX field type: title",o={unversionedId:"fields/title",id:"fields/title",title:"BibTeX field type: title",description:"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account.",source:"@site/docs/fields/title.md",sourceDirName:"fields",slug:"/fields/title",permalink:"/zh-CN/fields/title",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/title.md",tags:[],version:"current",frontMatter:{slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},sidebar:"tutorialSidebar",previous:{title:"series",permalink:"/zh-CN/fields/series"},next:{title:"type",permalink:"/zh-CN/fields/type"}},c={},s=[{value:"example",id:"example",level:2},{value:"full example",id:"full-example",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bibtex-field-type-title"},"BibTeX field type: title"),(0,n.kt)("p",null,"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account."),(0,n.kt)("h2",{id:"example"},"example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tex"},"\n@article{...,\n    title={What is bioinformatics? An introduction and overview},\n}\n")),(0,n.kt)("h2",{id:"full-example"},"full example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tex"},"@article{luscombe2001bioinformatics,\n  title={What is bioinformatics? An introduction and overview},\n  author={Luscombe, Nicholas M and Greenbaum, Dov and Gerstein, Mark},\n  journal={Yearbook of medical informatics},\n  volume={10},\n  number={01},\n  pages={83--100},\n  year={2001},\n  publisher={Georg Thieme Verlag KG}\n}\n")))}f.isMDXComponent=!0}}]);