"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3764],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=i.createContext({}),u=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,f=p["".concat(d,".").concat(g)]||p[g]||s[g]||n;return r?i.createElement(f,o(o({ref:t},c),{},{components:r})):i.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7899:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return u}});var i=r(3117),a=(r(7294),r(3905));const n={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Hur man formaterar citat och bibliografier i RStudio med CiteDrive och Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},o="Hur man formaterar citat och bibliografier i RStudio med CiteDrive och Quarto",l={permalink:"/sv/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md",source:"@site/i18n/sv/docusaurus-plugin-content-blog/2022-08-28-quarto.md",title:"Hur man formaterar citat och bibliografier i RStudio med CiteDrive och Quarto",description:"Beh\xf6ver du formatera citat och en bibliografi f\xf6r en forskningsrapport i RStudio? Har du sv\xe5rt att h\xe5lla reda p\xe5 alla dina referenser och formateringskrav? Var inte r\xe4dd! CiteDrive och Quarto kan hj\xe4lpa dig. Det h\xe4r blogginl\xe4gget visar hur du anv\xe4nder b\xe5da verktygen f\xf6r att skapa vackra, korrekt formaterade citat och bibliografier.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 augusti 2022",tags:[{label:"citedrive",permalink:"/sv/blog/tags/citedrive"},{label:"rstudio",permalink:"/sv/blog/tags/rstudio"},{label:"quarto",permalink:"/sv/blog/tags/quarto"},{label:"rmarkdown",permalink:"/sv/blog/tags/rmarkdown"}],readingTime:2.42,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Hur man formaterar citat och bibliografier i RStudio med CiteDrive och Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/sv/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citat och anv\xe4ndning av referenser p\xe5 omslaget: En guide f\xf6r forskare",permalink:"/sv/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},d={authorsImageUrls:[void 0]},u=[{value:"Kom ig\xe5ng",id:"kom-ig\xe5ng",level:2},{value:"Steg 1: Inkludera referenser i ditt projekt",id:"steg-1-inkludera-referenser-i-ditt-projekt",level:4},{value:"Steg 2: Anslut ditt Quarto-dokument till CiteDrive",id:"steg-2-anslut-ditt-quarto-dokument-till-citedrive",level:3},{value:"Steg 3: Kopiera citatnycklarna.",id:"steg-3-kopiera-citatnycklarna",level:4},{value:"Ytterligare information",id:"ytterligare-information",level:2},{value:"Quarto",id:"quarto",level:4},{value:"CiteDrive",id:"citedrive",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Beh\xf6ver du formatera citat och en bibliografi f\xf6r en forskningsrapport i RStudio? Har du sv\xe5rt att h\xe5lla reda p\xe5 alla dina referenser och formateringskrav? Var inte r\xe4dd! CiteDrive och Quarto kan hj\xe4lpa dig. Det h\xe4r blogginl\xe4gget visar hur du anv\xe4nder b\xe5da verktygen f\xf6r att skapa vackra, korrekt formaterade citat och bibliografier."),(0,a.kt)("h2",{id:"kom-ig\xe5ng"},"Kom ig\xe5ng"),(0,a.kt)("p",null,"F\xf6r att formatera citat och bibliografier i RStudio med CiteDrive och Quarto f\xf6ljer du de h\xe4r stegen:"),(0,a.kt)("h4",{id:"steg-1-inkludera-referenser-i-ditt-projekt"},"Steg 1: Inkludera referenser i ditt projekt"),(0,a.kt)("p",null,'F\xf6rst m\xe5ste du skapa ett CiteDrive-konto genom att g\xe5 till deras webbplats och v\xe4lja knappen "Sign Up". Om du fyller i ditt konto kan du sedan skapa ett "R-Markdown"-projekt (',(0,a.kt)("em",{parentName:"p"},"det fungerar f\xf6r Quarto, oroa dig inte"),"); namnge det helt enkelt och ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"fyll projektet med referenser"),". Ditt projekt kan se ut ungef\xe4r s\xe5 h\xe4r:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Exempel",src:r(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("h3",{id:"steg-2-anslut-ditt-quarto-dokument-till-citedrive"},"Steg 2: Anslut ditt Quarto-dokument till CiteDrive"),(0,a.kt)("p",null,'Nu ska vi ansluta din nya CiteDrive till ditt Quarto-dokument. F\xf6r att g\xf6ra detta klickar du p\xe5 knappen "bib". D\xe5 \xf6ppnas en ny flik med alla dina poster i BibTeX-format. Kopiera webbadressen fr\xe5n den nya fliken och klistra in den i YAML-delen av din QMD-fil.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"F\xf6ljande klipp visar fl\xf6det n\xe4r du anv\xe4nder R Markdown. Principen f\xf6r Quarto \xe4r dock densamma:"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h4",{id:"steg-3-kopiera-citatnycklarna"},"Steg 3: Kopiera citatnycklarna."),(0,a.kt)("p",null,"N\xe4r dina referenser har importerats kan du infoga dem i ditt Quarto-dokument. F\xf6r att g\xf6ra detta \xe5terv\xe4nder du till ditt CiteDrive-projekt och en eller flera referenser som du vill infoga i ditt dokument och klickar p\xe5 citera-knappen. CiteDrive kopierar citatnyckeln till ditt urklipp."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Exempel",src:r(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"Klistra in citatnyckeln i det n\xf6dv\xe4ndiga avsnittet i ditt Quarto-dokument."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Klistra in citatnyckel",src:r(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'N\xe4r du har lagt in nyckeln i avsnittet klickar du p\xe5 "render". Citatet kommer att skrivas ut i \xf6nskad stil och referensen kommer att visas i slutet av dokumentet.'),(0,a.kt)("p",null,"Det var allt! CiteDrive \xe4r det perfekta verktyget f\xf6r att hj\xe4lpa dig att hantera din bibliografi och infoga citat i Quarto-dokument. Testa det nu och se hur mycket tid det kan spara dig!"),(0,a.kt)("h2",{id:"ytterligare-information"},"Ytterligare information"),(0,a.kt)("h4",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto \xe4r ett kraftfullt verktyg f\xf6r forskningsskrivande som automatiskt kan generera citat och bibliografier i olika stilar. Det st\xf6der bibliografifiler i BibTeX och andra format, vilket g\xf6r det enkelt att h\xe5lla reda p\xe5 dina referenser."),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive \xe4r ett referenshanteringsverktyg som g\xf6r att du kan organisera, enkelt lagra och s\xf6ka dina bibliografiska uppgifter. Organisera dina team och referenser i projekt, till exempel f\xf6r en dedikerad Quarto-uppsats. CiteDrive h\xe5ller automatiskt dina referenser i Quarto uppdaterade n\xe4r du eller n\xe5gon av dina lagkamrater uppdaterar de bibliografiska uppgifterna i ditt projekt."),(0,a.kt)("p",null,"F\xf6redrar du BibLaTeX? Inga problem, CiteDrive \xe4r 100 % BibTeX-styrt och ger frihet i fr\xe5ga om f\xe4lt och typer f\xf6r varje post, vilket inneb\xe4r att du kan anv\xe4nda vilket BibTeX-baserat paket eller alternativ som helst, till exempel BibLaTeX."))}s.isMDXComponent=!0},6213:function(e,t,r){t.Z=r.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:function(e,t,r){t.Z=r.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:function(e,t,r){t.Z=r.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);