webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ErrorBoundary.tsx":
/*!**************************************!*\
  !*** ./components/ErrorBoundary.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var trackjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! trackjs */ \"./node_modules/trackjs/index.esm.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\ntrackjs__WEBPACK_IMPORTED_MODULE_8__[\"TrackJS\"].install({\n  token: \"45e5b3e45c734f6c890f25e66f17d43d\" // for more configuration options, see https://docs.trackjs.com\n\n});\n\nvar ErrorBoundary = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ErrorBoundary, _Component);\n\n  var _super = _createSuper(ErrorBoundary);\n\n  function ErrorBoundary() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ErrorBoundary);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      hasError: false,\n      error: null\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ErrorBoundary, [{\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        return this.props.fallback;\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      window.TrackJS && trackjs__WEBPACK_IMPORTED_MODULE_8__[\"TrackJS\"].track(error);\n      return {\n        hasError: true,\n        error: error\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeD9lMTY2Il0sIm5hbWVzIjpbIlRyYWNrSlMiLCJpbnN0YWxsIiwidG9rZW4iLCJFcnJvckJvdW5kYXJ5IiwiaGFzRXJyb3IiLCJlcnJvciIsInN0YXRlIiwicHJvcHMiLCJmYWxsYmFjayIsImNoaWxkcmVuIiwid2luZG93IiwidHJhY2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQUEsK0NBQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUNkQyxPQUFLLEVBQUUsa0NBRE8sQ0FFZDs7QUFGYyxDQUFoQjs7SUFJcUJDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ1g7QUFBRUMsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLFdBQUssRUFBRTtBQUExQixLOzs7Ozs7OzZCQVNZO0FBQ2xCLFVBQUksS0FBS0MsS0FBTCxDQUFXRixRQUFmLEVBQXlCO0FBQ3ZCLGVBQU8sS0FBS0csS0FBTCxDQUFXQyxRQUFsQjtBQUNEOztBQUNELGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxRQUFsQjtBQUNEOzs7NkNBYitCSixLLEVBQW1EO0FBQ2pGSyxZQUFNLENBQUNWLE9BQVAsSUFBa0JBLCtDQUFPLENBQUNXLEtBQVIsQ0FBY04sS0FBZCxDQUFsQjtBQUNBLGFBQU87QUFDTEQsZ0JBQVEsRUFBRSxJQURMO0FBRUxDLGFBQUssRUFBTEE7QUFGSyxPQUFQO0FBSUQ7Ozs7RUFSd0NPLCtDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFja0pTIH0gZnJvbSAndHJhY2tqcyc7XG5cblRyYWNrSlMuaW5zdGFsbCh7XG4gIHRva2VuOiBcIjQ1ZTViM2U0NWM3MzRmNmM4OTBmMjVlNjZmMTdkNDNkXCJcbiAgLy8gZm9yIG1vcmUgY29uZmlndXJhdGlvbiBvcHRpb25zLCBzZWUgaHR0cHM6Ly9kb2NzLnRyYWNranMuY29tXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQ8eyBmYWxsYmFjazogUmVhY3ROb2RlOyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+IHtcbiAgc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSwgZXJyb3I6IG51bGwgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yOiBFcnJvcik6IHsgaGFzRXJyb3I6IGJvb2xlYW47IGVycm9yOiBFcnJvciB9IHtcbiAgICB3aW5kb3cuVHJhY2tKUyAmJiBUcmFja0pTLnRyYWNrKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICBlcnJvcixcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mYWxsYmFja1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ErrorBoundary.tsx\n");

/***/ })

})