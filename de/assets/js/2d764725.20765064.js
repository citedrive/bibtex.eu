"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},l="BibTeX field type: email",o={unversionedId:"fields/email",id:"fields/email",title:"BibTeX field type: email",description:"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.",source:"@site/docs/fields/email.md",sourceDirName:"fields",slug:"/fields/email",permalink:"/de/fields/email",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/email.md",tags:[],version:"current",frontMatter:{slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"editor",permalink:"/de/fields/editor"},next:{title:"howpublished",permalink:"/de/fields/howpublished"}},p={},s=[],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-email"},"BibTeX field type: email"),(0,a.kt)("p",null,"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported."),(0,a.kt)("p",null,"To specify email addresses, the following variants are recommended:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As a note to display at the end of the reference:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},'@book{ ... ,\n author = {Muller, John},\n\n ...\n\n note = "{\\tt john.muller@example.com}"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To display behind the family name:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n author = {Muller {\\tt john.muller@example.com}, John },\n\n ...\n\n}\n")))}m.isMDXComponent=!0}}]);