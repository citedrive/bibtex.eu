"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9202],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=i,h=d["".concat(u,".").concat(p)]||d[p]||b[p]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5825:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var n=a(3117),i=(a(7294),a(3905));const r={title:"Getting Started with BibLaTeX: A Quick Guide",sidebar_label:"Using BibLaTeX (Quick start)",sidebar_position:5},o="Getting Started with BibLaTeX: A Quick Guide",l={unversionedId:"biblatex",id:"biblatex",title:"Getting Started with BibLaTeX: A Quick Guide",description:"The following guide is still in the works, but since BibLaTeX is seen by many as the BibTeX killer (and we do not disagree), we thought it would be helpful to give you a head start. Please keep in mind that many options and customizations are available in BibLaTeX, and we will gradually expand the section.",source:"@site/docs/biblatex.md",sourceDirName:".",slug:"/biblatex",permalink:"/da/biblatex",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/biblatex.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Getting Started with BibLaTeX: A Quick Guide",sidebar_label:"Using BibLaTeX (Quick start)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using Natbib (Quick start)",permalink:"/da/natbib"},next:{title:"BibTeX Converters",permalink:"/da/converters/"}},u={},s=[],c={toc:s};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-biblatex-a-quick-guide"},"Getting Started with BibLaTeX: A Quick Guide"),(0,i.kt)("p",null,"The following guide is still in the works, but since BibLaTeX is seen by many as the BibTeX killer (and we do not disagree), we thought it would be helpful to give you a head start. Please keep in mind that many options and customizations are available in BibLaTeX, and we will gradually expand the section."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install BibLaTeX: Before you can use BibLaTeX, you must first install it on your computer. This is usually accomplished by installing a LaTeX distribution that includes BibLaTeX, such as MikTeX or TeX Live, or by using Overleaf, which, like many other packages, includes everything, including styles, out of the box. "),(0,i.kt)("li",{parentName:"ol"},"Add the BibLaTeX package to your LaTeX document: To add BibLaTeX to your LaTeX document, you need to include the following code in the preamble of your document:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[style=authoryear,backend=biber]{biblatex}\n")),(0,i.kt)("p",null,'This line tells LaTeX to use the BibLaTeX package with the "authoryear" style and the "biber" backend. If that makes sense to you, you can also use BibTeX as a backend. However, many features will be missing, and we should emphasize that using BibTeX is not recommended - even for nostalgic reasons. '),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"If you're used to BibTeX, everything has stayed the same except that BibLaTeX now supports a few more types and fields. You keep your references in a separate bibliographic database, a text file with a ",(0,i.kt)("inlineCode",{parentName:"li"},".bib-file")," extension. Here's an example of a simple database, which we may call ",(0,i.kt)("inlineCode",{parentName:"li"},"bibliography.bib"),": ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@book{key,   \n    author = {Author, A.},   \n    title = {The Title of the Book},   \n    year = {2021},   \n    publisher = \n    {Publisher}, \n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"To include the bib-file (your reference database), use the following command in your TeX document: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\addbibresource{bibliography.bib}\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"To cite a reference in your document, use the following syntax:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\autocite{key}\n")),(0,i.kt)("p",null,'where "key" is the key of the reference you want to cite.'),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"To include the bibliography, or reference list into for your document, you need to include the following code in your document where you want the bibliography to appear:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\printbibliography\n")),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Finally, use a LaTeX compiler, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"pdflatex")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"xelatex"),", to compile your document. BibLaTeX will automatically generate the bibliography based on the references you have cited in your paper when you compile your document.")),(0,i.kt)("p",null,"That's all! You should now be able to use BibLaTeX to manage your references and citations in your LaTeX documents after following these simple steps. Remember that BibLaTeX is a highly customizable tool; as previously stated, we will add more in the future. But for the time being, you should be able to get started right away."))}b.isMDXComponent=!0}}]);