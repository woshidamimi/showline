(function(e){function t(t){for(var n,l,r=t[0],i=t[1],c=t[2],d=0,p=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"04d7":function(e,t,a){"use strict";a("e443")},"05b7":function(e,t,a){},"19d1":function(e,t,a){"use strict";a("1df5")},"1d11":function(e,t,a){"use strict";a("dd36")},"1df5":function(e,t,a){},"2d7c":function(e,t,a){},3828:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("31e1"),a("8d9b"),a("3b2b"),a("736a");var n=a("a593"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("LeftMenu",{directives:[{name:"show",rawName:"v-show",value:e.isShowMenu,expression:"isShowMenu"}]}),a("div",{staticClass:"right-box"},[a("top-bar",{directives:[{name:"show",rawName:"v-show",value:e.isShowMenu,expression:"isShowMenu"}]}),a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("router-view")],1)],1)],1)},o=[],l=(a("1d43"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-menu-box"},[a("ul",e._l(e.menuData,(function(t){return a("li",{key:t.id,staticClass:"menu-item",on:{click:function(a){return e.handleRoute(t.path)}}},[a("div",{class:e.routeIsActive(t.routeName)},[a("span",{class:t.icon}),e._v(" "+e._s(t.name))])])})),0)])}),r=[],i={name:"LeftMenu",data:function(){return{menuData:[{name:"首页",path:"/home",routeName:"Home",icon:"el-icon-house"},{name:"订单列表",path:"/order",routeName:"Order",icon:"el-icon-s-order"},{name:"人员列表",path:"/user",routeName:"User",icon:"el-icon-user"}]}},mounted:function(){console.log(this.$route)},methods:{routeIsActive:function(e){var t=this.$route.name;return t===e?"active":""},handleRoute:function(e){this.$router.push({path:e})}}},c=i,u=(a("19d1"),a("5d22")),d=Object(u["a"])(c,l,r,!1,null,"2d38f9f4",null),p=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top-bar-box"},[a("div",{staticClass:"user-img"},[a("span",{staticClass:"el-icon-user-solid"}),a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.username)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.exit(t)}}},[e._v("退出")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.openPersonDialog(t)}}},[e._v("个人中心")])],1)],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.isShow,center:"","append-to-body":!0,width:"30%","close-on-click-modal":!1,"custom-class":"person-dia"},on:{"update:visible":function(t){e.isShow=t},close:e.close}},[a("ul",[a("li",{staticClass:"row"},[a("span",{staticClass:"label"},[e._v("修改密码:")]),a("el-input"),a("el-button",{attrs:{type:"primary"}},[e._v("修改")])],1),a("li",{staticClass:"row"},[a("span",{staticClass:"label"},[e._v("修改邮箱:")]),a("el-input"),a("el-button",{attrs:{type:"primary"}},[e._v("修改")])],1)])])],1)},m=[],h=new n["default"]({}),b={name:"TopBar",data:function(){return{isShow:!1,username:""}},mounted:function(){var e=this;this.username=localStorage.getItem("username"),h.$on("changeUsername",(function(t){e.username=t}))},methods:{exit:function(){localStorage.clear(),this.$router.push({path:"/login"})},openPersonDialog:function(){this.isShow=!0},close:function(){this.isShow=!1},confirm:function(){this.isShow=!1}}},v=b,g=(a("add8"),a("1d11"),Object(u["a"])(v,f,m,!1,null,"992e785a",null)),w=g.exports,C={name:"App",components:{LeftMenu:p,TopBar:w},computed:{isShowMenu:function(){var e=this.$route.name;return"Login"!=e}}},y=C,_=(a("5c0b"),Object(u["a"])(y,s,o,!1,null,null,null)),x=_.exports,k=a("2763"),S=a.n(k),$=(a("ccc1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{border:e.border,data:e.tableData}},[e.hasSelect?a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):e._e(),e._l(e.cols,(function(t){return a("el-table-column",{key:t.prop,attrs:{align:t.align,prop:t.prop,label:t.label,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t(t.prop,[e._v(e._s(a.row[t.prop]))],{row:a.row})]}}],null,!0)})}))],2)],1)}),I=[],O={name:"CommonTable",props:{hasSelect:{type:Boolean,default:!1},border:{type:[Boolean],default:!0},tableData:{type:Array,default:function(){return[]}},cols:{type:Array,default:function(){return[]}}},methods:{getScope:function(e){var t=this.tableData;return console.log(t[e]),t[e]}}},j=O,L=Object(u["a"])(j,$,I,!1,null,"4582350a",null),A=L.exports,T=a("8aaf"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-list-box"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"row"},[a("span",{staticClass:"label"},[e._v("订单号:")]),a("el-input",{staticClass:"input",model:{value:e.navInfo.orderId,callback:function(t){e.$set(e.navInfo,"orderId",t)},expression:"navInfo.orderId"}}),a("span",{staticClass:"label"},[e._v("用户名:")]),a("el-input",{staticClass:"input",model:{value:e.navInfo.username,callback:function(t){e.$set(e.navInfo,"username",t)},expression:"navInfo.username"}}),a("span",{staticClass:"label"},[e._v("订单状态:")]),a("el-select",{staticClass:"select",attrs:{placeholder:"请选择"},model:{value:e.navInfo.status,callback:function(t){e.$set(e.navInfo,"status",t)},expression:"navInfo.status"}},e._l(e.statusOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticClass:"search",attrs:{type:"primary"}},[e._v("查询")])],1)]),a("common-table",{attrs:{tableData:e.TableInfo.data,cols:e.TableInfo.cols},scopedSlots:e._u([{key:"status",fn:function(t){return[a("el-tag",{attrs:{type:e.getStatusType(t)}},[e._v(e._s(e.getStatus(t)))])]}}])})],1)},N=[],E=a("f3e6"),M={name:"OrderList",data:function(){return{TableInfo:{data:[{orderId:"slsdksldsldsd",date:"2017-03-25"}],cols:[{prop:"username",label:"用户名",align:"center"},{prop:"orderId",label:"订单编号",align:"center"},{prop:"date",label:"日期",align:"center"},{prop:"price",label:"价格",align:"center"},{prop:"status",label:"状态",align:"center"}]},navInfo:{orderId:"",username:"",status:""},statusOption:[{label:"已完成",value:"complete"},{label:"已取消",value:"cancel"},{label:"已付款",value:"pay"},{label:"设计中",value:"designing"},{label:"待设计",value:"forDesign"}]}},mounted:function(){console.log(E),this.TableInfo.data=E.data},methods:{getStatusType:function(e){var t=e.row.status,a={cancel:"danger",forDesign:"",designing:"success",pay:"warning",complete:"info"};return a[t]||""},getStatus:function(e){console.log(e.row,"ssssssssss");var t=e.row.status,a={cancel:"已取消",forDesign:"待设计",designing:"设计中",pay:"已支付",complete:"已完成"};return a[t]||""}}},P=M,B=(a("5fea"),Object(u["a"])(P,D,N,!1,null,"21f8c65b",null)),R=B.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-box"},[e._m(0),a("div",{ref:"homeChart",staticClass:"charts"})])},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"top"},[a("li",{staticClass:"row"},[a("div",{staticClass:"add"},[e._v("新增数据")]),a("span",[e._v("新增用户52")])]),a("li",{staticClass:"row mt-10"},[a("div",{staticClass:"all"},[e._v("全部数据")]),a("span",[e._v("全部用户2352")])])])}],G=a("3fb0"),H={name:"Home",mounted:function(){console.log(G);var e=this.$refs.homeChart;if(!e)return!1;var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["一月","二月","三月","四月","五月","六月","七月"]},yAxis:{type:"value"},series:[{data:[120,300,450,180,270,150,130],color:"#0170fe",barMaxWidth:"24px",type:"bar"}]},a=G["init"](e);a.setOption(t)}},J=H,q=(a("75cd"),Object(u["a"])(J,U,F,!1,null,"41244c11",null)),W=q.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-box"},[a("div",{staticClass:"form-box"},[a("div",{staticClass:"top"},[e._v("Login")]),a("el-form",{ref:"loginForm",staticClass:"form-style",attrs:{rules:e.rules,"label-position":e.labelPosition,"label-width":"80px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{prop:"name",label:"用户名"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{autocomplete:"off",type:"password"},model:{value:e.formLabelAlign.pwd,callback:function(t){e.$set(e.formLabelAlign,"pwd",t)},expression:"formLabelAlign.pwd"}})],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("登录")])],1)])},K=[],Q={name:"Login",data:function(){return{labelPosition:"left",formLabelAlign:{name:"",pwd:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.loginForm.validate((function(t){if(t&&"123456"!==e.formLabelAlign.pwd)e.$message.error("密码错误");else{if(!t||"123456"!=e.formLabelAlign.pwd)return!1;localStorage.setItem("auth","auth"),localStorage.setItem("username",e.formLabelAlign.name),h.$emit("changeUsername",e.formLabelAlign.name),e.$router.push({path:"/home"})}}))}}},V=Q,X=(a("8efa"),Object(u["a"])(V,z,K,!1,null,"6540c341",null)),Y=X.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"user-list-box"},[a("li",{staticClass:"left"},[a("el-tree",{attrs:{data:e.data,"default-expand-all":""}})],1),a("li",{staticClass:"right"},[a("div",{staticClass:"nav"},[a("span",{staticClass:"label"},[e._v("用户名: ")]),a("el-input",{staticClass:"input"}),a("el-button",{staticClass:"btn",attrs:{type:"primary"}},[e._v("搜索")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.setRange}},[e._v("设置范围")])],1),a("common-table",{attrs:{hasSelect:!0,tableData:e.TableInfo.data,cols:e.TableInfo.cols}})],1),a("RangeDia",{attrs:{isShow:e.isShow},on:{"update:isShow":function(t){e.isShow=t},"update:is-show":function(t){e.isShow=t}}})],1)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"设置范围",visible:e.isShow,center:"","append-to-body":!0,width:"30%"},on:{close:e.close}},[a("div",[a("CheckGroup",{attrs:{groupName:"one"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}}),e._l(e.list,(function(t){return a("CheckChild",{key:t.id,attrs:{groupName:"one",text:t.name},model:{value:t.isCheck,callback:function(a){e.$set(t,"isCheck",a)},expression:"item.isCheck"}})}))],2),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])},ae=[],ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("label",{staticClass:"raw"},[a("input",{staticClass:"half",attrs:{type:"checkbox"},domProps:{checked:e.isChecked},on:{change:e.handleChange}}),a("div",{class:["show",e.getIcon,e.getClass]}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"showText"}],staticClass:"text"},[e._v("全选"+e._s(e.value))])])])},se=[],oe=a("58c8"),le=(a("77a4"),a("7446"),a("27ae"),a("591f"),a("feb3"),new n["default"]),re=le,ie={name:"CheckGroup",props:{showText:{type:Boolean,default:!1},groupName:{type:String,default:"default"},value:{type:String,default:""}},data:function(){return{status:"none",isChecked:!1}},computed:{getIcon:function(){var e={"active-half":"el-icon-minus",full:"el-icon-check",none:null},t=this.status;return e[t]},getClass:function(){var e=this.status;return e}},created:function(){this.ids={},this.initEvent()},mounted:function(){},methods:{handleChange:function(){console.log("change",this.isChecked);var e=!this.isChecked,t=this.groupName+"Select";re.$emit(t,e)},initEvent:function(){var e=this,t=this.groupName;console.log(re),re.$on(t,(function(t){var a=t.id;a&&(e.ids[a]=t.value);var n=Object.values(e.ids),s=Object(oe["a"])(new Set(n));if(console.log(s),2==s.length)return e.status="active-half",e.$emit("input","half"),e.isChecked=!1,!1;s[0]&&1===s.length&&(e.status="full",e.$emit("input","full"),e.isChecked=!0),s[0]||1!==s.length||(e.status="none",e.$emit("input","none"),e.isChecked=!1)}))}}},ce=ie,ue=(a("04d7"),Object(u["a"])(ce,ne,se,!1,null,"169a2a45",null)),de=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{class:["label-box",e.disable?"disable-style":""]},[a("span",{class:["icon",e.value?"active":"",e.getIcon]}),a("input",{staticClass:"check-box",attrs:{disabled:e.disable,type:"checkbox"},domProps:{checked:e.value},on:{change:e.handleChange}}),a("span",{staticClass:"text"},[e._v(e._s(e.text))])])])},fe=[],me={name:"CheckChild",data:function(){return{}},props:{text:{type:String,default:""},disable:{type:Boolean,default:!1},groupName:{type:String,default:"default"},value:{type:Boolean,default:!1}},computed:{getIcon:function(){var e=this.value;return e?"el-icon-check":" "}},created:function(){this.id=Date.now()+Math.random()},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.groupName,a=this.id,n=this.value,s={id:a,value:n};re.$emit(t,s);var o=this.groupName+"Select";re.$on(o,(function(n){if(e.disable)return!1;e.$emit("input",n);var s={id:a,value:n};re.$emit(t,s)}))},handleChange:function(){var e=this.groupName,t=!this.value,a=this.id,n={id:a,value:t};re.$emit(e,n),this.$emit("input",t)}}},he=me,be=(a("a1c8"),Object(u["a"])(he,pe,fe,!1,null,"129e40f1",null)),ve=be.exports,ge={name:"RangeDia",components:{CheckChild:ve,CheckGroup:de},props:{isShow:{type:Boolean,default:!1}},data:function(){return{group:"",list:[{name:"范围1",isCheck:!0},{name:"范围2",isCheck:!0},{name:"范围3",isCheck:!0},{name:"范围4",isCheck:!0},{name:"范围5",isCheck:!0}]}},methods:{close:function(){this.$emit("update:isShow",!1)},confirm:function(){this.$emit("update:isShow",!1)}}},we=ge,Ce=Object(u["a"])(we,te,ae,!1,null,"099cc739",null),ye=Ce.exports,_e={name:"UserList",components:{RangeDia:ye},data:function(){return{isShow:!1,TableInfo:{data:[{org:"一级",username:"job",email:"22038@test.com",range:"口腔，缺失，补牙，修复，正畸",age:3},{org:"一级",username:"job",email:"27038@test.com",range:"口腔，缺失，补牙，修复，正畸",age:3},{org:"一级",username:"job",email:"223038@test.com",range:"口腔，缺失，补牙，修复，正畸",age:3},{org:"一级",username:"job",email:"20381@test.com",range:"口腔，缺失，补牙，修复，正畸",age:3}],cols:[{prop:"username",label:"用户名",align:"center"},{prop:"email",label:"邮箱",align:"center"},{prop:"org",label:"所在组织",align:"center"},{prop:"age",label:"工龄",align:"center"},{prop:"range",label:"负责范围",align:"center"}]},data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}]}},methods:{setRange:function(){this.isShow=!0}}},xe=_e,ke=(a("cbb6"),Object(u["a"])(xe,Z,ee,!1,null,"5798a626",null)),Se=ke.exports;n["default"].use(T["a"]);var $e=new T["a"]({routes:[{name:"User",path:"/user",component:Se,meta:{auth:!0}},{name:"Home",path:"/home",component:W,meta:{auth:!0}},{name:"Order",path:"/order",component:R,meta:{auth:!0}},{name:"Login",path:"/login",component:Y}]});$e.beforeEach((function(e,t,a){console.log(e,t,a);var n=e.meta.auth,s=localStorage.getItem("auth");n&&s||!n?a():n&&!s&&a({path:"/login"})})),console.log($e);var Ie=$e;n["default"].config.productionTip=!1,n["default"].use(S.a),n["default"].component("CommonTable",A),new n["default"]({router:Ie,render:function(e){return e(x)}}).$mount("#app")},"5b23":function(e,t,a){},"5c0b":function(e,t,a){"use strict";a("3828")},"5fea":function(e,t,a){"use strict";a("5b23")},6896:function(e,t,a){},"75cd":function(e,t,a){"use strict";a("ecc4")},"8efa":function(e,t,a){"use strict";a("d79d")},a1c8:function(e,t,a){"use strict";a("6896")},add8:function(e,t,a){"use strict";a("05b7")},cbb6:function(e,t,a){"use strict";a("2d7c")},d79d:function(e,t,a){},dd36:function(e,t,a){},e443:function(e,t,a){},ecc4:function(e,t,a){},f3e6:function(e){e.exports=JSON.parse('{"data":[{"orderId":"10023333222222222","date":"2017-01-03","username":"user1","price":"20.5$","status":"cancel"},{"orderId":"100232362223232222222","date":"2017-07-03","username":"user2","price":"210.5$","status":"complete"},{"orderId":"1002666222222222","date":"2018-01-03","username":"siri","price":"33.5$","status":"pay"},{"orderId":"100268932222222","date":"2019-01-03","username":"bob","price":"44.5$","status":"forDesign"},{"orderId":"100268932222222","date":"2019-01-03","username":"bob","price":"44.5$","status":"designing"}]}')}});
//# sourceMappingURL=app.40b1a260.js.map