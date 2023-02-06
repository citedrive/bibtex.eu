"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7086],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=i,b=p["".concat(c,".").concat(s)]||p[s]||f[s]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},a="BibTeX field type: edition",l={unversionedId:"fields/edition",id:"fields/edition",title:"BibTeX field type: edition",description:'The edition of a book, e.g. "edition = " Entering an ordinal number is recommended by default, and the first letter is usually capitalised.',source:"@site/docs/fields/edition.md",sourceDirName:"fields",slug:"/fields/edition",permalink:"/no/fields/edition",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/edition.md",tags:[],version:"current",frontMatter:{slug:"edition",title:"BibTeX field type: edition",sidebar_label:"edition"},sidebar:"tutorialSidebar",previous:{title:"doi",permalink:"/no/fields/doi"},next:{title:"editor",permalink:"/no/fields/editor"}},c={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-edition"},"BibTeX field type: edition"),(0,i.kt)("p",null,'The edition of a book, e.g. "edition = {First}" Entering an ordinal number is recommended by default, and the first letter is usually capitalised.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n\n\n edition = {First},\n\n ...\n\n}\n")))}f.isMDXComponent=!0}}]);