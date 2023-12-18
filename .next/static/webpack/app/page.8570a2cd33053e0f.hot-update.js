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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Get: function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preloader/preloader */ \"(app-pages-browser)/./src/app/ui/preloader/preloader.jsx\");\n/* __next_internal_client_entry_do_not_use__ Get auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.people);\n    const dataIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.dataIsLoading);\n    const totalUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.totalUsers);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const handleIncrement = ()=>{\n        setCount((prevState)=>prevState + 6);\n        setPage((prevState)=>prevState + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeople)({\n            page\n        }));\n    }, [\n        dispatch,\n        count,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__cards),\n                children: [\n                    dataIsLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_preloader_preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 27\n                    }, this),\n                    !dataIsLoading && data.map((param)=>{\n                        let { id, name, phone, email, position, photo } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            name: name,\n                            phone: phone,\n                            email: email,\n                            position: position,\n                            photo: photo\n                        }, id, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            count <= totalUsers && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"get__show-more\"]),\n                onClick: ()=>{\n                    handleIncrement();\n                },\n                children: \"Show more\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"xeyc+aZ4DECMbe0B5wN5kV6Q2GI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ0g7QUFDbUI7QUFDQTtBQUNYO0FBQ087QUFFNUMsU0FBU1E7O0lBQ2QsTUFBTUMsT0FBT04sd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDQSxNQUFNO0lBQ3ZELE1BQU1DLGdCQUFnQlQsd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDQyxhQUFhO0lBQ3ZFLE1BQU1DLGFBQWFWLHdEQUFXQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsVUFBVTtJQUNqRSxNQUFNQyxXQUFXWix3REFBV0E7SUFDNUIsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxrQkFBa0I7UUFDdEJILFNBQVMsQ0FBQ0ksWUFBY0EsWUFBWTtRQUNwQ0YsUUFBUSxDQUFDRSxZQUFjQSxZQUFZO0lBQ3JDO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1JTLFNBQVNWLG9FQUFTQSxDQUFDO1lBQUVhO1FBQUs7SUFDNUIsR0FBRztRQUFDSDtRQUFVQztRQUFPRTtLQUFLO0lBRTFCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXdEIsNkRBQWE7OzBCQUMzQiw4REFBQ3VCO2dCQUFHRCxXQUFXdEIsb0VBQW9COzBCQUFFOzs7Ozs7MEJBQ3JDLDhEQUFDcUI7Z0JBQUlDLFdBQVd0QixvRUFBb0I7O29CQUNqQ1ksK0JBQWlCLDhEQUFDTCwyREFBU0E7Ozs7O29CQUMzQixDQUFDSyxpQkFDQUgsS0FBS2UsR0FBRyxDQUFDOzRCQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7d0JBQ25ELHFCQUNFLDhEQUFDN0IsNENBQUlBOzRCQUVIeUIsTUFBTUE7NEJBQ05DLE9BQU9BOzRCQUNQQyxPQUFPQTs0QkFDUEMsVUFBVUE7NEJBQ1ZDLE9BQU9BOzJCQUxGTDs7Ozs7b0JBUVg7Ozs7Ozs7WUFFSFYsU0FBU0YsNEJBQ1IsOERBQUNrQjtnQkFDQ1QsV0FBV3RCLDJFQUF3QjtnQkFDbkNnQyxTQUFTO29CQUNQYjtnQkFDRjswQkFDRDs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRGdCWDs7UUFDREwsb0RBQVdBO1FBQ0ZBLG9EQUFXQTtRQUNkQSxvREFBV0E7UUFDYkQsb0RBQVdBOzs7S0FKZE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9nZXQvZ2V0LmpzeD9mNDIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dldC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jYXJkL2NhcmRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0UGVvcGxlIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vcHJlbG9hZGVyL3ByZWxvYWRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0KCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGUucGVvcGxlKTtcbiAgY29uc3QgZGF0YUlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGVvcGxlLmRhdGFJc0xvYWRpbmcpO1xuICBjb25zdCB0b3RhbFVzZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGUudG90YWxVc2Vycyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSg2KTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgaGFuZGxlSW5jcmVtZW50ID0gKCkgPT4ge1xuICAgIHNldENvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDYpO1xuICAgIHNldFBhZ2UoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRQZW9wbGUoeyBwYWdlIH0pKTtcbiAgfSwgW2Rpc3BhdGNoLCBjb3VudCwgcGFnZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0YF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX3RpdGxlYF19Pldvcmtpbmcgd2l0aCBHRVQgcmVxdWVzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2BnZXRfX2NhcmRzYF19PlxuICAgICAgICB7ZGF0YUlzTG9hZGluZyAmJiA8UHJlbG9hZGVyIC8+fVxuICAgICAgICB7IWRhdGFJc0xvYWRpbmcgJiZcbiAgICAgICAgICBkYXRhLm1hcCgoeyBpZCwgbmFtZSwgcGhvbmUsIGVtYWlsLCBwb3NpdGlvbiwgcGhvdG8gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgICAgcGhvdG89e3Bob3RvfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NvdW50IDw9IHRvdGFsVXNlcnMgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGdldF9fc2hvdy1tb3JlYF19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNob3cgbW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2FyZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRQZW9wbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByZWxvYWRlciIsIkdldCIsImRhdGEiLCJzdGF0ZSIsInBlb3BsZSIsImRhdGFJc0xvYWRpbmciLCJ0b3RhbFVzZXJzIiwiZGlzcGF0Y2giLCJjb3VudCIsInNldENvdW50IiwicGFnZSIsInNldFBhZ2UiLCJoYW5kbGVJbmNyZW1lbnQiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJwb3NpdGlvbiIsInBob3RvIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});