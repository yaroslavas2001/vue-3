(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3f0e":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"home"},o=Object(r["g"])("h1",null,"Table",-1);function i(e,t,n,i,c,u){var l=Object(r["v"])("Filter"),f=Object(r["v"])("Grid"),s=Object(r["v"])("Pagination");return Object(r["p"])(),Object(r["d"])("div",a,[o,Object(r["g"])(l,{onChange:e.onFilterChanged},null,8,["onChange"]),Object(r["g"])(f,{usersToDisplay:e.usersToDisplay},null,8,["usersToDisplay"]),Object(r["g"])(s,{currentPage:e.currentPage,pageSize:e.pageSize,totalCount:e.totalPageCount,onPageClick:e.pageClick},null,8,["currentPage","pageSize","totalCount","onPageClick"])])}n("fb6a"),n("a9e3"),n("e439");var c=n("53ca"),u=n("1b40"),l=n("fdab"),f=n("bc7a"),s=n("1799"),p=n("454f"),d=n("359c"),g=n("c1df"),b=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(c["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.allUsers=[],t.filteredUsers=[],t.currentPage=1,t.pageSize=10,t}return b(t,e),t.prototype.created=function(){this.initData()},t.prototype.initData=function(){for(var e=0;e<30;e++){var t={name:d["name"].firstName(),data:d["date"].past(),age:Math.floor(101*Math.random()),avatar:d["image"].avatar()};this.allUsers.push(t)}this.filteredUsers=this.allUsers.slice()},Object.defineProperty(t.prototype,"usersToDisplay",{get:function(){var e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;return this.filteredUsers.slice(e,t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"totalPageCount",{get:function(){return Math.ceil(this.filteredUsers.length/this.pageSize)},enumerable:!1,configurable:!0}),t.prototype.pageClick=function(e){this.currentPage=Number(e)},t.prototype.formatDate=function(e){return g(e).format("DD.MM.YYYY hh:mm")},t.prototype.onFilterChanged=function(e){console.log("onFilterChanged: ",e),console.log()},t=h([Object(u["a"])({name:"table",components:{HelloWorld:l["a"],Filter:f["a"],Pagination:s["a"],Grid:p["a"]}})],t),t}(u["c"]),j=O;n("9e0c");j.render=i;t["default"]=j},7410:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("b0c0");var r=n("7a23"),a={class:"about"},o=Object(r["g"])("h1",null,"This is an about page",-1),i={class:"element"};function c(e,t,n,c,u,l){return Object(r["p"])(),Object(r["d"])("div",a,[o,Object(r["g"])("h1",null,Object(r["x"])(e.name),1),Object(r["g"])("div",i,[Object(r["C"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t})},null,512),[[r["z"],e.name]])])])}},"9e0c":function(e,t,n){"use strict";n("b237")},b237:function(e,t,n){},caa9:function(e,t,n){"use strict";n.r(t);var r=n("dff4"),a=n.n(r);for(var o in n.d(t,"default",(function(){return a.a})),r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},dff4:function(e,t){},f820:function(e,t,n){"use strict";n.r(t);var r=n("7410"),a=n("caa9");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);a["default"].render=r["a"],t["default"]=a["default"]}}]);
//# sourceMappingURL=about.92aaafb2.js.map