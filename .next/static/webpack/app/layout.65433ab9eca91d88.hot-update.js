"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/slices/tokenSlice.js":
/*!****************************************!*\
  !*** ./src/redux/slices/tokenSlice.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setToken: function() { return /* binding */ setToken; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst tokenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"token\",\n    initialState: {\n        token: null,\n        success: false,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setToken.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setToken.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.token = action.payload.token;\n            state.success = action.payload.success;\n        });\n        builder.addCase(setToken.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"token/setToken\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n// const data = await fetch(\n//   `https://frontend-test-assignment-api.abz.agency/api/v1/token`\n// ).then((res) => res.json());\n// return data;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (tokenSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvdG9rZW5TbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRTtBQUVqRSxNQUFNRSxhQUFhRiw2REFBV0EsQ0FBQztJQUM3QkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNDLFNBQVNDLE9BQU8sRUFBRSxDQUFDQztZQUNqQ0EsTUFBTU4sU0FBUyxHQUFHO1FBQ3BCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsU0FBU0csU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzFDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1SLEtBQUssR0FBR1UsT0FBT0MsT0FBTyxDQUFDWCxLQUFLO1lBQ2xDUSxNQUFNUCxPQUFPLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsT0FBTztRQUN4QztRQUNBRyxRQUFRQyxPQUFPLENBQUNDLFNBQVNNLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUN6Q0YsTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNSyxLQUFLLEdBQUdILE9BQU9HLEtBQUs7UUFDNUI7SUFDRjtBQUNGO0FBRU8sTUFBTVAsV0FBV1Ysa0VBQWdCQSxDQUN0QyxrQkFDQSxPQUFPa0I7UUFBRyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtBQUNyQyw0QkFBNEI7QUFDNUIsbUVBQW1FO0FBQ25FLCtCQUErQjtBQUMvQixlQUFlO0FBQ2pCLEdBQ0E7QUFFRiwrREFBZW5CLFdBQVdvQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy90b2tlblNsaWNlLmpzPzYwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCB0b2tlblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInRva2VuXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHRva2VuOiBudWxsLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFRva2VuLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0VG9rZW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgICAgc3RhdGUuc3VjY2VzcyA9IGFjdGlvbi5wYXlsb2FkLnN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFRva2VuLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInRva2VuL3NldFRva2VuXCIsXG4gIGFzeW5jIChfLCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAvLyAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdG9rZW5gXG4gICAgLy8gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIC8vIHJldHVybiBkYXRhO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2tlblNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwidG9rZW5TbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ0b2tlbiIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRUb2tlbiIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImVycm9yIiwiXyIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/tokenSlice.js\n"));

/***/ })

});