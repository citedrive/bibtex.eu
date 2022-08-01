"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3165],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(b,o(o({ref:e},s),{},{components:n})):a.createElement(b,o({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1983:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(3117),i=(n(7294),n(3905));const r={title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",sidebar_label:"Using Natbib (Quick start)",sidebar_position:3},o="A Short Guide to Reference Management using natbib with BibTeX",l={unversionedId:"natbib",id:"natbib",title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",source:"@site/docs/natbib.md",sourceDirName:".",slug:"/natbib",permalink:"/natbib",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/natbib.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"A Short Guide to Reference Management using natbib with BibTeX",description:"Natbib is a LaTeX package that allows you to customise citations in the text around the \\CITE command. This short tutorial shows you how to manage your references with BibTeX and natbib. ",sidebar_label:"Using Natbib (Quick start)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using R Markdown (Quick start)",permalink:"/rmarkdown"},next:{title:"BibTeX FAQ",permalink:"/faq/"}},d={},p=[{value:"Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib",id:"getting-started-using-parenthetical-and-textualnarrative-in-text-citations-with-natbib",level:2},{value:"<code>cite{*}</code> commands provided by natbib",id:"cite-commands-provided-by-natbib",level:2},{value:"Options for <code>natbib</code>",id:"options-for-natbib",level:2},{value:"References and more",id:"references-and-more",level:2}],s={toc:p};function c(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-short-guide-to-reference-management-using-natbib-with-bibtex"},"A Short Guide to Reference Management using natbib with BibTeX"),(0,i.kt)("p",null,"The natbib package adds new features to the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite{*}")," command in LaTeX that includes in-text citations with various options and customizations, especially for author-year schemes and displaying the textual and parenthetical when using BibTeX."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is worth noting that the package is compatible with both author-year and numerical citations and with the standard bibliography (",(0,i.kt)("inlineCode",{parentName:"p"},"*.bst"),") files.")),(0,i.kt)("p",null,"This article explains how to use natbib to format and cite bibliographic sources."),(0,i.kt)("h2",{id:"getting-started-using-parenthetical-and-textualnarrative-in-text-citations-with-natbib"},"Getting started: Using Parenthetical and Textual/Narrative In-Text Citations with natbib"),(0,i.kt)("p",null,"We specify a minimal structure, similar to the one discussed in the previous section. To do this, we load the library with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackage{natbib}"),". The library provides options that can be passed via ",(0,i.kt)("inlineCode",{parentName:"p"},"\\usepackagee[options]{{natbib}"),", which we cover later. The basic citation commands in Natbib are ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet{*}")," for textual/narrative citations and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citep{*}")," for parenthetical citations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage{natbib}\n\\bibliographystyle{apalike}\n\\title{A Short Guide to Reference Management using natbib with BibTeX}\n\\author{CiteDrive}\n\\date {January 1988}\n\n\\begin{document}\n\n\\maketitle\n\\textbf{Narrative citation:} \\citet{Doe:1966} investigated the risks of incorrectly \\\\\nrecorded [...], which results in distortion.\n\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\n\\citep{Doe:1966}.\n\n\\medskip\n\n\\bibliography{sample}\n\n\\end{document}\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A Short Guide to Reference Management using natbib with BibTeX",src:n(380).Z,width:"1192",height:"1008"})),(0,i.kt)("h2",{id:"cite-commands-provided-by-natbib"},(0,i.kt)("inlineCode",{parentName:"h2"},"cite{*}")," commands provided by natbib"),(0,i.kt)("p",null,"The following table summarizes the differences between the commands, based on ",(0,i.kt)("inlineCode",{parentName:"p"},"cite{*}"),", and what you might expect to see. Both numeric and author-year styles are included, as well as multiple citations."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As we subsequently discover, we should note that some examples are not chosen sensibly: Hardly ever will two different sources share one chapter. ",(0,i.kt)("inlineCode",{parentName:"p"},"\\citet*{...}")," lists all authors without et. al.   Nevertheless, the table should offer a solid understanding of how the commands behave. ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command (single citation)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (author-year)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (Numeric)"),(0,i.kt)("th",{parentName:"tr",align:null},"Command (Multiple citations)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (author-year)"),(0,i.kt)("th",{parentName:"tr",align:null},"Output (Numeric)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet[chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1, chap. 4]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet[chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, chap. 4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"1, 2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, 2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][chap.~4]{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, chap. 4]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep[see][chap.~4]{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(see Doe, 1966; Smith, 201X, chap. 4)"),(0,i.kt)("td",{parentName:"tr",align:null},"[see 1, 2, chap. 4]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet*{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citet*{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"Doe (1966); Smith (201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"Doe ","[1]",", Smith ","[2]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep*{Doe:1966}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\\citep*{Doe:1966,smith201X}")),(0,i.kt)("td",{parentName:"tr",align:null},"(Doe, 1966; Smith, 201X)"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 2]")))),(0,i.kt)("h2",{id:"options-for-natbib"},"Options for ",(0,i.kt)("inlineCode",{parentName:"h2"},"natbib")),(0,i.kt)("h2",{id:"references-and-more"},"References and more"))}c.isMDXComponent=!0},380:function(t,e,n){e.Z=n.p+"assets/images/output_example_bibtex_natbib-f0d22412c4148db735c651eca39c742b.png"}}]);