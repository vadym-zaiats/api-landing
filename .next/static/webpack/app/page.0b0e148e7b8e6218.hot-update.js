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

/***/ "(app-pages-browser)/./src/app/ui/post/post.jsx":
/*!**********************************!*\
  !*** ./src/app/ui/post/post.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Form() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        role: \"\",\n        photo: null\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: type === \"file\" ? e.target.files[0] : value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Додаткова логіка для обробки даних форми\n        console.log(\"Form data submitted:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Working with POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Your name:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"phone\",\n                                children: \"Phone:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"tel\",\n                                id: \"phone\",\n                                name: \"phone\",\n                                value: formData.phone,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Select your role:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"frontend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"frontend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Frontend developer\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"backend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"backend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Backend developer\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"designer\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"designer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Designer\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"qa\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"qa\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"QA\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"photo\",\n                                children: \"Upload your photo:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"photo\",\n                                name: \"photo\",\n                                onChange: handleChange,\n                                accept: \"image/*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Form, \"r3A33OLD2QDwrb3Yu7k5wu5KxCQ=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcG9zdC9wb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUDtBQUUxQixTQUFTRTs7SUFDZCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7UUFDdkNJLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVOLElBQUksRUFBRU8sS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUN0Q1YsWUFBWSxDQUFDVyxXQUFjO2dCQUN6QixHQUFHQSxRQUFRO2dCQUNYLENBQUNWLEtBQUssRUFBRVEsU0FBUyxTQUFTRixFQUFFRyxNQUFNLENBQUNFLEtBQUssQ0FBQyxFQUFFLEdBQUdKO1lBQ2hEO0lBQ0Y7SUFFQSxNQUFNSyxlQUFlLENBQUNOO1FBQ3BCQSxFQUFFTyxjQUFjO1FBQ2hCLDJDQUEyQztRQUMzQ0MsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QmpCO0lBQ3RDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDa0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVOOztrQ0FDZCw4REFBQ087OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBTzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQ0NkLE1BQUs7Z0NBQ0xlLElBQUc7Z0NBQ0h2QixNQUFLO2dDQUNMTyxPQUFPVCxTQUFTRSxJQUFJO2dDQUNwQndCLFVBQVVuQjtnQ0FDVm9CLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ047OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0NkLE1BQUs7Z0NBQ0xlLElBQUc7Z0NBQ0h2QixNQUFLO2dDQUNMTyxPQUFPVCxTQUFTRyxLQUFLO2dDQUNyQnVCLFVBQVVuQjtnQ0FDVm9CLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ047OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0NkLE1BQUs7Z0NBQ0xlLElBQUc7Z0NBQ0h2QixNQUFLO2dDQUNMTyxPQUFPVCxTQUFTSSxLQUFLO2dDQUNyQnNCLFVBQVVuQjtnQ0FDVm9CLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ047OzBDQUNDLDhEQUFDTzswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDTjs7a0RBQ0MsOERBQUNFO3dDQUNDZCxNQUFLO3dDQUNMUixNQUFLO3dDQUNMTyxPQUFNO3dDQUNOaUIsVUFBVW5CO3dDQUNWc0IsU0FBUzdCLFNBQVNLLElBQUksS0FBSzs7Ozs7O29DQUMzQjs7Ozs7OzswQ0FHSiw4REFBQ2lCOztrREFDQyw4REFBQ0U7d0NBQ0NkLE1BQUs7d0NBQ0xSLE1BQUs7d0NBQ0xPLE9BQU07d0NBQ05pQixVQUFVbkI7d0NBQ1ZzQixTQUFTN0IsU0FBU0ssSUFBSSxLQUFLOzs7Ozs7b0NBQzNCOzs7Ozs7OzBDQUdKLDhEQUFDaUI7O2tEQUNDLDhEQUFDRTt3Q0FDQ2QsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTE8sT0FBTTt3Q0FDTmlCLFVBQVVuQjt3Q0FDVnNCLFNBQVM3QixTQUFTSyxJQUFJLEtBQUs7Ozs7OztvQ0FDM0I7Ozs7Ozs7MENBR0osOERBQUNpQjs7a0RBQ0MsOERBQUNFO3dDQUNDZCxNQUFLO3dDQUNMUixNQUFLO3dDQUNMTyxPQUFNO3dDQUNOaUIsVUFBVW5CO3dDQUNWc0IsU0FBUzdCLFNBQVNLLElBQUksS0FBSzs7Ozs7O29DQUMzQjs7Ozs7Ozs7Ozs7OztrQ0FJTiw4REFBQ2dCOzswQ0FDQyw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNDO2dDQUNDZCxNQUFLO2dDQUNMZSxJQUFHO2dDQUNIdkIsTUFBSztnQ0FDTHdCLFVBQVVuQjtnQ0FDVnVCLFFBQU87Ozs7Ozs7Ozs7OztrQ0FHWCw4REFBQ0M7d0JBQU9yQixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXJIZ0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcG9zdC9wb3N0LmpzeD82ODNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9zdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgcm9sZTogXCJcIixcbiAgICBwaG90bzogbnVsbCxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdHlwZSA9PT0gXCJmaWxlXCIgPyBlLnRhcmdldC5maWxlc1swXSA6IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyDQlNC+0LTQsNGC0LrQvtCy0LAg0LvQvtCz0ZbQutCwINC00LvRjyDQvtCx0YDQvtCx0LrQuCDQtNCw0L3QuNGFINGE0L7RgNC80LhcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gZGF0YSBzdWJtaXR0ZWQ6XCIsIGZvcm1EYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+V29ya2luZyB3aXRoIFBPU1QgcmVxdWVzdDwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICBpZD1cInBob25lXCJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5TZWxlY3QgeW91ciByb2xlOjwvcD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgbmFtZT1cInJvbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImZyb250ZW5kXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEucm9sZSA9PT0gXCJmcm9udGVuZFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIEZyb250ZW5kIGRldmVsb3BlclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJiYWNrZW5kXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEucm9sZSA9PT0gXCJiYWNrZW5kXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgQmFja2VuZCBkZXZlbG9wZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwicm9sZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiZGVzaWduZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5yb2xlID09PSBcImRlc2lnbmVyXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgRGVzaWduZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwicm9sZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwicWFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5yb2xlID09PSBcInFhXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgUUFcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob3RvXCI+VXBsb2FkIHlvdXIgcGhvdG86PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwicGhvdG9cIlxuICAgICAgICAgICAgbmFtZT1cInBob3RvXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicm9sZSIsInBob3RvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInByZXZEYXRhIiwiZmlsZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicCIsImNoZWNrZWQiLCJhY2NlcHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/post/post.jsx\n"));

/***/ })

});