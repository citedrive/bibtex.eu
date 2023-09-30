"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},2865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905)),a=r(8009);const o={slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},l=void 0,p={unversionedId:"fields/type",id:"fields/type",title:"BibTeX field type: type",description:"The type field in a BibTeX entry is utilized to indicate the specific type or category of a publication. This field can be particularly useful when you are referencing reports, theses, or other documents that have more detailed categorizations. Indicating the specific type can provide the reader with more context about the nature of the document you are referencing.",source:"@site/docs/fields/type.mdx",sourceDirName:"fields",slug:"/fields/type",permalink:"/da/fields/type",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/type.mdx",tags:[],version:"current",frontMatter:{slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},sidebar:"tutorialSidebar",previous:{title:"title",permalink:"/da/fields/title"},next:{title:"volume",permalink:"/da/fields/volume"}},c={},s=[{value:"Example",id:"example",level:2}],d={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field in a BibTeX entry is utilized to indicate the specific type or category of a publication. This field can be particularly useful when you are referencing reports, theses, or other documents that have more detailed categorizations. Indicating the specific type can provide the reader with more context about the nature of the document you are referencing."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"Commonly used in conjunction with entries like ",(0,i.kt)("inlineCode",{parentName:"p"},"@techreport")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@thesis"),', it helps to denote a more specific sub-type of the publication, such as a "Research Note", "Government Report", "Master\'s Thesis", "PhD Dissertation", and so forth. This field can help in distinguishing the document from others of a similar category.'),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field, it is advisable to use a descriptive and standardized terminology that aligns with the norms of the field or discipline you are working in. This promotes clarity and helps the reader in understanding the exact nature of the referenced document."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is an example demonstrating how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field in a technical report entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{key,\n    type={Research Note},\n}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),' field is populated with the descriptor "Research Note", indicating that the technical report is a note detailing some research findings.'),(0,i.kt)("p",null,"By utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field effectively, you can provide more detailed information about the documents you are referencing, facilitating a deeper understanding and smoother navigation of your bibliography for the reader."))}f.isMDXComponent=!0}}]);