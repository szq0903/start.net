(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-homeTem-intro"],{"0130":function(t,i,n){"use strict";n.r(i);var o=n("9d7c"),a=n("d914");for(var e in a)"default"!==e&&function(t){n.d(i,t,function(){return a[t]})}(e);n("1c53");var r=n("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"1b583432",null);i["default"]=s.exports},"1c53":function(t,i,n){"use strict";var o=n("64bd"),a=n.n(o);a.a},"64bd":function(t,i,n){var o=n("aff2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("1920b4f7",o,!0,{sourceMap:!1,shadowMode:!1})},"9d7c":function(t,i,n){"use strict";var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"intro"},[n("div",{staticClass:"intro-content"},[n("span",{staticClass:"intro-title"},[t._v(t._s(t.introList.title))]),n("v-uni-image",{staticClass:"intro-photo",attrs:{src:t.introList.companyPhoto}}),n("div",{staticClass:"intro-text",domProps:{innerHTML:t._s(t.introList.companyIntro)}}),n("div",{staticClass:"intro-bot",on:{click:function(i){i=t.$handleEvent(i),t.introMore(i)}}},[n("span",{staticClass:"intro-more"},[t._v("查看更多")]),n("v-uni-image",{staticClass:"intro-img",attrs:{src:"/static/image/intro/more.png"}})],1)],1)])},a=[];n.d(i,"a",function(){return o}),n.d(i,"b",function(){return a})},a5ae:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{introList:{}}},methods:{introMore:function(){uni.switchTab({url:"../../../../intro/intro"})},getIntroList:function(){var t=this,i="/index/Index/indexabout";this.http(i).then(function(i){1==i.status?t.introList=i.data:t.showToast("网络请求失败")})}},created:function(){this.getIntroList()}};i.default=o},aff2:function(t,i,n){i=t.exports=n("2350")(),i.push([t.i,".intro[data-v-1b583432]{margin:%?20?% 0;background:#fff;padding:%?20?% %?20?% 0}.intro-content[data-v-1b583432]{color:#a9a9a9}.intro-title[data-v-1b583432]{display:inline-block;width:100%;font-size:%?32?%;font-weight:700;line-height:%?40?%;margin-bottom:%?20?%;text-align:center}.intro-photo[data-v-1b583432]{width:100%;display:block}.intro-text[data-v-1b583432]{font-size:%?24?%;line-height:%?44?%;text-indent:2em;padding:%?10?% 0;border-bottom:solid #ebebeb}.intro-bot[data-v-1b583432]{margin:0 %?20?%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.intro-more[data-v-1b583432]{color:#6c81a6;font-size:%?28?%;line-height:%?80?%}.intro-img[data-v-1b583432]{width:%?40?%;height:%?40?%;margin:%?20?% 0}",""])},d914:function(t,i,n){"use strict";n.r(i);var o=n("a5ae"),a=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(i,t,function(){return o[t]})}(e);i["default"]=a.a}}]);