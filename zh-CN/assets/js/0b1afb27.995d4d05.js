"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(v,n(n({ref:t},s),{},{components:r})):i.createElement(v,n({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var u=2;u<o;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(7462),a=(r(7294),r(3905));const o={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"\u5982\u4f55\u4f7f\u7528 CiteDrive \u548c Quarto \u5728 RStudio \u4e2d\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="\u5982\u4f55\u4f7f\u7528 CiteDrive \u548c Quarto \u5728 RStudio \u4e2d\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee",l={permalink:"/zh-CN/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"\u5982\u4f55\u4f7f\u7528 CiteDrive \u548c Quarto \u5728 RStudio \u4e2d\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee",description:"\u60a8\u662f\u5426\u9700\u8981\u5728 RStudio \u4e2d\u4e3a\u7814\u7a76\u8bba\u6587\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee\uff1f\u60a8\u662f\u5426\u5728\u4e3a\u8ddf\u8e2a\u6240\u6709\u53c2\u8003\u6587\u732e\u548c\u683c\u5f0f\u8981\u6c42\u800c\u82e6\u607c\uff1f\u4e0d\u7528\u62c5\u5fc3! CiteDrive\u548cQuarto\u53ef\u4ee5\u5e2e\u52a9\u60a8\u3002\u8fd9\u7bc7\u535a\u6587\u5c06\u544a\u8bc9\u4f60\u5982\u4f55\u4f7f\u7528\u8fd9\u4e24\u4e2a\u5de5\u5177\u6765\u521b\u5efa\u6f02\u4eae\u7684\u3001\u683c\u5f0f\u6b63\u786e\u7684\u5f15\u6587\u548c\u4e66\u76ee\u3002",date:"2022-08-28T00:00:00.000Z",formattedDate:"2022\u5e748\u670828\u65e5",tags:[{label:"citedrive",permalink:"/zh-CN/blog/tags/citedrive"},{label:"rstudio",permalink:"/zh-CN/blog/tags/rstudio"},{label:"quarto",permalink:"/zh-CN/blog/tags/quarto"},{label:"rmarkdown",permalink:"/zh-CN/blog/tags/rmarkdown"}],readingTime:3.86,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"\u5982\u4f55\u4f7f\u7528 CiteDrive \u548c Quarto \u5728 RStudio \u4e2d\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/zh-CN/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citing and Using References on Overleaf: A Guide for Researchers",permalink:"/zh-CN/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},c={authorsImageUrls:[void 0]},u=[{value:"\u5f00\u59cb\u5427",id:"\u5f00\u59cb\u5427",level:2},{value:"\u5176\u4ed6\u4fe1\u606f",id:"\u5176\u4ed6\u4fe1\u606f",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u60a8\u662f\u5426\u9700\u8981\u5728 RStudio \u4e2d\u4e3a\u7814\u7a76\u8bba\u6587\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee\uff1f\u60a8\u662f\u5426\u5728\u4e3a\u8ddf\u8e2a\u6240\u6709\u53c2\u8003\u6587\u732e\u548c\u683c\u5f0f\u8981\u6c42\u800c\u82e6\u607c\uff1f\u4e0d\u7528\u62c5\u5fc3! CiteDrive\u548cQuarto\u53ef\u4ee5\u5e2e\u52a9\u60a8\u3002\u8fd9\u7bc7\u535a\u6587\u5c06\u544a\u8bc9\u4f60\u5982\u4f55\u4f7f\u7528\u8fd9\u4e24\u4e2a\u5de5\u5177\u6765\u521b\u5efa\u6f02\u4eae\u7684\u3001\u683c\u5f0f\u6b63\u786e\u7684\u5f15\u6587\u548c\u4e66\u76ee\u3002"),(0,a.kt)("h2",{id:"\u5f00\u59cb\u5427"},"\u5f00\u59cb\u5427"),(0,a.kt)("p",null,"\u8981\u5728RStudio\u4e2d\u4f7f\u7528CiteDrive\u548cQuarto\u683c\u5f0f\u5316\u5f15\u6587\u548c\u4e66\u76ee\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"###\u7b2c1\u6b65\uff1a\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u5305\u62ec\u53c2\u8003\u6587\u732e"),(0,a.kt)("p",null,'\u9996\u5148\uff0c\u4f60\u5fc5\u987b\u521b\u5efa\u4e00\u4e2aCiteDrive\u8d26\u6237\uff0c\u8fdb\u5165\u4ed6\u4eec\u7684\u7f51\u7ad9\u5e76\u9009\u62e9 "\u6ce8\u518c "\u6309\u94ae\u3002\u5b8c\u6210\u4f60\u7684\u8d26\u6237\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u505a\u4e00\u4e2a "R-Markdown"\uff08',(0,a.kt)("em",{parentName:"p"},"\u5b83\u9002\u7528\u4e8eQuarto\uff0c\u4f60\u4e0d\u7528\u62c5\u5fc3"),"\uff09\u9879\u76ee\uff1b\u53ea\u8981\u7ed9\u5b83\u8d77\u4e2a\u540d\u5b57\uff0c","[\u5728\u9879\u76ee\u4e2d\u52a0\u5165\u53c2\u8003\u6587\u732e]","(",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6%EF%BC%89%E3%80%82%E4%BD%A0%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%8F%AF%E8%83%BD%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%83%8F%E8%BF%99%E6%A0%B7%E3%80%82"},"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6\uff09\u3002\u4f60\u7684\u9879\u76ee\u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Example",src:r(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("p",null,"###\u7b2c\u4e8c\u6b65\uff1a\u5c06\u4f60\u7684Quarto\u6587\u6863\u8fde\u63a5\u5230CiteDrive"),(0,a.kt)("p",null,'\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u628a\u4f60\u7684\u65b0CiteDrive\u8fde\u63a5\u5230\u4f60\u7684Quarto\u6587\u6863\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u70b9\u51fb "bib "\u6309\u94ae\u3002\u8fd9\u5c06\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u9009\u9879\u5361\uff0c\u91cc\u9762\u6709BibTeX\u683c\u5f0f\u7684\u6240\u6709\u6761\u76ee\u3002\u4ece\u65b0\u6807\u7b7e\u4e2d\u590d\u5236URL\u5e76\u5c06\u5176\u7c98\u8d34\u5230\u4f60\u7684QMD\u6587\u4ef6\u7684YAML\u90e8\u5206\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u7247\u6bb5\u663e\u793a\u4e86\u4f7f\u7528R Markdown\u65f6\u7684\u6d41\u7a0b\u3002\u7136\u800c\uff0cQuarto\u7684\u539f\u7406\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"###\u7b2c\u4e09\u6b65\uff1a\u590d\u5236\u5f15\u6587\u94a5\u5319\u3002"),(0,a.kt)("p",null,"\u4e00\u65e6\u4f60\u7684\u53c2\u8003\u6587\u732e\u88ab\u5bfc\u5165\uff0c\u4f60\u5c31\u53ef\u4ee5\u628a\u5b83\u4eec\u63d2\u5165\u4f60\u7684Quarto\u6587\u4ef6\u4e2d\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u56de\u5230\u60a8\u7684CiteDrive\u9879\u76ee\u548c\u4e00\u4e2a\u6216\u591a\u4e2a\u60a8\u60f3\u63d2\u5165\u6587\u6863\u7684\u53c2\u8003\u6587\u732e\uff0c\u7136\u540e\u70b9\u51fb\u5f15\u7528\u6309\u94ae\u3002CiteDrive\u4f1a\u5c06\u5f15\u7528\u952e\u590d\u5236\u5230\u4f60\u7684\u526a\u8d34\u677f\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive-\u4f8b\u5b50",src:r(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"\u5728Quarto\u6587\u4ef6\u7684\u5fc5\u8981\u6bb5\u843d\u4e2d\u7c98\u8d34\u4f60\u7684\u5f15\u6587\u5173\u952e\u8bcd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - Paste citationkey",src:r(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'\u5728\u8be5\u90e8\u5206\u63d2\u5165\u94a5\u5319\u540e\uff0c\u70b9\u51fb "\u6e32\u67d3"\u3002\u5f15\u6587\u5c06\u4ee5\u4f60\u6240\u9700\u8981\u7684\u6837\u5f0f\u8f93\u51fa\uff0c\u53c2\u8003\u6587\u732e\u5c06\u51fa\u73b0\u5728\u4f60\u7684\u6587\u4ef6\u672b\u5c3e\u3002'),(0,a.kt)("p",null,"\u8fd9\u5c31\u662f\u5168\u90e8! CiteDrive\u662f\u5e2e\u52a9\u4f60\u7ba1\u7406\u4e66\u76ee\u548c\u5728Quarto\u6587\u6863\u4e2d\u63d2\u5165\u5f15\u6587\u7684\u5b8c\u7f8e\u5de5\u5177\u3002\u73b0\u5728\u5c31\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u770b\u770b\u5b83\u80fd\u4e3a\u4f60\u8282\u7701\u591a\u5c11\u65f6\u95f4!"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u4fe1\u606f"},"\u5176\u4ed6\u4fe1\u606f"),(0,a.kt)("h3",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u7814\u7a76\u5199\u4f5c\u5de5\u5177\uff0c\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u5404\u79cd\u98ce\u683c\u7684\u5f15\u6587\u548c\u4e66\u76ee\u3002\u5b83\u652f\u6301BibTeX\u548c\u5176\u4ed6\u683c\u5f0f\u7684\u4e66\u76ee\u6587\u4ef6\uff0c\u4f7f\u4f60\u80fd\u591f\u8f7b\u677e\u5730\u8ddf\u8e2a\u4f60\u7684\u53c2\u8003\u6587\u732e\u3002"),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive\u662f\u4e00\u4e2a\u53c2\u8003\u6587\u732e\u7ba1\u7406\u5de5\u5177\uff0c\u5141\u8bb8\u4f60\u7ec4\u7ec7\u3001\u8f7b\u677e\u5b58\u50a8\u548c\u641c\u7d22\u4f60\u7684\u4e66\u76ee\u6570\u636e\u3002\u5728\u9879\u76ee\u4e2d\u7ec4\u7ec7\u4f60\u7684\u56e2\u961f\u548c\u53c2\u8003\u6587\u732e\uff0c\u4f8b\u5982\uff0c\u4e3a\u4e13\u95e8\u7684Quarto\u8bba\u6587\u3002\u6bcf\u5f53\u4f60\u6216\u4f60\u7684\u4e00\u4e2a\u961f\u53cb\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u66f4\u65b0\u4e66\u76ee\u6570\u636e\u65f6\uff0cCiteDrive\u5c31\u4f1a\u81ea\u52a8\u4fdd\u6301\u4f60\u5728Quarto\u4e2d\u7684\u53c2\u8003\u6587\u732e\u662f\u6700\u65b0\u7684\u3002"),(0,a.kt)("p",null,"\u4f60\u559c\u6b22BibLaTeX\u5417\uff1f\u6ca1\u95ee\u9898\uff0cCiteDrive\u767e\u5206\u4e4b\u767e\u652f\u6301BibTeX\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u6761\u76ee\u63d0\u4f9b\u81ea\u7531\u7684\u5b57\u6bb5\u548c\u7c7b\u578b\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u57fa\u4e8eBibTeX\u7684\u8f6f\u4ef6\u5305\u6216\u66ff\u4ee3\u54c1\uff0c\u5982BibLaTeX\u3002"))}p.isMDXComponent=!0},6213:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);