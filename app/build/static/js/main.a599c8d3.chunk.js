(this["webpackJsonpfe-nc-news"]=this["webpackJsonpfe-nc-news"]||[]).push([[0],{17:function(e,t,n){e.exports=n(50)},22:function(e,t,n){},23:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),u=(n(22),n(23),n(4)),i=n(2),o=Object({NODE_ENV:"production",PUBLIC_URL:""}).baseURL||"https://nc-news-shaq.herokuapp.com/",s=n(32).create({baseURL:o}),m=function(){return s.get("/api/articles").then((function(e){return e.data.articles}))},f=function(e){return s.get("/api/articles/"+e).then((function(e){return e.data.article}))};function E(e){var t=e.filterArticles,n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],u=r[1];return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u("")}},c.a.createElement("label",null,"Search for an article:"," ",c.a.createElement("input",{autoFocus:!0,type:"text",value:l,onChange:function(e){var n=e.target;u(n.value),t(n.value)},className:"search-input"}))," ",c.a.createElement("button",{className:"clear-button"},"Clear")))}function h(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),o=Object(i.a)(l,2),s=o[0],f=o[1],h=Object(a.useState)([]),b=Object(i.a)(h,2),p=b[0],O=b[1];Object(a.useEffect)((function(){m().then((function(e){r(e),O(e)})).catch((function(e){f({msg:"Oh no, something went wrong"})}))}),[]);return s?c.a.createElement("h1",null,s.msg):c.a.createElement("div",null,c.a.createElement("h1",null,"Articles"),c.a.createElement(E,{filterArticles:function(e){var t=n.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));O(t)}}),c.a.createElement("ul",null,p.map((function(e){return c.a.createElement("li",{key:e.article_id},c.a.createElement(u.a,{to:"/articles/"+e.article_id},e.title))}))))}function b(){return c.a.createElement("header",null,"This is the header")}function p(e){var t=e.article_id,n=Object(a.useState)({}),r=Object(i.a)(n,2),l=r[0],u=r[1];return Object(a.useEffect)((function(){f(t).then(u)}),[t]),c.a.createElement("div",null,c.a.createElement("h1",null,l.title),c.a.createElement("main",null,l.body))}var O=function(){return c.a.createElement("div",{className:"App"},"YOOOOO",c.a.createElement(b,null),c.a.createElement(u.b,null,c.a.createElement(h,{path:"/"}),c.a.createElement(p,{path:"/articles/:article_id"})))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a599c8d3.chunk.js.map