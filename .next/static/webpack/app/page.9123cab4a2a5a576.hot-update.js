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

/***/ "(app-pages-browser)/./src/app/ui/card/card.jsx":
/*!**********************************!*\
  !*** ./src/app/ui/card/card.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.module.scss */ \"(app-pages-browser)/./src/app/ui/card/card.module.scss\");\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Card(param) {\n    let { name, phone, email, position, photo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"\".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card__photo)),\n                src: photo,\n                alt: \"photo\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card__name)),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card__position)),\n                children: position\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card__email)),\n                \"data-fullemail\": email,\n                children: email\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card__phone)),\n                children: phone\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/card/card.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY2FyZC9jYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFFakMsU0FBU0UsS0FBSyxLQUF1QztRQUF2QyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxHQUF2QztJQUNuQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1IsK0RBQWM7OzBCQUM1Qiw4REFBQ1M7Z0JBQUlELFdBQVcsR0FBeUIsT0FBdEJSLHNFQUFxQjtnQkFBSVUsS0FBS0o7Z0JBQU9LLEtBQUk7Ozs7OzswQkFDNUQsOERBQUNDO2dCQUFFSixXQUFXLEdBQXdCLE9BQXJCUixxRUFBb0I7MEJBQUtFOzs7Ozs7MEJBQzFDLDhEQUFDVTtnQkFBRUosV0FBVyxHQUE0QixPQUF6QlIseUVBQXdCOzBCQUFLSzs7Ozs7OzBCQUM5Qyw4REFBQ087Z0JBQUVKLFdBQVcsR0FBeUIsT0FBdEJSLHNFQUFxQjtnQkFBSWEsa0JBQWdCVDswQkFDdkRBOzs7Ozs7MEJBRUgsOERBQUNRO2dCQUFFSixXQUFXLEdBQXlCLE9BQXRCUixzRUFBcUI7MEJBQUtHOzs7Ozs7Ozs7Ozs7QUFHakQ7S0FaZ0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvY2FyZC9jYXJkLmpzeD81NzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jYXJkLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgbmFtZSwgcGhvbmUsIGVtYWlsLCBwb3NpdGlvbiwgcGhvdG8gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGNhcmRgXX0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiY2FyZF9fcGhvdG9cIl19YH0gc3JjPXtwaG90b30gYWx0PVwicGhvdG9cIiAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJjYXJkX19uYW1lXCJdfWB9PntuYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiY2FyZF9fcG9zaXRpb25cIl19YH0+e3Bvc2l0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiY2FyZF9fZW1haWxcIl19YH0gZGF0YS1mdWxsZW1haWw9e2VtYWlsfT5cbiAgICAgICAge2VtYWlsfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJjYXJkX19waG9uZVwiXX1gfT57cGhvbmV9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiQ2FyZCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwicG9zaXRpb24iLCJwaG90byIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJkYXRhLWZ1bGxlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/card/card.jsx\n"));

/***/ })

});