var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([6],{128:function(e,t,a){a(129),a(130)},129:function(e,t){},130:function(e,t,a){function n(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),i=n(r),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(131),f=n(l),g=a(0),u=n(g),m=function(){function e(){o(this,e),this.data={topRefreshing:!1,bottomRefreshing:!1,bottomOffset:20,scrollDirection:"vertical",loadingTextStyle:"",page:0,sumPage:5,list:[],topImg:""},this.methods={change:function(e){(0,i.default)({path:"/pages/detail/detail",query:{a:1,b:"test"}})},onBottom:function(e){var t=this;this.bottomRefreshing||this.page>=this.sumPage||setTimeout(function(){t.getPageData()},200)},onScroll:function(){},getPageData:function(){var e=f.default.data,t=e.topImgUrl,a=e.list;this.list=[].concat(s(this.list),s(a)),this.topImg=t,this.page=this.page+1}}}return c(e,[{key:"created",value:function(){this.loadingTextStyle="color:#666;font-size:36cpx;margin:30cpx auto;",this.getPageData()}}]),e}();t.default=new m,t.default=u.default.createPage(t.default).getOptions()},131:function(e,t){e.exports={code:0,data:{topImgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4972949f269e7295a4f37e99a303553e.jpg",list:[{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8635c42f2b3a92768b12015c491821b5.png",des:"400跟纯棉贡缎",name:"60s锦绵贡缎四件套",money:"￥400",tag:["APP特惠"]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4a00fd1035efe874d70d51dfc04c5cee.png",des:"少女粉润贡缎",name:"朱莉.粉唐四件套",money:"￥359",tag:["年货节特卖","满赠"]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9f3c89c8b98fb06968c67edb12a195cf.png",des:"少女粉润贡缎",name:"朱莉.粉唐四件套",money:"￥359",tag:[]},{imgUrl:"https://cmljs.org/cml-demo/src/assets/images/yanxuan/cc863b46d890633445fb2a1354b01841.png",des:"入门享受奢华感受",name:"60s锦绵贡缎四件套",money:"￥400"}]}}}},[128]);