"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4113],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),b=a,c=m["".concat(u,".").concat(b)]||m[b]||s[b]||i;return r?n.createElement(c,l(l({ref:t},p),{},{components:r})):n.createElement(c,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9239:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var n=r(3117),a=(r(7294),r(3905));const i={title:"BibTeX Litteraturhantering - En detaljerad guide f\xf6r LaTeX",description:"L\xe4r dig hur du effektivt kan anv\xe4nda BibTeX f\xf6r litteraturhantering med LaTeX, fr\xe5n att skapa en .bib-fil till integration i ditt LaTeX-dokument.",sidebar_label:"Litteraturhantering i LaTeX med BibTeX (Snabbstart)",sidebar_position:1,slug:"/"},l="BibTeX Litteraturhantering i LaTeX",o={unversionedId:"intro",id:"intro",title:"BibTeX Litteraturhantering - En detaljerad guide f\xf6r LaTeX",description:"L\xe4r dig hur du effektivt kan anv\xe4nda BibTeX f\xf6r litteraturhantering med LaTeX, fr\xe5n att skapa en .bib-fil till integration i ditt LaTeX-dokument.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/sv/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BibTeX Litteraturhantering - En detaljerad guide f\xf6r LaTeX",description:"L\xe4r dig hur du effektivt kan anv\xe4nda BibTeX f\xf6r litteraturhantering med LaTeX, fr\xe5n att skapa en .bib-fil till integration i ditt LaTeX-dokument.",sidebar_label:"Litteraturhantering i LaTeX med BibTeX (Snabbstart)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using R Markdown (Quick start)",permalink:"/sv/rmarkdown"}},u={},d=[{value:"Steg 1: Skapa och fylla en .bib-fil",id:"steg-1-skapa-och-fylla-en-bib-fil",level:2},{value:"Steg 2: Integrera i ett LaTeX-dokument",id:"steg-2-integrera-i-ett-latex-dokument",level:2},{value:"Rekommendationer f\xf6r referenshanterare",id:"rekommendationer-f\xf6r-referenshanterare",level:2}],p={toc:d};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-litteraturhantering-i-latex"},"BibTeX Litteraturhantering i LaTeX"),(0,a.kt)("p",null,"F\xf6r nyb\xf6rjare kan ",(0,a.kt)("strong",{parentName:"p"},"BibTeX")," verka utmanande p\xe5 grund av sina m\xe5nga s\xe4rdrag och format. Men denna guide ger en f\xf6renklad \xf6versikt och visar hur du effektivt kan anv\xe4nda BibTeX med LaTeX."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bHD94qM0vyg",title:"YouTube videospelare",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"steg-1-skapa-och-fylla-en-bib-fil"},"Steg 1: Skapa och fylla en .bib-fil"),(0,a.kt)("p",null,"B\xf6rja med att skapa en ",(0,a.kt)("inlineCode",{parentName:"p"},".bib"),"-fil, t.ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),', och l\xe4gg till BibTeX-poster. Ett typiskt exempel \xe4r att l\xe4gga till en referens f\xf6r "Den gamle och havet" av Ernest Hemingway:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={Den gamle och havet},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,a.kt)("p",null,'Om du bryter ner "anatomin" av denna post beh\xf6ver du bara titta p\xe5 de f\xf6ljande tre komponenterna f\xf6r att f\xf6rst\xe5 hur varje BibTeX-post \xe4r definierad:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Posttyp"),": Med ",(0,a.kt)("inlineCode",{parentName:"li"},"@book")," definierar vi typen av referens, i detta fall en bok."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inmatningsf\xe4lt"),": i detta exempel \xe4r det ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"year"),", och ",(0,a.kt)("inlineCode",{parentName:"li"},"publisher"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Citatnyckel"),": Detta exempel \xe4r ",(0,a.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," och anv\xe4nds f\xf6r att ange in-textcitat i LaTeX, d.v.s. att h\xe4nvisa till k\xe4llan. Med samma exempel g\xf6r vi detta med ",(0,a.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),".")),(0,a.kt)("h2",{id:"steg-2-integrera-i-ett-latex-dokument"},"Steg 2: Integrera i ett LaTeX-dokument"),(0,a.kt)("p",null,"F\xf6r att anv\xe4nda dina referenser i LaTeX, f\xf6lj exemplet nedan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{BibTeX referenser i \\LaTeX}\n\\author{John Andersson}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,a.kt)("p",null,"Efter att ha kompilerat LaTeX-dokumentet kommer du att m\xe4rka att kommandot ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," ers\xe4tts av referensen angiven i BibTeX-filen med det ID:t, i det h\xe4r exemplet ",(0,a.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:r(1049).Z,width:"1146",height:"784"})),(0,a.kt)("p",null,"Den .bib-fil vi kallade ",(0,a.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," definieras i ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," och citat-/bibliografistilen i ",(0,a.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),"."),(0,a.kt)("h2",{id:"rekommendationer-f\xf6r-referenshanterare"},"Rekommendationer f\xf6r referenshanterare"),(0,a.kt)("p",null,"Manuell redigering av BibTeX-filer kan vara tidskr\xe4vande. H\xe4r \xe4r n\xe5gra rekommenderade referenshanterare som kan f\xf6renkla ditt arbete:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," \xe4r ett BibTeX-drivet, kollaborativt och webbaserat verktyg."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," erbjuder omfattande funktioner och bra integration med BibTeX genom till\xe4gget ",(0,a.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," \xe4r en BibTeX-baserad referenshanterare som fungerar plattforms\xf6verskridande.")))}s.isMDXComponent=!0},1049:function(e,t,r){t.Z=r.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);