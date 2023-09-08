"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(u,a(a({ref:t},b),{},{components:n})):i.createElement(u,a({ref:t},b))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={},a="How to Use BibTeX-Related Commands for LaTeX Documents",l={unversionedId:"faq/how-to-use-bibtex-related-commands-for-latex-documents",id:"faq/how-to-use-bibtex-related-commands-for-latex-documents",title:"How to Use BibTeX-Related Commands for LaTeX Documents",description:"In order to use BibTeX in LaTeX, you need to know the following commands: \\bibliographystyle{}, \\bibliography, and \\cite{KEY}. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.",source:"@site/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.md",sourceDirName:"faq",slug:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",permalink:"/ru/faq/how-to-use-bibtex-related-commands-for-latex-documents",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/ru/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},next:{title:"How to Use URLs in BibTeX Entries",permalink:"/ru/faq/how-to-use-urls-in-bibtex-entries"}},s={},c=[{value:"bibliographystyle",id:"bibliographystyle",level:2},{value:"bibliography",id:"bibliography",level:2},{value:"cite",id:"cite",level:2}],b={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-bibtex-related-commands-for-latex-documents"},"How to Use BibTeX-Related Commands for LaTeX Documents"),(0,o.kt)("p",null,"In order to use BibTeX in LaTeX, you need to know the following commands: ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{<style name>}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bib-file}"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}"),". In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents."),(0,o.kt)("h2",{id:"bibliographystyle"},"bibliographystyle"),(0,o.kt)("p",null,"The citation style is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bibliographystyle{<style name>}"),". BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a ",(0,o.kt)("inlineCode",{parentName:"p"},".bst")," extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers ",(0,o.kt)("inlineCode",{parentName:"p"},"plain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unsrt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"abbrv")," as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example."),(0,o.kt)("h2",{id:"bibliography"},"bibliography"),(0,o.kt)("p",null,"The bibliography is created in the document by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibfile}")," if the file name of the BibTeX file with literature records is ",(0,o.kt)("inlineCode",{parentName:"p"},"bibfile.bib"),"."),(0,o.kt)("h2",{id:"cite"},"cite"),(0,o.kt)("p",null,"In a LaTeX document, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}")," is replaced by the citation given in the BibTeX file with this ID, which, for example, is ",(0,o.kt)("inlineCode",{parentName:"p"},"(Author, Year)")," in the final PDF."))}p.isMDXComponent=!0}}]);