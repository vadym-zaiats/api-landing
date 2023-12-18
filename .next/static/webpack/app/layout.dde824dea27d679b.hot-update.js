"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _slices_peopleSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var _slices_tokenSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n/* harmony import */ var _slices_positionsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/positionsSlice */ \"(app-pages-browser)/./src/redux/slices/positionsSlice.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"(app-pages-browser)/./node_modules/redux-thunk/dist/redux-thunk.mjs\");\n\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({\n    reducer: {\n        people: _slices_peopleSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        token: _slices_tokenSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        positions: _slices_positionsSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        middleware: [\n            redux_thunk__WEBPACK_IMPORTED_MODULE_4__.thunk\n        ]\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDSDtBQUNGO0FBQ1E7QUFDakI7QUFFN0IsTUFBTUssUUFBUUwsZ0VBQWNBLENBQUM7SUFDbENNLFNBQVM7UUFDUEMsUUFBUU4sMkRBQVdBO1FBQ25CTyxPQUFPTiwwREFBVUE7UUFDakJPLFdBQVdOLDhEQUFjQTtRQUN6Qk8sWUFBWTtZQUFDTiw4Q0FBS0E7U0FBQztJQUNyQjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3N0b3JlLmpzP2RkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHBlb3BsZVNsaWNlIGZyb20gXCIuL3NsaWNlcy9wZW9wbGVTbGljZVwiO1xuaW1wb3J0IHRva2VuU2xpY2UgZnJvbSBcIi4vc2xpY2VzL3Rva2VuU2xpY2VcIjtcbmltcG9ydCBwb3NpdGlvbnNTbGljZSBmcm9tIFwiLi9zbGljZXMvcG9zaXRpb25zU2xpY2VcIjtcbmltcG9ydCB7IHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHBlb3BsZTogcGVvcGxlU2xpY2UsXG4gICAgdG9rZW46IHRva2VuU2xpY2UsXG4gICAgcG9zaXRpb25zOiBwb3NpdGlvbnNTbGljZSxcbiAgICBtaWRkbGV3YXJlOiBbdGh1bmtdLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJwZW9wbGVTbGljZSIsInRva2VuU2xpY2UiLCJwb3NpdGlvbnNTbGljZSIsInRodW5rIiwic3RvcmUiLCJyZWR1Y2VyIiwicGVvcGxlIiwidG9rZW4iLCJwb3NpdGlvbnMiLCJtaWRkbGV3YXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/store.js\n"));

/***/ })

});