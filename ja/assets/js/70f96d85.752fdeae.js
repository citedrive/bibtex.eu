"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1874],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},l="BibTeX field type: booktitle",a={unversionedId:"fields/booktitle",id:"fields/booktitle",title:"BibTeX field type: booktitle",description:"To cite an `incollection, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an inproceedings, the booktitle-field is used to distinguish. At the same time, title contains the title of the book, or incproceedings`.",source:"@site/docs/fields/booktitle.md",sourceDirName:"fields",slug:"/fields/booktitle",permalink:"/ja/fields/booktitle",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/booktitle.md",tags:[],version:"current",frontMatter:{slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},sidebar:"tutorialSidebar",previous:{title:"author",permalink:"/ja/fields/author"},next:{title:"chapter",permalink:"/ja/fields/chapter"}},c={},p=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-booktitle"},"BibTeX field type: booktitle"),(0,i.kt)("p",null,"To cite an ",(0,i.kt)("inlineCode",{parentName:"p"},"incollection"),", i.e., a part of a book/collection with its own title, or to give a title to an article, part of an ",(0,i.kt)("inlineCode",{parentName:"p"},"inproceedings"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"booktitle"),"-field is used to distinguish. At the same time, ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," contains the title of the ",(0,i.kt)("inlineCode",{parentName:"p"},"book"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"incproceedings"),"."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mueller2014The,\n  booktitle={ ... }\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mihalcea2006Knowledge,\n    title        = {Knowledge-Based Methods for {WSD}},\n    author       = {Rada Mihalcea},\n    year         = 2006,\n    booktitle    = {Word Sense Disambiguation: Algorithms and Applications},\n    publisher    = {Springer},\n    address      = {Dordrecht, the Netherlands},\n    pages        = {107--132},\n    editor       = {Eneko Agirre and Philip Edmonds}\n}\n")))}u.isMDXComponent=!0}}]);