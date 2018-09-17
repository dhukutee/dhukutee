webpackHotUpdate(4,{

/***/ "./helpers/customReplace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = customReplace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__("./helpers/firebase.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var stringReplaceAsync = __webpack_require__("./node_modules/string-replace-async/index.js"); // reg ex pattern variables


var startReg = '!@#';
var endReg = '#@!';
function customReplace(_x) {
  return _customReplace.apply(this, arguments);
}

function _customReplace() {
  _customReplace = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(stringData) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(data, something) {
    var pathToDatabase;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
            return Object(__WEBPACK_IMPORTED_MODULE_1__firebase__["c" /* getValueAt */])(pathToDatabase);

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

/***/ }),

/***/ "./helpers/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addABlog;
/* harmony export (immutable) */ __webpack_exports__["b"] = getABlog;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValueAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var firebase = __webpack_require__("./node_modules/firebase/dist/index.cjs.js"); // firbase config object


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

/***/ "./pages/blogs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_firebase__ = __webpack_require__("./helpers/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ArticleFull__ = __webpack_require__("./components/ArticleFull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_customReplace__ = __webpack_require__("./helpers/customReplace.js");

var _jsxFileName = "/Users/muskan/JavaScriptProjects/dhukutee/pages/blogs.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var Blog = function Blog(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ArticleFull__["a" /* default */], {
    blog: props.blog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, blog;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            console.log(query);
            _context.next = 4;
            return Object(__WEBPACK_IMPORTED_MODULE_2__helpers_firebase__["b" /* getABlog */])(query.slug);

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_4__helpers_customReplace__["a" /* customReplace */])(blog.message);

          case 7:
            blog.message = _context.sent;
            return _context.abrupt("return", {
              blog: blog
            });

          case 9:
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

/* harmony default export */ __webpack_exports__["default"] = (Blog);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blogs")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.dd4ad5cf2662bab743a2.hot-update.js.map