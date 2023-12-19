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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            state.count = action.payload === undefined ? state.count + 6 : action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { count } = param, { dispatch, rejectWithValue } = param1;\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=\".concat(count));\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (param, param1)=>{\n    let { validFormData, token } = param, { dispatch, rejectWithValue, getState } = param1;\n    console.log(validFormData, token);\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n            method: \"POST\",\n            headers: {\n                Token: token\n            },\n            body: validFormData\n        });\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        dispatch(setCount(6));\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUU7QUFDekI7QUFFeEMsTUFBTUcsY0FBY0gsNkRBQVdBLENBQUM7SUFDOUJJLE1BQU07SUFDTkMsY0FBYztRQUNaQyxRQUFRLEVBQUU7UUFDVkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCRCxNQUFNTCxLQUFLLEdBQ1RNLE9BQU9DLE9BQU8sS0FBS0MsWUFBWUgsTUFBTUwsS0FBSyxHQUFHLElBQUlNLE9BQU9DLE9BQU87UUFDbkU7SUFDRjtJQUNBRSxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUMsT0FBTyxFQUFFLENBQUNSO1lBQ2xDQSxNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVRSxTQUFTLEVBQUUsQ0FBQ1QsT0FBT0M7WUFDM0NELE1BQU1OLE1BQU0sR0FBR08sT0FBT0MsT0FBTyxDQUFDUSxLQUFLO1lBQ25DVixNQUFNSixVQUFVLEdBQUdLLE9BQU9DLE9BQU8sQ0FBQ1MsV0FBVztZQUM3Q1gsTUFBTUgsYUFBYSxHQUFHO1FBQ3hCO1FBQ0FRLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUssUUFBUSxFQUFFLENBQUNaLE9BQU9DO1lBQzFDRCxNQUFNSCxhQUFhLEdBQUc7WUFDdEJHLE1BQU1hLEtBQUssR0FBR1osT0FBT1ksS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNTixZQUFZbEIsa0VBQWdCQSxDQUN2QyxvQkFDQTtRQUFPLEVBQUVNLEtBQUssRUFBRSxVQUFFLEVBQUVtQixRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixzRUFBNEUsT0FBTnRCO1FBRXhFLElBQUksQ0FBQ3FCLElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQixPQUFPRDtJQUNULEVBQUUsT0FBT1AsT0FBTztRQUNkLE9BQU9FLGdCQUFnQkYsTUFBTVMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFDSyxNQUFNQyxXQUFXbEMsa0VBQWdCQSxDQUN0QyxtQkFDQTtRQUFPLEVBQUVtQyxhQUFhLEVBQUVDLEtBQUssRUFBRSxVQUFFLEVBQUVYLFFBQVEsRUFBRUMsZUFBZSxFQUFFVyxRQUFRLEVBQUU7SUFDdEVDLFFBQVFDLEdBQUcsQ0FBQ0osZUFBZUM7SUFDM0IsSUFBSTtRQUNGLE1BQU1ULE1BQU0sTUFBTUMsTUFDaEIsZ0VBQ0E7WUFDRVksUUFBUTtZQUNSQyxTQUFTO2dCQUFFQyxPQUFPTjtZQUFNO1lBQ3hCTyxNQUFNUjtRQUNSO1FBRUYsSUFBSSxDQUFDUixJQUFJRSxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxPQUFPLE1BQU1KLElBQUlLLElBQUk7UUFDM0JQLFNBQVNmLFNBQVM7UUFDbEIsT0FBT3FCO0lBQ1QsRUFBRSxPQUFPUCxPQUFPO1FBQ2QsT0FBT0UsZ0JBQWdCRixNQUFNUyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVGLCtEQUFlL0IsWUFBWTBDLE9BQU8sRUFBQztBQUM1QixNQUFNLEVBQUVsQyxRQUFRLEVBQUUsR0FBR1IsWUFBWTJDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tIFwiLi90b2tlblNsaWNlXCI7XG5cbmNvbnN0IHBlb3BsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInBlb3BsZVwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGU6IFtdLFxuICAgIGNvdW50OiA2LFxuICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgZGF0YUlzTG9hZGluZzogdHJ1ZSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRDb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmNvdW50ID1cbiAgICAgICAgYWN0aW9uLnBheWxvYWQgPT09IHVuZGVmaW5lZCA/IHN0YXRlLmNvdW50ICsgNiA6IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlID0gYWN0aW9uLnBheWxvYWQudXNlcnM7XG4gICAgICBzdGF0ZS50b3RhbFVzZXJzID0gYWN0aW9uLnBheWxvYWQudG90YWxfdXNlcnM7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvc2V0UGVvcGxlXCIsXG4gIGFzeW5jICh7IGNvdW50IH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP2NvdW50PSR7Y291bnR9YFxuICAgICAgKTtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcnZlciBlcnJvclwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWFzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHBvc3RDYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvcG9zdENhcmRcIixcbiAgYXN5bmMgKHsgdmFsaWRGb3JtRGF0YSwgdG9rZW4gfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsaWRGb3JtRGF0YSwgdG9rZW4pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczogeyBUb2tlbjogdG9rZW4gfSxcbiAgICAgICAgICBib2R5OiB2YWxpZEZvcm1EYXRhLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIGVycm9yXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBkaXNwYXRjaChzZXRDb3VudCg2KSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBzZXRDb3VudCB9ID0gcGVvcGxlU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzZXRUb2tlbiIsInBlb3BsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInBlb3BsZSIsImNvdW50IiwidG90YWxVc2VycyIsImRhdGFJc0xvYWRpbmciLCJyZWR1Y2VycyIsInNldENvdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic2V0UGVvcGxlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInVzZXJzIiwidG90YWxfdXNlcnMiLCJyZWplY3RlZCIsImVycm9yIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1hc3NhZ2UiLCJwb3N0Q2FyZCIsInZhbGlkRm9ybURhdGEiLCJ0b2tlbiIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJUb2tlbiIsImJvZHkiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});