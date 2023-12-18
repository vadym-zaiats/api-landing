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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peoplelice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        totalUsers: 0,\n        pageIsLoading: true,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.isLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setpeople\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n    // try {\n    //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n    //     method: \"POST\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       Authorization: token,\n    //     },\n    //     body: JSON.stringify({\n    //       name,\n    //       email,\n    //       phone,\n    //       position,\n    //       photo,\n    //     }),\n    //   })\n    //     .then((res) => {\n    //       if (res.ok) {\n    //         //     renderAdminPage();\n    //         //     return res.text();\n    //       } else {\n    //         //     renderWrongPage();\n    //         //     console.log(\"Невірний логін або пароль\");\n    //       }\n    //     })\n    //     .then((data) => {\n    //       console.log(\"Server responce:\", data);\n    //     });\n    // } catch (error) {\n    //   console.error(\"Error:\", error);\n    // }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peoplelice.reducer);\nconst {} = peoplelice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxhQUFhSCw2REFBV0EsQ0FBQztJQUM3QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFFBQVEsRUFBRTtRQUNWQyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsV0FBVztJQUNiO0lBQ0FDLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVQyxPQUFPLEVBQUUsQ0FBQ0M7WUFDbENBLE1BQU1OLFNBQVMsR0FBRztRQUNwQjtRQUNBRSxRQUFRQyxPQUFPLENBQUNDLFVBQVVHLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUMzQ0YsTUFBTVQsTUFBTSxHQUFHVyxPQUFPQyxPQUFPLENBQUNDLEtBQUs7WUFDbkNKLE1BQU1SLFVBQVUsR0FBR1UsT0FBT0MsT0FBTyxDQUFDRSxXQUFXO1lBQzdDTCxNQUFNTixTQUFTLEdBQUc7UUFDcEI7UUFDQUUsUUFBUUMsT0FBTyxDQUFDQyxVQUFVUSxRQUFRLEVBQUUsQ0FBQ04sT0FBT0U7WUFDMUNGLE1BQU1OLFNBQVMsR0FBRztZQUNsQk0sTUFBTU8sS0FBSyxHQUFHTCxPQUFPSyxLQUFLO1FBQzVCO0lBQ0Y7QUFDRjtBQUNPLE1BQU1ULFlBQVlaLGtFQUFnQkEsQ0FDdkMsb0JBQ0E7UUFBTyxFQUFFc0IsSUFBSSxFQUFFLFVBQUUsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDNUMsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQixxRUFBMEUsT0FBTEosTUFBSyxhQUMxRUssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0o7QUFDVCxHQUNBO0FBQ0ssTUFBTUssV0FBVzlCLGtFQUFnQkEsQ0FDdEMsbUJBQ0EsT0FBTytCO1FBQVUsRUFBRVIsUUFBUSxFQUFFQyxlQUFlLEVBQUVRLFFBQVEsRUFBRTtJQUN0RCw0QkFBNEI7SUFDNUIsd0NBQXdDO0lBQ3hDLElBQUk7UUFDRixNQUFNSixNQUFNLE1BQU1MLFNBQVN0QixxREFBUUE7UUFDbkNnQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osUUFBUTtJQUNSLDRFQUE0RTtJQUM1RSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1Qyw4QkFBOEI7SUFDOUIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsMkRBQTJEO0lBQzNELFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxJQUFJO0lBQ04sRUFBRSxPQUFPVixPQUFPO1FBQ2QsT0FBT0csZ0JBQWdCSCxNQUFNYyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVGLCtEQUFlakMsV0FBV2tDLE9BQU8sRUFBQztBQUMzQixNQUFNLEVBQUUsR0FBR2xDLFdBQVdtQyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9wZW9wbGVTbGljZS5qcz9mNmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSBcIi4vdG9rZW5TbGljZVwiO1xuXG5jb25zdCBwZW9wbGVsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInBlb3BsZVwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGU6IFtdLFxuICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgcGFnZUlzTG9hZGluZzogdHJ1ZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlID0gYWN0aW9uLnBheWxvYWQudXNlcnM7XG4gICAgICBzdGF0ZS50b3RhbFVzZXJzID0gYWN0aW9uLnBheWxvYWQudG90YWxfdXNlcnM7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlL3NldHBlb3BsZVwiLFxuICBhc3luYyAoeyBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9NmBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbik7XG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9wb3N0Q2FyZFwiLFxuICBhc3luYyAoZm9ybURhdGEsIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIC8vIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAvLyBjb25zdCB0b2tlbiA9IHN0YXRlLnRva2VuU2xpY2UudG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNldFRva2VuKCkpO1xuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgZmV0Y2goXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAvLyAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWUsXG4gICAgICAvLyAgICAgICBlbWFpbCxcbiAgICAgIC8vICAgICAgIHBob25lLFxuICAgICAgLy8gICAgICAgcG9zaXRpb24sXG4gICAgICAvLyAgICAgICBwaG90byxcbiAgICAgIC8vICAgICB9KSxcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAvLyAgICAgICAgIC8vICAgICByZW5kZXJBZG1pblBhZ2UoKTtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJlbmRlcldyb25nUGFnZSgpO1xuICAgICAgLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLQndC10LLRltGA0L3QuNC5INC70L7Qs9GW0L0g0LDQsdC+INC/0LDRgNC+0LvRjFwiKTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciByZXNwb25jZTpcIiwgZGF0YSk7XG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZWxpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7fSA9IHBlb3BsZWxpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJzZXRUb2tlbiIsInBlb3BsZWxpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicGVvcGxlIiwidG90YWxVc2VycyIsInBhZ2VJc0xvYWRpbmciLCJpc0xvYWRpbmciLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGUiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJwYWdlIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBvc3RDYXJkIiwiZm9ybURhdGEiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXNzYWdlIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});