(function(t){function s(s){for(var e,o,c=s[0],r=s[1],l=s[2],u=0,f=[];u<c.length;u++)o=c[u],i[o]&&f.push(i[o][0]),i[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);d&&d(s);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(e=!1)}e&&(n.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},n=[];function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},1634:function(t,s,a){},"234e":function(t,s,a){},"428d":function(t,s,a){},4678:function(t,s,a){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var s=n(t);return a(s)}function n(t){var s=e[t];if(!(s+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="4678"},"56d7":function(t,s,a){"use strict";a.r(s);a("cadf"),a("551c");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"head-nav"},[a("div",{staticClass:"section"},[a("div",{staticClass:"nav-box menuhd",attrs:{id:"menu2"}},[a("ul",[a("li",{staticClass:"index"},[a("router-link",{attrs:{to:"/index"}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("首页")])])],1),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])]),t._m(6)])])]),a("router-view"),t._m(7)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"head-top"},[a("div",{staticClass:"section"},[a("div",{staticClass:"left-box"},[a("span",[t._v("黑马买买买")]),a("a",{attrs:{target:"_blank",href:"#"}}),a("a",{attrs:{target:"_blank",href:"#"}})]),a("div",{staticClass:"right-box",attrs:{id:"menu"}},[a("span",{staticStyle:{display:"none"}},[a("a",{attrs:{href:""}},[t._v("登录")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("注册")]),a("strong",[t._v("|")])]),a("span",[a("a",{attrs:{href:""}},[t._v("会员中心")]),a("strong",[t._v("|")]),a("a",[t._v("退出")]),a("strong",[t._v("|")])]),a("a",{attrs:{href:""}},[a("i",{staticClass:"iconfont icon-cart"}),t._v("购物车(\n                      "),a("span",{attrs:{id:"shoppingCartCount"}},[a("span",[t._v("4")])]),t._v(")")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"news"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("每日精选")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"photo"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("秒杀专区")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"video"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("黑马超市")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"down"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("会员权益")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"goods"},[a("a",{staticClass:"router-link-exact-active ",attrs:{href:""}},[a("span",{staticClass:"out",staticStyle:{top:"0px"}},[t._v("购物商城")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search-box"},[a("div",{staticClass:"input-box"},[a("input",{attrs:{id:"keywords",name:"keywords",type:"text",onkeydown:"if(event.keyCode==13){};",placeholder:"输入关健字","x-webkit-speech":""}})]),a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"iconfont icon-search"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("div",{staticClass:"section"},[a("div",{staticClass:"foot-nav"},[a("a",{attrs:{href:""}},[t._v("关于我们")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("联系我们")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("联系客服")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("合作招商")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("商家帮助")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("营销中心")]),a("strong",[t._v("|")]),a("a",{attrs:{href:""}},[t._v("隐私政策")])]),a("div",{staticClass:"foot-box"},[a("div",{staticClass:"copyright"},[a("p",[t._v("版权所有 黑马买买买 ")]),a("p",[t._v("公司地址： 联系电话：")]),a("p",{staticClass:"gray"},[t._v("Copyright © 2009-2018 itcast Corporation,All Rights Reserved.")])]),a("div",{staticClass:"service"},[a("p",[t._v("周一至周日 9:00-24:00")]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"iconfont icon-phone"}),t._v("在线客服")])])])])])}],o=a("1157"),c=a.n(o),r={name:"app",mounted:function(){c()("#menu2 li a").wrapInner('<span class="out"></span>'),c()("#menu2 li a").each(function(){c()('<span class="over">'+c()(this).text()+"</span>").appendTo(this)}),c()("#menu2 li a").hover(function(){c()(".out",this).stop().animate({top:"48px"},300),c()(".over",this).stop().animate({top:"0px"},300)},function(){c()(".out",this).stop().animate({top:"0px"},300),c()(".over",this).stop().animate({top:"-48px"},300)})}},l=r,d=(a("5709"),a("1b23")),u=Object(d["a"])(l,i,n,!1,null,"0abffab0",null),f=u.exports,v=a("8c4f"),p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[a("div",{staticClass:"section"},[a("div",{staticClass:"location"},[a("span",[t._v("当前位置：")]),a("a",{staticClass:"router-link-active",attrs:{href:"#/"}},[t._v("首页")]),t._v(" >\n            "),a("a",{staticClass:"router-link-exact-active router-link-active",attrs:{href:"#/site/goodslist"}},[t._v("购物商城")]),a("Rate",{model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),a("div",{staticClass:"section"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrap-box"},[a("div",{staticClass:"left-220",staticStyle:{margin:"0px"}},[a("div",{staticClass:"banner-nav"},[a("ul",t._l(t.catelist,function(s,e){return a("li",{key:s.id},[a("h3",[a("i",{staticClass:"iconfont icon-arrow-right"}),a("span",[t._v(t._s(s.title))]),a("p",t._l(s.subcates,function(s,e){return a("span",{key:s.id},[t._v("\n                                            "+t._s(s.title)+" \n                                        ")])}))]),a("div",{staticClass:"item-box"},[a("dl",[a("dt",[a("a",{attrs:{href:"/goods/40.html"}},[t._v(t._s(s.title))])]),a("dd",t._l(s.subcates,function(s,e){return a("a",{key:s.id,attrs:{href:"/goods/43.html"}},[t._v(t._s(s.title))])}))])])])}))])]),a("div",{staticClass:"left-705"},[a("el-carousel",{attrs:{height:"341px","indicator-position":"outside"}},t._l(t.sliderlist,function(t,s){return a("el-carousel-item",{key:t.id},[a("img",{attrs:{src:t.img_url,alt:""}})])}))],1),a("div",{staticClass:"left-220"},[a("ul",{staticClass:"side-img-list"},t._l(t.toplist,function(s,e){return a("li",{key:s.id},[a("div",{staticClass:"img-box"},[a("label",[t._v(t._s(e+1))]),a("img",{attrs:{src:s.img_url}})]),a("div",{staticClass:"txt-box"},[a("a",{attrs:{href:"/goods/show-98.html"}},[t._v(t._s(s.title))]),a("span",[t._v(t._s(t._f("cutTime")(s.add_time)))])])])}))])])])]),t._l(t.goodList,function(s,e){return a("div",{key:s.level1cateid,staticClass:"section"},[a("div",{staticClass:"main-tit"},[a("h2",[t._v(t._s(s.catetitle))]),a("p",[t._l(s.level2catelist,function(s,e){return a("a",{attrs:{href:"/goods/43.html"}},[t._v(t._s(s.subcatetitle))])}),t._m(0,!0)],2)]),a("div",{staticClass:"wrapper clearfix"},[a("div",{staticClass:"wrap-box"},[a("ul",{staticClass:"img-list"},t._l(s.datas,function(s,e){return a("li",{key:s.artID},[a("router-link",{attrs:{to:"/goodsInfo/"+s.artID}},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.img_url,expression:"itemSon.img_url"}]})]),a("div",{staticClass:"info"},[a("h3",[t._v(t._s(s.artTitle))]),a("p",{staticClass:"price"},[a("b",[t._v(t._s(s.sell_price))]),t._v("元")]),a("p",[a("strong",[t._v("库存 "+t._s(s.stock_quantity))]),a("span",[t._v("市场价：\n                                        "),a("s",[t._v(t._s(s.market_price))])])])])])],1)}))])])])})],2)},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"/goods/40.html"}},[t._v("更多\n                    "),a("i",[t._v("+")])])}],b={data:function(){return{catelist:[],sliderlist:[],toplist:[],goodList:[],value:0}},beforeMount:function(){var t=this;this.axios.get("/site/goods/gettopdata/goods").then(function(s){t.catelist=s.data.message.catelist,t.sliderlist=s.data.message.sliderlist,t.toplist=s.data.message.toplist}).catch(function(t){}),this.axios.get("/site/goods/getgoodsgroup").then(function(s){console.log(s),t.goodList=s.data.message}).catch(function(t){})},mounted:function(){}},_=b,h=(a("a55e"),Object(d["a"])(_,p,m,!1,null,"a0afc9d8",null)),g=h.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),a("div",{staticClass:"section"},[a("div",{staticClass:"wrapper clearfix"},[a("div",{staticClass:"wrap-box"},[a("div",{staticClass:"left-925"},[a("div",{staticClass:"goods-box clearfix"},[0!=this.imglist.length?a("div",{staticClass:"pic-box"},[a("ProductZoomer",{attrs:{baseImages:t.images,"base-zoomer-options":t.zoomerOptions}})],1):t._e(),a("div",{staticClass:"goods-spec"},[a("h1",[t._v(t._s(t.goodsinfo.title))]),a("p",{staticClass:"subtitle"},[t._v(t._s(t.goodsinfo.sub_title))]),a("div",{staticClass:"spec-box"},[a("dl",[a("dt",[t._v("货号")]),a("dd",{attrs:{id:"commodityGoodsNo"}},[t._v(t._s(t.goodsinfo.goods_no))])]),a("dl",[a("dt",[t._v("市场价")]),a("dd",[a("s",{attrs:{id:"commodityMarketPrice"}},[t._v("¥"+t._s(t.goodsinfo.market_price))])])]),a("dl",[a("dt",[t._v("销售价")]),a("dd",[a("em",{staticClass:"price",attrs:{id:"commoditySellPrice"}},[t._v("¥"+t._s(t.goodsinfo.sell_price))])])])]),a("div",{staticClass:"spec-box"},[a("dl",[a("dt",[t._v("购买数量")]),a("dd",[a("div",{staticClass:"stock-box"},[a("div",{staticClass:"el-input-number el-input-number--small"},[a("span",{staticClass:"el-input-number__decrease",class:{"is-disabled":1==t.buyNum},attrs:{role:"button"}},[a("i",{staticClass:"el-icon-minus",on:{click:function(s){1==t.buyNum||t.buyNum--}}})]),a("span",{staticClass:"el-input-number__increase",class:{"is-disabled":t.buyNum==t.goodsinfo.stock_quantity},attrs:{role:"button"}},[a("i",{staticClass:"el-icon-plus",on:{click:function(s){t.buyNum<t.goodsinfo.stock_quantity?t.buyNum++:t.goodsinfo.stock_quantity}}})]),a("div",{staticClass:"el-input el-input--small"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.buyNum,expression:"buyNum"}],staticClass:"el-input__inner",attrs:{autocomplete:"off",size:"small",type:"text",rows:"2",max:"60",min:"1",validateevent:"true",role:"spinbutton","aria-valuemax":"60","aria-valuemin":"1","aria-valuenow":"1","aria-disabled":"false"},domProps:{value:t.buyNum},on:{input:function(s){s.target.composing||(t.buyNum=s.target.value)}}})])])]),a("span",{staticClass:"stock-txt"},[t._v("\n                                            库存\n                                            "),a("em",{attrs:{id:"commodityStockNum"}},[t._v(t._s(t.goodsinfo.stock_quantity))]),t._v("件\n                                        ")])])]),t._m(1)])])]),a("div",{staticClass:"goods-tab bg-wrap",attrs:{id:"goodsTabs"}},[a("Affix",[a("div",{staticClass:"tab-head",staticStyle:{position:"static",top:"517px",width:"925px"},attrs:{id:"tabHead"}},[a("ul",[a("li",[a("a",{class:{selected:t.isShowDesc},attrs:{href:"javascript:;"},on:{click:function(s){t.isShowDesc=!0}}},[t._v("商品介绍")])]),a("li",[a("a",{class:{selected:!t.isShowDesc},attrs:{href:"javascript:;"},on:{click:function(s){t.isShowDesc=!1}}},[t._v("商品评论")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowDesc,expression:"isShowDesc"}],staticClass:"tab-content entry",domProps:{innerHTML:t._s(t.goodsinfo.content)}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowDesc,expression:"!isShowDesc"}],staticClass:"tab-content"},[t._m(2)])],1)]),a("div",{staticClass:"left-220"},[a("div",{staticClass:"bg-wrap nobg"},[a("div",{staticClass:"sidebar-box"},[a("h4",[t._v("推荐商品")]),a("ul",{staticClass:"side-img-list"},t._l(t.hotgoodslist,function(s,e){return a("li",{key:s.id},[a("div",{staticClass:"img-box"},[a("router-link",{attrs:{to:"/goodsInfo/"+s.id}},[a("img",{attrs:{src:s.img_url}})])],1),a("div",{staticClass:"txt-box"},[a("router-link",{attrs:{to:"/goodsInfo/"+s.id}},[t._v(t._s(s.title))]),a("span",[t._v(t._s(t._f("cutTime")(s.add_time)))])],1)])}))])])])])])]),a("BackTop")],1)},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"location"},[a("span",[t._v("当前位置：")]),a("a",{attrs:{href:"/index.html"}},[t._v("首页")]),t._v(" >\n            "),a("a",{attrs:{href:"/goods.html"}},[t._v("购物商城")]),t._v(" >\n            "),a("a",{attrs:{href:"/goods/42/1.html"}},[t._v("商品详情")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("dl",[a("dd",[a("div",{staticClass:"btn-buy",attrs:{id:"buyButton"}},[a("button",{staticClass:"buy",attrs:{onclick:"cartAdd(this,'/',1,'/shopping.html');"}},[t._v("立即购买")]),a("button",{staticClass:"add",attrs:{onclick:"cartAdd(this,'/',0,'/cart.html');"}},[t._v("加入购物车")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"comment-box"},[a("div",{staticClass:"form-box",attrs:{id:"commentForm",name:"commentForm"}},[a("div",{staticClass:"avatar-box"},[a("i",{staticClass:"iconfont icon-user-full"})]),a("div",{staticClass:"conn-box"},[a("div",{staticClass:"editor"},[a("textarea",{attrs:{id:"txtContent",name:"txtContent",sucmsg:" ",datatype:"*10-1000",nullmsg:"请填写评论内容！"}}),a("span",{staticClass:"Validform_checktip"})]),a("div",{staticClass:"subcon"},[a("input",{staticClass:"submit",attrs:{id:"btnSubmit",name:"submit",type:"submit",value:"提交评论"}}),a("span",{staticClass:"Validform_checktip"})])])]),a("ul",{staticClass:"list-box",attrs:{id:"commentList"}},[a("p",{staticStyle:{margin:"5px 0px 15px 69px","line-height":"42px","text-align":"center",border:"1px solid rgb(247, 247, 247)"}},[t._v("暂无评论，快来抢沙发吧！")]),a("li",[a("div",{staticClass:"avatar-box"},[a("i",{staticClass:"iconfont icon-user-full"})]),a("div",{staticClass:"inner-box"},[a("div",{staticClass:"info"},[a("span",[t._v("匿名用户")]),a("span",[t._v("2017/10/23 14:58:59")])]),a("p",[t._v("testtesttest")])])]),a("li",[a("div",{staticClass:"avatar-box"},[a("i",{staticClass:"iconfont icon-user-full"})]),a("div",{staticClass:"inner-box"},[a("div",{staticClass:"info"},[a("span",[t._v("匿名用户")]),a("span",[t._v("2017/10/23 14:59:36")])]),a("p",[t._v("很清晰调动单很清晰调动单")])])])]),a("div",{staticClass:"page-box",staticStyle:{margin:"5px 0px 0px 62px"}},[a("div",{staticClass:"digg",attrs:{id:"pagination"}},[a("span",{staticClass:"disabled"},[t._v("« 上一页")]),a("span",{staticClass:"current"},[t._v("1")]),a("span",{staticClass:"disabled"},[t._v("下一页 »")])])])])}],x=(a("ac6a"),a("b7ac")),y=a.n(x),k={name:"goodsinfo",data:function(){return{goodsinfo:{},hotgoodslist:[],imglist:[],buyNum:1,isShowDesc:!0,images:{normal_size:[]},zoomerOptions:{zoomFactor:2,pane:"container-round",hoverDelay:300,namespace:"inline-zoomer",move_by_click:!0,scroll_items:5,choosed_thumb_border_color:"#bbdefb"}}},methods:{getgoodsInfo:function(){var t=this;this.imglist=[],this.images.normal_size=[],this.axios.get("site/goods/getgoodsinfo/".concat(this.$route.params.id)).then(function(s){t.goodsinfo=s.data.message.goodsinfo,t.hotgoodslist=s.data.message.hotgoodslist,t.imglist=s.data.message.imglist,t.imglist.forEach(function(s,a){t.images.normal_size.push({id:s.id,url:s.original_path})})}).catch(function(t){})}},components:{ProductZoomer:y.a},beforeCreate:function(){},created:function(){console.log(this),this.getgoodsInfo()},beforeMount:function(){},mounted:function(){},watch:{$route:function(t,s){console.log("我变了"),this.getgoodsInfo()}}},w=k,z=(a("5bab"),Object(d["a"])(w,j,C,!1,null,null,null)),S=z.exports,N=a("5c96"),E=a.n(N),O=(a("0fae"),a("283e")),$=a.n(O),D=(a("428d"),a("c1df")),P=a.n(D),T=a("bc3a"),I=a.n(T),M=a("e069"),q=a.n(M);a("dcad");I.a.defaults.baseURL="http://47.106.148.205:8899",e["default"].prototype.axios=I.a,e["default"].use(v["a"]),e["default"].use(E.a),e["default"].use($.a,{loading:a("b206")}),e["default"].use(q.a);var L=new v["a"]({routes:[{path:"/",redirect:"/index"},{path:"/index",component:g},{path:"/goodsInfo/:id",component:S}]});e["default"].filter("cutTime",function(t){return P()(t).format("YYYY年MM月DD日")}),e["default"].config.productionTip=!1,new e["default"]({el:"#app",router:L,render:function(t){return t(f)}})},5709:function(t,s,a){"use strict";var e=a("234e"),i=a.n(e);i.a},"5bab":function(t,s,a){"use strict";var e=a("1634"),i=a.n(e);i.a},a55e:function(t,s,a){"use strict";var e=a("bc0c"),i=a.n(e);i.a},b206:function(t,s,a){t.exports=a.p+"img/loading2.4e99aca2.gif"},bc0c:function(t,s,a){}});
//# sourceMappingURL=app.a4579c99.js.map