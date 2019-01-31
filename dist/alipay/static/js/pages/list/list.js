var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/list/list.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/get/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/navigateTo/index.js");

var _index4 = _interopRequireDefault(_index3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Refresh = function () {
  function Refresh() {
    _classCallCheck(this, Refresh);

    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      loadingTextStyle: '',
      page: 0,
      sumPage: 5,
      list: [],
      topImg: ''
    };
    this.methods = {
      onrefreshUp: function onrefreshUp(e) {
        var _this = this;

        this.topRefreshing = e.detail.value;
        setTimeout(function () {
          _this.topRefreshing = false;
        }, 500);
      },
      onrefreshDown: function onrefreshDown(e) {
        var _this2 = this;

        this.bottomRefreshing = e.detail.value;
        setTimeout(function () {
          _this2.getData();
          _this2.bottomRefreshing = false;
        }, 2000);
      },
      change: function change(e) {
        (0, _index4.default)({
          "path": "/pages/detail/detail",
          query: {
            a: 1,
            b: 'test'
          }
        });
      },
      onScroll: function onScroll(e) {
        var scrollTop = e.detail.scrollTop;
        if (scrollTop <= 0) {
          this.topRefreshing = true;
        }
      },
      onBottom: function onBottom(e) {
        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        this.bottomRefreshing = true;
      },
      getData: function getData() {
        var _this3 = this;

        (0, _index2.default)({
          url: '/pinche/gift/didiuploader/listImages.json'
        }).then(function (res) {
          if (res.code == 0) {
            var _res$data = res.data,
                topImgUrl = _res$data.topImgUrl,
                list = _res$data.list;

            _this3.list = [].concat(_toConsumableArray(_this3.list), _toConsumableArray(list));
            _this3.topImg = topImgUrl;
          }
        });
      }
    };
  }

  _createClass(Refresh, [{
    key: 'created',
    value: function created(res) {
      this.loadingTextStyle = 'color:#666;font-size:36cpx;margin:30cpx auto;';
      this.getData();
    }
  }]);

  return Refresh;
}();

exports.default = new Refresh();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/list/list.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/list/list.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/list/list.cml");
var __cml__script = __webpack_require__("../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v11.6.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/list/list.cml");


/***/ })

},["./src/pages/list/list.cml"]);