"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/ui/qwe/qwe.jsx":
/*!********************************!*\
  !*** ./src/app/ui/qwe/qwe.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _qwe_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qwe.module.scss */ \"(app-pages-browser)/./src/app/ui/qwe/qwe.module.scss\");\n/* harmony import */ var _qwe_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_qwe_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n // Подключите файл стилей\nconst InputWithAnimatedPlaceholder = ()=>{\n    _s();\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return(// <div className={`input-container ${isFocused ? \"input-focused\" : \"\"}`}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_qwe_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"input-container\"]), \" \").concat(isFocused ? \"input-focused\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onFocus: handleFocus,\n                onBlur: handleBlur\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/qwe/qwe.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: (_qwe_module_scss__WEBPACK_IMPORTED_MODULE_2___default().placeholder),\n                children: \"Введите текст\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/qwe/qwe.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/qwe/qwe.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined));\n};\n_s(InputWithAnimatedPlaceholder, \"taoS6m9NZex5dx3pinefKTdpShE=\");\n_c = InputWithAnimatedPlaceholder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputWithAnimatedPlaceholder);\nvar _c;\n$RefreshReg$(_c, \"InputWithAnimatedPlaceholder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcXdlL3F3ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDRCxDQUFDLHlCQUF5QjtBQUVqRSxNQUFNRywrQkFBK0I7O0lBQ25DLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNSyxjQUFjO1FBQ2xCRCxhQUFhO0lBQ2Y7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCRixhQUFhO0lBQ2Y7SUFFQSxPQUNFLDBFQUEwRTtrQkFDMUUsOERBQUNHO1FBQ0NDLFdBQVcsR0FDVEwsT0FEWUYsNEVBQXlCLEVBQUMsS0FFdkMsT0FEQ0UsWUFBWSxrQkFBa0I7OzBCQUdoQyw4REFBQ007Z0JBQU1DLE1BQUs7Z0JBQU9DLFNBQVNOO2dCQUFhTyxRQUFRTjs7Ozs7OzBCQUNqRCw4REFBQ087Z0JBQU1MLFdBQVdQLHFFQUFxQjswQkFBRTs7Ozs7Ozs7Ozs7O0FBRy9DO0dBdEJNQztLQUFBQTtBQXdCTiwrREFBZUEsNEJBQTRCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcXdlL3F3ZS5qc3g/YjgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcXdlLm1vZHVsZS5zY3NzXCI7IC8vINCf0L7QtNC60LvRjtGH0LjRgtC1INGE0LDQudC7INGB0YLQuNC70LXQuVxuXG5jb25zdCBJbnB1dFdpdGhBbmltYXRlZFBsYWNlaG9sZGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17YGlucHV0LWNvbnRhaW5lciAke2lzRm9jdXNlZCA/IFwiaW5wdXQtZm9jdXNlZFwiIDogXCJcIn1gfT5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImlucHV0LWNvbnRhaW5lclwiXX0gJHtcbiAgICAgICAgaXNGb2N1c2VkID8gXCJpbnB1dC1mb2N1c2VkXCIgOiBcIlwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkZvY3VzPXtoYW5kbGVGb2N1c30gb25CbHVyPXtoYW5kbGVCbHVyfSAvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzW1wicGxhY2Vob2xkZXJcIl19PtCS0LLQtdC00LjRgtC1INGC0LXQutGB0YI8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRXaXRoQW5pbWF0ZWRQbGFjZWhvbGRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW5wdXRXaXRoQW5pbWF0ZWRQbGFjZWhvbGRlciIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/qwe/qwe.jsx\n"));

/***/ })

});