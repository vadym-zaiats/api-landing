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

/***/ "(app-pages-browser)/./src/app/ui/get/get.jsx":
/*!********************************!*\
  !*** ./src/app/ui/get/get.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.peoples);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeoples)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__cards),\n                children: data.map((param)=>{\n                    let { id, name, phone, email, position, photo } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        name: name,\n                        phone: phone,\n                        email: email,\n                        position: position,\n                        photo: photo\n                    }, id, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"get__show-more\"]),\n                children: \"Show more\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"mHgIOZ/Y6YU5KOaHFYiFvtpBCes=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDSDtBQUNtQjtBQUNDO0FBQ1o7QUFFN0IsU0FBU087O0lBQ3RCLE1BQU1DLE9BQU9MLHdEQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLE9BQU8sQ0FBQ0EsT0FBTztJQUN6RCxNQUFNQyxXQUFXVCx3REFBV0E7SUFDNUIsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSTSxTQUFTUCxxRUFBVUE7SUFDckIsR0FBRztRQUFDTztLQUFTO0lBRWIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdmLDZEQUFhOzswQkFDM0IsOERBQUNnQjtnQkFBR0QsV0FBV2Ysb0VBQW9COzBCQUFFOzs7Ozs7MEJBQ3JDLDhEQUFDYztnQkFBSUMsV0FBV2Ysb0VBQW9COzBCQUNqQ1EsS0FBS1MsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7b0JBQ3BELHFCQUNFLDhEQUFDdEIsNENBQUlBO3dCQUVIa0IsTUFBTUE7d0JBQ05DLE9BQU9BO3dCQUNQQyxPQUFPQTt3QkFDUEMsVUFBVUE7d0JBQ1ZDLE9BQU9BO3VCQUxGTDs7Ozs7Z0JBUVg7Ozs7OzswQkFFRiw4REFBQ007Z0JBQU9ULFdBQVdmLDJFQUF3QjswQkFBRTs7Ozs7Ozs7Ozs7O0FBR25EO0dBN0J3Qk87O1FBQ1RKLG9EQUFXQTtRQUNQRCxvREFBV0E7OztLQUZOSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2dldC9nZXQuanN4P2Y0MjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2V0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRQZW9wbGVzIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGVvcGxlcy5wZW9wbGVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDYpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UGVvcGxlcygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BnZXRgXX0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbYGdldF9fdGl0bGVgXX0+V29ya2luZyB3aXRoIEdFVCByZXF1ZXN0PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGdldF9fY2FyZHNgXX0+XG4gICAgICAgIHtkYXRhLm1hcCgoeyBpZCwgbmFtZSwgcGhvbmUsIGVtYWlsLCBwb3NpdGlvbiwgcGhvdG8gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBwaG9uZT17cGhvbmV9XG4gICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgICBwaG90bz17cGhvdG99XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX3Nob3ctbW9yZWBdfT5TaG93IG1vcmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFBlb3BsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdldCIsImRhdGEiLCJzdGF0ZSIsInBlb3BsZXMiLCJkaXNwYXRjaCIsImNvdW50Iiwic2V0Q291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJwb3NpdGlvbiIsInBob3RvIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});