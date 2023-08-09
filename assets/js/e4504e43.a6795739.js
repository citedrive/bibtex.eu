"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6879],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,b=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(b,l(l({ref:t},p),{},{components:n})):i.createElement(b,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return s}});var i=n(3117),o=(n(7294),n(3905));const r={title:"Introduction to BibTeX and the Incollection Type Entry",sidebar_label:"incollection"},l="Introduction to BibTeX and the Incollection Type Entry",a={unversionedId:"types/incollection",id:"types/incollection",title:"Introduction to BibTeX and the Incollection Type Entry",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. It allows you to create a bibliographic database and easily include references in your LaTeX documents. In this guide, we will introduce BibTeX and explain the "incollection" type entry.',source:"@site/docs/types/incollection.md",sourceDirName:"types",slug:"/types/incollection",permalink:"/types/incollection",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/incollection.md",tags:[],version:"current",frontMatter:{title:"Introduction to BibTeX and the Incollection Type Entry",sidebar_label:"incollection"},sidebar:"tutorialSidebar",previous:{title:"inbook",permalink:"/types/inbook"},next:{title:"inproceedings",permalink:"/types/inproceedings"}},c={},s=[{value:"What is BibTeX?",id:"what-is-bibtex",level:2},{value:"What is the Incollection Type Entry?",id:"what-is-the-incollection-type-entry",level:2},{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-bibtex-and-the-incollection-type-entry"},"Introduction to BibTeX and the Incollection Type Entry"),(0,o.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. It allows you to create a bibliographic database and easily include references in your LaTeX documents. In this guide, we will introduce BibTeX and explain the "incollection" type entry.'),(0,o.kt)("h2",{id:"what-is-bibtex"},"What is BibTeX?"),(0,o.kt)("p",null,"BibTeX is a program and file format used to manage bibliographic references in LaTeX documents. With BibTeX, you can store all of your references in a single file, and then include them in your LaTeX documents using citation keys. This makes it easy to add references to your document, change citation styles, and manage large bibliographies."),(0,o.kt)("p",null,'BibTeX has a number of different entry types that you can use to categorize your references. These include "article" for journal articles, "book" for books, "inproceedings" for papers published in conference proceedings, and many more.'),(0,o.kt)("h2",{id:"what-is-the-incollection-type-entry"},"What is the Incollection Type Entry?"),(0,o.kt)("p",null,'The "incollection" BibTeX type is used for chapters or sections of books. It is similar to the "inproceedings" type, but is used for works published in a book rather than a conference proceedings.'),(0,o.kt)("h2",{id:"required-fields"},"Required Fields"),(0,o.kt)("p",null,'The "incollection" BibTeX type requires the following fields:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"author"),": The author(s) of the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The title of the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"booktitle"),": The title of the book containing the chapter or section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publisher"),": The name of the publisher of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"year"),": The year the book was published.")),(0,o.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,o.kt)("p",null,'In addition to the required fields, the "incollection" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the book, if applicable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number"),": The issue number of the book, if applicable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"series"),": The name of the series that the book belongs to, if applicable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages"),": The pages on which the chapter or section appears in the book."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address"),": The location of the publisher."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"month"),": The month the book was published.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,'Here is an example of how to use the "incollection" BibTeX type:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bibtex"},"@incollection{mychapter,\n    title        = {An Analysis of Example},\n    author       = {John Smith},\n    year         = 2022,\n    month        = {June},\n    booktitle    = {The Book of Examples},\n    publisher    = {Example Publisher},\n    address      = {New York, NY},\n    series       = {Example Book Series},\n    volume       = 1,\n    number       = 2,\n    pages        = {123--130},\n    editor       = {Jane Doe}\n}\n\n")),(0,o.kt)("p",null,'In this example, the BibTeX entry defines a chapter titled "An Analysis of Example" authored by John Smith that appeared in the book "The Book of Examples". The book was published in 2022 and edited by Jane Doe. The chapter appeared on pages 123-130 of volume 1, issue 2 of the "Example Book Series" published by Example Publisher in New York, NY.'))}u.isMDXComponent=!0}}]);