"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,b=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4716:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const o={},a="When to Enclose .bib File Entry Fields: quotation marks vs. braces",s={unversionedId:"faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces",id:"faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces",title:"When to Enclose .bib File Entry Fields: quotation marks vs. braces",description:"Do you ever wonder when to enclose your .bib file entry fields with quotes and when to enclose them with braces? Do they even matter? The answer is: it doesn't matter.",source:"@site/docs/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces.mdx",sourceDirName:"faq",slug:"/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces",permalink:"/it/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is BibTeX, and What Can It Do for You?",permalink:"/it/faq/what-is-bibtex-and-what-can-it-do-for-you"},next:{title:"BibTeX Fields",permalink:"/it/fields/"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"Enclosing fields with <code>{}</code>",id:"enclosing-fields-with-",level:3},{value:"Enclosing fields with <code>&quot;&quot;</code>",id:"enclosing-fields-with--1",level:3}],u={toc:c};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces"},"When to Enclose .bib File Entry Fields: quotation marks vs. braces"),(0,i.kt)("p",null,'Do you ever wonder when to enclose your .bib file entry fields with quotes and when to enclose them with braces? Do they even matter? The answer is: it doesn\'t matter.\nSome people prefer to use "" simply for aesthetical reasons, and others prefer to use ',(0,i.kt)("inlineCode",{parentName:"p"},"{}"),", arguing that it's preferable if you need to use a ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," character within a field.\nNote, that these are the only acceptable ways to enclose fields."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"enclosing-fields-with-"},"Enclosing fields with ",(0,i.kt)("inlineCode",{parentName:"h3"},"{}")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@misc{CiteDrive2022,\n    title        = {CiteDrive brings reference management to Overleaf},\n    author       = {CiteDrive, Inc},\n    year         = 2022,\n    note         = {\\url{https://www.citedrive.com/overleaf} [Accessed: (Use the date of access)]}\n}\n")),(0,i.kt)("h3",{id:"enclosing-fields-with--1"},"Enclosing fields with ",(0,i.kt)("inlineCode",{parentName:"h3"},'""')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},'@misc{CiteDrive2022,\n    title        = "CiteDrive brings reference management to Overleaf",\n    author       = "CiteDrive, Inc",\n  ...\n}\n')),(0,i.kt)("p",null,"There is no right or wrong answer, as long as the information within the field is enclosed correctly. So why not experiment and see which method works best for you?"))}f.isMDXComponent=!0}}]);