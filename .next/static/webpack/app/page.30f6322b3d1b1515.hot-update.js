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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.peoples);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const handleIncrement = ()=>{\n        setCount((prevState)=>prevState + 6);\n        setPage((prevState)=>prevState + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeoples)({\n            count,\n            page\n        }));\n    }, [\n        dispatch,\n        count,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__cards),\n                children: data.map((param)=>{\n                    let { id, name, phone, email, position, photo } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        name: name,\n                        phone: phone,\n                        email: email,\n                        position: position,\n                        photo: photo\n                    }, id, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"get__show-more\"]),\n                onClick: ()=>{\n                    handleIncrement();\n                },\n                children: \"Show more\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"Oe3Ky8bjlnFp6v67bJTCyQv8ptc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDSDtBQUNtQjtBQUNDO0FBQ1o7QUFFN0IsU0FBU087O0lBQ3RCLE1BQU1DLE9BQU9MLHdEQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLE9BQU8sQ0FBQ0EsT0FBTztJQUN6RCxNQUFNQyxXQUFXVCx3REFBV0E7SUFDNUIsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNVSxrQkFBa0I7UUFDdEJILFNBQVMsQ0FBQ0ksWUFBY0EsWUFBWTtRQUNwQ0YsUUFBUSxDQUFDRSxZQUFjQSxZQUFZO0lBQ3JDO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1JNLFNBQVNQLHFFQUFVQSxDQUFDO1lBQUVRO1lBQU9FO1FBQUs7SUFDcEMsR0FBRztRQUFDSDtRQUFVQztRQUFPRTtLQUFLO0lBRTFCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXbkIsNkRBQWE7OzBCQUMzQiw4REFBQ29CO2dCQUFHRCxXQUFXbkIsb0VBQW9COzBCQUFFOzs7Ozs7MEJBQ3JDLDhEQUFDa0I7Z0JBQUlDLFdBQVduQixvRUFBb0I7MEJBQ2pDUSxLQUFLYSxHQUFHLENBQUM7d0JBQUMsRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRTtvQkFDcEQscUJBQ0UsOERBQUMxQiw0Q0FBSUE7d0JBRUhzQixNQUFNQTt3QkFDTkMsT0FBT0E7d0JBQ1BDLE9BQU9BO3dCQUNQQyxVQUFVQTt3QkFDVkMsT0FBT0E7dUJBTEZMOzs7OztnQkFRWDs7Ozs7OzBCQUVGLDhEQUFDTTtnQkFDQ1QsV0FBV25CLDJFQUF3QjtnQkFDbkM2QixTQUFTO29CQUNQYjtnQkFDRjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0ExQ3dCVDs7UUFDVEosb0RBQVdBO1FBQ1BELG9EQUFXQTs7O0tBRk5LIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3g/ZjQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9nZXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY2FyZC9jYXJkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFBlb3BsZXMgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0KCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGVzLnBlb3BsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNik7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyA2KTtcbiAgICBzZXRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UGVvcGxlcyh7IGNvdW50LCBwYWdlIH0pKTtcbiAgfSwgW2Rpc3BhdGNoLCBjb3VudCwgcGFnZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0YF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX3RpdGxlYF19Pldvcmtpbmcgd2l0aCBHRVQgcmVxdWVzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX2NhcmRzYF19PlxuICAgICAgICB7ZGF0YS5tYXAoKHsgaWQsIG5hbWUsIHBob25lLCBlbWFpbCwgcG9zaXRpb24sIHBob3RvIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgcGhvdG89e3Bob3RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0X19zaG93LW1vcmVgXX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGhhbmRsZUluY3JlbWVudCgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTaG93IG1vcmVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UGVvcGxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2V0IiwiZGF0YSIsInN0YXRlIiwicGVvcGxlcyIsImRpc3BhdGNoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2UiLCJzZXRQYWdlIiwiaGFuZGxlSW5jcmVtZW50IiwicHJldlN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJpZCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwicG9zaXRpb24iLCJwaG90byIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});