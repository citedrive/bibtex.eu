"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,b=c["".concat(u,".").concat(d)]||c[d]||h[d]||s;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={title:"Understanding the `unpublished` Entry Type in BibTeX",sidebar_label:"unpublished"},a="Understanding the unpublished Entry Type in BibTeX",o={unversionedId:"types/unpublished",id:"types/unpublished",title:"Understanding the `unpublished` Entry Type in BibTeX",description:'BibTeX is a popular bibliographic management system that assists researchers and academics in organizing and formatting their bibliographies. It is widely used in computer science, but it is also useful in many other fields that require citation of sources. The "unpublished" entry type in BibTeX is used to cite sources that have not been officially published, such as theses, dissertations, and technical reports.',source:"@site/docs/types/unpublished.md",sourceDirName:"types",slug:"/types/unpublished",permalink:"/ru/types/unpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/unpublished.md",tags:[],version:"current",frontMatter:{title:"Understanding the `unpublished` Entry Type in BibTeX",sidebar_label:"unpublished"},sidebar:"tutorialSidebar",previous:{title:"techreport",permalink:"/ru/types/techreport"}},u={},l=[],p={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-the-unpublished-entry-type-in-bibtex"},"Understanding the ",(0,i.kt)("inlineCode",{parentName:"h1"},"unpublished")," Entry Type in BibTeX"),(0,i.kt)("p",null,'BibTeX is a popular bibliographic management system that assists researchers and academics in organizing and formatting their bibliographies. It is widely used in computer science, but it is also useful in many other fields that require citation of sources. The "unpublished" entry type in BibTeX is used to cite sources that have not been officially published, such as theses, dissertations, and technical reports.'),(0,i.kt)("p",null,'The "unpublished" entry type is a versatile entry type that allows authors to include all relevant information about an unpublished source, such as the author\'s name, title, institution, and date. An example of a BibTeX entry for an unpublished source is as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@unpublished{key,   \n    author = {John Doe},   \n    title = {The Importance of Unpublished Sources},   \n    institution = {University of Example},   \n    year = {2022}, \n}\n")),(0,i.kt)("p",null,'The "key" field in this example is a unique identifier that is used to refer to the source in the document\'s text. The "author" field contains the name(s) of the source\'s author(s), the "title" field contains the title of the source, the "institution" field contains the name of the institution where the source was written, and the "year" field contains the year the source was written.'),(0,i.kt)("p",null,'It should be noted that the "unpublished" entry type should only be used for sources that have not yet been formally published. If a source has been published, even if only online, it should be cited as a "techreport," "mastersthesis," or "phdthesis," depending on the type of publication.'))}h.isMDXComponent=!0}}]);