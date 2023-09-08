"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,b=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"Understanding the techreport Entry Type in BibTeX",sidebar_label:"techreport"},a='Understanding the "techreport" Entry Type in BibTeX',s={unversionedId:"types/techreport",id:"types/techreport",title:"Understanding the techreport Entry Type in BibTeX",description:'BibTeX is a well-known bibliographic management system that researchers and scholars use to organize and format their bibliographies. It is especially useful in computer science, but it can also be used in other fields. "techreport" is an entry type in BibTeX that is used to cite technical reports.',source:"@site/docs/types/techreport.md",sourceDirName:"types",slug:"/types/techreport",permalink:"/cs/types/techreport",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/techreport.md",tags:[],version:"current",frontMatter:{title:"Understanding the techreport Entry Type in BibTeX",sidebar_label:"techreport"},sidebar:"tutorialSidebar",previous:{title:"proceedings",permalink:"/cs/types/proceedings"},next:{title:"unpublished",permalink:"/cs/types/unpublished"}},c={},p=[],l={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-the-techreport-entry-type-in-bibtex"},'Understanding the "techreport" Entry Type in BibTeX'),(0,i.kt)("p",null,'BibTeX is a well-known bibliographic management system that researchers and scholars use to organize and format their bibliographies. It is especially useful in computer science, but it can also be used in other fields. "techreport" is an entry type in BibTeX that is used to cite technical reports.'),(0,i.kt)("p",null,"Technical reports are documents that contain in-depth technical information about a specific subject or project. They are frequently created by organizations, institutions, or researchers and are intended for distribution to a specific group of people. Technical reports are rarely formally published, but they are a valuable source of information and should be cited in academic work."),(0,i.kt)("p",null,'In BibTeX, the "techreport" entry type is used to provide all relevant information about a technical report, such as the author, title, institution, year, and report number. A BibTeX entry for a technical report is shown below:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{key,   \n    author = {Jane Smith},   \n    title = {Technical Report on Advanced Robotics},   \n    institution = {Institute of Technology},   \n    year = {2021},   \n    number = {TR-1234}\n}\n")),(0,i.kt)("p",null,'In this example, the "key" field is a unique identifier that is used to refer to the source in the text of the document. The "author" field lists the author(s) of the technical report, the "title" field provides the title of the report, the "institution" field lists the institution where the report was written, the "year" field provides the year the report was written, and the "number" field provides the report number.'))}h.isMDXComponent=!0}}]);