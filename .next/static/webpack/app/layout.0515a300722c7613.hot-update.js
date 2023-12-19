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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPage: function() { return /* binding */ setPage; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        page: 1,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            action.payload === undefined ? state.count += 6 : null;\n        },\n        setPage: (state, action)=>{\n            action.payload === undefined ? state.page += 1 : null;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n        // await fetch(\n        //   \"https://frontend-test-assignment-api.abz.agency/api/v1/users\",\n        //   {\n        //     method: \"POST\",\n        //     headers: { \"Content-Type\": \"multipart/form-data\", Token: token },\n        //     body: formData,\n        //   }\n        // )\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       return res.json();\n        //     } else {\n        //       console.error(\"Something went wrong\");\n        //     }\n        //   })\n        //   .then((data) => {\n        //     console.log(data);\n        //     if (data.success) {\n        //       console.log(data);\n        //     } else {\n        //       console.log(\"proccess server errors\");\n        //     }\n        //   })\n        //   .catch((error) => {\n        //     console.error(error);\n        //   });\n        dispatch(setCount(6));\n        dispatch(setPage(1));\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount, setPage } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBQ3pCO0FBRXhDLE1BQU1HLGNBQWNILDZEQUFXQSxDQUFDO0lBQzlCSSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsUUFBUSxFQUFFO1FBQ1ZDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCQSxPQUFPQyxPQUFPLEtBQUtDLFlBQWFILE1BQU1OLEtBQUssSUFBSSxJQUFLO1FBQ3REO1FBQ0FVLFNBQVMsQ0FBQ0osT0FBT0M7WUFDZkEsT0FBT0MsT0FBTyxLQUFLQyxZQUFhSCxNQUFNTCxJQUFJLElBQUksSUFBSztRQUNyRDtJQUNGO0lBQ0FVLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVQyxPQUFPLEVBQUUsQ0FBQ1Q7WUFDbENBLE1BQU1ILGFBQWEsR0FBRztRQUN4QjtRQUNBUyxRQUFRQyxPQUFPLENBQUNDLFVBQVVFLFNBQVMsRUFBRSxDQUFDVixPQUFPQztZQUMzQ0QsTUFBTVAsTUFBTSxHQUFHUSxPQUFPQyxPQUFPLENBQUNTLEtBQUs7WUFDbkNYLE1BQU1KLFVBQVUsR0FBR0ssT0FBT0MsT0FBTyxDQUFDVSxXQUFXO1lBQzdDWixNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVMsUUFBUUMsT0FBTyxDQUFDQyxVQUFVSyxRQUFRLEVBQUUsQ0FBQ2IsT0FBT0M7WUFDMUNELE1BQU1ILGFBQWEsR0FBRztZQUN0QkcsTUFBTWMsS0FBSyxHQUFHYixPQUFPYSxLQUFLO1FBQzVCO0lBQ0Y7QUFDRjtBQUNPLE1BQU1OLFlBQVlwQixrRUFBZ0JBLENBQ3ZDLG9CQUNBO1FBQU8sRUFBRU8sSUFBSSxFQUFFLFVBQUUsRUFBRW9CLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQzVDLE1BQU1DLE9BQU8sTUFBTUMsTUFDakIscUVBQTBFLE9BQUx2QixNQUFLLGFBQzFFd0IsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0o7QUFDVCxHQUNBO0FBQ0ssTUFBTUssV0FBV2xDLGtFQUFnQkEsQ0FDdEMsbUJBQ0EsT0FBT21DO1FBQVUsRUFBRVIsUUFBUSxFQUFFQyxlQUFlLEVBQUVRLFFBQVEsRUFBRTtJQUN0RCw0QkFBNEI7SUFDNUIsd0NBQXdDO0lBQ3hDLElBQUk7UUFDRixNQUFNVCxTQUFTMUIscURBQVFBO1FBQ3ZCb0MsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLGVBQWU7UUFDZixvRUFBb0U7UUFDcEUsTUFBTTtRQUNOLHNCQUFzQjtRQUN0Qix3RUFBd0U7UUFDeEUsc0JBQXNCO1FBQ3RCLE1BQU07UUFDTixJQUFJO1FBQ0oscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IsT0FBTztRQUNQLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsK0NBQStDO1FBQy9DLFFBQVE7UUFDUixPQUFPO1FBQ1Asd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1JSLFNBQVNoQixTQUFTO1FBQ2xCZ0IsU0FBU1gsUUFBUTtJQUNuQixFQUFFLE9BQU9VLE9BQU87UUFDZCxPQUFPRSxnQkFBZ0JGLE1BQU1hLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWVyQyxZQUFZc0MsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRTdCLFFBQVEsRUFBRUssT0FBTyxFQUFFLEdBQUdkLFlBQVl1QyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9wZW9wbGVTbGljZS5qcz9mNmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSBcIi4vdG9rZW5TbGljZVwiO1xuXG5jb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwZW9wbGVcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgcGVvcGxlOiBbXSxcbiAgICBjb3VudDogNixcbiAgICBwYWdlOiAxLFxuICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgZGF0YUlzTG9hZGluZzogdHJ1ZSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRDb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGFjdGlvbi5wYXlsb2FkID09PSB1bmRlZmluZWQgPyAoc3RhdGUuY291bnQgKz0gNikgOiBudWxsO1xuICAgIH0sXG4gICAgc2V0UGFnZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGFjdGlvbi5wYXlsb2FkID09PSB1bmRlZmluZWQgPyAoc3RhdGUucGFnZSArPSAxKSA6IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5wZW9wbGUgPSBhY3Rpb24ucGF5bG9hZC51c2VycztcbiAgICAgIHN0YXRlLnRvdGFsVXNlcnMgPSBhY3Rpb24ucGF5bG9hZC50b3RhbF91c2VycztcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgfSk7XG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzZXRQZW9wbGUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9zZXRQZW9wbGVcIixcbiAgYXN5bmMgKHsgcGFnZSB9LCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnM/cGFnZT0ke3BhZ2V9JmNvdW50PTZgXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHBvc3RDYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvcG9zdENhcmRcIixcbiAgYXN5bmMgKGZvcm1EYXRhLCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICAvLyBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBzdGF0ZS50b2tlblNsaWNlLnRva2VuO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaChzZXRUb2tlbigpKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgIC8vIGF3YWl0IGZldGNoKFxuICAgICAgLy8gICBcImh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc1wiLFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBUb2tlbjogdG9rZW4gfSxcbiAgICAgIC8vICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgaWYgKHJlcy5vaykge1xuICAgICAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicHJvY2Nlc3Mgc2VydmVyIGVycm9yc1wiKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICBkaXNwYXRjaChzZXRDb3VudCg2KSk7XG4gICAgICBkaXNwYXRjaChzZXRQYWdlKDEpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgeyBzZXRDb3VudCwgc2V0UGFnZSB9ID0gcGVvcGxlU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzZXRUb2tlbiIsInBlb3BsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInBlb3BsZSIsImNvdW50IiwicGFnZSIsInRvdGFsVXNlcnMiLCJkYXRhSXNMb2FkaW5nIiwicmVkdWNlcnMiLCJzZXRDb3VudCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsInNldFBhZ2UiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGUiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdENhcmQiLCJmb3JtRGF0YSIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1hc3NhZ2UiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});