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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Post: function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.module.scss */ \"(app-pages-browser)/./src/app/ui/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Post() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        role: \"\",\n        photo: null\n    });\n    const handleChange = (e)=>{\n        const { name, value, type } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: type === \"file\" ? e.target.files[0] : value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Form data submitted:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__title),\n                children: \"Working with POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__body),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__name-input\"]),\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"Your name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__email),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__email-input\"]),\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            value: formData.email,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__phone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-input\"]),\n                            type: \"tel\",\n                            id: \"phone\",\n                            name: \"phone\",\n                            placeholder: \"Phone\",\n                            value: formData.phone,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__phone-valid\"]),\n                        htmlFor: \"phone\",\n                        children: \"+38 (XXX) XXX - XX - XX\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__position),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__position-title\"]),\n                                children: \"Select your position\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__frontend),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__frontend-input\"]),\n                                        id: \"form__frontend-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"frontend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"frontend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__frontend-label\"]),\n                                        for: \"form__frontend-input\",\n                                        children: \"Frontend developer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__backend),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__backend-input\"]),\n                                        id: \"form__backend-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"backend\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"backend\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__backend-label\"]),\n                                        for: \"form__backend-input\",\n                                        children: \"Backend developer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__designer),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__designer-input\"]),\n                                        id: \"form__designer-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"designer\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"designer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__designer-label\"]),\n                                        for: \"form__designer-input\",\n                                        children: \"Designer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__qa),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__qa-input\"]),\n                                        id: \"form__qa-input\",\n                                        type: \"radio\",\n                                        name: \"role\",\n                                        value: \"qa\",\n                                        onChange: handleChange,\n                                        checked: formData.role === \"qa\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__qa-label\"]),\n                                        for: \"form__qa-input\",\n                                        children: \"QA\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form__upload),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__upload-input\"]),\n                                type: \"file\",\n                                id: \"photo\",\n                                name: \"photo\",\n                                onChange: handleChange,\n                                accept: \"image/*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"form__upload-label\"]),\n                                htmlFor: \"photo\",\n                                for: \"photo\",\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Sign up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vadym/dev/abz.agency/src/app/ui/post/post.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"r3A33OLD2QDwrb3Yu7k5wu5KxCQ=\");\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvcG9zdC9wb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBRTFCLFNBQVNFOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUN2Q0ksTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRU4sSUFBSSxFQUFFTyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ3RDVixZQUFZLENBQUNXLFdBQWM7Z0JBQ3pCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ1YsS0FBSyxFQUFFUSxTQUFTLFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLEVBQUUsR0FBR0o7WUFDaEQ7SUFDRjtJQUVBLE1BQU1LLGVBQWUsQ0FBQ047UUFDcEJBLEVBQUVPLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JqQjtJQUN0QztJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBV3RCLCtEQUFjOzswQkFDNUIsOERBQUN1QjtnQkFBR0QsV0FBV3RCLHNFQUFxQjswQkFBRTs7Ozs7OzBCQUN0Qyw4REFBQ3dCO2dCQUFLRixXQUFXdEIscUVBQW9CO2dCQUFFeUIsVUFBVVI7O2tDQUMvQyw4REFBQ0k7d0JBQUlDLFdBQVd0QixxRUFBb0I7a0NBQ2xDLDRFQUFDMEI7NEJBQ0NKLFdBQVd0Qiw4RUFBMEI7NEJBQ3JDYSxNQUFLOzRCQUNMYyxJQUFHOzRCQUNIdEIsTUFBSzs0QkFDTHVCLGFBQVk7NEJBQ1poQixPQUFPVCxTQUFTRSxJQUFJOzRCQUNwQndCLFVBQVVuQjs0QkFDVm9CLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDVDt3QkFBSUMsV0FBV3RCLHNFQUFxQjtrQ0FDbkMsNEVBQUMwQjs0QkFDQ0osV0FBV3RCLCtFQUEyQjs0QkFDdENhLE1BQUs7NEJBQ0xjLElBQUc7NEJBQ0h0QixNQUFLOzRCQUNMdUIsYUFBWTs0QkFDWmhCLE9BQU9ULFNBQVNHLEtBQUs7NEJBQ3JCdUIsVUFBVW5COzRCQUNWb0IsUUFBUTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNUO3dCQUFJQyxXQUFXdEIsc0VBQXFCO2tDQUNuQyw0RUFBQzBCOzRCQUNDSixXQUFXdEIsK0VBQTJCOzRCQUN0Q2EsTUFBSzs0QkFDTGMsSUFBRzs0QkFDSHRCLE1BQUs7NEJBQ0x1QixhQUFZOzRCQUNaaEIsT0FBT1QsU0FBU0ksS0FBSzs0QkFDckJzQixVQUFVbkI7NEJBQ1ZvQixRQUFROzs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1Q7d0JBQUlDLFdBQVd0QiwrRUFBMkI7d0JBQUUrQixTQUFRO2tDQUFROzs7Ozs7a0NBRzdELDhEQUFDVjt3QkFBSUMsV0FBV3RCLHlFQUF3Qjs7MENBQ3RDLDhEQUFDZ0M7Z0NBQUVWLFdBQVd0QixrRkFBOEI7MENBQUU7Ozs7OzswQ0FDOUMsOERBQUNxQjtnQ0FBSUMsV0FBV3RCLHlFQUF3Qjs7a0RBQ3RDLDhEQUFDMEI7d0NBQ0NKLFdBQVd0QixrRkFBOEI7d0NBQ3pDMkIsSUFBRzt3Q0FDSGQsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTE8sT0FBTTt3Q0FDTmlCLFVBQVVuQjt3Q0FDVnVCLFNBQVM5QixTQUFTSyxJQUFJLEtBQUs7Ozs7OztrREFFN0IsOERBQUMwQjt3Q0FDQ1osV0FBV3RCLGtGQUE4Qjt3Q0FDekNtQyxLQUFJO2tEQUNMOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNkO2dDQUFJQyxXQUFXdEIsd0VBQXVCOztrREFDckMsOERBQUMwQjt3Q0FDQ0osV0FBV3RCLGlGQUE2Qjt3Q0FDeEMyQixJQUFHO3dDQUNIZCxNQUFLO3dDQUNMUixNQUFLO3dDQUNMTyxPQUFNO3dDQUNOaUIsVUFBVW5CO3dDQUNWdUIsU0FBUzlCLFNBQVNLLElBQUksS0FBSzs7Ozs7O2tEQUU3Qiw4REFBQzBCO3dDQUNDWixXQUFXdEIsaUZBQTZCO3dDQUN4Q21DLEtBQUk7a0RBQ0w7Ozs7Ozs7Ozs7OzswQ0FJSCw4REFBQ2Q7Z0NBQUlDLFdBQVd0Qix5RUFBd0I7O2tEQUN0Qyw4REFBQzBCO3dDQUNDSixXQUFXdEIsa0ZBQThCO3dDQUN6QzJCLElBQUc7d0NBQ0hkLE1BQUs7d0NBQ0xSLE1BQUs7d0NBQ0xPLE9BQU07d0NBQ05pQixVQUFVbkI7d0NBQ1Z1QixTQUFTOUIsU0FBU0ssSUFBSSxLQUFLOzs7Ozs7a0RBRTdCLDhEQUFDMEI7d0NBQ0NaLFdBQVd0QixrRkFBOEI7d0NBQ3pDbUMsS0FBSTtrREFDTDs7Ozs7Ozs7Ozs7OzBDQUlILDhEQUFDZDtnQ0FBSUMsV0FBV3RCLG1FQUFrQjs7a0RBQ2hDLDhEQUFDMEI7d0NBQ0NKLFdBQVd0Qiw0RUFBd0I7d0NBQ25DMkIsSUFBRzt3Q0FDSGQsTUFBSzt3Q0FDTFIsTUFBSzt3Q0FDTE8sT0FBTTt3Q0FDTmlCLFVBQVVuQjt3Q0FDVnVCLFNBQVM5QixTQUFTSyxJQUFJLEtBQUs7Ozs7OztrREFFN0IsOERBQUMwQjt3Q0FBTVosV0FBV3RCLDRFQUF3Qjt3Q0FBRW1DLEtBQUk7a0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3JFLDhEQUFDZDt3QkFBSUMsV0FBV3RCLHVFQUFzQjs7MENBQ3BDLDhEQUFDMEI7Z0NBQ0NKLFdBQVd0QixnRkFBNEI7Z0NBQ3ZDYSxNQUFLO2dDQUNMYyxJQUFHO2dDQUNIdEIsTUFBSztnQ0FDTHdCLFVBQVVuQjtnQ0FDVjBCLFFBQU87Ozs7OzswQ0FFVCw4REFBQ0Y7Z0NBQ0NaLFdBQVd0QixnRkFBNEI7Z0NBQ3ZDK0IsU0FBUTtnQ0FDUkksS0FBSTswQ0FDTDs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDRTt3QkFBT3hCLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQTFKZ0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvcG9zdC9wb3N0LmpzeD82ODNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9zdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3QoKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgcm9sZTogXCJcIixcbiAgICBwaG90bzogbnVsbCxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdHlwZSA9PT0gXCJmaWxlXCIgPyBlLnRhcmdldC5maWxlc1swXSA6IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gZGF0YSBzdWJtaXR0ZWQ6XCIsIGZvcm1EYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1gXX0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3RpdGxlYF19Pldvcmtpbmcgd2l0aCBQT1NUIHJlcXVlc3Q8L2gyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JvZHlgXX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX25hbWVgXX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fbmFtZS1pbnB1dGBdfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2VtYWlsYF19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2VtYWlsLWlucHV0YF19XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcGhvbmVgXX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcGhvbmUtaW5wdXRgXX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcGhvbmUtdmFsaWRgXX0gaHRtbEZvcj1cInBob25lXCI+XG4gICAgICAgICAgKzM4IChYWFgpIFhYWCAtIFhYIC0gWFhcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3Bvc2l0aW9uYF19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19wb3NpdGlvbi10aXRsZWBdfT5TZWxlY3QgeW91ciBwb3NpdGlvbjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19mcm9udGVuZGBdfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZnJvbnRlbmQtaW5wdXRgXX1cbiAgICAgICAgICAgICAgaWQ9XCJmb3JtX19mcm9udGVuZC1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJmcm9udGVuZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnJvbGUgPT09IFwiZnJvbnRlbmRcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2Zyb250ZW5kLWxhYmVsYF19XG4gICAgICAgICAgICAgIGZvcj1cImZvcm1fX2Zyb250ZW5kLWlucHV0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRnJvbnRlbmQgZGV2ZWxvcGVyXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JhY2tlbmRgXX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JhY2tlbmQtaW5wdXRgXX1cbiAgICAgICAgICAgICAgaWQ9XCJmb3JtX19iYWNrZW5kLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgbmFtZT1cInJvbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImJhY2tlbmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS5yb2xlID09PSBcImJhY2tlbmRcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2JhY2tlbmQtbGFiZWxgXX1cbiAgICAgICAgICAgICAgZm9yPVwiZm9ybV9fYmFja2VuZC1pbnB1dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJhY2tlbmQgZGV2ZWxvcGVyXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX2Rlc2lnbmVyYF19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19kZXNpZ25lci1pbnB1dGBdfVxuICAgICAgICAgICAgICBpZD1cImZvcm1fX2Rlc2lnbmVyLWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgbmFtZT1cInJvbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImRlc2lnbmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEucm9sZSA9PT0gXCJkZXNpZ25lclwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fZGVzaWduZXItbGFiZWxgXX1cbiAgICAgICAgICAgICAgZm9yPVwiZm9ybV9fZGVzaWduZXItaW5wdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZXNpZ25lclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2Bmb3JtX19xYWBdfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fcWEtaW5wdXRgXX1cbiAgICAgICAgICAgICAgaWQ9XCJmb3JtX19xYS1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJxYVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnJvbGUgPT09IFwicWFcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3FhLWxhYmVsYF19IGZvcj1cImZvcm1fX3FhLWlucHV0XCI+XG4gICAgICAgICAgICAgIFFBXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fdXBsb2FkYF19PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGZvcm1fX3VwbG9hZC1pbnB1dGBdfVxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgaWQ9XCJwaG90b1wiXG4gICAgICAgICAgICBuYW1lPVwicGhvdG9cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgZm9ybV9fdXBsb2FkLWxhYmVsYF19XG4gICAgICAgICAgICBodG1sRm9yPVwicGhvdG9cIlxuICAgICAgICAgICAgZm9yPVwicGhvdG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJQb3N0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwicm9sZSIsInBob3RvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInByZXZEYXRhIiwiZmlsZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJodG1sRm9yIiwicCIsImNoZWNrZWQiLCJsYWJlbCIsImZvciIsImFjY2VwdCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/post/post.jsx\n"));

/***/ })

});