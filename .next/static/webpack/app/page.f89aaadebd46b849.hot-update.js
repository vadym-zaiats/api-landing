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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Post: function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.module.scss */ \"(app-pages-browser)/./src/app/ui/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Post() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        role: \"\",\n        photo: null\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: type === \"file\" ? e.target.files[0] : value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form data submitted:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__title),\n                children: \"Working with POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Your name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__email),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__email-input\"]),\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            value: formData.email,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__phone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-input\"]),\n                            type: \"tel\",\n                            id: \"phone\",\n                            name: \"phone\",\n                            placeholder: \"Phone\",\n                            value: formData.phone,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-valid\"]),\n                        htmlFor: \"phone\",\n                        children: \"+38 (XXX) XXX - XX - XX\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__position),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__position-title\"]),\n                                children: \"Select your position\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__frontend),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__frontend-input\"]),\n                                        id: \"form__frontend-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"frontend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"frontend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__frontend-label\"]),\n                                        for: \"form__frontend-input\",\n                                        children: \"Frontend developer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__backend),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__backend-input\"]),\n                                        id: \"form__backend-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"backend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"backend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__backend-label\"]),\n                                        for: \"form__backend-input\",\n                                        children: \"Backend developer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__designer),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__designer-input\"]),\n                                        id: \"form__designer-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"designer\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"designer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__designer-label\"]),\n                                        for: \"form__designer-input\",\n                                        children: \"Designer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__qa),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__qa-input\"]),\n                                        id: \"form__qa-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"qa\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"qa\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__qa-label\"]),\n                                        for: \"form__qa-input\",\n                                        children: \"QA\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__upload),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__upload-input\"]),\n                                id: \"form__upload-input\",\n                                type: \"file\",\n                                name: \"photo\",\n                                onChange: handleChange,\n                                accept: \"image/*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__upload-label\"]),\n                                for: \"form__upload-input\",\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__upload-file-name\"]),\n                                children: \"Upload your photo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__button),\n                        type: \"submit\",\n                        children: \"Sign up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"r3A33OLD2QDwrb3Yu7k5wu5KxCQ=\");\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcG9zdC9wb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBRTFCLFNBQVNFOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUN2Q0ksTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRU4sSUFBSSxFQUFFTyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ3RDVixZQUFZLENBQUNXLFdBQWM7Z0JBQ3pCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ1YsS0FBSyxFQUFFUSxTQUFTLFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsR0FBR0o7WUFDaEQ7SUFDRjtJQUVBLE1BQU1LLGVBQWUsQ0FBQ047UUFDcEJBLEVBQUVPLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JqQjtJQUN0QztJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBV3RCLCtEQUFjOzswQkFDNUIsOERBQUN1QjtnQkFBR0QsV0FBV3RCLHNFQUFxQjswQkFBRTs7Ozs7OzBCQUN0Qyw4REFBQ3dCO2dCQUFLRixXQUFXdEIscUVBQW9CO2dCQUFFeUIsVUFBVVI7O2tDQUMvQyw4REFBQ0k7d0JBQUlDLFdBQVd0QixxRUFBb0I7a0NBQ2xDLDRFQUFDMEI7NEJBQ0NKLFdBQVd0Qiw4RUFBMEI7NEJBQ3JDYSxNQUFLOzRCQUNMYyxJQUFHOzRCQUNIdEIsTUFBSzs0QkFDTHVCLGFBQVk7NEJBQ1poQixPQUFPVCxTQUFTRSxJQUFJOzRCQUNwQndCLFVBQVVuQjs0QkFDVm9CLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDVDt3QkFBSUMsV0FBV3RCLHNFQUFxQjtrQ0FDbkMsNEVBQUMwQjs0QkFDQ0osV0FBV3RCLCtFQUEyQjs0QkFDdENhLE1BQUs7NEJBQ0xjLElBQUc7NEJBQ0h0QixNQUFLOzRCQUNMdUIsYUFBWTs0QkFDWmhCLE9BQU9ULFNBQVNHLEtBQUs7NEJBQ3JCdUIsVUFBVW5COzRCQUNWb0IsUUFBUTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNUO3dCQUFJQyxXQUFXdEIsc0VBQXFCO2tDQUNuQyw0RUFBQzBCOzRCQUNDSixXQUFXdEIsK0VBQTJCOzRCQUN0Q2EsTUFBSzs0QkFDTGMsSUFBRzs0QkFDSHRCLE1BQUs7NEJBQ0x1QixhQUFZOzRCQUNaaEIsT0FBT1QsU0FBU0ksS0FBSzs0QkFDckJzQixVQUFVbkI7NEJBQ1ZvQixRQUFROzs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1Q7d0JBQUlDLFdBQVd0QiwrRUFBMkI7d0JBQUUrQixTQUFRO2tDQUFROzs7Ozs7a0NBRzdELDhEQUFDVjt3QkFBSUMsV0FBV3RCLHlFQUF3Qjs7MENBQ3RDLDhEQUFDZ0M7Z0NBQUVWLFdBQVd0QixrRkFBOEI7MENBQUU7Ozs7OzswQ0FDOUMsOERBQUNxQjtnQ0FBSUMsV0FBV3RCLHlFQUF3Qjs7a0RBQ3RDLDhEQUFDMEI7d0NBQ0NKLFdBQVd0QixrRkFBOEI7d0NBQ3pDMkIsSUFBRzt3Q0FDSGQsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTE8sT0FBTTt3Q0FDTmlCLFVBQVVuQjt3Q0FDVnVCLFNBQVM5QixTQUFTSyxJQUFJLEtBQUs7Ozs7OztrREFFN0IsOERBQUMwQjt3Q0FDQ1osV0FBV3RCLGtGQUE4Qjt3Q0FDekNtQyxLQUFJO2tEQUNMOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNkO2dDQUFJQyxXQUFXdEIsd0VBQXVCOztrREFDckMsOERBQUMwQjt3Q0FDQ0osV0FBV3RCLGlGQUE2Qjt3Q0FDeEMyQixJQUFHO3dDQUNIZCxNQUFLO3dDQUNMUixNQUFLO3dDQUNMTyxPQUFNO3dDQUNOaUIsVUFBVW5CO3dDQUNWdUIsU0FBUzlCLFNBQVNLLElBQUksS0FBSzs7Ozs7O2tEQUU3Qiw4REFBQzBCO3dDQUNDWixXQUFXdEIsaUZBQTZCO3dDQUN4Q21DLEtBQUk7a0RBQ0w7Ozs7Ozs7Ozs7OzswQ0FJSCw4REFBQ2Q7Z0NBQUlDLFdBQVd0Qix5RUFBd0I7O2tEQUN0Qyw4REFBQzBCO3dDQUNDSixXQUFXdEIsa0ZBQThCO3dDQUN6QzJCLElBQUc7d0NBQ0hkLE1BQUs7d0NBQ0xSLE1BQUs7d0NBQ0xPLE9BQU07d0NBQ05pQixVQUFVbkI7d0NBQ1Z1QixTQUFTOUIsU0FBU0ssSUFBSSxLQUFLOzs7Ozs7a0RBRTdCLDhEQUFDMEI7d0NBQ0NaLFdBQVd0QixrRkFBOEI7d0NBQ3pDbUMsS0FBSTtrREFDTDs7Ozs7Ozs7Ozs7OzBDQUlILDhEQUFDZDtnQ0FBSUMsV0FBV3RCLG1FQUFrQjs7a0RBQ2hDLDhEQUFDMEI7d0NBQ0NKLFdBQVd0Qiw0RUFBd0I7d0NBQ25DMkIsSUFBRzt3Q0FDSGQsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTE8sT0FBTTt3Q0FDTmlCLFVBQVVuQjt3Q0FDVnVCLFNBQVM5QixTQUFTSyxJQUFJLEtBQUs7Ozs7OztrREFFN0IsOERBQUMwQjt3Q0FBTVosV0FBV3RCLDRFQUF3Qjt3Q0FBRW1DLEtBQUk7a0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3JFLDhEQUFDZDt3QkFBSUMsV0FBV3RCLHVFQUFzQjs7MENBQ3BDLDhEQUFDMEI7Z0NBQ0NKLFdBQVd0QixnRkFBNEI7Z0NBQ3ZDMkIsSUFBRztnQ0FDSGQsTUFBSztnQ0FDTFIsTUFBSztnQ0FDTHdCLFVBQVVuQjtnQ0FDVjBCLFFBQU87Ozs7OzswQ0FFVCw4REFBQ0Y7Z0NBQ0NaLFdBQVd0QixnRkFBNEI7Z0NBQ3ZDbUMsS0FBSTswQ0FDTDs7Ozs7OzBDQUdELDhEQUFDSDtnQ0FBRVYsV0FBV3RCLG9GQUFnQzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVsRCw4REFBQ3FDO3dCQUFPZixXQUFXdEIsdUVBQXNCO3dCQUFFYSxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakU7R0E1SmdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL3Bvc3QvcG9zdC5qc3g/NjgzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Bvc3QubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0KCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIHJvbGU6IFwiXCIsXG4gICAgcGhvdG86IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHR5cGUgPT09IFwiZmlsZVwiID8gZS50YXJnZXQuZmlsZXNbMF0gOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJGb3JtIGRhdGEgc3VibWl0dGVkOlwiLCBmb3JtRGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtYF19PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX190aXRsZWBdfT5Xb3JraW5nIHdpdGggUE9TVCByZXF1ZXN0PC9oMj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19ib2R5YF19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19uYW1lYF19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX25hbWUtaW5wdXRgXX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19lbWFpbGBdfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19lbWFpbC1pbnB1dGBdfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lYF19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lLWlucHV0YF19XG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bob25lLXZhbGlkYF19IGh0bWxGb3I9XCJwaG9uZVwiPlxuICAgICAgICAgICszOCAoWFhYKSBYWFggLSBYWCAtIFhYXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19wb3NpdGlvbmBdfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcG9zaXRpb24tdGl0bGVgXX0+U2VsZWN0IHlvdXIgcG9zaXRpb248L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZnJvbnRlbmRgXX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2Zyb250ZW5kLWlucHV0YF19XG4gICAgICAgICAgICAgIGlkPVwiZm9ybV9fZnJvbnRlbmQtaW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwicm9sZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiZnJvbnRlbmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5yb2xlID09PSBcImZyb250ZW5kXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19mcm9udGVuZC1sYWJlbGBdfVxuICAgICAgICAgICAgICBmb3I9XCJmb3JtX19mcm9udGVuZC1pbnB1dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZyb250ZW5kIGRldmVsb3BlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19iYWNrZW5kYF19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19iYWNrZW5kLWlucHV0YF19XG4gICAgICAgICAgICAgIGlkPVwiZm9ybV9fYmFja2VuZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJiYWNrZW5kXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEucm9sZSA9PT0gXCJiYWNrZW5kXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19iYWNrZW5kLWxhYmVsYF19XG4gICAgICAgICAgICAgIGZvcj1cImZvcm1fX2JhY2tlbmQtaW5wdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCYWNrZW5kIGRldmVsb3BlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19kZXNpZ25lcmBdfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZGVzaWduZXItaW5wdXRgXX1cbiAgICAgICAgICAgICAgaWQ9XCJmb3JtX19kZXNpZ25lci1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJkZXNpZ25lclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnJvbGUgPT09IFwiZGVzaWduZXJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2Rlc2lnbmVyLWxhYmVsYF19XG4gICAgICAgICAgICAgIGZvcj1cImZvcm1fX2Rlc2lnbmVyLWlucHV0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVzaWduZXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcWFgXX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3FhLWlucHV0YF19XG4gICAgICAgICAgICAgIGlkPVwiZm9ybV9fcWEtaW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwicm9sZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwicWFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5yb2xlID09PSBcInFhXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19xYS1sYWJlbGBdfSBmb3I9XCJmb3JtX19xYS1pbnB1dFwiPlxuICAgICAgICAgICAgICBRQVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3VwbG9hZGBdfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX191cGxvYWQtaW5wdXRgXX1cbiAgICAgICAgICAgIGlkPVwiZm9ybV9fdXBsb2FkLWlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIG5hbWU9XCJwaG90b1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX191cGxvYWQtbGFiZWxgXX1cbiAgICAgICAgICAgIGZvcj1cImZvcm1fX3VwbG9hZC1pbnB1dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fdXBsb2FkLWZpbGUtbmFtZWBdfT5VcGxvYWQgeW91ciBwaG90bzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2J1dHRvbmBdfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU2lnbiB1cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlBvc3QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJyb2xlIiwicGhvdG8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJmaWxlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJwIiwiY2hlY2tlZCIsImxhYmVsIiwiZm9yIiwiYWNjZXB0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/post/post.jsx\n"));

/***/ })

});