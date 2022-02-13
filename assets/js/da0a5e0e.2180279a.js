(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9884],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},170:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={slug:"title",title:"title",author:"CiteDrive",author_title:"Seamless BibTeX reference management for Overleaf and other modern LaTeX editors.",author_url:"https://citedrive.com/en/",author_image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",tags:["bibtex","biblatex","address"],date:new Date("2022-01-04T00:00:00.000Z")},c="title",u={permalink:"/fields/title",source:"@site/fields/title.md",title:"title",description:"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account.",date:"2022-01-04T00:00:00.000Z",formattedDate:"January 4, 2022",tags:[{label:"bibtex",permalink:"/fields/tags/bibtex"},{label:"biblatex",permalink:"/fields/tags/biblatex"},{label:"address",permalink:"/fields/tags/address"}],readingTime:.36,truncated:!1,prevItem:{title:"series",permalink:"/fields/series"},nextItem:{title:"type",permalink:"/fields/type"}},s=[{value:"example",id:"example",children:[]},{value:"full example",id:"full-example",children:[]}],p={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@article{...,\n    title={What is bioinformatics? An introduction and overview},\n}\n")),(0,i.kt)("h2",{id:"full-example"},"full example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{luscombe2001bioinformatics,\n  title={What is bioinformatics? An introduction and overview},\n  author={Luscombe, Nicholas M and Greenbaum, Dov and Gerstein, Mark},\n  journal={Yearbook of medical informatics},\n  volume={10},\n  number={01},\n  pages={83--100},\n  year={2001},\n  publisher={Georg Thieme Verlag KG}\n}\n")))}f.isMDXComponent=!0}}]);