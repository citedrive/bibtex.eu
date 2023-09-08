"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},a="BibTeX field type: title",o={unversionedId:"fields/title",id:"fields/title",title:"BibTeX field type: title",description:"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/fields/title.md",sourceDirName:"fields",slug:"/fields/title",permalink:"/sv/fields/title",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/title.md",tags:[],version:"current",frontMatter:{slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},sidebar:"tutorialSidebar",previous:{title:"series",permalink:"/sv/fields/series"},next:{title:"type",permalink:"/sv/fields/type"}},c={},s=[{value:"example",id:"example",level:2},{value:"full example",id:"full-example",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-title"},"BibTeX field type: title"),(0,i.kt)("p",null,"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@article{...,\n    title={What is bioinformatics? An introduction and overview},\n}\n")),(0,i.kt)("h2",{id:"full-example"},"full example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{luscombe2001bioinformatics,\n  title={What is bioinformatics? An introduction and overview},\n  author={Luscombe, Nicholas M and Greenbaum, Dov and Gerstein, Mark},\n  journal={Yearbook of medical informatics},\n  volume={10},\n  number={01},\n  pages={83--100},\n  year={2001},\n  publisher={Georg Thieme Verlag KG}\n}\n")))}f.isMDXComponent=!0}}]);