"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8898],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8009:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294);const i=()=>{const[e,n]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},7060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905)),o=t(8009);const a={slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},s=void 0,l={unversionedId:"fields/crossref",id:"fields/crossref",title:"BibTeX field type: crossref",description:"The crossref field in BibTeX is designed to streamline and simplify the referencing process when you have multiple entries citing the same source, particularly in cases involving proceedings or collections. Instead of repetitively listing the same details across numerous entries, crossref allows you to specify common fields in one central entry, reducing redundancy and maintaining a cleaner database. Below, we provide an in-depth exploration of the functionality and application of the crossref field in BibTeX.",source:"@site/docs/fields/crossref.mdx",sourceDirName:"fields",slug:"/fields/crossref",permalink:"/fields/crossref",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/crossref.mdx",tags:[],version:"current",frontMatter:{slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},sidebar:"tutorialSidebar",previous:{title:"chapter",permalink:"/fields/chapter"},next:{title:"doi",permalink:"/fields/doi"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"Syntax and Structure",id:"syntax-and-structure",level:3},{value:"Example",id:"example",level:3},{value:"Utilization Tips",id:"utilization-tips",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX is designed to streamline and simplify the referencing process when you have multiple entries citing the same source, particularly in cases involving ",(0,i.kt)("inlineCode",{parentName:"p"},"proceedings")," or collections. Instead of repetitively listing the same details across numerous entries, ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," allows you to specify common fields in one central entry, reducing redundancy and maintaining a cleaner database. Below, we provide an in-depth exploration of the functionality and application of the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In a typical bibliography, it's not uncommon to reference several parts of a larger work, like a conference proceeding or a collected volume. This is where the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field comes in handy. By using ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref"),", you can define the shared attributes of the larger work in one entry, and then reference this entry in other citations, thus ensuring uniformity and reducing the risk of inconsistency in your bibliography."),(0,i.kt)("h3",{id:"syntax-and-structure"},"Syntax and Structure"),(0,i.kt)("p",null,"To implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," functionality, you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref = {citationkey}")," syntax, where ",(0,i.kt)("inlineCode",{parentName:"p"},"citationkey")," is a unique identifier for the cross-referenced entry. The ",(0,i.kt)("inlineCode",{parentName:"p"},"citationkey")," should be unique to maintain the integrity of cross-referencing."),(0,i.kt)("p",null,"Here is a basic structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{UNIQUECITATIONKEY,\n    commonfield1 = {common data 1},\n    commonfield2 = {common data 2},\n    ...\n}\n\n@entrytype{citationkey1,\n    uniquefield1 = {unique data 1},\n    crossref     = {UNIQUECITATIONKEY},\n}\n\n@entrytype{citationkey2,\n    uniquefield2 = {unique data 2},\n    crossref     = {UNIQUECITATIONKEY},\n}\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's a practical example to illustrate how the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field can be used to efficiently cite multiple entries from the same proceedings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@proceedings{ASE2023,\n    title       = {Proceedings of the 38th IEEE/ACM International Conference on Automated Software Engineering},\n    year        = 2023,\n    publisher   = {IEEE},\n    address     = {San Francisco, California, USA},\n}\n\n@inproceedings{Smith2023,\n    author      = {John Smith},\n    title       = {Automated Code Generation: Innovations and Challenges},\n    pages       = {15-29},\n    crossref    = {ASE2023},\n}\n\n@inproceedings{Doe2023,\n    author      = {Jane Doe},\n    title       = {Towards a New Era of Software Testing},\n    pages       = {30-45},\n    crossref    = {ASE2023},\n}\n")),(0,i.kt)("p",null,"In the above example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASE2023")," citation key is used to cross-reference two different ",(0,i.kt)("inlineCode",{parentName:"p"},"inproceedings")," entries, maintaining consistency while reducing repetitive information."),(0,i.kt)("h3",{id:"utilization-tips"},"Utilization Tips"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Unique Citation Key"),": Ensure to assign a unique citation key to each entry, including the cross-referenced entry, to prevent confusion and maintain a clear cross-referencing structure."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Appropriate Use of Crossref"),": While ",(0,i.kt)("inlineCode",{parentName:"li"},"crossref")," is particularly beneficial for proceedings, it can also be applied to book chapters (",(0,i.kt)("inlineCode",{parentName:"li"},"incollection"),") and other similar entry types where multiple references from a single source occur."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Integrity"),": Utilizing ",(0,i.kt)("inlineCode",{parentName:"li"},"crossref")," promotes data integrity by minimizing the possibility of inconsistencies in common fields across multiple entries.")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX allows for an organized, streamlined, and efficient approach to referencing multiple entries from a single source. By minimizing redundancy and promoting consistency, you can maintain a clean, professional bibliography that adheres to scholarly standards."),(0,i.kt)("p",null,"Remember to review and verify your BibTeX entries to ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossref")," field is implemented accurately, fostering clarity and coherence in your academic writings."))}f.isMDXComponent=!0}}]);