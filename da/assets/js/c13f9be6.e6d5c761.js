"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,b=s["".concat(d,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},a="BibTeX field type: edition",l={unversionedId:"fields/edition",id:"fields/edition",title:"BibTeX field type: edition",description:'The edition of a book, e.g. "edition = " Entering an ordinal number is recommended by default, and the first letter is usually capitalised.',source:"@site/docs/fields/edition.md",sourceDirName:"fields",slug:"/fields/edition",permalink:"/da/fields/edition",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/edition.md",tags:[],version:"current",frontMatter:{slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},sidebar:"tutorialSidebar",previous:{title:"doi",permalink:"/da/fields/doi"},next:{title:"editor",permalink:"/da/fields/editor"}},d={},c=[],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-edition"},"BibTeX field type: edition"),(0,i.kt)("p",null,'The edition of a book, e.g. "edition = {First}" Entering an ordinal number is recommended by default, and the first letter is usually capitalised.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n\n\n edition = {First},\n\n ...\n\n}\n")))}u.isMDXComponent=!0}}]);