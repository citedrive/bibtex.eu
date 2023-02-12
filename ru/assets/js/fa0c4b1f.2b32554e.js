"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4088],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(r),p=i,f=b["".concat(s,".").concat(p)]||b[p]||u[p]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},449:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return g}});var n,i,o,a=r(3117),c=r(7294),s=r(3905),l=r(7446),d=r(2125);const u=d.ZP.div(n||(n=(0,l.Z)(["\n  border: 4px solid #000;\n  border-radius: 36px;\n  padding: 1rem;\n  \n"]))),b=d.ZP.input(i||(i=(0,l.Z)(["\n  border: 0px solid #000;\n  border-radius: 36px;\n  padding: 1rem;\n  width: 100%;\n  margin-bottom: 1rem;\n"]))),p=d.ZP.button(o||(o=(0,l.Z)(['\n  border: 0px solid #000;\n  border-radius: 36px;\n  padding: 1rem;\n  width: 100%;\n  margin-bottom: 1rem;\n  pointer: "cursor";\n'])));var f=e=>{let{from:t,to:r}=e;return c.createElement(c.Fragment,null,c.createElement(u,null,"doi"===t&&"bibtex"===r&&c.createElement(c.Fragment,null,c.createElement(b,{autofocus:!0,placeholder:"Paste the DOI"}),c.createElement(p,{disabled:!0},"Convert DOI to BibTeX"),c.createElement("br",null))))};const m={title:"DOI to BibTeX converter",description:"",sidebar_label:"Doi to BibTex converter",sidebar_position:5},h=void 0,v={unversionedId:"converters/doi-to-bibtex-converter",id:"converters/doi-to-bibtex-converter",title:"DOI to BibTeX converter",description:"",source:"@site/docs/converters/doi-to-bibtex-converter.mdx",sourceDirName:"converters",slug:"/converters/doi-to-bibtex-converter",permalink:"/ru/converters/doi-to-bibtex-converter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/converters/doi-to-bibtex-converter.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"DOI to BibTeX converter",description:"",sidebar_label:"Doi to BibTex converter",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"BibTeX Converters",permalink:"/ru/converters/"},next:{title:"BibTeX FAQ",permalink:"/ru/faq/"}},y={},g=[{value:"What is a DOI?",id:"what-is-a-doi",level:2},{value:"What is BibTeX?",id:"what-is-bibtex",level:2}],O={toc:g};function x(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(f,{from:"doi",to:"bibtex",mdxType:"Converter"}),(0,s.kt)("h2",{id:"what-is-a-doi"},"What is a DOI?"),(0,s.kt)("p",null,'DOI stands for "Digital Object Identifier." It\'s a one-of-a-kind identifier that permanently identifies a digital object like a research paper, article, or dataset. The identifier is a string of characters used to gain online access to the object, such as through a website or database. The DOI system allows you to find, access, and cite digital objects over time, even if the URL changes or the object is moved to a new location. The International DOI Foundation maintains the DOI system, widely used in the scholarly publishing industry.'),(0,s.kt)("h2",{id:"what-is-bibtex"},"What is BibTeX?"),(0,s.kt)("p",null,"BibTeX is a LaTeX tool for managing bibliographic references and formatting bibliographies. It is widely used in the academic community for typesetting scientific papers and articles. The tool allows you to save and organize bibliographic information in a plain text file with a.bib extension, such as the author, title, journal, and publication year of a paper. The data in a BibTeX file can be easily formatted and inserted into a LaTeX document using LaTeX commands, making it simple to create a consistent and accurate bibliography."),(0,s.kt)("p",null,'To encode bibliographic information, BibTeX employs a special syntax and a set of predefined entry types, such as "article," "book," and "inproceedings," to categorize different types of references. There are also numerous tools and websites that can generate BibTeX entries based on information you provide, such as a paper\'s DOI or ISBN.'))}x.isMDXComponent=!0}}]);