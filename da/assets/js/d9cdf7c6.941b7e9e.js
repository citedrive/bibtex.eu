"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8553],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},759:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l}});var n=r(3117),a=(r(7294),r(3905));const i={slug:"address",title:"BibTeX field type: address",sidebar_label:"address"},s="BibTeX field type: address",o={unversionedId:"fields/address",id:"fields/address",title:"BibTeX field type: address",description:"The address-field contains the publisher's (or any other institution) address.",source:"@site/docs/fields/address.md",sourceDirName:"fields",slug:"/fields/address",permalink:"/da/fields/address",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/address.md",tags:[],version:"current",frontMatter:{slug:"address",title:"BibTeX field type: address",sidebar_label:"address"},sidebar:"tutorialSidebar",previous:{title:"BibTeX Fields",permalink:"/da/fields/"},next:{title:"annote",permalink:"/da/fields/annote"}},d={},l=[{value:"Example",id:"example",level:2},{value:"phdthesis",id:"phdthesis",level:3},{value:"PROCEEDINGS / INPROCEEDINGS",id:"proceedings--inproceedings",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-address"},"BibTeX field type: address"),(0,a.kt)("p",null,"The address-field contains the publisher's (or any other institution) address.\nIn many cases, the full address is not entered or is omitted for any significant and known publishers (cf. Van Lauen)."),(0,a.kt)("p",null,"The author can add the American publication's address, the city's name, followed by the state (USPS abbreviation) in brackets."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For example, "Columbus, Ohio" is indicated as "Columbus, OH."')),(0,a.kt)("p",null,"In Europe, the state is not abbreviated but given in full."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For example, "Dusseldorf, Germany."')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"phdthesis"},"phdthesis"),(0,a.kt)("p",null,"The author could add the university's address where the beneficiary PhD-Candidate has written his doctoral thesis, which the author wants to cite."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@phdthesis{Peterson2003very,\n  author  = {Arnold Peterson},\n  title   = {My very own PhD-Thesis by Arnold Peterson},\n  school  = {The university / school name},\n  year    = 2004,\n  address = {The address of the University / school},\n  month   = 1,\n  ...\n}\n")),(0,a.kt)("h3",{id:"proceedings--inproceedings"},"PROCEEDINGS / INPROCEEDINGS"),(0,a.kt)("p",null,'Although controversially argued the author may add the address where the conference took place. In contrast, the publisher/organizer\'s address, if necessary, will be added to the "publisher" / organizer field in the reference above types.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@PROCEEDINGS{ (...),\n\n  ...\n\n  address = {The address of the proceedings},\n\n  ...\n}\n")))}u.isMDXComponent=!0}}]);