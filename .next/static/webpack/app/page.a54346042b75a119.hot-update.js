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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Get: function() { return /* binding */ Get; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get.module.scss */ \"(app-pages-browser)/./src/app/ui/get/get.module.scss\");\n/* harmony import */ var _get_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_get_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ \"(app-pages-browser)/./src/app/ui/card/card.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/peopleSlice */ \"(app-pages-browser)/./src/redux/slices/peopleSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preloader/preloader */ \"(app-pages-browser)/./src/app/ui/preloader/preloader.jsx\");\n/* __next_internal_client_entry_do_not_use__ Get auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Get() {\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.people);\n    const dataIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.dataIsLoading);\n    const pageIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.pageIsLoading);\n    const totalUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.people.totalUsers);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const handleIncrement = ()=>{\n        setCount((prevState)=>prevState + 6);\n        setPage((prevState)=>prevState + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_slices_peopleSlice__WEBPACK_IMPORTED_MODULE_3__.setPeople)({\n            page\n        }));\n    }, [\n        dispatch,\n        count,\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__title),\n                children: \"Working with GET request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default().get__cards),\n                children: [\n                    pageIsLoading && dataIsLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_preloader_preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 44\n                    }, this),\n                    data.map((param)=>{\n                        let { id, name, phone, email, position, photo } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            name: name,\n                            phone: phone,\n                            email: email,\n                            position: position,\n                            photo: photo\n                        }, id, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            count <= totalUsers && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_get_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"get__show-more\"]),\n                onClick: ()=>{\n                    handleIncrement();\n                },\n                children: \"Show more\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/get/get.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Get, \"2JVeyXje2t0JlKgrQ7sIfYbxE9M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Get;\nvar _c;\n$RefreshReg$(_c, \"Get\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvZ2V0L2dldC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ0g7QUFDbUI7QUFDQTtBQUNYO0FBQ087QUFFNUMsU0FBU1E7O0lBQ2QsTUFBTUMsT0FBT04sd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDQSxNQUFNO0lBQ3ZELE1BQU1DLGdCQUFnQlQsd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDQyxhQUFhO0lBQ3ZFLE1BQU1DLGdCQUFnQlYsd0RBQVdBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDRSxhQUFhO0lBQ3ZFLE1BQU1DLGFBQWFYLHdEQUFXQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0csVUFBVTtJQUNqRSxNQUFNQyxXQUFXYix3REFBV0E7SUFDNUIsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYyxrQkFBa0I7UUFDdEJILFNBQVMsQ0FBQ0ksWUFBY0EsWUFBWTtRQUNwQ0YsUUFBUSxDQUFDRSxZQUFjQSxZQUFZO0lBQ3JDO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSVSxTQUFTWCxvRUFBU0EsQ0FBQztZQUFFYztRQUFLO0lBQzVCLEdBQUc7UUFBQ0g7UUFBVUM7UUFBT0U7S0FBSztJQUUxQixxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV3ZCLDZEQUFhOzswQkFDM0IsOERBQUN3QjtnQkFBR0QsV0FBV3ZCLG9FQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ3NCO2dCQUFJQyxXQUFXdkIsb0VBQW9COztvQkFDakNhLGlCQUFpQkQsK0JBQWlCLDhEQUFDTCwyREFBU0E7Ozs7O29CQUM1Q0UsS0FBS2dCLEdBQUcsQ0FBQzs0QkFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO3dCQUNwRCxxQkFDRSw4REFBQzlCLDRDQUFJQTs0QkFFSDBCLE1BQU1BOzRCQUNOQyxPQUFPQTs0QkFDUEMsT0FBT0E7NEJBQ1BDLFVBQVVBOzRCQUNWQyxPQUFPQTsyQkFMRkw7Ozs7O29CQVFYOzs7Ozs7O1lBRURWLFNBQVNGLDRCQUNSLDhEQUFDa0I7Z0JBQ0NULFdBQVd2QiwyRUFBd0I7Z0JBQ25DaUMsU0FBUztvQkFDUGI7Z0JBQ0Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQU1UO0dBaERnQlo7O1FBQ0RMLG9EQUFXQTtRQUNGQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ2RBLG9EQUFXQTtRQUNiRCxvREFBV0E7OztLQUxkTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2dldC9nZXQuanN4P2Y0MjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZ2V0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRQZW9wbGUgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gXCIuLi9wcmVsb2FkZXIvcHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHZXQoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBlb3BsZS5wZW9wbGUpO1xuICBjb25zdCBkYXRhSXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wZW9wbGUuZGF0YUlzTG9hZGluZyk7XG4gIGNvbnN0IHBhZ2VJc0xvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBlb3BsZS5wYWdlSXNMb2FkaW5nKTtcbiAgY29uc3QgdG90YWxVc2VycyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGVvcGxlLnRvdGFsVXNlcnMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNik7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyA2KTtcbiAgICBzZXRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UGVvcGxlKHsgcGFnZSB9KSk7XG4gIH0sIFtkaXNwYXRjaCwgY291bnQsIHBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGdldGBdfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0X190aXRsZWBdfT5Xb3JraW5nIHdpdGggR0VUIHJlcXVlc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZ2V0X19jYXJkc2BdfT5cbiAgICAgICAge3BhZ2VJc0xvYWRpbmcgJiYgZGF0YUlzTG9hZGluZyAmJiA8UHJlbG9hZGVyIC8+fVxuICAgICAgICB7ZGF0YS5tYXAoKHsgaWQsIG5hbWUsIHBob25lLCBlbWFpbCwgcG9zaXRpb24sIHBob3RvIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgcGhvdG89e3Bob3RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NvdW50IDw9IHRvdGFsVXNlcnMgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGdldF9fc2hvdy1tb3JlYF19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNob3cgbW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2FyZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRQZW9wbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByZWxvYWRlciIsIkdldCIsImRhdGEiLCJzdGF0ZSIsInBlb3BsZSIsImRhdGFJc0xvYWRpbmciLCJwYWdlSXNMb2FkaW5nIiwidG90YWxVc2VycyIsImRpc3BhdGNoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2UiLCJzZXRQYWdlIiwiaGFuZGxlSW5jcmVtZW50IiwicHJldlN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJpZCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwicG9zaXRpb24iLCJwaG90byIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/get/get.jsx\n"));

/***/ })

});