"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},a="BibTeX field type: crossref",s={unversionedId:"fields/crossref",id:"fields/crossref",title:"BibTeX field type: crossref",description:"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/fields/crossref.md",sourceDirName:"fields",slug:"/fields/crossref",permalink:"/cs/fields/crossref",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/crossref.md",tags:[],version:"current",frontMatter:{slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},sidebar:"tutorialSidebar",previous:{title:"chapter",permalink:"/cs/fields/chapter"},next:{title:"doi",permalink:"/cs/fields/doi"}},c={},l=[],p={toc:l},f="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-crossref"},"BibTeX field type: crossref"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.")),(0,o.kt)("p",null,"If you have several entries referring to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"proceedings"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"crossref")," to specify fields common to several entries only once by defining ",(0,o.kt)("inlineCode",{parentName:"p"},"crossref = {citationkey}"),". Where ",(0,o.kt)("inlineCode",{parentName:"p"},"citationkey")," is the citation key of the cross-referenced entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@inproceedings{...,\n    crossref = {CITATIONKEY},\n}\n\n@proceedings{CITATIONKEY,\n    title = {...},\n    ... = {...},\n}\n")))}d.isMDXComponent=!0}}]);