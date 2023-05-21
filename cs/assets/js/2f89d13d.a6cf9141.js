"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6862],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),o=n(6010),i=n(2802),a=n(9960),c=n(3919),l=n(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},n)}function f(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t;let{item:n}=e;const o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:o,title:n.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},1587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(3117),o=(n(7294),n(3905)),i=n(2991),a=n(2802);const c={},l="BibTeX FAQ",u={unversionedId:"faq/index",id:"faq/index",title:"BibTeX FAQ",description:"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/cs/faq/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doi to BibTex converter",permalink:"/cs/converters/doi-to-bibtex-converter"},next:{title:"How can I use BibTeX to cite a website in LaTeX?",permalink:"/cs/faq/how-can-i-use-bibtex-to-cite-a-website"}},s={},m=[],p={toc:m};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-faq"},"BibTeX FAQ"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.")),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);