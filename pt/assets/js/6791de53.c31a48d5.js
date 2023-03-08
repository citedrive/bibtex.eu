"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9004],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3461:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var n=a(3117),i=(a(7294),a(3905));const r={title:"Guide to Managing Citations, Bibliographies, and References in Overleaf -- BibTeX, BibLaTeX, Natbib",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",sidebar_label:"Using Overleaf (Quick start)",sidebar_position:2},o="Guide to Managing Citations, Bibliographies, and References in Overleaf",l={unversionedId:"overleaf",id:"overleaf",title:"Guide to Managing Citations, Bibliographies, and References in Overleaf -- BibTeX, BibLaTeX, Natbib",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",source:"@site/docs/overleaf.md",sourceDirName:".",slug:"/overleaf",permalink:"/pt/overleaf",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/overleaf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guide to Managing Citations, Bibliographies, and References in Overleaf -- BibTeX, BibLaTeX, Natbib",description:"Discover how to manage citations, bibliographies, and references in Overleaf using BibTeX, Natbib, and BibLaTeX. Plus, streamline your workflow with CiteDrive.",sidebar_label:"Using Overleaf (Quick start)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using LaTeX (Quick start)",permalink:"/pt/"},next:{title:"Using R Markdown (Quick start)",permalink:"/pt/rmarkdown"}},s={},u=[{value:"CiteDrive",id:"citedrive",level:2},{value:"BibTeX",id:"bibtex",level:2},{value:"Natbib",id:"natbib",level:2},{value:"BibLaTeX",id:"biblatex",level:2}],c={toc:u};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guide-to-managing-citations-bibliographies-and-references-in-overleaf"},"Guide to Managing Citations, Bibliographies, and References in Overleaf"),(0,i.kt)("p",null,"If you're writing a research paper or a thesis, it's essential to have a proper citation and reference management system in place. In this guide, we will cover how to manage citations, bibliographies, and references using BibTeX, Natbib, and BibLaTeX in Overleaf."),(0,i.kt)("h2",{id:"citedrive"},"CiteDrive"),(0,i.kt)("p",null,"CiteDrive is a robust citation and reference management tool that works in tandem with Overleaf.\nIt is compatible with all popular reference management systems, such as BibTeX, Natbib, and BibLaTeX. Read more:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex"},"Overleaf.com | Blog -- Better bibliography management with Overleaf, CiteDrive, and BibTeX/BibLaTeX \u2014 about 3.0 and an updated guide")),(0,i.kt)("h2",{id:"bibtex"},"BibTeX"),(0,i.kt)("p",null,"BibTeX is a popular reference management system used in LaTeX. It allows you to create a separate bibliography file with all your references and then cite them in your LaTeX document. Here are the steps to using BibTeX in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Create a new file in your Overleaf project and name it "references.bib."'),(0,i.kt)("li",{parentName:"ol"},'Open the "references.bib" file and add your references in the following format:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"`@article{AuthorYear,   \n    author = {Author, First and Author, Second},   \n    title = {Title of the Article},   \n    journal = {Journal Name},   \n    volume = {Volume Number},   \n    number = {Issue Number},   \n    pages = {Page Numbers},   \n    year = {Year Published},   \n    publisher = {Publisher Name} \n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, add the following commands where you want your citations to appear:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\bibliography{references} \n\\bibliographystyle{plain}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography")," command tells LaTeX where to find your bibliography file, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliographystyle")," command specifies the citation style you want to use."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"To cite a reference, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\cite{AuthorYear}")," command in your LaTeX document. This command will generate a citation in the format specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"bibliographystyle")," command.")),(0,i.kt)("h2",{id:"natbib"},"Natbib"),(0,i.kt)("p",null,"Natbib is another popular citation management system used in LaTeX. It provides more flexibility in formatting citations and references than BibTeX. Here are the steps to using Natbib in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following commands to your LaTeX document's preamble:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage{natbib} \n\\bibliographystyle{plainnat}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citep{AuthorYear}")," command to create a parenthetical citation or the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citet{AuthorYear}")," command to create a citation in the text."),(0,i.kt)("li",{parentName:"ol"},"To create a bibliography, add the following command to the end of your document:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\bibliography{references}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'In your "references.bib" file, add your references in the following format:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{AuthorYear,   \n    author = {Author, First and Author, Second},   \n    title = {Title of the Article},   \n    journal = {Journal Name},   \n    volume = {Volume Number},   \n    number = {Issue Number},   \n    pages = {Page Numbers},   \n    year = {Year Published},   \n    publisher = {Publisher Name} \n}\n")),(0,i.kt)("h2",{id:"biblatex"},"BibLaTeX"),(0,i.kt)("p",null,"BibLaTeX is a newer reference management system that provides even more flexibility than Natbib. It allows you to use different citation styles within the same document and provides more control over the formatting of references. Here are the steps to using BibLaTeX in Overleaf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following commands to your LaTeX document's preamble:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\usepackage[style=authoryear,backend=bibtex]{biblatex} \n\\bibliography{references}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," option specifies the citation style you want to use, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," option specifies the reference management system you want to use (BibTeX in this case)."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your LaTeX document, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\\parencite{AuthorYear}")," command to create a parenthetical citation or the `\\textcite{Author")))}b.isMDXComponent=!0}}]);