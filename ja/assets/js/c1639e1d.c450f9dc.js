"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(8009);const o={slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},l=void 0,c={unversionedId:"fields/chapter",id:"fields/chapter",title:"BibTeX field type: chapter",description:"In the world of scholarly writing, citations serve as the backbone for validating arguments and referencing existing works. The chapter field in BibTeX entries further refines this by allowing users to specify the exact chapter, section, or range of pages being referred to in a cited book. This field is particularly important in inbook and incollection entries, facilitating more precise referencing and aiding readers in locating the exact source material. Let's delve deeper into understanding and effectively using the chapter field in BibTeX.",source:"@site/docs/fields/chapter.mdx",sourceDirName:"fields",slug:"/fields/chapter",permalink:"/ja/fields/chapter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/chapter.mdx",tags:[],version:"current",frontMatter:{slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},sidebar:"tutorialSidebar",previous:{title:"booktitle",permalink:"/ja/fields/booktitle"},next:{title:"crossref",permalink:"/ja/fields/crossref"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Formatting and Usage",id:"formatting-and-usage",level:3},{value:"Example",id:"example",level:3},{value:"Points to Remember",id:"points-to-remember",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the world of scholarly writing, citations serve as the backbone for validating arguments and referencing existing works. The ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field in BibTeX entries further refines this by allowing users to specify the exact chapter, section, or range of pages being referred to in a cited book. This field is particularly important in ",(0,i.kt)("inlineCode",{parentName:"p"},"inbook")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incollection")," entries, facilitating more precise referencing and aiding readers in locating the exact source material. Let's delve deeper into understanding and effectively using the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field in BibTeX."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field is utilized to numerically represent a specific chapter or section within a book that you wish to cite. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"inbook")," entries, including the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field is mandatory to provide detailed citation information. However, it is not applicable for the ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," entry type as this type is used to cite a book in its entirety, thus not requiring specific chapter details."),(0,i.kt)("h3",{id:"formatting-and-usage"},"Formatting and Usage"),(0,i.kt)("p",null,"To accurately represent the chapter or section you are citing, employ the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field as illustrated below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@inbook{ReferenceID,\n  author  = {Author Name},\n  title   = {Title of the Book},\n  chapter = {Chapter Number},\n  pages   = {Page Range},\n  year    = {Publication Year},\n  publisher = {Publisher Name},\n  address   = {Publication Location},\n}\n")),(0,i.kt)("p",null,'In the above template, replace "Chapter Number" with the actual number of the chapter you are citing. If citing a specific section or range of pages instead, this can be indicated in the ',(0,i.kt)("inlineCode",{parentName:"p"},"pages")," field."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's a concrete example demonstrating how to properly use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@inbook{Mueller2014The,\n  author   = {Hans Mueller},\n  title    = {Theories of Modern Physics},\n  chapter  = {2},\n  pages    = {23-45},\n  year     = 2014,\n  publisher= {Scientific Press},\n  address  = {New York, USA},\n}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field is used to specifically reference chapter 2 of the cited book, allowing readers to easily locate the referenced material."),(0,i.kt)("h3",{id:"points-to-remember"},"Points to Remember"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Specificity"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"chapter")," field helps in pinpointing the exact section of the book being referred to, promoting precise and accurate citation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mandatory for ",(0,i.kt)("inlineCode",{parentName:"strong"},"inbook")," Entries"),": When using the ",(0,i.kt)("inlineCode",{parentName:"li"},"inbook")," entry type, the inclusion of the ",(0,i.kt)("inlineCode",{parentName:"li"},"chapter")," field is mandatory to provide a detailed reference."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Not Applicable for ",(0,i.kt)("inlineCode",{parentName:"strong"},"book")," Entries"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"chapter")," field is not used in ",(0,i.kt)("inlineCode",{parentName:"li"},"book")," entries as these entries are meant to cite the entire book.")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Mastering the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," field in BibTeX not only enhances the accuracy of your citations but also aids readers in efficiently locating the cited material within larger works. Remember to maintain consistency in your formatting to ensure a well-organized and professional bibliography. Always double-check your entries to prevent any errors and uphold the standards of scholarly writing."))}f.isMDXComponent=!0}}]);