"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},l="BibTeX field type: email",o={unversionedId:"fields/email",id:"fields/email",title:"BibTeX field type: email",description:"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/fields/email.md",sourceDirName:"fields",slug:"/fields/email",permalink:"/tr/fields/email",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/email.md",tags:[],version:"current",frontMatter:{slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"editor",permalink:"/tr/fields/editor"},next:{title:"howpublished",permalink:"/tr/fields/howpublished"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-email"},"BibTeX field type: email"),(0,i.kt)("p",null,"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported."),(0,i.kt)("p",null,"To specify email addresses, the following variants are recommended:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As a note to display at the end of the reference:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},'@book{ ... ,\n author = {Muller, John},\n\n ...\n\n note = "{\\tt john.muller@example.com}"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To display behind the family name:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n author = {Muller {\\tt john.muller@example.com}, John },\n\n ...\n\n}\n")))}m.isMDXComponent=!0}}]);