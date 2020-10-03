webpackHotUpdate_N_E("pages/vaults",{

/***/ "./components/Vaults.tsx":
/*!*******************************!*\
  !*** ./components/Vaults.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vaults; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/Vaults.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Vaults() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      vaults = _useState[0],\n      setVaults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loadingApi = _useState3[0],\n      setLoadingApi = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(query.address),\n      address = _useState4[0],\n      setAddress = _useState4[1];\n\n  var getVaults = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var response, jsonData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              loadCache();\n              _context.prev = 1;\n              _context.next = 4;\n              return fetch(_constants__WEBPACK_IMPORTED_MODULE_10__[\"EMBLEM_API\"] + '/opensea/assets', {\n                method: 'GET',\n                headers: {\n                  'Content-Type': 'application/json',\n                  service: 'evmetadata',\n                  chainId: chainId.toString()\n                }\n              });\n\n            case 4:\n              response = _context.sent;\n              _context.next = 7;\n              return response.json();\n\n            case 7:\n              jsonData = _context.sent;\n              setState({\n                loaded: true\n              });\n              setVaults(jsonData);\n              saveCache(jsonData);\n              setLoadingApi(false); // console.log(jsonData)\n\n              _context.next = 16;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](1);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 14]]);\n    }));\n\n    return function getVaults() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var loadCache = function loadCache() {\n    var vaults = JSON.parse(localStorage.getItem((address ? address : account) + '_' + chainId + '_vaults')); // Load vaults from storage before updating from server!\n\n    if (vaults) {\n      setState({\n        loaded: true\n      });\n      setVaults(vaults);\n      setLoadingApi(true);\n    }\n  };\n\n  var saveCache = function saveCache(vaults) {\n    localStorage.setItem((address ? address : account) + '_' + chainId + '_vaults', JSON.stringify(vaults)); // Save new state for later\n  };\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      acct = _useState5[0],\n      setAcct = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      getVaults();\n    }\n  }, [account, acct]);\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(chainId),\n      chain = _useState6[0],\n      setChain = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n      getVaults();\n    }\n  }, [chainId, chain]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    account && chainId ? getVaults() : setState({\n      loaded: true\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!chain) {\n      console.log(\"wtf\");\n      setChain(1);\n      getVaults();\n    }\n  });\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, vaults.length ? vaults.map(function (vault, index) {\n    var pieces = location.pathname.split('/');\n    pieces.pop();\n    var url = location.origin + pieces.join('/') + '/vault?id=' + vault.token_id;\n    var flexSettings = {\n      flex: '1',\n      minW: '300px',\n      maxW: '300px',\n      borderWidth: '1px',\n      color: 'white',\n      mx: '6',\n      mb: '6',\n      rounded: 'lg',\n      overflow: 'hidden',\n      borderColor: vault.status == 'claimed' ? 'green !important' : '',\n      cursor: 'pointer'\n    };\n\n    var redirect = function redirect() {\n      location.href = url;\n    };\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: index\n    }, flexSettings, {\n      onClick: redirect,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 15\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      fontWeight: \"semibold\",\n      textAlign: \"center\",\n      mt: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }\n    }, vault.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n      src: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[\"validImage\"])(vault.image_url) ? vault.image_url : 'https://circuitsofvalue.com/public/coval-logo.png',\n      p: 2,\n      width: \"250px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 19\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      d: \"flex\",\n      alignItems: \"baseline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      color: \"gray.500\",\n      fontWeight: \"semibold\",\n      letterSpacing: \"wide\",\n      fontSize: \"sm\",\n      ml: \"2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 19\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n      align: \"center\",\n      mt: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 17\n      }\n    }, vault.status == 'claimed' ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      color: \"green.500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 48\n      }\n    }, \"CLAIMED\") : null));\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 11\n    }\n  }, \"YOU DON'T SEEM TO HAVE ANY VAULTS.\", ' ', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    color: \"#638cd8\",\n    href: \"../create\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }, \"CREATE ONE HERE!\"))));\n}\n\n_s(Vaults, \"2ooI3LWEJ1AjDkM3aU5yvJVaTU4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_8__[\"useWeb3React\"]];\n});\n\n_c = Vaults;\n\nvar _c;\n\n$RefreshReg$(_c, \"Vaults\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYXVsdHMudHN4P2JiMGUiXSwibmFtZXMiOlsiVmF1bHRzIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VXZWIzUmVhY3QiLCJhY2NvdW50IiwiY2hhaW5JZCIsInVzZVN0YXRlIiwidmF1bHRzIiwic2V0VmF1bHRzIiwibG9hZGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmdBcGkiLCJzZXRMb2FkaW5nQXBpIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJnZXRWYXVsdHMiLCJsb2FkQ2FjaGUiLCJmZXRjaCIsIkVNQkxFTV9BUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwic2VydmljZSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJzYXZlQ2FjaGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjY3QiLCJzZXRBY2N0IiwidXNlRWZmZWN0IiwiY2hhaW4iLCJzZXRDaGFpbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJ2YXVsdCIsImluZGV4IiwicGllY2VzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwidXJsIiwib3JpZ2luIiwiam9pbiIsInRva2VuX2lkIiwiZmxleFNldHRpbmdzIiwiZmxleCIsIm1pblciLCJtYXhXIiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsIm14IiwibWIiLCJyb3VuZGVkIiwib3ZlcmZsb3ciLCJib3JkZXJDb2xvciIsInN0YXR1cyIsImN1cnNvciIsInJlZGlyZWN0IiwiaHJlZiIsIm5hbWUiLCJ2YWxpZEltYWdlIiwiaW1hZ2VfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7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LG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ3FDLEdBRHJDLEVBRUUsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFFBQUksRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLENBOUVKLENBSEYsQ0FERjtBQTRGRDs7R0F4S3VCakUsTTtVQUNKQyxxRCxFQUNXRSw2RDs7O0tBRlBILE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZhdWx0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIExpbmssIEltYWdlLCBTdGFjaywgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJ1xuaW1wb3J0IFJlZnJlc2hpbmcgZnJvbSAnLi9SZWZyZXNoaW5nJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdmFsaWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgRU1CTEVNX0FQSSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmF1bHRzKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFjY291bnQsIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIGNvbnN0IFt2YXVsdHMsIHNldFZhdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgY29uc3QgW2xvYWRpbmdBcGksIHNldExvYWRpbmdBcGldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHF1ZXJ5LmFkZHJlc3MpXG5cbiAgY29uc3QgZ2V0VmF1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvYWRDYWNoZSgpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goRU1CTEVNX0FQSSArICcvb3BlbnNlYS9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIHNlcnZpY2U6ICdldm1ldGFkYXRhJyxcbiAgICAgICAgICBjaGFpbklkOiBjaGFpbklkLnRvU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgICBzZXRWYXVsdHMoanNvbkRhdGEpXG4gICAgICBzYXZlQ2FjaGUoanNvbkRhdGEpXG4gICAgICBzZXRMb2FkaW5nQXBpKGZhbHNlKVxuICAgICAgLy8gY29uc29sZS5sb2coanNvbkRhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBjb25zdCBsb2FkQ2FjaGUgPSAoKSA9PiB7XG4gICAgbGV0IHZhdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oKGFkZHJlc3MgPyBhZGRyZXNzIDogYWNjb3VudCkgKyAnXycgKyBjaGFpbklkICsgJ192YXVsdHMnKSkgLy8gTG9hZCB2YXVsdHMgZnJvbSBzdG9yYWdlIGJlZm9yZSB1cGRhdGluZyBmcm9tIHNlcnZlciFcbiAgICBpZiAodmF1bHRzKSB7XG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxuICAgICAgc2V0VmF1bHRzKHZhdWx0cylcbiAgICAgIHNldExvYWRpbmdBcGkodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYXZlQ2FjaGUgPSAodmF1bHRzKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKGFkZHJlc3MgPyBhZGRyZXNzIDogYWNjb3VudCkgKyAnXycgKyBjaGFpbklkICsgJ192YXVsdHMnLCBKU09OLnN0cmluZ2lmeSh2YXVsdHMpKSAvLyBTYXZlIG5ldyBzdGF0ZSBmb3IgbGF0ZXJcbiAgfVxuXG5cblxuICBjb25zdCBbYWNjdCwgc2V0QWNjdF0gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2N0ICE9IGFjY291bnQpIHtcbiAgICAgIHNldEFjY3QoYWNjb3VudClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgZ2V0VmF1bHRzKClcbiAgICB9XG4gIH0sIFthY2NvdW50LCBhY2N0XSlcblxuICBjb25zdCBbY2hhaW4sIHNldENoYWluXSA9IHVzZVN0YXRlKGNoYWluSWQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYWluSWQgJiYgY2hhaW4gIT0gY2hhaW5JZCkge1xuICAgICAgc2V0Q2hhaW4oY2hhaW5JZClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgZ2V0VmF1bHRzKClcbiAgICB9XG4gIH0sIFtjaGFpbklkLCBjaGFpbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY2NvdW50ICYmIGNoYWluSWQgPyBnZXRWYXVsdHMoKSA6IHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmICghY2hhaW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid3RmXCIpXG4gICAgICBzZXRDaGFpbigxKVxuICAgICAgZ2V0VmF1bHRzKClcbiAgICB9XG4gICAgXG59KVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxMb2FkZXIgbG9hZGVkPXtzdGF0ZS5sb2FkZWR9PlxuICAgICAge2xvYWRpbmdBcGkgPyA8UmVmcmVzaGluZyAvPiA6ICcnfVxuXG4gICAgICA8RmxleCB3PVwiMTAwJVwiIGp1c3RpZnk9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBtdD17MTB9PlxuICAgICAgICB7dmF1bHRzLmxlbmd0aCA/IChcbiAgICAgICAgICB2YXVsdHMubWFwKCh2YXVsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwaWVjZXMgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gICAgICAgICAgICBwaWVjZXMucG9wKClcbiAgICAgICAgICAgIGxldCB1cmwgPSBsb2NhdGlvbi5vcmlnaW4gKyBwaWVjZXMuam9pbignLycpICsgJy92YXVsdD9pZD0nICsgdmF1bHQudG9rZW5faWRcbiAgICAgICAgICAgIGNvbnN0IGZsZXhTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgZmxleDogJzEnLFxuICAgICAgICAgICAgICBtaW5XOiAnMzAwcHgnLFxuICAgICAgICAgICAgICBtYXhXOiAnMzAwcHgnLFxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBteDogJzYnLFxuICAgICAgICAgICAgICBtYjogJzYnLFxuICAgICAgICAgICAgICByb3VuZGVkOiAnbGcnLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB2YXVsdC5zdGF0dXMgPT0gJ2NsYWltZWQnID8gJ2dyZWVuICFpbXBvcnRhbnQnIDogJycsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0gey4uLmZsZXhTZXR0aW5nc30gb25DbGljaz17cmVkaXJlY3R9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIHRleHRBbGlnbj1cImNlbnRlclwiIG10PXsyfT5cbiAgICAgICAgICAgICAgICAgIHt2YXVsdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgey8qIHshdmF1bHQucHJpdmF0ZSA/ICc6IH4kJyArIHZhdWx0LnRvdGFsVmFsdWUgOiBudWxsfSAqL31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWxpZEltYWdlKHZhdWx0LmltYWdlX3VybCkgPyB2YXVsdC5pbWFnZV91cmwgOiAnaHR0cHM6Ly9jaXJjdWl0c29mdmFsdWUuY29tL3B1YmxpYy9jb3ZhbC1sb2dvLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDxCb3ggZD1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9XCJncmF5LjUwMFwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGxldHRlclNwYWNpbmc9XCJ3aWRlXCIgZm9udFNpemU9XCJzbVwiIG1sPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3ZhdWx0LnByaXZhdGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PkNvbnRlbnRzIGhpZGRlbi4gQ2xpY2sgdG8gdmlldyB0aGUgdmF1bHQgYW5kIHVubG9jayB2YWx1ZXMuPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogdmF1bHQudmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICB2YXVsdC52YWx1ZXMubWFwKChjb2luLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2NvaW4ubmFtZX0gaXNUcnVuY2F0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfToge2NvaW4uYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtdD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gQ2xpY2sgdG8gc2VlIHRoZSByZXN0IC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIGluIGhlcmUhIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdG8gZmlsbCAnZXIgdXAhXG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHsvKiA8Qm94IGQ9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPVwiZ3JheS41MDBcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsZXR0ZXJTcGFjaW5nPVwid2lkZVwiIGZvbnRTaXplPVwic21cIiBtbD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgVG90YWwgQ29tcHV0YWJsZSBWYWx1ZToge3ZhdWx0LnRvdGFsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgICAgICAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiIG10PXszfT5cbiAgICAgICAgICAgICAgICAgIHt2YXVsdC5zdGF0dXMgPT0gJ2NsYWltZWQnID8gPFRleHQgY29sb3I9XCJncmVlbi41MDBcIj5DTEFJTUVEPC9UZXh0PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIFlPVSBET04nVCBTRUVNIFRPIEhBVkUgQU5ZIFZBVUxUUy57JyAnfVxuICAgICAgICAgICAgPExpbmsgY29sb3I9XCIjNjM4Y2Q4XCIgaHJlZj1cIi4uL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICBDUkVBVEUgT05FIEhFUkUhXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvTG9hZGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Vaults.tsx\n");

/***/ })

})