(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(t,e,n){},167:function(t,e,n){"use strict";var s=n(3),o=n(168);s({target:"String",proto:!0,forced:n(169)("link")},{link:function(t){return o(this,"a","href",t)}})},168:function(t,e,n){var s=n(20),o=/"/g;t.exports=function(t,e,n,i){var r=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+r+"</"+e+">"}},169:function(t,e,n){var s=n(5);t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},198:function(t,e,n){"use strict";var s=n(166);n.n(s).a},213:function(t,e,n){"use strict";n.r(e);n(111),n(112),n(167);var s={name:"ShowBox",props:{title:{type:String,default:"hello"},Content:{type:String,default:"hello world"},link:{type:String,default:""},img:{type:String,default:"https://s1.ax1x.com/2020/03/22/8IRViR.jpg"}},data:function(){return{isOver:!1,shadeStyle:{top:"-110%"},contentStyle:{transform:"scale(1)"}}},methods:{showShade:function(){this.contentStyle.transform="scale(1.15)",this.shadeStyle.top="0"},hideShade:function(){this.contentStyle.transform="scale(1)",this.shadeStyle.top="-110%"},turnTo:function(){this.link.includes("http")?location.href=this.link:this.$router.push(this.link)}}},o=(n(198),n(14)),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-box-container",on:{mouseover:t.showShade,mouseout:t.hideShade}},[n("img",{staticClass:"box-content",style:t.contentStyle,attrs:{src:t.img}}),n("div",{staticClass:"cover-shade",style:t.shadeStyle},[n("div",{staticClass:"cover-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"cover-content"},[t._v(t._s(t.Content))]),n("a",{staticClass:"read-more",on:{click:t.turnTo}},[t._v("了解更多")])])])}),[],!1,null,"062cacb2",null);e.default=i.exports}}]);