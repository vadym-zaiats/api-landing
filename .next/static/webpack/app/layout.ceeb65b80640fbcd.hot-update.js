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

/***/ "(app-pages-browser)/./src/redux/slices/peopleSlice.js":
/*!*****************************************!*\
  !*** ./src/redux/slices/peopleSlice.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMaxResult: function() { return /* binding */ setMaxResult; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        maxRes: 0,\n        isLoading: false\n    },\n    reducers: {\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.peoples = action.payload;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { count, page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=\").concat(count)).then((res)=>res.json());\n    return data.users;\n});\nconst setMaxResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setPeoples\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100\").then((res)=>res.json());\n    return data.users;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRWpFLE1BQU1FLGNBQWNGLDZEQUFXQSxDQUFDO0lBQzlCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsU0FBUyxFQUFFO1FBQ1hDLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7SUFJVjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNUCxTQUFTLEdBQUc7UUFDcEI7UUFDQUcsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1QLFNBQVMsR0FBRztZQUNsQk8sTUFBTVQsT0FBTyxHQUFHVyxPQUFPQyxPQUFPO1FBQ2hDO1FBQ0FQLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV00sUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQzNDRixNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1LLEtBQUssR0FBR0gsT0FBT0csS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNUCxhQUFhWCxrRUFBZ0JBLENBQ3hDLHNCQUNBO1FBQU8sRUFBRW1CLEtBQUssRUFBRUMsSUFBSSxFQUFFLFVBQUUsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDbkQsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQixxRUFBbUZMLE9BQWRDLE1BQUssV0FBZSxPQUFORCxRQUNuRk0sSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0osS0FBS0ssS0FBSztBQUNuQixHQUNBO0FBQ0ssTUFBTUMsZUFBZTdCLGtFQUFnQkEsQ0FDMUMsc0JBQ0EsT0FBTzhCO1FBQUcsRUFBRVQsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDckMsTUFBTUMsT0FBTyxNQUFNQyxNQUNoQiwwRUFDREMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0osS0FBS0ssS0FBSztBQUNuQixHQUNBO0FBQ0YsK0RBQWUzQixZQUFZOEIsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRSxHQUFHOUIsWUFBWStCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwZW9wbGVzXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZXM6IFtdLFxuICAgIG1heFJlczogMCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIC8vIHNldFBlb3BsZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5wZW9wbGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgLy8gfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wZW9wbGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlcy9zZXRQZW9wbGVzXCIsXG4gIGFzeW5jICh7IGNvdW50LCBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9JHtjb3VudH1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhLnVzZXJzO1xuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHNldE1heFJlc3VsdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlcy9zZXRQZW9wbGVzXCIsXG4gIGFzeW5jIChfLCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnM/Y291bnQ9MTAwYFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICByZXR1cm4gZGF0YS51c2VycztcbiAgfVxuKTtcbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3Qge30gPSBwZW9wbGVTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInBlb3BsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInBlb3BsZXMiLCJtYXhSZXMiLCJpc0xvYWRpbmciLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZXMiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJlcnJvciIsImNvdW50IiwicGFnZSIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VycyIsInNldE1heFJlc3VsdCIsIl8iLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});