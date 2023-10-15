"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7212],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>b});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(i),h=n,b=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return i?r.createElement(b,l(l({ref:t},u),{},{components:i})):r.createElement(b,l({ref:t},u))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<o;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(7294);const n=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},5223:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=i(7462),n=(i(7294),i(3905)),o=i(8009);const l={slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},a=void 0,s={unversionedId:"fields/howpublished",id:"fields/howpublished",title:"BibTeX field type: howpublished",description:"The howpublished field is utilized in the @misc entry type, usually to address those source types that are not directly supported by BibTeX. This field comes in handy, especially when you are citing web pages and you want to provide a URL.",source:"@site/docs/fields/howpublished.mdx",sourceDirName:"fields",slug:"/fields/howpublished",permalink:"/it/fields/howpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/howpublished.mdx",tags:[],version:"current",frontMatter:{slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},sidebar:"tutorialSidebar",previous:{title:"email",permalink:"/it/fields/email"},next:{title:"institution",permalink:"/it/fields/institution"}},p={},u=[],c={toc:u},d="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field is utilized in the ",(0,n.kt)("inlineCode",{parentName:"p"},"@misc")," entry type, usually to address those source types that are not directly supported by BibTeX. This field comes in handy, especially when you are citing web pages and you want to provide a URL."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"In your BibTeX entries, you can utilize the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field to detail the publication medium or source of the reference. This field is highly useful when you need to incorporate non-traditional sources into your references, such as web pages or online reports."),(0,n.kt)("p",null,"Here is an example demonstrating how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field to specify a URL when citing a web page:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@misc{BibTeXeu,\n  title = {{Reference management with BibTeX: A short guide}},\n  howpublished = {\\url{https://bibtex.eu/}},\n  note = {Accessed: 2022-06-12}\n}\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"howpublished")," field is used to provide the URL of the web page being cited, offering readers a direct link to the source. Remember to include a ",(0,n.kt)("inlineCode",{parentName:"p"},"note")," field to specify the access date, which is a common requirement when citing online sources."))}h.isMDXComponent=!0}}]);