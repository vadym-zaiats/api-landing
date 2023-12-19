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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPage: function() { return /* binding */ setPage; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        page: 1,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            state.count = action.payload === undefined ? state.count + 6 : action.payload;\n        },\n        setPage: (state, action)=>{\n            state.page = action.payload === undefined ? state.page + 1 : action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { count } = param, { dispatch, rejectWithValue } = param1;\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=\".concat(count));\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n        // await fetch(\n        //   \"https://frontend-test-assignment-api.abz.agency/api/v1/users\",\n        //   {\n        //     method: \"POST\",\n        //     headers: { \"Content-Type\": \"multipart/form-data\", Token: token },\n        //     body: formData,\n        //   }\n        // )\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       return res.json();\n        //     } else {\n        //       console.error(\"Something went wrong\");\n        //     }\n        //   })\n        //   .then((data) => {\n        //     console.log(data);\n        //     if (data.success) {\n        //       console.log(data);\n        //     } else {\n        //       console.log(\"proccess server errors\");\n        //     }\n        //   })\n        //   .catch((error) => {\n        //     console.error(error);\n        //   });\n        dispatch(setCount(6));\n        dispatch(setPage(1));\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount, setPage } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBQ3pCO0FBRXhDLE1BQU1HLGNBQWNILDZEQUFXQSxDQUFDO0lBQzlCSSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsUUFBUSxFQUFFO1FBQ1ZDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCRCxNQUFNTixLQUFLLEdBQ1RPLE9BQU9DLE9BQU8sS0FBS0MsWUFBWUgsTUFBTU4sS0FBSyxHQUFHLElBQUlPLE9BQU9DLE9BQU87UUFDbkU7UUFDQUUsU0FBUyxDQUFDSixPQUFPQztZQUNmRCxNQUFNTCxJQUFJLEdBQ1JNLE9BQU9DLE9BQU8sS0FBS0MsWUFBWUgsTUFBTUwsSUFBSSxHQUFHLElBQUlNLE9BQU9DLE9BQU87UUFDbEU7SUFDRjtJQUNBRyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUMsT0FBTyxFQUFFLENBQUNUO1lBQ2xDQSxNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVMsUUFBUUMsT0FBTyxDQUFDQyxVQUFVRSxTQUFTLEVBQUUsQ0FBQ1YsT0FBT0M7WUFDM0NELE1BQU1QLE1BQU0sR0FBR1EsT0FBT0MsT0FBTyxDQUFDUyxLQUFLO1lBQ25DWCxNQUFNSixVQUFVLEdBQUdLLE9BQU9DLE9BQU8sQ0FBQ1UsV0FBVztZQUM3Q1osTUFBTUgsYUFBYSxHQUFHO1FBQ3hCO1FBQ0FTLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUssUUFBUSxFQUFFLENBQUNiLE9BQU9DO1lBQzFDRCxNQUFNSCxhQUFhLEdBQUc7WUFDdEJHLE1BQU1jLEtBQUssR0FBR2IsT0FBT2EsS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNTixZQUFZcEIsa0VBQWdCQSxDQUN2QyxvQkFDQTtRQUFPLEVBQUVNLEtBQUssRUFBRSxVQUFFLEVBQUVxQixRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixzRUFBNEUsT0FBTnhCO1FBRXhFLElBQUksQ0FBQ3VCLElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQixPQUFPRDtJQUNULEVBQUUsT0FBT1AsT0FBTztRQUNkLE9BQU9FLGdCQUFnQkYsTUFBTVMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFDSyxNQUFNQyxXQUFXcEMsa0VBQWdCQSxDQUN0QyxtQkFDQSxPQUFPcUM7UUFBVSxFQUFFVixRQUFRLEVBQUVDLGVBQWUsRUFBRVUsUUFBUSxFQUFFO0lBQ3RELDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsSUFBSTtRQUNGLE1BQU1YLFNBQVMxQixxREFBUUE7UUFDdkJzQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osZUFBZTtRQUNmLG9FQUFvRTtRQUNwRSxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLHdFQUF3RTtRQUN4RSxzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLElBQUk7UUFDSixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsK0NBQStDO1FBQy9DLFFBQVE7UUFDUixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZiwrQ0FBK0M7UUFDL0MsUUFBUTtRQUNSLE9BQU87UUFDUCx3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUlYsU0FBU2hCLFNBQVM7UUFDbEJnQixTQUFTWCxRQUFRO0lBQ25CLEVBQUUsT0FBT1UsT0FBTztRQUNkLE9BQU9FLGdCQUFnQkYsTUFBTVMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFFRiwrREFBZWpDLFlBQVl1QyxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUFFOUIsUUFBUSxFQUFFSyxPQUFPLEVBQUUsR0FBR2QsWUFBWXdDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tIFwiLi90b2tlblNsaWNlXCI7XG5cbmNvbnN0IHBlb3BsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInBlb3BsZVwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGU6IFtdLFxuICAgIGNvdW50OiA2LFxuICAgIHBhZ2U6IDEsXG4gICAgdG90YWxVc2VyczogMCxcbiAgICBkYXRhSXNMb2FkaW5nOiB0cnVlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldENvdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY291bnQgPVxuICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PT0gdW5kZWZpbmVkID8gc3RhdGUuY291bnQgKyA2IDogYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRQYWdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGFnZSA9XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkID09PSB1bmRlZmluZWQgPyBzdGF0ZS5wYWdlICsgMSA6IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlID0gYWN0aW9uLnBheWxvYWQudXNlcnM7XG4gICAgICBzdGF0ZS50b3RhbFVzZXJzID0gYWN0aW9uLnBheWxvYWQudG90YWxfdXNlcnM7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvc2V0UGVvcGxlXCIsXG4gIGFzeW5jICh7IGNvdW50IH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP2NvdW50PSR7Y291bnR9YFxuICAgICAgKTtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcnZlciBlcnJvclwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWFzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHBvc3RDYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvcG9zdENhcmRcIixcbiAgYXN5bmMgKGZvcm1EYXRhLCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICAvLyBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBzdGF0ZS50b2tlblNsaWNlLnRva2VuO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaChzZXRUb2tlbigpKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgIC8vIGF3YWl0IGZldGNoKFxuICAgICAgLy8gICBcImh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc1wiLFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBUb2tlbjogdG9rZW4gfSxcbiAgICAgIC8vICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgaWYgKHJlcy5vaykge1xuICAgICAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicHJvY2Nlc3Mgc2VydmVyIGVycm9yc1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICBkaXNwYXRjaChzZXRDb3VudCg2KSk7XG4gICAgICBkaXNwYXRjaChzZXRQYWdlKDEpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBzZXRDb3VudCwgc2V0UGFnZSB9ID0gcGVvcGxlU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzZXRUb2tlbiIsInBlb3BsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInBlb3BsZSIsImNvdW50IiwicGFnZSIsInRvdGFsVXNlcnMiLCJkYXRhSXNMb2FkaW5nIiwicmVkdWNlcnMiLCJzZXRDb3VudCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsInNldFBhZ2UiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGUiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibWFzc2FnZSIsInBvc3RDYXJkIiwiZm9ybURhdGEiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});