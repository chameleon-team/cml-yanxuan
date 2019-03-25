var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.js");

var _index4 = _interopRequireDefault(_index3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getHomeImgList = __webpack_require__("./src/assets/json/getHomeImgList.json");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animation = (0, _index4.default)();
var chameleonIcon = __webpack_require__("./src/assets/images/chameleon.png");

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      title: "chameleon",
      scrollHeight: -1,
      animationData: {},
      num: 1,
      currentCom: 'home',
      selectedIndex: 0,
      tabbar: {
        tabbarStyle: "height:120cpx;",
        textStyle: "font-size: 24cpx",
        selectedTextStyle: "font-size: 24cpx;color:#61c7fc;",
        list: [{
          compName: 'home',
          text: '首页',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'classify',
          text: '分类',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'topic',
          text: '识物',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'shop',
          text: '购物车',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'my',
          text: '个人',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }]
      }
    };
    this.methods = {
      handleTabbarClick: function handleTabbarClick(e) {
        //这里触发出来的 index 的值就是被激活的tab对应的index,可以根据这个index的值去动态的改变组件
        this.selectedIndex = e.detail.index;
      }
    };
  }

  _createClass(Index, [{
    key: 'created',
    value: function created() {
      var _homePageData$data = _getHomeImgList2.default.data,
          special = _homePageData$data.special,
          disscountPriceImgUrl = _homePageData$data.disscountPriceImgUrl;

      this.special = special;
      this.disscountPriceImgUrl = disscountPriceImgUrl;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      (0, _index2.default)().then(function (info) {
        if (info.env == 'weex') {
          _this.scrollHeight = Number(info.viewportHeight) - 100 - 88;
        } else {
          _this.scrollHeight = Number(info.viewportHeight) - 100;
        }
      });
    }
  }]);

  return Index;
}();

exports.default = new Index();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransform = exports.getRotateZ = exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

var getRotateZ = exports.getRotateZ = function getRotateZ(a, b, c, d, e, f) {
  var aa = Math.round(180 * Math.asin(a) / Math.PI);
  var bb = Math.round(180 * Math.acos(b) / Math.PI);
  var cc = Math.round(180 * Math.asin(c) / Math.PI);
  var dd = Math.round(180 * Math.acos(d) / Math.PI);
  var deg = 0;
  if (aa == bb || -aa == bb) {
    deg = dd;
  } else if (-aa + bb == 180) {
    deg = 180 + cc;
  } else if (aa + bb == 180) {
    deg = 360 - cc || 360 - dd;
  }
  return deg >= 360 ? 0 : deg;
  // return (aa+','+bb+','+cc+','+dd);
};

// 获取元素的transform信息
var getTransform = exports.getTransform = function getTransform(ele) {
  var st = window.getComputedStyle(ele, null);

  var tr = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("-ms-transform") || st.getPropertyValue("-o-transform") || st.getPropertyValue("transform") || "FAIL";
  if (tr === 'none') {
    return;
  }
  var values = tr.split('(')[1].split(')')[0].split(',');

  var _values = _slicedToArray(values, 6),
      a = _values[0],
      b = _values[1],
      c = _values[2],
      d = _values[3],
      e = _values[4],
      f = _values[5];
  // var scale = Math.sqrt(a * a + b * b);
  // arc sin, convert from radians to degrees, round
  // var sin = b / scale;

  var rotateZ = getRotateZ(a, b, c, d, e, f);
  return {
    translateX: Number(e.trim()),
    translateY: Number(f.trim()),
    scaleX: Number(a.trim()),
    scaleY: Number(d.trim()),
    rotateZ: rotateZ
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    // var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  };
};

exports.default = {};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/createAnimationFactory.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;


var id = 0;

// 可用options
var STYLES = [{ key: 'width', type: 'number' }, { key: 'height', type: 'number' }, { key: 'opacity', type: 'number' }, { key: 'backgroundColor', type: 'string' }, // 16进制数值
{ key: 'translate', type: 'number' }, // web不支持
{ key: 'translateX', type: 'number' }, { key: 'translateY', type: 'number' }, { key: 'scale', type: 'number' }, // web不支持
{ key: 'scaleX', type: 'number' }, { key: 'scaleY', type: 'number' },
// {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{ key: 'rotate', type: '' }, // web不支持,
{ key: 'rotateX', type: '' }, { key: 'rotateY', type: '' }, { key: 'transform', type: 'string' }];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        }

        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';

    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat(_toConsumableArray(updateQueue))
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    return result;
  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };
};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function styles(_styles) {
    this.styles = Object.assign({}, this.styles, _styles);
    return this;
  },

  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({ cb: function cb() {
          return false;
        }, duration: 400 }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

exports.default = createAnimationFactory;

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/descriptionLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};
var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;

  var transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js");

