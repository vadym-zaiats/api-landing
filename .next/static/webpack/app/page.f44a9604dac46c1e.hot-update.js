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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMaxResult: function() { return /* binding */ setMaxResult; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        maxRes: 0,\n        isLoading: false\n    },\n    reducers: {\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.peoples = action.payload;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n        builder.addCase(setMaxResult.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setMaxResult.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.maxRes = action.payload;\n        });\n        builder.addCase(setMaxResult.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data.users;\n});\nconst setMaxResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"peoples/setMaxResult\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100\").then((res)=>res.json());\n    return data.users.length;\n});\n// export const postCard = createAsyncThunk(\n//   \"peoples/postCard\",\n//   async ({data}, { dispatch, rejectWithValue }) => {\n//     try {\n//       await\n//     } catch (error) {\n//       console.log(error);\n//     }\n//     // const data = await fetch(\n//     //   `https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100`\n//     // ).then((res) => res.json());\n//     // return data.users.length;\n//   }\n// );\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlFO0FBRWpFLE1BQU1FLGNBQWNGLDZEQUFXQSxDQUFDO0lBQzlCRyxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsU0FBUyxFQUFFO1FBQ1hDLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFVBQVU7SUFJVjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNUCxTQUFTLEdBQUc7UUFDcEI7UUFDQUcsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1QLFNBQVMsR0FBRztZQUNsQk8sTUFBTVQsT0FBTyxHQUFHVyxPQUFPQyxPQUFPO1FBQ2hDO1FBQ0FQLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV00sUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQzNDRixNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1LLEtBQUssR0FBR0gsT0FBT0csS0FBSztRQUM1QjtRQUNBVCxRQUFRQyxPQUFPLENBQUNTLGFBQWFQLE9BQU8sRUFBRSxDQUFDQztZQUNyQ0EsTUFBTVAsU0FBUyxHQUFHO1FBQ3BCO1FBQ0FHLFFBQVFDLE9BQU8sQ0FBQ1MsYUFBYUwsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzlDRixNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1SLE1BQU0sR0FBR1UsT0FBT0MsT0FBTztRQUMvQjtRQUNBUCxRQUFRQyxPQUFPLENBQUNTLGFBQWFGLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUM3Q0YsTUFBTVAsU0FBUyxHQUFHO1lBQ2xCTyxNQUFNSyxLQUFLLEdBQUdILE9BQU9HLEtBQUs7UUFDNUI7SUFDRjtBQUNGO0FBQ08sTUFBTVAsYUFBYVgsa0VBQWdCQSxDQUN4QyxzQkFDQTtRQUFPLEVBQUVvQixJQUFJLEVBQUUsVUFBRSxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM1QyxNQUFNQyxPQUFPLE1BQU1DLE1BQ2pCLHFFQUEwRSxPQUFMSixNQUFLLGFBQzFFSyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUN4QixPQUFPSixLQUFLSyxLQUFLO0FBQ25CLEdBQ0E7QUFDSyxNQUFNVCxlQUFlbkIsa0VBQWdCQSxDQUMxQyx3QkFDQSxPQUFPNkI7UUFBRyxFQUFFUixRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUNyQyxNQUFNQyxPQUFPLE1BQU1DLE1BQ2hCLDBFQUNEQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUN4QixPQUFPSixLQUFLSyxLQUFLLENBQUNFLE1BQU07QUFDMUIsR0FDQTtBQUVGLDRDQUE0QztBQUM1Qyx3QkFBd0I7QUFDeEIsdURBQXVEO0FBQ3ZELFlBQVk7QUFDWixjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsbUNBQW1DO0FBQ25DLG9GQUFvRjtBQUNwRixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLE1BQU07QUFDTixLQUFLO0FBRUwsK0RBQWU3QixZQUFZOEIsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRSxHQUFHOUIsWUFBWStCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwZW9wbGVzXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZXM6IFtdLFxuICAgIG1heFJlczogMCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIC8vIHNldFBlb3BsZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5wZW9wbGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgLy8gfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wZW9wbGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRNYXhSZXN1bHQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRNYXhSZXN1bHQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5tYXhSZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0TWF4UmVzdWx0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvc2V0UGVvcGxlc1wiLFxuICBhc3luYyAoeyBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9NmBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGEudXNlcnM7XG4gIH1cbik7XG5leHBvcnQgY29uc3Qgc2V0TWF4UmVzdWx0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGVzL3NldE1heFJlc3VsdFwiLFxuICBhc3luYyAoXywgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP2NvdW50PTEwMGBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGEudXNlcnMubGVuZ3RoO1xuICB9XG4pO1xuXG4vLyBleHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuLy8gICBcInBlb3BsZXMvcG9zdENhcmRcIixcbi8vICAgYXN5bmMgKHtkYXRhfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgYXdhaXRcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgLy8gICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP2NvdW50PTEwMGBcbi8vICAgICAvLyApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgICAgLy8gcmV0dXJuIGRhdGEudXNlcnMubGVuZ3RoO1xuLy8gICB9XG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBwZW9wbGVTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHt9ID0gcGVvcGxlU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGVzIiwibWF4UmVzIiwiaXNMb2FkaW5nIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGVzIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwiZXJyb3IiLCJzZXRNYXhSZXN1bHQiLCJwYWdlIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZXJzIiwiXyIsImxlbmd0aCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});