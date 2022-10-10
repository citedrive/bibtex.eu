"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[926],{3905:function(e,i,t){t.d(i,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function u(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},c=function(e){var i=s(e.components);return n.createElement(l.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},h=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=s(t),m=r,g=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return t?n.createElement(g,o(o({ref:i},c),{},{components:t})):n.createElement(g,o({ref:i},c))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var u={};for(var l in i)hasOwnProperty.call(i,l)&&(u[l]=i[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},560:function(e,i,t){t.r(i),t.d(i,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=t(3117),r=(t(7294),t(3905));const a={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Formatierung von Zitaten und Bibliographien in RStudio mit CiteDrive und Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},o="Wie man Zitate und Bibliographien in RStudio mit CiteDrive und Quarto formatiert",u={permalink:"/de/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md",source:"@site/i18n/de/docusaurus-plugin-content-blog/2022-08-28-quarto.md",title:"Formatierung von Zitaten und Bibliographien in RStudio mit CiteDrive und Quarto",description:"M\xfcssen Sie Zitate und ein Literaturverzeichnis f\xfcr eine Forschungsarbeit in RStudio formatieren? F\xe4llt es Ihnen schwer, den \xdcberblick \xfcber alle Ihre Referenzen und Formatierungsanforderungen zu behalten? Keine Angst! CiteDrive und Quarto k\xf6nnen Ihnen helfen. Dieser Blogbeitrag zeigt Ihnen, wie Sie mit beiden Tools sch\xf6ne, korrekt formatierte Zitate und Bibliografien erstellen k\xf6nnen.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28. August 2022",tags:[{label:"citedrive",permalink:"/de/blog/tags/citedrive"},{label:"rstudio",permalink:"/de/blog/tags/rstudio"},{label:"quarto",permalink:"/de/blog/tags/quarto"},{label:"rmarkdown",permalink:"/de/blog/tags/rmarkdown"}],readingTime:2.46,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"Formatierung von Zitaten und Bibliographien in RStudio mit CiteDrive und Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},nextItem:{title:"Wie man einen DOI in einem BibTeX-Eintrag mithilfe von CiteDrive umwandelt",permalink:"/de/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive"}},l={authorsImageUrls:[void 0]},s=[{value:"Los geht&#39;s",id:"los-gehts",level:2},{value:"Schritt 1: Referenzen in Ihr Projekt einbinden",id:"schritt-1-referenzen-in-ihr-projekt-einbinden",level:3},{value:"Schritt 2: Verbinden Sie Ihr Quarto-Dokument mit CiteDrive",id:"schritt-2-verbinden-sie-ihr-quarto-dokument-mit-citedrive",level:3},{value:"Schritt 3: Kopieren Sie die Zitierschl\xfcssel.",id:"schritt-3-kopieren-sie-die-zitierschl\xfcssel",level:3},{value:"Zus\xe4tzliche Informationen",id:"zus\xe4tzliche-informationen",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],c={toc:s};function d(e){let{components:i,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"M\xfcssen Sie Zitate und ein Literaturverzeichnis f\xfcr eine Forschungsarbeit in RStudio formatieren? F\xe4llt es Ihnen schwer, den \xdcberblick \xfcber alle Ihre Referenzen und Formatierungsanforderungen zu behalten? Keine Angst! CiteDrive und Quarto k\xf6nnen Ihnen helfen. Dieser Blogbeitrag zeigt Ihnen, wie Sie mit beiden Tools sch\xf6ne, korrekt formatierte Zitate und Bibliografien erstellen k\xf6nnen."),(0,r.kt)("h2",{id:"los-gehts"},"Los geht's"),(0,r.kt)("p",null,"Um Zitate und Bibliographien in RStudio mit CiteDrive und Quarto zu formatieren, folgen Sie diesen Schritten:"),(0,r.kt)("h3",{id:"schritt-1-referenzen-in-ihr-projekt-einbinden"},"Schritt 1: Referenzen in Ihr Projekt einbinden"),(0,r.kt)("p",null,'Zun\xe4chst m\xfcssen Sie ein CiteDrive-Konto erstellen, indem Sie auf die Website gehen und die Schaltfl\xe4che "Sign Up" (Anmelden) anklicken. Wenn Sie Ihr Konto vervollst\xe4ndigt haben, k\xf6nnen Sie ein "R-Markdown"-Projekt (',(0,r.kt)("em",{parentName:"p"},"das funktioniert auch bei Quarto, keine Sorge"),") erstellen; benennen Sie es einfach und ",(0,r.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"f\xfcllen Sie das Projekt mit Referenzen"),". Ihr Projekt k\xf6nnte etwa so aussehen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CiteDrive - Beispiel",src:t(5616).Z,width:"2226",height:"1344"})),(0,r.kt)("h3",{id:"schritt-2-verbinden-sie-ihr-quarto-dokument-mit-citedrive"},"Schritt 2: Verbinden Sie Ihr Quarto-Dokument mit CiteDrive"),(0,r.kt)("p",null,'Verbinden wir nun Ihr neues CiteDrive mit Ihrem Quarto-Dokument. Klicken Sie dazu auf die Schaltfl\xe4che "bib". Daraufhin \xf6ffnet sich eine neue Registerkarte mit all Ihren Eintr\xe4gen im BibTeX-Format. Kopieren Sie die URL aus der neuen Registerkarte und f\xfcgen Sie sie in den YAML-Teil Ihrer QMD-Datei ein.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,r.kt)("p",null,"Der folgende Clip zeigt den Ablauf bei Verwendung von R Markdown. Das Prinzip von Quarto ist jedoch das gleiche:"),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"schritt-3-kopieren-sie-die-zitierschl\xfcssel"},"Schritt 3: Kopieren Sie die Zitierschl\xfcssel."),(0,r.kt)("p",null,"Sobald Ihre Referenzen importiert sind, k\xf6nnen Sie sie in Ihr Quarto Dokument einf\xfcgen. Kehren Sie dazu zu Ihrem CiteDrive Projekt zur\xfcck und klicken Sie auf den Zitierknopf. CiteDrive kopiert dann den Zitierschl\xfcssel in Ihre Zwischenablage."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CiteDrive - Beispiel",src:t(6213).Z,width:"856",height:"320"})),(0,r.kt)("p",null,"F\xfcgen Sie den Zitierschl\xfcssel an der gew\xfcnschten Stelle in Ihrem Quarto-Dokument ein."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CiteDrive - Zitierschl\xfcssel einf\xfcgen",src:t(1906).Z,width:"2054",height:"186"})),(0,r.kt)("p",null,'Nachdem Sie den Schl\xfcssel in den Abschnitt eingef\xfcgt haben, klicken Sie auf "Rendern". Das Zitat wird in dem von Ihnen gew\xfcnschten Stil ausgegeben, und die Referenz erscheint am Ende Ihres Dokuments.'),(0,r.kt)("p",null,"Das war's schon! CiteDrive ist das perfekte Werkzeug, um Ihre Bibliographie zu verwalten und Zitate in Quarto-Dokumente einzuf\xfcgen. Testen Sie es jetzt und sehen Sie, wie viel Zeit Sie damit sparen k\xf6nnen!"),(0,r.kt)("h2",{id:"zus\xe4tzliche-informationen"},"Zus\xe4tzliche Informationen"),(0,r.kt)("h3",{id:"quarto"},"Quarto"),(0,r.kt)("p",null,"Quarto ist ein leistungsf\xe4higes Werkzeug zur Erstellung von wissenschaftlichen Arbeiten, das automatisch Zitate und Bibliographien in verschiedenen Stilen erzeugen kann. Es unterst\xfctzt Bibliographiedateien in BibTeX und anderen Formaten, so dass Sie leicht den \xdcberblick \xfcber Ihre Referenzen behalten k\xf6nnen."),(0,r.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,r.kt)("p",null,"CiteDrive ist ein Tool zur Verwaltung von Referenzen, mit dem Sie Ihre bibliografischen Daten organisieren, einfach speichern und durchsuchen k\xf6nnen. Organisieren Sie Ihre Teams und Referenzen in Projekten, zum Beispiel f\xfcr eine eigene Quarto-Arbeit. CiteDrive h\xe4lt Ihre Referenzen in Quarto automatisch auf dem neuesten Stand, wenn Sie oder einer Ihrer Mitarbeiter die bibliographischen Daten in Ihrem Projekt aktualisieren."),(0,r.kt)("p",null,"Sie bevorzugen BibLaTeX? Kein Problem, CiteDrive ist zu 100 % BibTeX-f\xe4hig und bietet Freiheit bei den Feldern und Typen f\xfcr jeden Eintrag, d.h. Sie k\xf6nnen jedes BibTeX-basierte Paket oder eine Alternative wie BibLaTeX verwenden."))}d.isMDXComponent=!0},6213:function(e,i,t){i.Z=t.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:function(e,i,t){i.Z=t.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:function(e,i,t){i.Z=t.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);