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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            state.count = action.payload === undefined ? state.count + 6 : action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { count } = param, { dispatch, rejectWithValue } = param1;\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=\".concat(count));\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (param, param1)=>{\n    let { formData, token } = param, { dispatch, rejectWithValue, getState } = param1;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        console.log(formData, token);\n        // await fetch(\n        //   \"https://frontend-test-assignment-api.abz.agency/api/v1/users\",\n        //   {\n        //     method: \"POST\",\n        //     headers: { \"Content-Type\": \"multipart/form-data\", Token: token },\n        //     body: formData,\n        //   }\n        // )\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       return res.json();\n        //     } else {\n        //       console.error(\"Something went wrong\");\n        //     }\n        //   })\n        //   .then((data) => {\n        //     console.log(data);\n        //     if (data.success) {\n        //       console.log(data);\n        //     } else {\n        //       console.log(\"proccess server errors\");\n        //     }\n        //   })\n        //   .catch((error) => {\n        //     console.error(error);\n        //   });\n        dispatch(setCount(6));\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUU7QUFDekI7QUFFeEMsTUFBTUcsY0FBY0gsNkRBQVdBLENBQUM7SUFDOUJJLE1BQU07SUFDTkMsY0FBYztRQUNaQyxRQUFRLEVBQUU7UUFDVkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCRCxNQUFNTCxLQUFLLEdBQ1RNLE9BQU9DLE9BQU8sS0FBS0MsWUFBWUgsTUFBTUwsS0FBSyxHQUFHLElBQUlNLE9BQU9DLE9BQU87UUFDbkU7SUFDRjtJQUNBRSxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUMsT0FBTyxFQUFFLENBQUNSO1lBQ2xDQSxNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVRSxTQUFTLEVBQUUsQ0FBQ1QsT0FBT0M7WUFDM0NELE1BQU1OLE1BQU0sR0FBR08sT0FBT0MsT0FBTyxDQUFDUSxLQUFLO1lBQ25DVixNQUFNSixVQUFVLEdBQUdLLE9BQU9DLE9BQU8sQ0FBQ1MsV0FBVztZQUM3Q1gsTUFBTUgsYUFBYSxHQUFHO1FBQ3hCO1FBQ0FRLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUssUUFBUSxFQUFFLENBQUNaLE9BQU9DO1lBQzFDRCxNQUFNSCxhQUFhLEdBQUc7WUFDdEJHLE1BQU1hLEtBQUssR0FBR1osT0FBT1ksS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNTixZQUFZbEIsa0VBQWdCQSxDQUN2QyxvQkFDQTtRQUFPLEVBQUVNLEtBQUssRUFBRSxVQUFFLEVBQUVtQixRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixzRUFBNEUsT0FBTnRCO1FBRXhFLElBQUksQ0FBQ3FCLElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQixPQUFPRDtJQUNULEVBQUUsT0FBT1AsT0FBTztRQUNkLE9BQU9FLGdCQUFnQkYsTUFBTVMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFDSyxNQUFNQyxXQUFXbEMsa0VBQWdCQSxDQUN0QyxtQkFDQTtRQUFPLEVBQUVtQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxVQUFFLEVBQUVYLFFBQVEsRUFBRUMsZUFBZSxFQUFFVyxRQUFRLEVBQUU7SUFDakUsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ0osVUFBVUM7UUFDdEIsZUFBZTtRQUNmLG9FQUFvRTtRQUNwRSxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLHdFQUF3RTtRQUN4RSxzQkFBc0I7UUFDdEIsTUFBTTtRQUNOLElBQUk7UUFDSixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsK0NBQStDO1FBQy9DLFFBQVE7UUFDUixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZiwrQ0FBK0M7UUFDL0MsUUFBUTtRQUNSLE9BQU87UUFDUCx3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUlgsU0FBU2YsU0FBUztJQUNwQixFQUFFLE9BQU9jLE9BQU87UUFDZCxPQUFPRSxnQkFBZ0JGLE1BQU1TLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWUvQixZQUFZc0MsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRTlCLFFBQVEsRUFBRSxHQUFHUixZQUFZdUMsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gXCIuL3Rva2VuU2xpY2VcIjtcblxuY29uc3QgcGVvcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZTogW10sXG4gICAgY291bnQ6IDYsXG4gICAgdG90YWxVc2VyczogMCxcbiAgICBkYXRhSXNMb2FkaW5nOiB0cnVlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldENvdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY291bnQgPVxuICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PT0gdW5kZWZpbmVkID8gc3RhdGUuY291bnQgKyA2IDogYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5wZW9wbGUgPSBhY3Rpb24ucGF5bG9hZC51c2VycztcbiAgICAgIHN0YXRlLnRvdGFsVXNlcnMgPSBhY3Rpb24ucGF5bG9hZC50b3RhbF91c2VycztcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgfSk7XG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzZXRQZW9wbGUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9zZXRQZW9wbGVcIixcbiAgYXN5bmMgKHsgY291bnQgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnM/Y291bnQ9JHtjb3VudH1gXG4gICAgICApO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIGVycm9yXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9wb3N0Q2FyZFwiLFxuICBhc3luYyAoeyBmb3JtRGF0YSwgdG9rZW4gfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IHRva2VuID0gc3RhdGUudG9rZW5TbGljZS50b2tlbjtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEsIHRva2VuKTtcbiAgICAgIC8vIGF3YWl0IGZldGNoKFxuICAgICAgLy8gICBcImh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc1wiLFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBUb2tlbjogdG9rZW4gfSxcbiAgICAgIC8vICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgaWYgKHJlcy5vaykge1xuICAgICAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicHJvY2Nlc3Mgc2VydmVyIGVycm9yc1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICBkaXNwYXRjaChzZXRDb3VudCg2KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWFzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwZW9wbGVTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHsgc2V0Q291bnQgfSA9IHBlb3BsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwic2V0VG9rZW4iLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGUiLCJjb3VudCIsInRvdGFsVXNlcnMiLCJkYXRhSXNMb2FkaW5nIiwicmVkdWNlcnMiLCJzZXRDb3VudCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJ1c2VycyIsInRvdGFsX3VzZXJzIiwicmVqZWN0ZWQiLCJlcnJvciIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtYXNzYWdlIiwicG9zdENhcmQiLCJmb3JtRGF0YSIsInRva2VuIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});