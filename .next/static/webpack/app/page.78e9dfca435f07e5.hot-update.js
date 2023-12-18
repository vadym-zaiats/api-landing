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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Get: function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preloader/preloader */ \"(app-pages-browser)/./src/app/ui/preloader/preloader.jsx\");\n/* __next_internal_client_entry_do_not_use__ Get auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.peoples);\n    const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.isLoading);\n    const totalUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.totalUsers);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const handleIncrement = ()=>{\n        setCount((prevState)=>prevState + 6);\n        setPage((prevState)=>prevState + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeoples)({\n            page\n        }));\n    }, [\n        dispatch,\n        count,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get),\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_preloader_preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__cards),\n                children: data.map((param)=>{\n                    let { id, name, phone, email, position, photo } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        name: name,\n                        phone: phone,\n                        email: email,\n                        position: position,\n                        photo: photo\n                    }, id, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            count <= totalUsers && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"get__show-more\"]),\n                onClick: ()=>{\n                    handleIncrement();\n                },\n                children: \"Show more\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"PpVP5AUiO/tOsL64pcVsjnDIN/U=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ0g7QUFDbUI7QUFDZ0I7QUFDM0I7QUFDTztBQUU1QyxTQUFTUzs7SUFDZCxNQUFNQyxPQUFPUCx3REFBV0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxPQUFPLENBQUNBLE9BQU87SUFDekQsTUFBTUMsWUFBWVYsd0RBQVdBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsT0FBTyxDQUFDQyxTQUFTO0lBQ2hFLE1BQU1DLGFBQWFYLHdEQUFXQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLE9BQU8sQ0FBQ0UsVUFBVTtJQUNsRSxNQUFNQyxXQUFXYix3REFBV0E7SUFDNUIsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxrQkFBa0I7UUFDdEJILFNBQVMsQ0FBQ0ksWUFBY0EsWUFBWTtRQUNwQ0YsUUFBUSxDQUFDRSxZQUFjQSxZQUFZO0lBQ3JDO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1JTLFNBQVNYLHFFQUFVQSxDQUFDO1lBQUVjO1FBQUs7SUFDN0IsR0FBRztRQUFDSDtRQUFVQztRQUFPRTtLQUFLO0lBRTFCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXdkIsNkRBQWE7O1lBQzFCYSwyQkFBYSw4REFBQ0wsMkRBQVNBOzs7OzswQkFDeEIsOERBQUNnQjtnQkFBR0QsV0FBV3ZCLG9FQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ3NCO2dCQUFJQyxXQUFXdkIsb0VBQW9COzBCQUNqQ1UsS0FBS2UsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7b0JBQ3BELHFCQUNFLDhEQUFDOUIsNENBQUlBO3dCQUVIMEIsTUFBTUE7d0JBQ05DLE9BQU9BO3dCQUNQQyxPQUFPQTt3QkFDUEMsVUFBVUE7d0JBQ1ZDLE9BQU9BO3VCQUxGTDs7Ozs7Z0JBUVg7Ozs7OztZQUVEVixTQUFTRiw0QkFDUiw4REFBQ2tCO2dCQUNDVCxXQUFXdkIsMkVBQXdCO2dCQUNuQ2lDLFNBQVM7b0JBQ1BiO2dCQUNGOzBCQUNEOzs7Ozs7Ozs7Ozs7QUFNVDtHQS9DZ0JYOztRQUNETixvREFBV0E7UUFDTkEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTtRQUNiRCxvREFBV0E7OztLQUpkTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2dldC9nZXQuanN4P2Y0MjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2V0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRQZW9wbGVzLCBzZXRUb3RhbFVzZXJzIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vcHJlbG9hZGVyL3ByZWxvYWRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0KCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGVzLnBlb3BsZXMpO1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBlb3BsZXMuaXNMb2FkaW5nKTtcbiAgY29uc3QgdG90YWxVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGVvcGxlcy50b3RhbFVzZXJzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDYpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBoYW5kbGVJbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0Q291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgNik7XG4gICAgc2V0UGFnZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFBlb3BsZXMoeyBwYWdlIH0pKTtcbiAgfSwgW2Rpc3BhdGNoLCBjb3VudCwgcGFnZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0YF19PlxuICAgICAge2lzTG9hZGluZyAmJiA8UHJlbG9hZGVyIC8+fVxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX3RpdGxlYF19Pldvcmtpbmcgd2l0aCBHRVQgcmVxdWVzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX2NhcmRzYF19PlxuICAgICAgICB7ZGF0YS5tYXAoKHsgaWQsIG5hbWUsIHBob25lLCBlbWFpbCwgcG9zaXRpb24sIHBob3RvIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgcGhvdG89e3Bob3RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NvdW50IDw9IHRvdGFsVXNlcnMgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGdldF9fc2hvdy1tb3JlYF19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNob3cgbW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2FyZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRQZW9wbGVzIiwic2V0VG90YWxVc2VycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJlbG9hZGVyIiwiR2V0IiwiZGF0YSIsInN0YXRlIiwicGVvcGxlcyIsImlzTG9hZGluZyIsInRvdGFsVXNlcnMiLCJkaXNwYXRjaCIsImNvdW50Iiwic2V0Q291bnQiLCJwYWdlIiwic2V0UGFnZSIsImhhbmRsZUluY3JlbWVudCIsInByZXZTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiaWQiLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsInBvc2l0aW9uIiwicGhvdG8iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});