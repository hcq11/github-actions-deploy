(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f911134"],{"2c8a":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=window.devicePixelRatio||1,a=10*i,s=a/2;return function(){function l(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),this.canvas=function(t){var e=document.getElementById(t),a=e.parentNode.clientWidth,s=e.parentNode.clientHeight;return e.style.width=a+"px",e.style.height=s+"px",e.width=a*i,e.height=s*i,e}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*i,this.leftPadding=50*i,this.rightPadding=10*i,this.bottomPadding=50*i,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.xRotate=0,this.yRotate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*i+"px Arial",top:a,bottom:s},this.legend={display:!0,position:"top",color:"#666",font:14*i+"px Arial",top:45*i,bottom:15*i,textWidth:0},this.radius=100*i,this.innerRadius=60*i,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(e)}return function(e,i,a){i&&t(e.prototype,i),a&&t(e,a)}(l,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),"bar"===this.type||"line"===this.type?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-a)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-a)/this.labels.length),this.ySpace=function(t,i){var a=t.map((function(t){return t.data.reduce((function(t,e){return e<t?t:e}))})),s=Math.ceil(Math.max.apply(Math,e(a))/i),l=s.toString().length-1;return l=2<l?2:l,Math.ceil(s/Math.pow(10,l))*Math.pow(10,l)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,e=this.datasets.length;t.beginPath();for(var l=0;l<e;l++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[l].label).width),t.fillStyle=t.strokeStyle=this.datasets[l].fillColor||this.colorList[l];for(var n=this.datasets[l].data,o=0;o<n.length;o++)if(!(o>this.labels.length-1)){var r=this.xLength/(e+1),h=this.yLength/this.ySpace,c=this.leftPadding+this.xLength*o+r*(l+.5),d=c+r,g=this.canvas.height-this.bottomPadding,f=g-n[o]*h;if("bar"===this.type)t.fillRect(c,f,d-c,g-f),this.drawValue(n[o],c+r/2,f-s);else if("line"===this.type){var u=this.leftPadding+this.xLength*(o+.5);t.beginPath(),t.arc(u,f,3*i,0,2*Math.PI,!0),t.fill(),0!==o&&(t.beginPath(),t.strokeStyle=this.datasets[l].fillColor||this.colorList[l],t.lineWidth=2*i,t.moveTo(u-this.xLength,g-n[o-1]*h),t.lineTo(u,f),t.stroke(),t.lineWidth=1*i),this.drawValue(n[o],u,f-a)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,e=this.labels.length,i=this.datasets[0],a=i.data,s=a.reduce((function(t,e){return t+e})),l=-Math.PI/2,n=this.canvas.width/2,o=this.canvas.height/2,r=0;r<e;r++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[r]).width),t.beginPath(),t.strokeStyle=t.fillStyle=i.colorList&&i.colorList[r]||this.colorList[r],t.moveTo(n,o);var h=l,c=l+=a[r]/s*2*Math.PI;t.arc(n,o,this.radius,h,c),t.closePath(),t.fill();var d=(h+c)/2;this.drawPieValue(a[r],d)}"ring"===this.type&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(n,o,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,e,a){var s=this.ctx;this.showValue&&(s.textBaseline="middle",s.font=12*i+"px Arial",s.textAlign="center",s.fillText(t,e,a))}},{key:"drawPieValue",value:function(t,e){var i=this.ctx;if(this.showValue){var s=this.canvas.width/2,l=this.canvas.height/2,n=Math.ceil(Math.abs(this.radius*Math.cos(e))),o=Math.floor(Math.abs(this.radius*Math.sin(e)));i.textBaseline="middle",this.showValue&&(e<=0?(i.textAlign="left",i.moveTo(s+n,l-o),i.lineTo(s+n+a,l-o-a),i.moveTo(s+n+a,l-o-a),i.lineTo(s+n+3*a,l-o-a),i.stroke(),i.fillText(t,s+n+3.5*a,l-o-a)):0<e&&e<=Math.PI/2?(i.textAlign="left",i.moveTo(s+n,l+o),i.lineTo(s+n+a,l+o+a),i.moveTo(s+n+a,l+o+a),i.lineTo(s+n+3*a,l+o+a),i.stroke(),i.fillText(t,s+n+3.5*a,l+o+a)):e>Math.PI/2&&e<Math.PI?(i.textAlign="right",i.moveTo(s-n,l+o),i.lineTo(s-n-a,l+o+a),i.moveTo(s-n-a,l+o+a),i.lineTo(s-n-3*a,l+o+a),i.stroke(),i.fillText(t,s-n-3.5*a,l+o+a)):(i.textAlign="right",i.moveTo(s-n,l-o),i.lineTo(s-n-a,l-o-a),i.moveTo(s-n-a,l-o-a),i.lineTo(s-n-3*a,l-o-a),i.stroke(),i.fillText(t,s-n-3.5*a,l-o-a)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var e=this.ctx;e.beginPath(),e.font=t.font,e.textAlign="center",e.fillStyle=t.color,"top"===t.position?(e.textBaseline="top",e.fillText(t.text,this.canvas.width/2,t.top)):(e.textBaseline="bottom",e.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,e=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,e),t.lineTo(this.canvas.width-this.rightPadding,e),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*i+"px Microsoft YaHei",t.textAlign=this.xRorate||this.xRotate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var e=0;e<this.labels.length;e++){var l=this.labels[e],n=this.leftPadding+this.xLength*(e+1)+.5,o=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(n,o),t.lineTo(n,this.topPadding+a)):(t.moveTo(n,o),t.lineTo(n,o-s)),t.stroke(),t.save(),t.translate(n-this.xLength/2,o+s),this.xRorate?t.rotate(-this.xRorate*Math.PI/180):t.rotate(-this.xRotate*Math.PI/180),t.fillText(l,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*i+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var e=0;e<this.yEqual;e++){var l=this.leftPadding,n=this.canvas.height-this.bottomPadding-this.yLength*(e+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(l,n),t.lineTo(this.canvas.width-this.rightPadding-a,n)):(t.strokeStyle=this.axisColor,t.moveTo(l-s,n),t.lineTo(l,n)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(l-a,n),this.yRorate?t.rotate(-this.yRorate*Math.PI/180):t.rotate(-this.yRotate*Math.PI/180),t.fillText(this.ySpace*(e+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var e=this.ctx,i="pie"===this.type||"ring"===this.type;e.beginPath(),e.font=t.font,e.textAlign="left",e.textBaseline="middle";for(var l=i?this.labels.length:this.datasets.length,n=(this.canvas.width-(this.legend.textWidth+(5*l-2)*a))/2,o=0,r=0;r<l;r++){var h=i?this.datasets[0]:this.datasets[r],c=(i?this.labels[r]:h.label)||"";e.fillStyle=h.colorList&&h.colorList[r]||h.fillColor||this.colorList[r],"top"===t.position?(this.drawLegendIcon(n+5*a*r+o,t.top-s,2*a,a),e.fillStyle=t.color,e.fillText(c,n+(5*r+3)*a+o,t.top)):"bottom"===t.position?(this.drawLegendIcon(n+5*a*r+o,this.canvas.height-t.bottom-s,2*a,a),e.fillStyle=t.color,e.fillText(c,n+(5*r+3)*a+o,this.canvas.height-t.bottom)):(e.fillRect(a,t.top+2*a*r,2*a,a),e.fillStyle=t.color,e.fillText(c,4*a,t.top+2*a*r+.5*a)),o+=Math.ceil(e.measureText(c).width)}}}},{key:"drawLegendIcon",value:function(t,e,l,n){var o=this.ctx;"line"===this.type?(o.beginPath(),o.strokeStyle=o.fillStyle,o.lineWidth=2*i,o.moveTo(t,e+s),o.lineTo(t+2*a,e+s),o.stroke(),o.lineWidth=1*i,o.arc(t+a,e+s,3*i,0,2*Math.PI,!0),o.fill()):o.fillRect(t,e,l,n)}}]),l}()}))},"7ed4":function(t,e,i){"use strict";var a=i("2b0e");const s=new a["default"];e["a"]=s},"999d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rootdiv"},[i("el-container",{staticClass:"rootContainer"},[i("el-container",{staticClass:"rootContainer"},[i("el-main",{staticClass:"videos video-main",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("div",{staticClass:"block",staticStyle:{height:"100%",width:"100%"}},[0==t.selected?i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"grid-one-contentheight",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:24}},[i("h1",[t._v(t._s(t.$store.state.itemNum))])])],1)],1):1==t.selected?i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"row-bg el-row-two",attrs:{gutter:10,type:"flex",justify:"space-between"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-contentA"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-contentA"})])],1)],1):2==t.selected?i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})])],1),i("br"),i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})])],1)],1):3==t.selected?i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})])],1),i("br"),i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"})])],1)],1):4==t.selected?i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})])],1),i("br"),i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})])],1),i("br"),i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"center"}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})])],1)],1):i("div",{staticStyle:{height:"100%",width:"100%"}},[i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"start"}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"})])],1),i("br"),i("el-row",{staticClass:"row-bg",attrs:{gutter:10,type:"flex",justify:"start"}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-a-contentWidth"}),i("br"),i("div",{staticClass:"grid-a-contentWidth"})]),i("el-col",{attrs:{span:16}},[i("div",{staticClass:"grid-a-content-a-Width"})])],1)],1)])]),i("el-footer",{staticClass:"cap-pic"},[i("el-container",{staticStyle:{"flex-wrap":"nowrap"},attrs:{direction:"vertaical"}},[i("div",{staticStyle:{flex:"1"}},[i("span",{attrs:{color:"#ffffff"}},[t._v("抓拍结果")]),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("更多")])],1),t._l(10,(function(t){return i("div",{key:t,staticStyle:{flex:"1"}},[i("el-card",{staticClass:"cap-box-card",staticStyle:{flex:"1"},attrs:{shadow:"hover"}},[i("img",{staticClass:"image",attrs:{src:"http://10.20.20.90:880/capImg/650938"}})])],1)}))],2)],1)],1),i("el-aside",{staticClass:"compare-pic",attrs:{width:"300px"}},[i("el-container",{staticStyle:{height:"100%",width:"100%",overflow:"hidden"}},[i("el-header",{staticClass:"discriminate-header",staticStyle:{height:"10px"}},[i("div",[i("span",{attrs:{color:"#ffffff"}},[t._v("识别结果")]),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("更多")])],1)]),i("el-main",[i("el-scrollbar",{staticStyle:{"overflow-x":"hidden",height:"100%"}},t._l(8,(function(t){return i("div",{key:t},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("el-row",{attrs:{gutter:15}},[i("el-col",{attrs:{span:12}},[i("img",{staticClass:"image",attrs:{src:"http://10.20.20.90:880/capImg/650923"}})]),i("el-col",{attrs:{span:12}},[i("img",{staticClass:"image",attrs:{src:"http://10.20.20.90:880/capImg/650908"}})])],1)],1)],1)})),0)],1)],1)],1)],1)],1)},s=[],l=i("f5ac"),n=(i("7ed4"),i("3786")),o={name:"dashboard",data(){return{selected:0,layouts:[{name:"1x1模式",value:"0"},{name:"2x1模式",value:"1"},{name:"2x2模式",value:"2"},{name:"3x2模式",value:"3"},{name:"3x3模式",value:"4"},{name:"1+5模式",value:"5"}],name:Object(n["b"])()}},components:{Schart:l["a"]},computed:{role(){return"admin"===this.name?"超级管理员":"普通用户"}},methods:{changeDate(){const t=(new Date).getTime();this.data.forEach((e,i)=>{const a=new Date(t-864e5*(6-i));e.name=`${a.getFullYear()}/${a.getMonth()+1}/${a.getDate()}`})}}},r=o,h=(i("dc9e"),i("2877")),c=Object(h["a"])(r,a,s,!1,null,null,null);e["default"]=c.exports},b4a2:function(t,e,i){},dc9e:function(t,e,i){"use strict";i("b4a2")},f5ac:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{attrs:{id:t.canvasId}})])},s=[],l=i("2c8a"),n=i.n(l),o={props:{canvasId:{type:String,default:"",required:!0},options:{type:Object,required:!0}},mounted(){this.renderChart()},methods:{renderChart(){if(!this.checkOptions())return;const t={...this.options};new n.a(this.canvasId,t)},checkOptions(){const t=this.options;return!(!t.datasets||!t.datasets.length)&&!(!t.labels||!t.labels.length)}},watch:{options:{handler(t,e){this.renderChart()},deep:!0}}},r=o,h=i("2877"),c=Object(h["a"])(r,a,s,!1,null,null,null);e["a"]=c.exports}}]);