var _baidu = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/baidu.js");

var _common2 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/descriptionLoader/common.js");

var _util = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js");

var _util2 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/Documents/code/didi/cml-yanxuan/node_modules/chameleon-api/src/interfaces/createAnimation/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "CreateAnimationInterface": {
      "initAnimation": {
        "input": [],
        "output": "Undefined"
      },
      "exportMiddleWare": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      },
      "checkNumber": {
        "input": ["Number"],
        "output": "Undefined"
      },
      "checkString": {
        "input": ["String"],
        "output": "Undefined"
      },
      "checkObject": {
        "input": ["CMLObject"],
        "output": "Undefined"
      },
      "getViewportWidth": {
        "input": [],
        "output": "Number"
      }
    }
  },
  "classes": {
    "Method": ["CreateAnimationInterface"]
  }
};
var __OBJECT__WRAPPER__ = function __OBJECT__WRAPPER__(obj) {
  var className = obj.constructor.name;
  /* eslint-disable no-undef */
  var defines = __CHECK__DEFINES__;
  var enableTypes = __enableTypes__.split(',') || []; // ['Object','Array','Nullable']
  /* eslint-disable no-undef */
  var types = defines.types;
  var interfaceNames = defines.classes[className];
  var methods = {};

  interfaceNames && interfaceNames.forEach(function (interfaceName) {
    var keys = Object.keys(defines.interfaces);
    keys.forEach(function (key) {
      Object.assign(methods, defines.interfaces[key]);
    });
  });

  /**
   * 获取类型
   *
   * @param  {*}      value 值
   * @return {string}       类型
   */
  var getType = function getType(value) {
    if (value instanceof Promise) {
      return "Promise";
    }
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };

  /**
   * 校验类型  两个loader共用代码
   *
   * @param  {*}      value 实际传入的值
   * @param  {string} type  静态分析时候得到的值得类型
   * @param  {array[string]} errList 校验错误信息  类型
   * @return {bool}         校验结果
   */

  /* eslint complexity:[2,39] */
  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value);
    var canUseNullable = enableTypes.includes("Nullable");
    var canUseObject = enableTypes.includes("Object");
    if (currentType == 'Null') {
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E");
      }
      return errList;
    }
    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var _keys = Object.keys(types[type]);
          // todo 这里是同样的问题，可能多传递
          _keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });
          if (Object.keys(value).length > _keys.length) {
            errList.push("type [" + type + "] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }
      return errList;
    }
    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseObject ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];
          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }
    if (currentType == 'Function') {
      // if (type == 'Function') {
      //   errList = [];
      // } else {
      //   errList.push(`定义了${type}类型的参数，传入的却是${currentType},请检查所传参数是否和接口定义的一致`)
      // }
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push("\u627E\u4E0D\u5230" + types[type] + " \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA");
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
      return errList;
    }
    if (currentType == 'Promise') {
      if (type == 'Promise') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }

    return errList;
  };

  /**
   * 校验参数类型
   *
   * @param  {string} methodName 方法名称
   * @param  {Array}  argNames   参数名称列表
   * @param  {Array}  argValues  参数值列表
   * @return {bool}              校验结果
   */
  var checkArgsType = function checkArgsType(methodName, argValues) {
    var argList = void 0;

    if (getType(methodName) == 'Array') {
      // 回调函数的校验    methodName[0] 方法的名字 methodName[1]该回调函数在方法的参数索引
      argList = types[methods[methodName[0]].input[methodName[1]]].input;
      // 拿到这个回调函数的参数定义
    } else {
      argList = methods[methodName].input;
    }
    // todo 函数可能多传参数
    argList.forEach(function (argType, index) {
      var errList = checkType(argValues[index], argType, []);
      if (errList && errList.length > 0) {
        __CML_ERROR__("\n        \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + "\u7B2C" + (index + 1) + "\u4E2A\u53C2\u6570\n        \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
      }
    });
    if (argValues.length > argList.length) {
      __CML_ERROR__("[" + methodName + "]\u65B9\u6CD5\u53C2\u6570\u4F20\u9012\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
    }
  };

  /**
   * 校验返回值类型
   *
   * @param  {string} methodName 方法名称
   * @param  {*}      returnData 返回值
   * @return {bool}              校验结果
   */
  var checkReturnType = function checkReturnType(methodName, returnData) {
    var output = void 0;
    if (getType(methodName) == 'Array') {
      output = types[methods[methodName[0]].input[methodName[1]]].output;
    } else {
      output = methods[methodName].output;
    }
    // todo output 为什么可以是数组
    // if (output instanceof Array) {
    //   output.forEach(type => {

    //     //todo 而且是要有一个校验不符合就check失败？ 应该是有一个校验通过就可以吧
    //     checkType(returnData, type,[])
    //   });
    // }
    var errList = checkType(returnData, output, []);
    if (errList && errList.length > 0) {
      __CML_ERROR__("\n      \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + "\u8FD4\u56DE\u503C\n      \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
    }
  };

  /**
   * 创建warpper
   *
   * @param  {string}   funcName   方法名称
   * @param  {Function} originFunc 原有方法
   * @return {Function}            包裹后的方法
   */
  var createWarpper = function createWarpper(funcName, originFunc) {
    return function () {
      var argValues = Array.prototype.slice.call(arguments).map(function (arg, index) {
        // 对传入的方法要做特殊的处理，这个是传入的callback，对callback函数再做包装
        if (getType(arg) == 'Function') {
          return createWarpper([funcName, index], arg);
        }
        return arg;
      });

      checkArgsType(funcName, argValues);

      var result = originFunc.apply(this, argValues);

      checkReturnType(funcName, result);
      return result;
    };
  };

  // 获取所有方法
  var keys = Object.keys(methods);

  // 处理包装方法
  keys.forEach(function (key) {
    var originFunc = obj[key];
    if (!originFunc) {
      __CML_ERROR__('method [' + key + '] not found!');
      return;
    }

    if (obj.hasOwnProperty(key)) {
      obj[key] = createWarpper(key, originFunc);
    } else {
      Object.getPrototypeOf(obj)[key] = createWarpper(key, originFunc);
    }
  });

  return obj;
};

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _baidu.transformLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

var createAnimationFuc = function createAnimationFuc(quene) {
  var animation = swan.createAnimation();
  var cbs = {};
  quene.forEach(function (tick, i) {
    var styles = tick.styles,
        descriptions = tick.descriptions;

    cbs[i] = descriptions.cb;
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];
      animation[key](value);
    });
    animation.step(descriptions);
  });
  var temp = animation.export();
  temp.cbs = cbs;
  temp.index = 0;
  return temp;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "initAnimation",
    value: function initAnimation() {}
  }, {
    key: "checkNumber",
    value: function checkNumber(number) {}
  }, {
    key: "checkString",
    value: function checkString(string) {}
  }, {
    key: "checkObject",
    value: function checkObject(object) {}
  }, {
    key: "getViewportWidth",
    value: function getViewportWidth() {
      var _swan$getSystemInfoSy = swan.getSystemInfoSync(),
          windowWidth = _swan$getSystemInfoSy.windowWidth;

      return windowWidth;
    }
  }, {
    key: "exportMiddleWare",
    value: function exportMiddleWare(param) {
      return createAnimationFuc(param.updateQueue.map(function (tick) {
        return {
          styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
          descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
        };
      }));
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method());

(0, _util2.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/createAnimationFactory.js");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/baidu.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformLoader = undefined;

var _util = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js");

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js");

var transformLoader = exports.transformLoader = function transformLoader(styles, description) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    // 目前不支持自动转换，所以loader来做
    if (_common.isNumTypeStyles.includes(key)) {
      if ((0, _utils.isNum)(value)) {
        // 转换单位
        value = (0, _util.cpx2px)(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    // // 目前不支持转换，所以loader来做
    // if (isStr(value) && value.includes('px')) {
    //   value = value.replace('px', 'rpx');
    // }

    // 100deg -> 100
    if (_common.rotateStyles.includes(key) && (0, _utils.isStr)(value)) {

      if (value.includes('deg')) {
        value = value.split('deg')[0];
      } else {
        console.error('Parameter format error');
      }
    }

    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    returnStyles[key] = value;
  });

  return returnStyles;
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];

var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];

var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];
    //
    if (value.length === 1 && key !== 'scale') {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        // scale的值只传递一个的情况
        if (key === 'scale' && value.length === 1) {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[0];
        } else {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[1];
        }

        // returnStyles[`${key}Z`] = value[2];
      } else {
          // redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
};

// 缓存transform属性
var transformStylesMap = {};
var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;
  });

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];

      returnStyles[key] = value;
    });
  }

  return returnStyles;
};

/***/ }),

/***/ "./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");


/***/ })

},["./src/pages/index/index.cml"]);