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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.peoples.peoples);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeoples)());\n    }, [\n        dispatch\n    ]);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_5___default().get__cards)\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            data.map((param)=>{\n                let { id, name, phone, email, positon, photo } = param;\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: id,\n                    name: name,\n                    phone: phone,\n                    email: email,\n                    positon: positon,\n                    photo: photo\n                }, void 0, false, {\n                    fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"baHjFRQWbTEQf9QRfrBhqxEE/Ug=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDUDtBQUN1QjtBQUNDO0FBQ3RCO0FBRW5CLFNBQVNNOztJQUN0QixNQUFNQyxPQUFPSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxPQUFPLENBQUNBLE9BQU87SUFDekQsTUFBTUMsV0FBV1Isd0RBQVdBO0lBRTVCRyxnREFBU0EsQ0FBQztRQUNSSyxTQUFTTixxRUFBVUE7SUFDckIsR0FBRztRQUFDTTtLQUFTO0lBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWixxQkFDRSw4REFBQ007UUFBSUMsV0FBV2QsNkRBQWE7OzBCQUMzQiw4REFBQ2U7Z0JBQUdELFdBQVdkLG9FQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ2E7Z0JBQUlDLFdBQVdkLG9FQUFvQjs7Ozs7O1lBQ25DTyxLQUFLUyxHQUFHLENBQUM7b0JBQUMsRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRTs4QkFDbkQsOERBQUNyQixrREFBSUE7b0JBQ0hnQixJQUFJQTtvQkFDSkMsTUFBTUE7b0JBQ05DLE9BQU9BO29CQUNQQyxPQUFPQTtvQkFDUEMsU0FBU0E7b0JBQ1RDLE9BQU9BOzs7Ozs7WUFFWDs7Ozs7OztBQUdOO0dBeEJ3QmhCOztRQUNUSCxvREFBV0E7UUFDUEQsb0RBQVdBOzs7S0FGTkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9nZXQvZ2V0LmpzeD9mNDIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dldC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRQZW9wbGVzIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0KCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGVzLnBlb3BsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQZW9wbGVzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0YF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX3RpdGxlYF19Pldvcmtpbmcgd2l0aCBHRVQgcmVxdWVzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX2NhcmRzYF19PjwvZGl2PlxuICAgICAge2RhdGEubWFwKCh7IGlkLCBuYW1lLCBwaG9uZSwgZW1haWwsIHBvc2l0b24sIHBob3RvIH0pID0+IHtcbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBwaG9uZT17cGhvbmV9XG4gICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgIHBvc2l0b249e3Bvc2l0b259XG4gICAgICAgICAgcGhvdG89e3Bob3RvfVxuICAgICAgICAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UGVvcGxlcyIsInVzZUVmZmVjdCIsIkdldCIsImRhdGEiLCJzdGF0ZSIsInBlb3BsZXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJwb3NpdG9uIiwicGhvdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});