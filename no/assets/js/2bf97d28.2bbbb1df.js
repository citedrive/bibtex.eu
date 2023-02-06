"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8642],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=o,d=f["".concat(p,".").concat(b)]||f[b]||u[b]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3177:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const a={slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},i="BibTeX field type: pages",l={unversionedId:"fields/pages",id:"fields/pages",title:"BibTeX field type: pages",description:"Page range of, for example, a book. You can separate these either with commas or double dashes.",source:"@site/docs/fields/pages.md",sourceDirName:"fields",slug:"/fields/pages",permalink:"/no/fields/pages",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/pages.md",tags:[],version:"current",frontMatter:{slug:"pages",title:"BibTeX field type: pages",sidebar_label:"pages"},sidebar:"tutorialSidebar",previous:{title:"organization",permalink:"/no/fields/organization"},next:{title:"publisher",permalink:"/no/fields/publisher"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-pages"},"BibTeX field type: pages"),(0,o.kt)("p",null,"Page range of, for example, a book. You can separate these either with commas or double dashes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@book{key,\n  pages={33--44},\n}\n\n@book{key,\n  pages={22,33--44},\n}\n\n@book{key,\n  pages={17},\n}\n")))}u.isMDXComponent=!0}}]);