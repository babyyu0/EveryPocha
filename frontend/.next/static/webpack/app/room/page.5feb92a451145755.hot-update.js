"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/room/page",{

/***/ "(app-pages-browser)/./src/routes/RoomBtn.js":
/*!*******************************!*\
  !*** ./src/routes/RoomBtn.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RoomBtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction RoomBtn() {\n    _s();\n    var _s1 = $RefreshSig$();\n    let [setting, setSetting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"setting-btn\",\n                onClick: ()=>{\n                    setSetting(!setting);\n                },\n                children: setting == true ? \"기본 모드 ON\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mode-option\",\n                    onClick: ()=>{\n                        setMode(!mode);\n                    },\n                    children: [\n                        \" \",\n                        mode == true ? \"미니게임 ON\" : \"미니게임 OFF\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"copy-url\",\n                onClick: ()=>{\n                    alert(\"클립보드에 url이 복사되었습니다.\");\n                },\n                children: \"친구 초대\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: _s1(()=>{\n                    _s1();\n                    let navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n                    navigate(\"/board\");\n                }, \"CzcTeTziyjMsSrAVmHuCCb6+Bfg=\", false, function() {\n                    return [\n                        react__WEBPACK_IMPORTED_MODULE_1__.useNavigate\n                    ];\n                }),\n                children: \"시작\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(RoomBtn, \"vcYDZqGZRFlmJI6pnPruK/fCjKs=\");\n_c = RoomBtn;\nvar _c;\n$RefreshReg$(_c, \"RoomBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yb3V0ZXMvUm9vbUJ0bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkM7QUFFOUIsU0FBU0U7OztJQUV0QixJQUFJLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsSUFBSSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9CLHFCQUNFLDhEQUFDTzs7MEJBRUMsOERBQUNDO2dCQUFPQyxXQUFVO2dCQUFjQyxTQUFTO29CQUFNTixXQUFXLENBQUNEO2dCQUFVOzBCQUVuRUEsV0FBVyxPQUVULDJCQUVBLDhEQUFDSztvQkFBT0MsV0FBVTtvQkFBY0MsU0FBUzt3QkFBTUosUUFBUSxDQUFDRDtvQkFBTzs7d0JBQUc7d0JBQUdBLFFBQVEsT0FBUyxZQUFjOzs7Ozs7Ozs7Ozs7MEJBR3hHLDhEQUFDRztnQkFBT0MsV0FBVTtnQkFBV0MsU0FBUztvQkFBTUMsTUFBTTtnQkFBd0I7MEJBQUc7Ozs7OzswQkFHN0UsOERBQUNIO2dCQUFPQyxXQUFVO2dCQUFXQyxPQUFPLE1BQUU7O29CQUNwQyxJQUFJRSxXQUFXWCxrREFBV0E7b0JBQzFCVyxTQUFTO2dCQUNYOzt3QkFGaUJYLDhDQUFXQTs7OzBCQUV6Qjs7Ozs7Ozs7Ozs7O0FBS1Q7R0E1QndCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcm91dGVzL1Jvb21CdG4uanM/ZTBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vbUJ0bigpIHtcclxuXHJcbiAgbGV0IFtzZXR0aW5nLCBzZXRTZXR0aW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnRuXCIgb25DbGljaz17KCk9Pnsgc2V0U2V0dGluZyghc2V0dGluZyk7IH19PlxyXG4gICAgICB7XHJcbiAgICAgICAgc2V0dGluZyA9PSB0cnVlXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICAn6riw67O4IOuqqOuTnCBPTidcclxuICAgICAgICAgIClcclxuICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwibW9kZS1vcHRpb25cIiBvbkNsaWNrPXsoKT0+eyBzZXRNb2RlKCFtb2RlKTsgfX0+IHsgbW9kZSA9PSB0cnVlID8gKCAn66+464uI6rKM7J6EIE9OJyApIDogJ+uvuOuLiOqyjOyehCBPRkYnIH08L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb3B5LXVybFwiIG9uQ2xpY2s9eygpPT57IGFsZXJ0KCftgbTrpr3rs7Trk5zsl5AgdXJs7J20IOuzteyCrOuQmOyXiOyKteuLiOuLpC4nKTsgfX0+XHJcbiAgICAgICAg7Lmc6rWsIOy0iOuMgFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydEJ0blwiIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgICAgICBuYXZpZ2F0ZShcIi9ib2FyZFwiKTtcclxuICAgICAgfX0+XHJcbiAgICAgICAg7Iuc7J6RXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJSb29tQnRuIiwic2V0dGluZyIsInNldFNldHRpbmciLCJtb2RlIiwic2V0TW9kZSIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhbGVydCIsIm5hdmlnYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/routes/RoomBtn.js\n"));

/***/ })

});