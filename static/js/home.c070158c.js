(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"3d0e":function(t,e,s){},5306:function(t,e,s){"use strict";s("f45f")},"5ebe":function(t,e,s){},"7db4":function(t,e,s){"use strict";s("3d0e")},"7ed4":function(t,e,s){"use strict";var a=s("2b0e");const l=new a["default"];e["a"]=l},"862a":function(t,e,s){},b8f2:function(t,e,s){t.exports=s.p+"static/img/profile.37c3ea6b.png"},bfe9:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1),s("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?s("i",{staticClass:"el-icon-s-unfold"}):s("i",{staticClass:"el-icon-s-fold"})]),s("div",{staticClass:"logo"},[t._v("ATRIS")]),s("div",{staticClass:"header-nav"},[[s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"机器人控制",name:"robotCtrl"}},[t._v("机器人控制")]),s("el-tab-pane",{attrs:{label:"实时监控",name:"realtimeVideo"}},[t._v("实时监控")]),s("el-tab-pane",{attrs:{label:"人脸识别",name:"faceDetect"}},[t._v("人脸识别")]),s("el-tab-pane",{attrs:{label:"地图管理",name:"mapManager"}},[t._v("地图管理")])],1)]],2),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+"\n                    "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"https://web.ubtrobot.com/abis-web/index.html#/user/login",target:"_blank"}},[s("el-dropdown-item",[t._v("平台系统")])],1),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-avator"},[a("img",{attrs:{src:s("b8f2")}})])}],o=s("7ed4"),c=s("3786"),r={data(){return{collapse:!1,fullscreen:!1,name:"demo",message:2,activeIndex:"1",activeIndex2:"1",activeName:"second"}},computed:{username(){let t=Object(c["b"])();return t||this.name}},methods:{handleClick(t,e){switch(console.log(t,this.activeName),this.activeName){case"robotCtrl":console.log("robot"),this.$router.push("/robot");break;case"realtimeVideo":console.log("real"),this.$router.push("/realtimeVideo");break;case"faceDetect":console.log("face");break;case"mapManager":console.log("mapManager"),Object(c["c"])();break;default:console.log("warnning: unknow nav item!")}},handleSelect(t,e){console.log(t,e)},handleCommand(t){"loginout"==t&&(Object(c["c"])(),this.$router.push("/login"))},collapseChage(){this.collapse=!this.collapse,o["a"].$emit("collapse",this.collapse)},handleFullScreen(){let t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted(){document.body.clientWidth<1500&&this.collapseChage()}},u=r,d=(s("d791"),s("2877")),h=Object(d["a"])(u,i,n,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,(function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,(function(e,a){return s("el-menu-item",{key:a,attrs:{index:e.index}},[t._v(t._s(e.title))])}))],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]}))],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},b=[],g={data(){return{collapse:!1,items:[{icon:"el-icon-view",index:"dashboard",title:"人脸识别"},{icon:"el-icon-video-camera",index:"table",title:"人脸抓拍"},{icon:"el-icon-user-solid",index:"3",title:"底库管理",subs:[{index:"facebases",title:"人像分组"},{index:"faceTemplate",title:"人像底库"},{index:"3-2",title:"车牌底库"}]}]}},computed:{onRoutes(){return this.$route.path.replace("/","")}},created(){o["a"].$on("collapse",t=>{this.collapse=t,o["a"].$emit("collapse-content",t)})}},f=g,v=(s("5306"),Object(d["a"])(f,p,b,!1,null,"72bbef1e",null)),_=v.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(e,a){return s("li",{key:a,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(a)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},w=[],x={data(){return{tagsList:[]}},methods:{isActive(t){return t===this.$route.fullPath},closeTags(t){const e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll(){this.tagsList=[],this.$router.push("/")},closeOther(){const t=this.tagsList.filter(t=>t.path===this.$route.fullPath);this.tagsList=t},setTags(t){const e=this.tagsList.some(e=>e.path===t.fullPath);e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),o["a"].$emit("tags",this.tagsList)},handleTags(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags(){return this.tagsList.length>0}},watch:{$route(t,e){this.setTags(t)}},created(){this.setTags(this.$route),o["a"].$on("close_current_tags",()=>{for(let t=0,e=this.tagsList.length;t<e;t++){const s=this.tagsList[t];if(s.path===this.$route.fullPath){t<e-1?this.$router.push(this.tagsList[t+1].path):t>0?this.$router.push(this.tagsList[t-1].path):this.$router.push("/"),this.tagsList.splice(t,1);break}}})}},k=x,$=(s("c5f3"),Object(d["a"])(k,C,w,!1,null,null,null)),L=$.exports,F={data(){return{tagsList:[],collapse:!1}},components:{vHead:m,vSidebar:_,vTags:L},created(){o["a"].$on("collapse-content",t=>{this.collapse=t}),o["a"].$on("tags",t=>{let e=[];for(let s=0,a=t.length;s<a;s++)t[s].name&&e.push(t[s].name);this.tagsList=e})}},S=F,T=(s("7db4"),Object(d["a"])(S,a,l,!1,null,null,null));e["default"]=T.exports},c5f3:function(t,e,s){"use strict";s("5ebe")},d791:function(t,e,s){"use strict";s("862a")},f45f:function(t,e,s){}}]);