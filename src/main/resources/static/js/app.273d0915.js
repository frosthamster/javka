(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"16d0":function(t,e,n){"use strict";var r=n("44ae"),o=n.n(r);o.a},3947:function(t,e,n){"use strict";var r=n("96e0"),o=n.n(r);o.a},4191:function(t,e,n){"use strict";var r=n("49c8"),o=n.n(r);o.a},"44ae":function(t,e,n){},"49c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Login")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.session?n("div",[n("Main")],1):n("div",{staticClass:"centered"},[n("VForm",{attrs:{title:"Авторизуйтесь или создайте нового пользователя","handler-title":"Авторизоваться",handler:t.loadSession,fields:[{name:"username",validator:function(t){return t.length>5},placeholder:"(больше 5 симовлов)",label:"Имя пользователя"},{name:"password",validator:function(t){return t.length>6},placeholder:"(больше 6 символов)",label:"Пароль"}]}})],1)},i=[],l=n("bc3a"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("h5",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.fields,(function(e){return n("VInput",{key:e.name,attrs:{placeholder:e.placeholder,label:e.label,validator:e.validator,value:t.$data[e.name]},on:{input:function(n){t.$data[e.name]=n}}})})),n("VButton",{attrs:{onClick:t.callHandler,enabled:t.allFieldsValid}},[t._v(" "+t._s(t.handlerTitle)+" ")])],2)},p=[],f=(n("a4d3"),n("e01a"),n("d28b"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.label?n("span",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("input",t._b({class:{valid:t.isValid},domProps:{value:t.value},on:{input:function(e){return t.onInput(e)}}},"input",t.$attrs,!1))])}),d=[],b={name:"VInput",inheritAttrs:!1,data:function(){return{isValid:!0}},props:{value:String,label:{type:String,default:null},validator:{type:Function,default:function(){return!0}}},methods:{onInput:function(t){var e=t.target.value;this.isValid=this.validator(e),this.$emit("input",e)}}},m=b,v=(n("4191"),n("2877")),h=Object(v["a"])(m,f,d,!1,null,"858d5c00",null),y=h.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({attrs:{disabled:!t.enabled},on:{click:t.onClick}},"button",t.$attrs,!1),[t._t("default")],2)},j=[],g={name:"VButton",inheritAttrs:!1,props:{onClick:{type:Function,required:!0},enabled:{type:Boolean,default:!0}}},_=g,w=(n("16d0"),Object(v["a"])(_,O,j,!1,null,"7a413674",null)),S=w.exports,V={name:"VForm",props:{title:String,handlerTitle:String,handler:Function,fields:Array},data:function(){var t={},e=!0,n=!1,r=void 0;try{for(var o,a=this.fields[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;t[s.name]=s.default?s.default:""}}catch(i){n=!0,r=i}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return t},components:{VButton:S,VInput:y},computed:{allFieldsValid:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.fields[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value;if(!a.validator(this[a.name]))return!1}}catch(s){e=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}return!0}},methods:{callHandler:function(){var t={},e=!0,n=!1,r=void 0;try{for(var o,a=this.fields[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;t[s.name]=s.parser?s.parser(this[s.name]):this[s.name]}}catch(i){n=!0,r=i}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}this.handler(t)}}},x=V,P=(n("db86"),Object(v["a"])(x,u,p,!1,null,"49961652",null)),$=P.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VComponentSwitcher",{attrs:{"components-info":t.componentsInfo}})},k=[],E=(n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),I=n("2f62"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switcher"},[n("div",{staticClass:"switcher-buttons"},t._l(t.componentsInfo,(function(e){return n("button",{key:e.text,staticClass:"bt-select",class:{selected:t.isSelected(e.component)},style:t.buttonStyle,on:{click:function(n){return t.select(e.component)}}},[t._v(t._s(e.text)+" ")])})),0),n("keep-alive",[n(t.currentComponent,{tag:"component"})],1)],1)},B=[],D={name:"VComponentSwitcher",props:{componentsInfo:Array,buttonStyle:{type:Object,default:function(){return{}}}},data:function(){return{currentComponent:this.componentsInfo[0].component}},methods:{select:function(t){this.currentComponent=t},isSelected:function(t){return this.currentComponent===t}}},G=D,M=(n("3947"),Object(v["a"])(G,F,B,!1,null,"5801b12e",null)),U=M.exports,T=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return e.users?r("div",e._l(e.users,(function(t){return r("div",[r("br"),r("VObj",{attrs:{obj:t}})],1)})),0):r("div",[r("VButton",{attrs:{"on-click":function(){return t.$store.dispatch("loadUsers")}}},[e._v("Загрузить пользователей")])],1)},A=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v(t._s(JSON.stringify(t.obj,null,4)))])},J=[],H={name:"VObj",props:["obj"]},N=H,R=Object(v["a"])(N,L,J,!1,null,"aed97108",null),q=R.exports,z={name:"Users",components:{VButton:S,VObj:q},computed:Object(I["b"])(["users"])},K=z,Q=Object(v["a"])(K,T,A,!1,null,"59c5c7d6",null),W=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Файлы ")])},Y=[],Z={name:"Files",components:{VObj:q},computed:Object(I["b"])(["root"])},tt=Z,et=Object(v["a"])(tt,X,Y,!1,null,"834f5a8e",null),nt=et.exports,rt=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("VForm",{attrs:{title:"Создать новую группу","handler-title":"создать",handler:function(e){return t.$store.dispatch("createGroup",e)},fields:[{name:"name",validator:function(t){return t.length>5},placeholder:"(больше 5 симолов)",label:"Имя группы"},{name:"userIds",validator:function(t){return/^(\d+,)*\d+$/.test(t)},placeholder:"33,45,22,77",label:"Пользователи",parser:function(t){return t.split(",").map((function(t){return Number.parseInt(t)}))}}]}}),e.groups?r("div",e._l(e.groups,(function(t){return r("div",[r("br"),r("VObj",{attrs:{obj:t}})],1)})),0):r("div",[r("VButton",{attrs:{"on-click":function(){return t.$store.dispatch("loadGroups")}}},[e._v("Загрузить группы")])],1)],1)},ot=[],at={name:"Groups",components:{VObj:q,VForm:$,VButton:S},computed:Object(I["b"])(["groups"])},st=at,it=Object(v["a"])(st,rt,ot,!1,null,"63289d2a",null),lt=it.exports;function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(n,!0).forEach((function(e){Object(E["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var pt={name:"Main",components:{VComponentSwitcher:U},computed:ut({},Object(I["b"])(["session"]),{componentsInfo:function(){return[{text:"Файлы",component:nt},{text:"Пользователи",component:W},{text:"Группы",component:lt}]}})},ft=pt,dt=Object(v["a"])(ft,C,k,!1,null,"1b2ba394",null),bt=dt.exports;function mt(t){console.log(t),t.response?(t=t.response,console.log(t),t.data&&alert(t.data)):t.message&&alert(t.message)}var vt={name:"Login",components:{VForm:$,Main:bt},computed:Object(I["b"])(["session"]),methods:{loadSession:function(t){var e=this;c.a.post("sign_up",{},{params:{name:t.username,password:t.password}}).then((function(t){return e.$store.commit("setSession",t.data.session)})).catch(mt)}}},ht=vt,yt=Object(v["a"])(ht,s,i,!1,null,"5e612eb5",null),Ot=yt.exports,jt={name:"app",components:{Login:Ot}},gt=jt,_t=(n("034f"),Object(v["a"])(gt,o,a,!1,null,null,null)),wt=_t.exports;function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){Object(E["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}r["a"].use(I["a"]);var xt=new I["a"].Store({strict:!1,state:{session:null,users:null,groups:null,root:null},mutations:{setSession:function(t,e){t.session=e},setUsers:function(t,e){t.users=e},setRoot:function(t,e){t.root=e},setGroups:function(t,e){t.groups=e}},actions:{loadUsers:function(t){var e=t.commit,n=t.state;c.a.get("users",{params:{session:n.session}}).then((function(t){return e("setUsers",t.data)})).catch(mt)},loadGroups:function(t){var e=t.commit,n=t.state;c.a.get("groups",{params:{session:n.session}}).then((function(t){return e("setGroups",t.data)})).catch(mt)},createGroup:function(t,e){var n=t.commit,r=t.state;c.a.post("groups/create",{},{params:Vt({session:r.session},e)}).then((function(){return n("setGroups",null)})).catch(mt)}}});c.a.defaults.baseURL="/api",r["a"].config.productionTip=!1,new r["a"]({store:xt,render:function(t){return t(wt)}}).$mount("#app")},"85ec":function(t,e,n){},"96e0":function(t,e,n){},db86:function(t,e,n){"use strict";var r=n("eff0"),o=n.n(r);o.a},eff0:function(t,e,n){}});
//# sourceMappingURL=app.273d0915.js.map