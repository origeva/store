(this["webpackJsonpstore-frontend"]=this["webpackJsonpstore-frontend"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),o=n(19),a=n.n(o),i=(n(26),n(27),n(8)),u=n(2),j=function(){return Object(c.jsx)("p",{children:"home component"})},b=n(7),f=n.n(b),h=n(12),l=n(10),d=function(e){var t=e.coffee,n=t.name,r=t.image,s=t.strength,o=t.price;return Object(c.jsx)("li",{children:Object(c.jsxs)("article",{children:[Object(c.jsx)("div",{children:n}),Object(c.jsx)("img",{src:r,alt:"".concat(n," coffee"),width:"100"}),Object(c.jsx)("div",{children:s}),Object(c.jsx)("div",{children:o})]})})},p=function(){function e(){return(e=Object(l.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/coffee");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=Object(r.useState)([]),n=Object(h.a)(t,2),s=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){return e.apply(this,arguments)})().then((function(e){return o(e)}))}),[]),Object(c.jsx)("section",{children:s?Object(c.jsx)("ul",{children:s.map((function(e){return Object(c.jsx)(d,{coffee:e},e.id)}))}):"We're out of coffee! :'("})},O=function(){return Object(c.jsx)("p",{children:"products component"})},x=n(13),g="http://localhost",m={method:"POST",headers:{"Content-Type":"application/json"}},v={baseURL:g,register:function(){var e=Object(l.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/auth/resgister"),Object(x.a)(Object(x.a)({},m),{},{body:JSON.stringify({username:t,password:n})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),login:function(){var e=Object(l.a)(f.a.mark((function e(t,n){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/auth/login"),Object(x.a)(Object(x.a)({},m),{},{body:JSON.stringify({username:t,password:n})}));case 2:c=e.sent,console.log(c.headers.has("Set-Cookie"));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){var e=Object(l.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/auth/logout"),m);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},w=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(h.a)(o,2),i=a[0],u=a[1];return Object(r.useEffect)((function(){console.log()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{id:"username",type:"text",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{id:"password",type:"password",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return v.login(n,i)},children:"Login"})]})};var y=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)(i.b,{to:"/",children:Object(c.jsx)("img",{src:"logo.png",alt:"Java Roast logo",width:"200"})}),Object(c.jsx)(i.b,{to:"/coffee",children:"Coffee"}),Object(c.jsx)(i.b,{to:"/products",children:"Products"}),Object(c.jsx)("br",{}),Object(c.jsx)(i.b,{to:"/login",children:"Login"})]})},C=function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,children:Object(c.jsx)(j,{})}),Object(c.jsx)(u.a,{path:"/products",children:Object(c.jsx)(O,{})}),Object(c.jsx)(u.a,{path:"/coffee",children:Object(c.jsx)(p,{})}),Object(c.jsx)(u.a,{path:"/login",children:Object(c.jsx)(w,{})})]})},S=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),Object(c.jsx)(C,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(S,{})})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.322f5f70.chunk.js.map