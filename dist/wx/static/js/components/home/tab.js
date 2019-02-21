var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([44],{

/***/ "../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/home/tab.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__("./src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      animationData: {},
      tabs: [],
      activeLabel: '首页'
    };
    this.methods = {
      handleTabTap: function handleTabTap(e) {
        var oIndex = e.detail.activeIndex;
        this.activeLabel = e.detail.label;
        this.$cmlEmit('translate', { oIndex: oIndex });
      }
    };
  }

  _createClass(Index, [{
    key: 'created',
    value: function created() {
      this.tabs = _store2.default.state.tabs;
    }
  }]);

  return Index;
}();

exports.default = new Index();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./src/components/home/tab.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__script = __webpack_require__("../../../../../npm/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/npm/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../npm/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/home/tab.cml");


/***/ })

},["./src/components/home/tab.cml"]);