module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addABlog;
/* harmony export (immutable) */ __webpack_exports__["b"] = getABlog;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValueAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var firebase = __webpack_require__(3); // firbase config object


var config = {
  apiKey: 'AIzaSyC1kIcWFwmYyx5341_mdiw4gpxGBTVWtus',
  authDomain: 'dhukutee.firebaseapp.com',
  databaseURL: 'https://dhukutee.firebaseio.com',
  projectId: 'dhukutee',
  storageBucket: 'dhukutee.appspot.com',
  messagingSenderId: '142116528194' // preventing multiple intilization attempts on server
  // we might have to shift to admin SDK

};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} // add a blog detail from the firebase database


function addABlog(blog) {
  firebase.database().ref('blogs/' + blog.url).set(blog);
} // gets the blog detail from the firebase database with provided slug

function getABlog(slug) {
  return firebase.database().ref('blogs/' + slug).once('value').then(function (snapshot) {
    return snapshot.val();
  });
} // returns the value of the provided path from firebase database

function getValueAt(_x) {
  return _getValueAt.apply(this, arguments);
}

function _getValueAt() {
  _getValueAt = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(path) {
    var snapshot;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return firebase.database().ref(path).once('value');

          case 2:
            snapshot = _context.sent;
            return _context.abrupt("return", snapshot.val());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getValueAt.apply(this, arguments);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./helpers/firebase.js
var firebase = __webpack_require__(2);

// EXTERNAL MODULE: external "react-render-html"
var external__react_render_html_ = __webpack_require__(6);
var external__react_render_html__default = /*#__PURE__*/__webpack_require__.n(external__react_render_html_);

// CONCATENATED MODULE: ./components/ArticleFull.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ArticleFull_ArticleFull =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ArticleFull, _PureComponent);

  function ArticleFull() {
    _classCallCheck(this, ArticleFull);

    return _possibleConstructorReturn(this, (ArticleFull.__proto__ || Object.getPrototypeOf(ArticleFull)).apply(this, arguments));
  }

  _createClass(ArticleFull, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        style: {
          backgroundColor: '#fff',
          margin: '20px'
        }
      }, external__react__default.a.createElement("h1", null, this.props.blog.title), external__react__default.a.createElement("p", null, external__react_render_html__default()(this.props.blog.message)));
    }
  }]);

  return ArticleFull;
}(external__react_["PureComponent"]);


// CONCATENATED MODULE: ./helpers/customReplace.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var stringReplaceAsync = __webpack_require__(7); // reg ex pattern variables


var startReg = '!@#';
var endReg = '#@!';
function customReplace(_x) {
  return _customReplace.apply(this, arguments);
}

function _customReplace() {
  _customReplace = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(stringData) {
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return stringReplaceAsync(stringData, RegExp("".concat(startReg, ".*?").concat(endReg), 'g'), getDataFromFirebase);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _customReplace.apply(this, arguments);
}

function getDataFromFirebase(_x2, _x3) {
  return _getDataFromFirebase.apply(this, arguments);
}

function _getDataFromFirebase() {
  _getDataFromFirebase = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee2(data, something) {
    var pathToDatabase;
    return regenerator__default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pathToDatabase = data.replace(startReg, '').replace(endReg, ''); // to prevent invalid database url to be invoken or shown in the orginal blog

            if (!/.*[$\.#\[\]].*/.test(pathToDatabase)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", '<b>Invalid Path Given</b>');

          case 3:
            _context2.next = 5;
            return Object(firebase["c" /* getValueAt */])(pathToDatabase);

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getDataFromFirebase.apply(this, arguments);
}
// CONCATENATED MODULE: ./pages/blog.js



function blog__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var blog_Blog = function Blog(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(ArticleFull_ArticleFull, {
    blog: props.blog
  }));
};

blog_Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = blog__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref) {
    var query, blog;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return Object(firebase["b" /* getABlog */])(query.slug);

          case 3:
            blog = _context.sent;
            _context.next = 6;
            return customReplace(blog.message);

          case 6:
            blog.message = _context.sent;
            return _context.abrupt("return", {
              blog: blog
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var pages_blog = __webpack_exports__["default"] = (blog_Blog);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-render-html");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("string-replace-async");

/***/ })
/******/ ]);