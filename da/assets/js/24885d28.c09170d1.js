"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9358],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,b=s["".concat(u,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},f),{},{components:n})):r.createElement(b,a({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={slug:"journal",title:"BibTeX field type: journal",sidebar_label:"journal"},a="BibTeX field type: journal",l={unversionedId:"fields/journal",id:"fields/journal",title:"BibTeX field type: journal",description:"The name of the journal in which the journal was published.",source:"@site/docs/fields/journal.md",sourceDirName:"fields",slug:"/fields/journal",permalink:"/da/fields/journal",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/journal.md",tags:[],version:"current",frontMatter:{slug:"journal",title:"BibTeX field type: journal",sidebar_label:"journal"},sidebar:"tutorialSidebar",previous:{title:"institution",permalink:"/da/fields/institution"},next:{title:"month",permalink:"/da/fields/month"}},u={},c=[],f={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-journal"},"BibTeX field type: journal"),(0,o.kt)("p",null,"The name of the journal in which the journal was published."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"\n@article{ ... ,\n journal = {2007},\n}\n")))}p.isMDXComponent=!0}}]);