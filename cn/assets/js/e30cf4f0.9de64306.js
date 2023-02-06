"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7827],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,b=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},i="BibTeX field type: annote",l={unversionedId:"fields/annote",id:"fields/annote",title:"BibTeX field type: annote",description:"BibTeX Field type",source:"@site/docs/fields/annote.md",sourceDirName:"fields",slug:"/fields/annote",permalink:"/cn/fields/annote",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/annote.md",tags:[],version:"current",frontMatter:{slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/cn/fields/address"},next:{title:"author",permalink:"/cn/fields/author"}},c={},p=[{value:"Example",id:"example",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-annote"},"BibTeX field type: annote"),(0,a.kt)("p",null,"BibTeX Field type: ",(0,a.kt)("inlineCode",{parentName:"p"},"annote")," for 'Annotated bibliography':"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"annote")," field type, the user can store an annotation - a short, descriptive, and also an evaluative summary of the content of the reference the user wants to cite, typically displayed in the bibliography."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"annote")," is then of interest to the reader to determine the sources' quality, relevance, and accuracy in question."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{Mueller2014The,\n\n  ...\n\n  annote={The authors offer a detailed overview of the...  }\n\n  ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference types")),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"Entry types")," can process ",(0,a.kt)("inlineCode",{parentName:"p"},"annote"),". This attribute is considered atypical and is deemed to be optional in all cases."))}s.isMDXComponent=!0}}]);