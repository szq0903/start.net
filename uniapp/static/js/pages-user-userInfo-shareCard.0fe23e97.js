(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userInfo-shareCard"],{4970:function(e,t,i){"use strict";i.r(t);var n=i("b90e"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=a.a},5858:function(e,t,i){var n=i("f2cb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("ec9ff61c",n,!0,{sourceMap:!1,shadowMode:!1})},"693e":function(e,t,i){!function(t,i){e.exports=i(t)}(window,function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(i),function(e){o(t,e,n)}):c(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),o(t,e,i)}):c(t,n||i)}function a(e){return(e=e||{}).appId=T.appId,e.verifyAppId=T.appId,e.verifySignType="sha1",e.verifyTimestamp=T.timestamp+"",e.verifyNonceStr=T.nonceStr,e.verifySignature=T.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function o(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=f[i];n&&(i=n);var a="ok";if(t){var r=t.indexOf(":");"confirm"==(a=t.substring(r+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",T.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function s(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=l[n];a&&(e[t]=a)}return e}}function c(e,t){if(!(!T.debug||t&&t.isInnerInvoke)){var i=f[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function d(){return(new Date).getTime()}function u(t){I&&(e.WeixinJSBridge?t():p.addEventListener&&p.addEventListener("WeixinJSBridgeReady",t,!1))}if(!e.jWeixin){var l={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},f=function(){var e={};for(var t in l)e[l[t]]=t;return e}(),p=e.document,g=p.title,m=navigator.userAgent.toLowerCase(),h=navigator.platform.toLowerCase(),v=!(!h.match("mac")&&!h.match("win")),y=-1!=m.indexOf("wxdebugger"),I=-1!=m.indexOf("micromessenger"),w=-1!=m.indexOf("android"),S=-1!=m.indexOf("iphone")||-1!=m.indexOf("ipad"),_=(B=m.match(/micromessenger\/(\d+\.\d+\.\d+)/)||m.match(/micromessenger\/(\d+\.\d+)/))?B[1]:"",k={initStartTime:d(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},b={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:S?1:w?2:-1,clientVersion:_,url:encodeURIComponent(location.href)},T={},x={_completes:[]},M={state:0,data:{}};u(function(){k.initEndTime=d()});var C=!1,P=[],A={config:function(t){c("config",T=t);var n=!1!==T.check;u(function(){if(n)i(l.config,{verifyJsApiList:s(T.jsApiList)},function(){x._complete=function(e){k.preVerifyEndTime=d(),M.state=1,M.data=e},x.success=function(e){b.isPreVerifyOk=0},x.fail=function(e){x._fail?x._fail(e):M.state=-1};var e=x._completes;return e.push(function(){!function(e){if(!(v||y||T.debug||_<"6.0.2"||b.systemType<0)){var t=new Image;b.appId=T.appId,b.initTime=k.initEndTime-k.initStartTime,b.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,A.getNetworkType({isInnerInvoke:!0,success:function(e){b.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+b.version+"&o="+b.isPreVerifyOk+"&s="+b.systemType+"&c="+b.clientVersion+"&a="+b.appId+"&n="+b.networkType+"&i="+b.initTime+"&p="+b.preVerifyTime+"&u="+b.url;t.src=i}})}}()}),x.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();x._completes=[]},x}()),k.preVerifyStartTime=d();else{M.state=1;for(var e=x._completes,t=0,a=e.length;t<a;++t)e[t]();x._completes=[]}}),A.invoke||(A.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(i),n)},A.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=M.state?e():(x._completes.push(e),!I&&T.debug&&e())},error:function(e){_<"6.0.2"||(-1==M.state?e(M.data):x._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(w){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=f[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){n(l.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||g,desc:e.title||g,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(l.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(l.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(l.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(l.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(w){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(l.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<P.length){var t=P.shift();wx.getLocalImgData(t)}},e))):P.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){i(l.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(S){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(l.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))},openProductSpecificView:function(e){i(l.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],a=0,r=t.length;a<r;++a){var o=t[a],s={card_id:o.cardId,card_ext:o.cardExt};n.push(s)}i(l.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:T.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],a=0,r=t.length;a<r;++a){var o=t[a],s={card_id:o.cardId,code:o.code};n.push(s)}i(l.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(l.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(l.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){i(l.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){i(l.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(l.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(l.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},u(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){u(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){u(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){u(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){u(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){u(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){u(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},V=1,L={};return p.addEventListener("error",function(e){if(!w){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=V++,t["wx-id"]=a),L[a])return;L[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),p.addEventListener("load",function(e){if(!w){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(L[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=A),A}var B})},b90e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("a312"));function a(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{myInfo:{imgurl:"../../../static/image/login/tou.png"},qrImg:"",uid:"",url:"./shareCard"}},onLoad:function(e){if(this.uid=e.uid,!this.uid&&0!=this.uid&&"undefined"!=this.uid){var t=this.getStr("uid");this.uid=t,this.url=this.url+"?uid="+this.uid,console.log(this.url),uni.redirectTo({url:this.url})}},created:function(){var e=this;this.getmyInfo();var t=this.getUrl()+"/uniapp/pages/user/userInfo/shareCard?uid="+this.uid;this.qrcode(this.uid,t);var n=i("693e"),a="/index/Index/getJsSdkconfig/url/"+t,r={url:t};this.https(a,r).then(function(i){if(1==i.status){var a=i.data;n.config({debug:a.debug,appId:a.appid,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]});var r=e.myInfo.name,o=e.myInfo.imgurl,s=t,c=e.myInfo.job+"  "+e.myInfo.phone;n.ready(function(){n.updateAppMessageShareData({title:r,desc:c,link:s,imgUrl:o,success:function(){console.log("updateAppMessageShareData: ok")}}),n.updateTimelineShareData({title:r,link:s,imgUrl:o,success:function(){console.log("updateTimelineShareData: ok")}})})}})},methods:{getmyInfo:function(){var e=this,t=0;t=this.uid||0==this.uid||"undefined"==this.uid?this.uid:this.getStr("uid");var i=this.getStr("verif");if(i||(i="aaa"),t&&i){var n="/index/Index/card/uid/"+t+"/verif/"+i;this.http(n).then(function(t){1==t.status&&(e.myInfo=t.data)})}},qrcode:function(e,t){var i=n.default.createQrCodeImg(t,{size:parseInt(100)});this.qrImg=i}}};t.default=r},c3a7:function(e,t,i){"use strict";var n=i("5858"),a=i.n(n);a.a},dbeb:function(e,t,i){"use strict";i.r(t);var n=i("f649"),a=i("4970");for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);i("c3a7");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"7ea76634",null);t["default"]=s.exports},f2cb:function(e,t,i){t=e.exports=i("2350")(),t.push([e.i,".bg[data-v-7ea76634]{position:fixed;top:0;left:0;width:100%;height:100%;padding:%?118?% %?40?% %?40?%;background:#ebebeb}.center[data-v-7ea76634]{border-radius:%?20?%;background:#fff;overflow:hidden}.center[data-v-7ea76634],.top[data-v-7ea76634]{width:100%}.top p[data-v-7ea76634]{width:80%;height:40%;margin:%?20?% 10%;font-size:%?24?%;line-height:%?38?%;text-align:center}.cen[data-v-7ea76634]{overflow:hidden;margin-bottom:%?12?%}.cen div[data-v-7ea76634]:nth-child(2n){border-bottom:1px dashed #f60;width:90%;float:left;height:%?39?%}.cen div[data-v-7ea76634]:nth-child(2n-1){float:left;width:5%;height:%?80?%;background:#ebebeb}.cen div[data-v-7ea76634]:first-child{border-top-right-radius:%?40?%;border-bottom-right-radius:%?40?%}.cen div[data-v-7ea76634]:nth-child(3){border-top-left-radius:%?40?%;border-bottom-left-radius:%?40?%}.qrCode[data-v-7ea76634]{width:%?404?%;height:%?404?%;margin:auto;background:url("+i("e49e")+") no-repeat;background-size:cover;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.qrCode uni-image[data-v-7ea76634]{width:%?350?%;height:%?350?%}.qrTxt[data-v-7ea76634]{width:%?300?%;line-height:%?68?%;background:#f60;color:#fff;text-align:center;font-size:%?24?%;margin:%?40?% auto}.card[data-v-7ea76634],.qrTxt[data-v-7ea76634]{border-radius:%?20?%}.card[data-v-7ea76634]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#fff;margin-bottom:%?40?%;padding:%?40?%;padding:%?30?% %?30?% %?40?%;font-size:%?28?%}.card uni-image[data-v-7ea76634]{width:%?240?%;height:%?260?%;margin-top:%?20?%}.card-right[data-v-7ea76634]{width:58%}.card-right span[data-v-7ea76634]{margin-right:%?20?%}.job[data-v-7ea76634],.name[data-v-7ea76634],.phone[data-v-7ea76634]{line-height:%?80?%}.add[data-v-7ea76634]{line-height:%?40?%}.add span[data-v-7ea76634]:first-child{width:%?64?%;height:%?40?%}.add span[data-v-7ea76634]:nth-child(2){line-height:%?40?%}.card-btn[data-v-7ea76634]{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 %?40?%}.card-btn div[data-v-7ea76634]{width:40%;line-height:%?70?%;background:#00b9a1;border-radius:%?30?%;padding-left:%?60?%;font-size:%?24?%;color:#fff;text-align:center;position:relative}.card-btn div uni-image[data-v-7ea76634]{position:absolute;left:%?24?%;top:%?15?%;width:%?40?%;height:%?40?%}",""])},f649:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg"},[i("div",{staticClass:"card"},[i("v-uni-image",{attrs:{src:e.myInfo.imgurl}}),i("div",{staticClass:"card-right"},[i("div",{staticClass:"name"},[i("span",[e._v("姓名:")]),i("span",[e._v(e._s(e.myInfo.name))])]),i("div",{staticClass:"phone"},[i("span",[e._v("电话:")]),i("span",[e._v(e._s(e.myInfo.phone))])]),i("div",{staticClass:"job"},[i("span",[e._v("职务:")]),i("span",[e._v(e._s(e.myInfo.job))])]),i("div",{staticClass:"add"},[i("span",[e._v("地址:")]),i("span",[e._v(e._s(e.myInfo.address))])])])],1),i("div",{staticClass:"center"},[i("div",{staticClass:"top"},[i("p",[e._v("您好我是 "+e._s(e.myInfo.job)+" "+e._s(e.myInfo.name)+" 这是我的名片，请惠存 谢谢！......")])]),e._m(0),i("div",{staticClass:"bottom"},[i("div",{staticClass:"qrCode"},[i("v-uni-image",{attrs:{src:e.qrImg}})],1),i("div",{staticClass:"qrTxt"},[e._v("长按识别图中二维码")])])])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cen"},[i("div"),i("div"),i("div")])}];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);