"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{530:function(e,t,n){n.d(t,{Hg:function(){return s},Jh:function(){return l},TP:function(){return p},qF:function(){return f},yO:function(){return m}});var r=n(861),a=n(757),c=n.n(a),u=n(759),o="3ea9e05bf615fb8d96f57aa463f7f68d",i="https://api.themoviedb.org/3",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o,"&language='en-US'"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language='en-US'"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},510:function(e,t,n){n.d(t,{Z:function(){return s}});n(791);var r=n(689),a=n(87),c="MovieList_movieList__uFrOZ",u="MovieList_movieName__sBSsG",o="MovieList_movie__gYq3N",i=n(184),s=function(e){var t=e.movies,n=(0,r.TH)();return(0,i.jsx)("ul",{className:c,children:t.map((function(e){return(0,i.jsx)("li",{className:u,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},className:o,children:e.title})},e.id)}))})}},337:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(510),i=n(791),s="SearchForm_form__o80os",f="SearchForm_input__HOxJo",p="SearchForm_button__UXY06",m=n(184),l=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,a.Z)(n,2),c=r[0],u=r[1];return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c&&(t(c),u(""))},className:s,children:[(0,m.jsx)("input",{value:c,onChange:function(e){u(e.target.value)},className:f,placeholder:"Search for movie keyword"}),(0,m.jsx)("button",{type:"submit",className:p,children:"Search"})]})},v=n(87),h=n(530),_=n(967),d=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],s=(0,v.lr)(),f=(0,a.Z)(s,2),p=f[0],d=f[1],x=p.get("query")||"";return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.qF)(x);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,m.jsxs)("main",{className:_.Z.mainPage,children:[(0,m.jsx)("h1",{className:_.Z.title,children:"MOVIES"}),(0,m.jsx)(l,{onSubmit:function(e){d(""!==e&&{query:e})}}),0!==n.length&&(0,m.jsx)(o.Z,{movies:n})]})}},967:function(e,t){t.Z={mainPage:"Homepage_mainPage__WIzoy",title:"Homepage_title__mSlVe"}}}]);
//# sourceMappingURL=337.8efa7948.chunk.js.map