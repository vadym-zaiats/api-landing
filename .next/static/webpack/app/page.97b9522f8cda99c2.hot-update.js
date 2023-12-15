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

/***/ "(app-pages-browser)/./src/redux/slices/peopleSlice.js":
/*!*****************************************!*\
  !*** ./src/redux/slices/peopleSlice.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMaxResult: function() { return /* binding */ setMaxResult; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        maxRes: 0,\n        isLoading: false\n    },\n    reducers: {\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.peoples = action.payload;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.maxRes = action.payload;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { count, page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=\").concat(count)).then((res)=>res.json());\n    return data.users;\n});\nconst setMaxResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setPeoples\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100\").then((res)=>res.json());\n    return data.users;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRWpFLE1BQU1FLGNBQWNGLDZEQUFXQSxDQUFDO0lBQzlCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsU0FBUyxFQUFFO1FBQ1hDLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7SUFJVjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNUCxTQUFTLEdBQUc7UUFDcEI7UUFDQUcsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1QLFNBQVMsR0FBRztZQUNsQk8sTUFBTVQsT0FBTyxHQUFHVyxPQUFPQyxPQUFPO1FBQ2hDO1FBQ0FQLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV00sUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQzNDRixNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1LLEtBQUssR0FBR0gsT0FBT0csS0FBSztRQUM1QjtRQUNBVCxRQUFRQyxPQUFPLENBQUNDLFdBQVdDLE9BQU8sRUFBRSxDQUFDQztZQUNuQ0EsTUFBTVAsU0FBUyxHQUFHO1FBQ3BCO1FBQ0FHLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0csU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzVDRixNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1SLE1BQU0sR0FBR1UsT0FBT0MsT0FBTztRQUMvQjtRQUNBUCxRQUFRQyxPQUFPLENBQUNDLFdBQVdNLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUMzQ0YsTUFBTVAsU0FBUyxHQUFHO1lBQ2xCTyxNQUFNSyxLQUFLLEdBQUdILE9BQU9HLEtBQUs7UUFDNUI7SUFDRjtBQUNGO0FBQ08sTUFBTVAsYUFBYVgsa0VBQWdCQSxDQUN4QyxzQkFDQTtRQUFPLEVBQUVtQixLQUFLLEVBQUVDLElBQUksRUFBRSxVQUFFLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQ25ELE1BQU1DLE9BQU8sTUFBTUMsTUFDakIscUVBQW1GTCxPQUFkQyxNQUFLLFdBQWUsT0FBTkQsUUFDbkZNLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQ3hCLE9BQU9KLEtBQUtLLEtBQUs7QUFDbkIsR0FDQTtBQUNLLE1BQU1DLGVBQWU3QixrRUFBZ0JBLENBQzFDLHNCQUNBLE9BQU84QjtRQUFHLEVBQUVULFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQ3JDLE1BQU1DLE9BQU8sTUFBTUMsTUFDaEIsMEVBQ0RDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQ3hCLE9BQU9KLEtBQUtLLEtBQUs7QUFDbkIsR0FDQTtBQUNGLCtEQUFlM0IsWUFBWThCLE9BQU8sRUFBQztBQUM1QixNQUFNLEVBQUUsR0FBRzlCLFlBQVkrQixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9wZW9wbGVTbGljZS5qcz9mNmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgcGVvcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlc1wiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGVzOiBbXSxcbiAgICBtYXhSZXM6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvLyBzZXRQZW9wbGVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIC8vICAgc3RhdGUucGVvcGxlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIC8vIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUucGVvcGxlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGVzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5tYXhSZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgfSk7XG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzZXRQZW9wbGVzID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGVzL3NldFBlb3BsZXNcIixcbiAgYXN5bmMgKHsgY291bnQsIHBhZ2UgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP3BhZ2U9JHtwYWdlfSZjb3VudD0ke2NvdW50fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGEudXNlcnM7XG4gIH1cbik7XG5leHBvcnQgY29uc3Qgc2V0TWF4UmVzdWx0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGVzL3NldFBlb3BsZXNcIixcbiAgYXN5bmMgKF8sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9jb3VudD0xMDBgXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhLnVzZXJzO1xuICB9XG4pO1xuZXhwb3J0IGRlZmF1bHQgcGVvcGxlU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7fSA9IHBlb3BsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwicGVvcGxlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicGVvcGxlcyIsIm1heFJlcyIsImlzTG9hZGluZyIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic2V0UGVvcGxlcyIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImVycm9yIiwiY291bnQiLCJwYWdlIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZXJzIiwic2V0TWF4UmVzdWx0IiwiXyIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});