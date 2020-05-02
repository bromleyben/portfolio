(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/background.b184b957.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/ma_face.bac68f9c.jpg"},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),l=a.n(o),c=(a(45),a(46),a(47),a(48),a(49),a(83)),i=a(84),s=a(85),m=a(38),u=a(11),d=a(12),f=a(81),h=a(82);function p(){var e=Object(u.a)(["\n    display: flex;\n    cursor: pointer;\n\n    .label {\n        width: 100px;\n    }\n\n    .bar {\n        display: flex;\n        flex: 1 0 auto;\n    }\n\n    .filled {\n        width: ","%;\n        background-color: ",";\n\n        &:hover {\n            background-color: ",";\n        }\n    }\n\n    .empty {\n        text-align: right;\n        flex: 1 1 auto;\n    }\n"]);return p=function(){return e},e}var g=d.a.div(p(),(function(e){return e.percent}),(function(e){return e.color}),(function(e){return e.color}));var b=function(e){return r.a.createElement(g,Object.assign({onClick:e.onClick},e),r.a.createElement("div",{className:"label"},e.label),r.a.createElement("div",{className:"bar"},r.a.createElement("div",{className:"filled"}),r.a.createElement("div",{className:"empty"},e.percent,"%")))};function v(){var e=Object(u.a)(["\n    display: flex;\n    flex-flow: column;\n    justify-content: space-evenly;\n"]);return v=function(){return e},e}function y(){var e=Object(u.a)(["\n    height: 350px;\n"]);return y=function(){return e},e}var w=[{label:"Javascript",desc:"Javascript is my native tounge. I am working with it every day to achieve all kinds of weird and wonderful things. I am fluent in modern JS features such as async/await, frameworks like React, build tools such as Webpack and the JS superset Typescript.",percentage:90,color:"#ffa5006e"},{label:"HTML/CSS",desc:"The bread and butter of web development. I am fluent in CSS preprocessors such as LESS and SASS, and frequenty use the tools such as flexbox and CSS Grid to pull off elegant layouts.",percentage:80,color:"#ff00007d"},{label:"Python",desc:"Let's face it, Python is the best. It's elegant, powerful and easy to write. I have been working with Python for years building custom business logic for Odoo systems.",percentage:70,color:"#00008b78"},{label:"React",desc:"React has changed the fronted-dev landscape massivly in the last few years. Recently I have been migrating a large application for a not-for-profit organisation from a monolithic KnockoutJS application into a beautifully clean and modern React app.",percentage:70,color:"#00858b78"},{label:"SQL",desc:"When working with large sets of data, nothing beats cutting straight to the source and crafting an elegant SQL statement to fetch the data in a flash.",percentage:50,color:"#008b1178"},{label:"C#",desc:"Whilst not my strongest language, I have experience on .NET projects that have exposed me to the values and advantages of stongly typed languages, which motivated me to learn Typescript to help my Javascript scale.",percentage:40,color:"#6f008b78"},{label:"Angular",desc:"One of the other big players in the JS framework game, I have experience working with several Angular projects, both for work and through university.",percentage:30,color:"#c88787"}],E=Object(d.a)(f.a)(y()),k=Object(d.a)(h.a)(v());var N=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement(h.a,{sm:"6"},w.map((function(e,t){return r.a.createElement("div",{key:t},a===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{style:{marginTop:0}},e.label),r.a.createElement("p",null,e.desc)))}))),r.a.createElement(k,{sm:"6"},w.map((function(e,t){return r.a.createElement(b,{key:t,label:e.label,percent:e.percentage,color:e.color,onClick:function(){return o(t)}})})))))};var S=function(){var e=r.a.createRef();return r.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"page-header clear-filter page-header-small","filter-color":"blue"},r.a.createElement("div",{className:"page-header-image",style:{backgroundImage:"url("+a(54)+")"},ref:e}),r.a.createElement(c.a,null,r.a.createElement("div",{className:"photo-container",style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{style:{height:"100%",maxWidth:"initial"},alt:"...",src:a(55)})),r.a.createElement("h3",{className:"title"},"Benjamin Bromley"),r.a.createElement("p",{className:"category"},"Software Developer"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"button-container"},r.a.createElement(i.a,{className:"btn-round btn-icon",color:"info",id:"tooltip515203353",size:"lg",target:"_blank",href:"https://www.linkedin.com/in/ben-bromley-5630ba80/"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement(s.a,{delay:0,target:"tooltip515203353"},"Yeah, I have a linkedIn (not much used :P)"),r.a.createElement(i.a,{className:"btn-round btn-icon",color:"primary",id:"tooltip515203352",size:"lg",target:"_blank",href:"https://github.com/bromleyben"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement(s.a,{delay:0,target:"tooltip515203352"},"Check out my Github")),r.a.createElement(c.a,null,r.a.createElement("h5",{className:"description"},r.a.createElement("p",null,"I am a full stack web developer with over 5 years industry experience engaging with companies around Australia to help them achieve the most from their enterprise systems."),r.a.createElement("br",null),r.a.createElement("p",null,'I have a passion for bringing out the very best of a project at every stage. Nothing beats hearing "Wow, this is even better than I imagined!". I believe believe regular consultation, feedback and copious amounts of caffine are key client satisfaction (without the budget blowout).')),r.a.createElement("h3",{className:"title"},"My Skills"),r.a.createElement("h5",{className:"description"},r.a.createElement(N,null)),r.a.createElement("h3",{className:"title"},"Under Construction!"),r.a.createElement("h4",{className:"title"},"This portfolio is very much a work in progress, stay tuned for Project Samples, Blog and Component Showcase!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.fc033e64.chunk.js.map