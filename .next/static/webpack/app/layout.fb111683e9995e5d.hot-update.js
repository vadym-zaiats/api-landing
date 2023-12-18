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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peoplelice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        totalUsers: 0,\n        isLoading: false,\n        justStarted: true\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.isLoading = false;\n            state.justStarted = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setpeople\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n    // try {\n    //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n    //     method: \"POST\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       Authorization: token,\n    //     },\n    //     body: JSON.stringify({\n    //       name,\n    //       email,\n    //       phone,\n    //       position,\n    //       photo,\n    //     }),\n    //   })\n    //     .then((res) => {\n    //       if (res.ok) {\n    //         //     renderAdminPage();\n    //         //     return res.text();\n    //       } else {\n    //         //     renderWrongPage();\n    //         //     console.log(\"Невірний логін або пароль\");\n    //       }\n    //     })\n    //     .then((data) => {\n    //       console.log(\"Server responce:\", data);\n    //     });\n    // } catch (error) {\n    //   console.error(\"Error:\", error);\n    // }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peoplelice.reducer);\nconst {} = peoplelice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxhQUFhSCw2REFBV0EsQ0FBQztJQUM3QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFFBQVEsRUFBRTtRQUNWQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsYUFBYTtJQUNmO0lBQ0FDLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVQyxPQUFPLEVBQUUsQ0FBQ0M7WUFDbENBLE1BQU1QLFNBQVMsR0FBRztRQUNwQjtRQUNBRyxRQUFRQyxPQUFPLENBQUNDLFVBQVVHLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUMzQ0YsTUFBTVQsTUFBTSxHQUFHVyxPQUFPQyxPQUFPLENBQUNDLEtBQUs7WUFDbkNKLE1BQU1SLFVBQVUsR0FBR1UsT0FBT0MsT0FBTyxDQUFDRSxXQUFXO1lBQzdDTCxNQUFNUCxTQUFTLEdBQUc7WUFDbEJPLE1BQU1OLFdBQVcsR0FBRztRQUN0QjtRQUNBRSxRQUFRQyxPQUFPLENBQUNDLFVBQVVRLFFBQVEsRUFBRSxDQUFDTixPQUFPRTtZQUMxQ0YsTUFBTVAsU0FBUyxHQUFHO1lBQ2xCTyxNQUFNTyxLQUFLLEdBQUdMLE9BQU9LLEtBQUs7UUFDNUI7SUFDRjtBQUNGO0FBQ08sTUFBTVQsWUFBWVosa0VBQWdCQSxDQUN2QyxvQkFDQTtRQUFPLEVBQUVzQixJQUFJLEVBQUUsVUFBRSxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM1QyxNQUFNQyxPQUFPLE1BQU1DLE1BQ2pCLHFFQUEwRSxPQUFMSixNQUFLLGFBQzFFSyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUN4QixPQUFPSjtBQUNULEdBQ0E7QUFDSyxNQUFNSyxXQUFXOUIsa0VBQWdCQSxDQUN0QyxtQkFDQSxPQUFPK0I7UUFBVSxFQUFFUixRQUFRLEVBQUVDLGVBQWUsRUFBRVEsUUFBUSxFQUFFO0lBQ3RELDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsSUFBSTtRQUNGLE1BQU1KLE1BQU0sTUFBTUwsU0FBU3RCLHFEQUFRQTtRQUNuQ2dDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixRQUFRO0lBQ1IsNEVBQTRFO0lBQzVFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQywyREFBMkQ7SUFDM0QsVUFBVTtJQUNWLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLElBQUk7SUFDTixFQUFFLE9BQU9WLE9BQU87UUFDZCxPQUFPRyxnQkFBZ0JILE1BQU1jLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWVqQyxXQUFXa0MsT0FBTyxFQUFDO0FBQzNCLE1BQU0sRUFBRSxHQUFHbEMsV0FBV21DLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tIFwiLi90b2tlblNsaWNlXCI7XG5cbmNvbnN0IHBlb3BsZWxpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZTogW10sXG4gICAgdG90YWxVc2VyczogMCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIGp1c3RTdGFydGVkOiB0cnVlLFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlID0gYWN0aW9uLnBheWxvYWQudXNlcnM7XG4gICAgICBzdGF0ZS50b3RhbFVzZXJzID0gYWN0aW9uLnBheWxvYWQudG90YWxfdXNlcnM7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmp1c3RTdGFydGVkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgfSk7XG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzZXRQZW9wbGUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9zZXRwZW9wbGVcIixcbiAgYXN5bmMgKHsgcGFnZSB9LCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnM/cGFnZT0ke3BhZ2V9JmNvdW50PTZgXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4pO1xuZXhwb3J0IGNvbnN0IHBvc3RDYXJkID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvcG9zdENhcmRcIixcbiAgYXN5bmMgKGZvcm1EYXRhLCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICAvLyBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBzdGF0ZS50b2tlblNsaWNlLnRva2VuO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZXRUb2tlbigpKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgIC8vIHRyeSB7XG4gICAgICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzXCIsIHtcbiAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgLy8gICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAvLyAgICAgICBuYW1lLFxuICAgICAgLy8gICAgICAgZW1haWwsXG4gICAgICAvLyAgICAgICBwaG9uZSxcbiAgICAgIC8vICAgICAgIHBvc2l0aW9uLFxuICAgICAgLy8gICAgICAgcGhvdG8sXG4gICAgICAvLyAgICAgfSksXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgLy8gICAgICAgICAvLyAgICAgcmVuZGVyQWRtaW5QYWdlKCk7XG4gICAgICAvLyAgICAgICAgIC8vICAgICByZXR1cm4gcmVzLnRleHQoKTtcbiAgICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICAgIC8vICAgICByZW5kZXJXcm9uZ1BhZ2UoKTtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi0J3QtdCy0ZbRgNC90LjQuSDQu9C+0LPRltC9INCw0LHQviDQv9Cw0YDQvtC70YxcIik7XG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVzcG9uY2U6XCIsIGRhdGEpO1xuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICAvLyB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWFzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwZW9wbGVsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3Qge30gPSBwZW9wbGVsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwic2V0VG9rZW4iLCJwZW9wbGVsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInBlb3BsZSIsInRvdGFsVXNlcnMiLCJpc0xvYWRpbmciLCJqdXN0U3RhcnRlZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJ1c2VycyIsInRvdGFsX3VzZXJzIiwicmVqZWN0ZWQiLCJlcnJvciIsInBhZ2UiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdENhcmQiLCJmb3JtRGF0YSIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1hc3NhZ2UiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});