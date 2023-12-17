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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setToken: function() { return /* binding */ setToken; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst tokenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"token\",\n    initialState: {\n        token: null,\n        success: false,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setToken.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setToken.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.token = action.payload.token;\n            state.success = action.payload.success;\n        });\n        builder.addCase(setToken.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.payload;\n        });\n    }\n});\nconst setToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"token/setToken\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/token\");\n        if (!response.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (tokenSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvdG9rZW5TbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRTtBQUVqRSxNQUFNRSxhQUFhRiw2REFBV0EsQ0FBQztJQUM3QkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNDLFNBQVNDLE9BQU8sRUFBRSxDQUFDQztZQUNqQ0EsTUFBTU4sU0FBUyxHQUFHO1FBQ3BCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsU0FBU0csU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzFDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1SLEtBQUssR0FBR1UsT0FBT0MsT0FBTyxDQUFDWCxLQUFLO1lBQ2xDUSxNQUFNUCxPQUFPLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsT0FBTztRQUN4QztRQUNBRyxRQUFRQyxPQUFPLENBQUNDLFNBQVNNLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUN6Q0YsTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNSyxLQUFLLEdBQUdILE9BQU9DLE9BQU87UUFDOUI7SUFDRjtBQUNGO0FBRU8sTUFBTUwsV0FBV1Ysa0VBQWdCQSxDQUN0QyxrQkFDQSxPQUFPa0I7UUFBRyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUNmO1FBRUgsSUFBSSxDQUFDQyxTQUFTQyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO1FBQzNCLE9BQU9EO0lBQ1QsRUFBRSxPQUFPVCxPQUFPO1FBQ2QsT0FBT0csZ0JBQWdCSCxNQUFNVyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVGLCtEQUFlM0IsV0FBVzRCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Rva2VuU2xpY2UuanM/NjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IHRva2VuU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwidG9rZW5cIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgdG9rZW46IG51bGwsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0VG9rZW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRUb2tlbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XG4gICAgICBzdGF0ZS5zdWNjZXNzID0gYWN0aW9uLnBheWxvYWQuc3VjY2VzcztcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0VG9rZW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJ0b2tlbi9zZXRUb2tlblwiLFxuICBhc3luYyAoXywgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdG9rZW5gXG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgZXJyb3JcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5TbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInRva2VuU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic2V0VG9rZW4iLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJlcnJvciIsIl8iLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsInJlcyIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXNzYWdlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/tokenSlice.js\n"));

/***/ })

});