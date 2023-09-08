"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),v=a,m=d["".concat(u,".").concat(v)]||d[v]||p[v]||o;return r?i.createElement(m,n(n({ref:t},s),{},{components:r})):i.createElement(m,n({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=v;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var c=2;c<o;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},4231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(7462),a=(r(7294),r(3905));const o={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"\u041a\u0430\u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 RStudio \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CiteDrive \u0438 Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="\u041a\u0430\u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 RStudio \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CiteDrive \u0438 Quarto",l={permalink:"/ru/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2022-08-28-quarto.md",title:"\u041a\u0430\u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 RStudio \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CiteDrive \u0438 Quarto",description:"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0434\u043b\u044f \u043d\u0430\u0443\u0447\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 RStudio? \u0412\u0430\u043c \u0441\u043b\u043e\u0436\u043d\u043e \u0443\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0432\u0441\u0435\u043c\u0438 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e? \u041d\u0435 \u0431\u043e\u0439\u0442\u0435\u0441\u044c! CiteDrive \u0438 Quarto \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u043e\u0447\u044c. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0431\u043b\u043e\u0433\u0430 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0445, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0446\u0438\u0442\u0430\u0442 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0439.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2022 \u0433.",tags:[{label:"citedrive",permalink:"/ru/blog/tags/citedrive"},{label:"rstudio",permalink:"/ru/blog/tags/rstudio"},{label:"quarto",permalink:"/ru/blog/tags/quarto"},{label:"rmarkdown",permalink:"/ru/blog/tags/rmarkdown"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"\u041a\u0430\u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 RStudio \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CiteDrive \u0438 Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/ru/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citing and Using References on Overleaf: A Guide for Researchers",permalink:"/ru/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},u={authorsImageUrls:[void 0]},c=[{value:"\u041d\u0430\u0447\u0430\u0442\u044c",id:"\u043d\u0430\u0447\u0430\u0442\u044c",level:2},{value:"\u0428\u0430\u0433 1: \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442.",id:"\u0448\u0430\u0433-1-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0441\u0441\u044b\u043b\u043a\u0438-\u0432-\u0441\u0432\u043e\u0439-\u043f\u0440\u043e\u0435\u043a\u0442",level:3},{value:"\u0428\u0430\u0433 2: \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0432\u0430\u0448 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 Quarto \u043a CiteDrive",id:"\u0448\u0430\u0433-2-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0432\u0430\u0448-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442-quarto-\u043a-citedrive",level:3},{value:"\u0428\u0430\u0433 3: \u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u043b\u044e\u0447\u0438 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",id:"\u0448\u0430\u0433-3-\u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435-\u043a\u043b\u044e\u0447\u0438-\u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0434\u043b\u044f \u043d\u0430\u0443\u0447\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 RStudio? \u0412\u0430\u043c \u0441\u043b\u043e\u0436\u043d\u043e \u0443\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0432\u0441\u0435\u043c\u0438 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e? \u041d\u0435 \u0431\u043e\u0439\u0442\u0435\u0441\u044c! CiteDrive \u0438 Quarto \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u043e\u0447\u044c. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0431\u043b\u043e\u0433\u0430 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0445, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0446\u0438\u0442\u0430\u0442 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0439."),(0,a.kt)("h2",{id:"\u043d\u0430\u0447\u0430\u0442\u044c"},"\u041d\u0430\u0447\u0430\u0442\u044c"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 RStudio \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e CiteDrive \u0438 Quarto, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"),(0,a.kt)("h3",{id:"\u0448\u0430\u0433-1-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0441\u0441\u044b\u043b\u043a\u0438-\u0432-\u0441\u0432\u043e\u0439-\u043f\u0440\u043e\u0435\u043a\u0442"},"\u0428\u0430\u0433 1: \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442."),(0,a.kt)("p",null,"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c CiteDrive, \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043d\u0430 \u0438\u0445 \u0441\u0430\u0439\u0442 \u0438 \u0432\u044b\u0431\u0440\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 'Sign Up'. \u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 R-Markdown (",(0,a.kt)("em",{parentName:"p"},"\u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043b\u044f Quarto, \u043d\u0435 \u0432\u043e\u043b\u043d\u0443\u0439\u0442\u0435\u0441\u044c"),"); \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0437\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e \u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438"),". \u0412\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - \u043f\u0440\u0438\u043c\u0435\u0440",src:r(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("h3",{id:"\u0448\u0430\u0433-2-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0432\u0430\u0448-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442-quarto-\u043a-citedrive"},"\u0428\u0430\u0433 2: \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0432\u0430\u0448 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 Quarto \u043a CiteDrive"),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043c \u0432\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 CiteDrive \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443 Quarto. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 'bib'. \u041e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0432\u0430\u0448\u0438\u043c\u0438 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 BibTeX. \u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 URL \u0438\u0437 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0438 \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0432 YAML \u0447\u0430\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e QMD \u0444\u0430\u0439\u043b\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0440\u043e\u043b\u0438\u043a\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043f\u043e\u0442\u043e\u043a \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 R Markdown. \u041e\u0434\u043d\u0430\u043a\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b Quarto \u0442\u043e\u0442 \u0436\u0435:"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),".",(0,a.kt)("h3",{id:"\u0448\u0430\u0433-3-\u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435-\u043a\u043b\u044e\u0447\u0438-\u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0428\u0430\u0433 3: \u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u043b\u044e\u0447\u0438 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 Quarto. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0443 CiteDrive \u0438 \u043e\u0434\u043d\u043e\u0439 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u0441\u0441\u044b\u043b\u043a\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 cite. CiteDrive \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u044e\u0447 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0432\u0430\u0448 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - \u041f\u0440\u0438\u043c\u0435\u0440",src:r(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043b\u044e\u0447 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043d\u0443\u0436\u043d\u044b\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 Quarto."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u044e\u0447 \u0446\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",src:r(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0420\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433". \u0426\u0438\u0442\u0430\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u0430 \u0432 \u043d\u0443\u0436\u043d\u043e\u043c \u0432\u0430\u043c \u0441\u0442\u0438\u043b\u0435, \u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0446\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430.'),(0,a.kt)("p",null,"\u0412\u043e\u0442 \u0438 \u0432\u0441\u0435! CiteDrive - \u044d\u0442\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b Quarto. \u0418\u0441\u043f\u044b\u0442\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c!"),(0,a.kt)("h2",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),(0,a.kt)("h3",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto - \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u0430\u0443\u0447\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u0442\u0430\u0442\u044b \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u044f\u0445. \u041e\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0444\u0430\u0439\u043b\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 BibTeX \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u0441\u0441\u044b\u043b\u043a\u0438."),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive - \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u043b\u0435\u0433\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0438\u0441\u043a\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0438 \u0433\u0440\u0443\u043f\u043f\u044b \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 Quarto. CiteDrive \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 Quarto \u0432 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0438\u043b\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043b\u043b\u0435\u0433 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,a.kt)("p",null,"\u0412\u044b \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0435 BibLaTeX? \u041d\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c, CiteDrive \u043d\u0430 100% \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 BibTeX \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0432\u043e\u0431\u043e\u0434\u0443 \u0432 \u0432\u044b\u0431\u043e\u0440\u0435 \u043f\u043e\u043b\u0435\u0439 \u0438 \u0442\u0438\u043f\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043f\u0430\u043a\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 BibTeX \u0438\u043b\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0443, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 BibLaTeX."))}p.isMDXComponent=!0},6213:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);