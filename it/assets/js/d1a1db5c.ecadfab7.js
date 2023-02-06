"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7098],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return m}});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return i?r.createElement(h,n(n({ref:t},s),{},{components:i})):r.createElement(h,n({ref:t},s))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,n=new Array(a);n[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<a;c++)n[c]=i[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4745:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return n},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=i(3117),o=(i(7294),i(3905));const a={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},n="How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto",l={permalink:"/it/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md",source:"@site/blog/2022-08-28-quarto.md",title:"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto",description:"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.",date:"2022-08-28T00:00:00.000Z",formattedDate:"28 agosto 2022",tags:[{label:"citedrive",permalink:"/it/blog/tags/citedrive"},{label:"rstudio",permalink:"/it/blog/tags/rstudio"},{label:"quarto",permalink:"/it/blog/tags/quarto"},{label:"rmarkdown",permalink:"/it/blog/tags/rmarkdown"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/it/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citing and Using References on Overleaf: A Guide for Researchers",permalink:"/it/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},u={authorsImageUrls:[void 0]},c=[{value:"Get started",id:"get-started",level:2},{value:"Step 1: Include references in your project",id:"step-1-include-references-in-your-project",level:3},{value:"Step 2:  Connect your Quarto document to CiteDrive",id:"step-2--connect-your-quarto-document-to-citedrive",level:3},{value:"Step 3: Copy the citation keys.",id:"step-3-copy-the-citation-keys",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"To format citations and bibliographies in RStudio with CiteDrive and Quarto, follow these steps:"),(0,o.kt)("h3",{id:"step-1-include-references-in-your-project"},"Step 1: Include references in your project"),(0,o.kt)("p",null,"First, you must create a CiteDrive account by going to their website and selecting the 'Sign Up' button. Completing your account will then enable you to make an 'R-Markdown' (",(0,o.kt)("em",{parentName:"p"},"it works for Quarto, don't you worry"),") project; simply name it and ",(0,o.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"fill the project with references"),". Yours might look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CiteDrive - Example",src:i(5616).Z,width:"2226",height:"1344"})),(0,o.kt)("h3",{id:"step-2--connect-your-quarto-document-to-citedrive"},"Step 2:  Connect your Quarto document to CiteDrive"),(0,o.kt)("p",null,"Now, let's connect your new CiteDrive to your Quarto document. To do this, click the 'bib' button. This will open up a new tab with all your entries in BibTeX format. Copy the URL from the new tab and paste it into the YAML part of your QMD file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\nbibliography: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,o.kt)("p",null,"The following clip shows the flow when using R Markdown. However, the principle of Quarto is the same:"),(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"step-3-copy-the-citation-keys"},"Step 3: Copy the citation keys."),(0,o.kt)("p",null,"Once your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CiteDrive - Example",src:i(6213).Z,width:"856",height:"320"})),(0,o.kt)("p",null,"Paste your citation key in the necessary passage of your Quarto document."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CiteDrive - Paste citationkey",src:i(1906).Z,width:"2054",height:"186"})),(0,o.kt)("p",null,"After you insert the key in the section, click \u201crender.\u201d The citation will be outputted in your desired style, and the reference will appear at the end of your document."),(0,o.kt)("p",null,"That's all! CiteDrive is the perfect tool to help you manage your bibliography and insert citations into Quarto documents. Test it out now and see how much time it can save you!"),(0,o.kt)("h2",{id:"additional-information"},"Additional information"),(0,o.kt)("h3",{id:"quarto"},"Quarto"),(0,o.kt)("p",null,"Quarto is a powerful research writing tool that can automatically generate citations and bibliographies in various styles. It supports bibliography files in BibTeX and other formats, making it easy to keep track of your references."),(0,o.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,o.kt)("p",null,"CiteDrive is a reference management tool that allows you to organize, store easily, and search your bibliographic data. Organize your teams and references in projects, for example, for a dedicated Quarto paper. CiteDrive automatically keeps your references in Quarto up-to-date whenever you or one of your teammates updates the bibliographic data within your project."),(0,o.kt)("p",null,"Do you prefer BibLaTeX? No problem, CiteDrive is 100 % BibTeX empowered and provides freedom in fields and types for each entry, meaning you can use any BibTeX-based package or alternative, like BibLaTeX."))}d.isMDXComponent=!0},6213:function(e,t,i){t.Z=i.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:function(e,t,i){t.Z=i.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:function(e,t,i){t.Z=i.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);