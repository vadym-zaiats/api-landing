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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        totalUsers: 0,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.peoples = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    // builder.addCase(setMaxResult.pending, (state) => {\n    //   state.isLoading = true;\n    // });\n    // builder.addCase(setMaxResult.fulfilled, (state, action) => {\n    //   state.isLoading = false;\n    //   state.maxRes = action.payload;\n    // });\n    // builder.addCase(setMaxResult.rejected, (state, action) => {\n    //   state.isLoading = false;\n    //   state.error = action.error;\n    // });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\n// export const setTotalUsers = createAsyncThunk(\n//   \"peoples/setTotalUsers\",\n//   async (_, { dispatch, rejectWithValue }) => {\n//     const data = await fetch(\n//       `https://frontend-test-assignment-api.abz.agency/api/v1/users`\n//     ).then((res) => res.json());\n//     return data.total_users;\n//   }\n// );\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/postCard\", async (param, param1)=>{\n    let { name, email, phone, position, photo } = param, { dispatch, rejectWithValue, getState } = param1;\n    const state = getState();\n    const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(\"setToken() result:\", res);\n    // try {\n    //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n    //     method: \"POST\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       Authorization: token,\n    //     },\n    //     body: JSON.stringify({\n    //       name,\n    //       email,\n    //       phone,\n    //       position,\n    //       photo,\n    //     }),\n    //   })\n    //     .then((res) => {\n    //       if (res.ok) {\n    //         //     renderAdminPage();\n    //         //     return res.text();\n    //       } else {\n    //         //     renderWrongPage();\n    //         //     console.log(\"Невірний логін або пароль\");\n    //       }\n    //     })\n    //     .then((data) => {\n    //       console.log(\"Server responce:\", data);\n    //     });\n    // } catch (error) {\n    //   console.error(\"Error:\", error);\n    // }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxjQUFjSCw2REFBV0EsQ0FBQztJQUM5QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNTixTQUFTLEdBQUc7UUFDcEI7UUFDQUUsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1OLFNBQVMsR0FBRztZQUNsQk0sTUFBTVIsT0FBTyxHQUFHVSxPQUFPQyxPQUFPLENBQUNDLEtBQUs7WUFDcENKLE1BQU1QLFVBQVUsR0FBR1MsT0FBT0MsT0FBTyxDQUFDRSxXQUFXO1FBQy9DO1FBQ0FULFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV1EsUUFBUSxFQUFFLENBQUNOLE9BQU9FO1lBQzNDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1PLEtBQUssR0FBR0wsT0FBT0ssS0FBSztRQUM1QjtJQUNBLHFEQUFxRDtJQUNyRCw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLCtEQUErRDtJQUMvRCw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLE1BQU07SUFDTiw4REFBOEQ7SUFDOUQsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxNQUFNO0lBQ1I7QUFDRjtBQUNPLE1BQU1ULGFBQWFYLGtFQUFnQkEsQ0FDeEMsc0JBQ0E7UUFBTyxFQUFFcUIsSUFBSSxFQUFFLFVBQUUsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDNUMsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQixxRUFBMEUsT0FBTEosTUFBSyxhQUMxRUssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0o7QUFDVCxHQUNBO0FBQ0YsaURBQWlEO0FBQ2pELDZCQUE2QjtBQUM3QixrREFBa0Q7QUFDbEQsZ0NBQWdDO0FBQ2hDLHVFQUF1RTtBQUN2RSxtQ0FBbUM7QUFDbkMsK0JBQStCO0FBQy9CLE1BQU07QUFDTixLQUFLO0FBQ0UsTUFBTUssV0FBVzdCLGtFQUFnQkEsQ0FDdEMsb0JBQ0E7UUFDRSxFQUFFRyxJQUFJLEVBQUUyQixLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsVUFDdkMsRUFBRVgsUUFBUSxFQUFFQyxlQUFlLEVBQUVXLFFBQVEsRUFBRTtJQUV2QyxNQUFNckIsUUFBUXFCO0lBQ2QsTUFBTUMsUUFBUXRCLE1BQU11QixVQUFVLENBQUNELEtBQUs7SUFDcEMsSUFBSTtRQUNGLE1BQU1SLE1BQU0sTUFBTUwsU0FBU3JCLHFEQUFRQTtRQUNuQ29DLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JYO0lBQ2xDLFFBQVE7SUFDUiw0RUFBNEU7SUFDNUUsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLDJEQUEyRDtJQUMzRCxVQUFVO0lBQ1YsU0FBUztJQUNULHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsSUFBSTtJQUNOLEVBQUUsT0FBT1AsT0FBTztRQUNkLE9BQU9HLGdCQUFnQkgsTUFBTW1CLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWVyQyxZQUFZc0MsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRSxHQUFHdEMsWUFBWXVDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tIFwiLi90b2tlblNsaWNlXCI7XG5cbmNvbnN0IHBlb3BsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInBlb3BsZXNcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgcGVvcGxlczogW10sXG4gICAgdG90YWxVc2VyczogMCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBlb3BsZXMgPSBhY3Rpb24ucGF5bG9hZC51c2VycztcbiAgICAgIHN0YXRlLnRvdGFsVXNlcnMgPSBhY3Rpb24ucGF5bG9hZC50b3RhbF91c2VycztcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgfSk7XG4gICAgLy8gYnVpbGRlci5hZGRDYXNlKHNldE1heFJlc3VsdC5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAvLyAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgLy8gfSk7XG4gICAgLy8gYnVpbGRlci5hZGRDYXNlKHNldE1heFJlc3VsdC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgIHN0YXRlLm1heFJlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIC8vIH0pO1xuICAgIC8vIGJ1aWxkZXIuYWRkQ2FzZShzZXRNYXhSZXN1bHQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIC8vIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlcy9zZXRQZW9wbGVzXCIsXG4gIGFzeW5jICh7IHBhZ2UgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP3BhZ2U9JHtwYWdlfSZjb3VudD02YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuKTtcbi8vIGV4cG9ydCBjb25zdCBzZXRUb3RhbFVzZXJzID0gY3JlYXRlQXN5bmNUaHVuayhcbi8vICAgXCJwZW9wbGVzL3NldFRvdGFsVXNlcnNcIixcbi8vICAgYXN5bmMgKF8sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuLy8gICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc2Bcbi8vICAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgICAgcmV0dXJuIGRhdGEudG90YWxfdXNlcnM7XG4vLyAgIH1cbi8vICk7XG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvcG9zdENhcmRcIixcbiAgYXN5bmMgKFxuICAgIHsgbmFtZSwgZW1haWwsIHBob25lLCBwb3NpdGlvbiwgcGhvdG8gfSxcbiAgICB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH1cbiAgKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHRva2VuID0gc3RhdGUudG9rZW5TbGljZS50b2tlbjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGlzcGF0Y2goc2V0VG9rZW4oKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInNldFRva2VuKCkgcmVzdWx0OlwiLCByZXMpO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgZmV0Y2goXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAvLyAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWUsXG4gICAgICAvLyAgICAgICBlbWFpbCxcbiAgICAgIC8vICAgICAgIHBob25lLFxuICAgICAgLy8gICAgICAgcG9zaXRpb24sXG4gICAgICAvLyAgICAgICBwaG90byxcbiAgICAgIC8vICAgICB9KSxcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAvLyAgICAgICAgIC8vICAgICByZW5kZXJBZG1pblBhZ2UoKTtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJlbmRlcldyb25nUGFnZSgpO1xuICAgICAgLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLQndC10LLRltGA0L3QuNC5INC70L7Qs9GW0L0g0LDQsdC+INC/0LDRgNC+0LvRjFwiKTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciByZXNwb25jZTpcIiwgZGF0YSk7XG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3Qge30gPSBwZW9wbGVTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInNldFRva2VuIiwicGVvcGxlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicGVvcGxlcyIsInRvdGFsVXNlcnMiLCJpc0xvYWRpbmciLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGVzIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInVzZXJzIiwidG90YWxfdXNlcnMiLCJyZWplY3RlZCIsImVycm9yIiwicGFnZSIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwb3N0Q2FyZCIsImVtYWlsIiwicGhvbmUiLCJwb3NpdGlvbiIsInBob3RvIiwiZ2V0U3RhdGUiLCJ0b2tlbiIsInRva2VuU2xpY2UiLCJjb25zb2xlIiwibG9nIiwibWFzc2FnZSIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});