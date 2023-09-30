"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7294],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,c=u["".concat(o,".").concat(h)]||u[h]||m[h]||a;return i?r.createElement(c,s(s({ref:t},d),{},{components:i})):r.createElement(c,s({ref:t},d))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=i[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(7294);const n=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},386:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(7462),n=(i(7294),i(3905)),a=i(8009);const s={title:"Guide to BibTeX Type MasterThesis",sidebar_label:"phdthesis"},l=void 0,o={unversionedId:"types/mastersthesis",id:"types/mastersthesis",title:"Guide to BibTeX Type MasterThesis",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "masterthesis" BibTeX type is used for master\'s theses. In this guide, we will explain the required and optional fields for the "masterthesis" BibTeX type.',source:"@site/docs/types/mastersthesis.mdx",sourceDirName:"types",slug:"/types/mastersthesis",permalink:"/sv/types/mastersthesis",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/mastersthesis.mdx",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type MasterThesis",sidebar_label:"phdthesis"},sidebar:"tutorialSidebar",previous:{title:"manual",permalink:"/sv/types/manual"},next:{title:"misc",permalink:"/sv/types/misc"}},p={},d=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],u={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "masterthesis" BibTeX type is used for master\'s theses. In this guide, we will explain the required and optional fields for the "masterthesis" BibTeX type.'),(0,n.kt)(a.Z,{mdxType:"CiteDrive"}),(0,n.kt)("h2",{id:"required-fields"},"Required Fields"),(0,n.kt)("p",null,'The "masterthesis" BibTeX type requires the following fields:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"author"),": The author of the thesis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title"),": The title of the thesis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"school"),": The name of the institution that awarded the degree."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"year"),": The year the degree was awarded.")),(0,n.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,n.kt)("p",null,'In addition to the required fields, the "masterthesis" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type"),': The type of the thesis, such as "Master\'s thesis".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"address"),": The location of the institution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"month"),": The month the thesis was submitted."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"note"),": Any additional information about the thesis.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,'Here is an example of how to use the "masterthesis" BibTeX type:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@masterthesis{mythesis,\n    title        = {A Study of Example},\n    author       = {Jane Doe},\n    year         = 2022,\n    month        = {June},\n    address      = {Example City, CA},\n    note         = {Available at \\url{https://example.com/thesis.pdf}},\n    school       = {University of Example},\n    type         = {Master's thesis}\n}\n\n")),(0,n.kt)("p",null,'In this example, the BibTeX entry defines a master\'s thesis authored by Jane Doe titled "A Study of Example". The degree was awarded in 2022 by the University of Example, and the thesis was submitted in June in Example City, CA. The type of the thesis is specified as "Master\'s thesis", and a note is included that provides a URL for the thesis.'))}h.isMDXComponent=!0}}]);