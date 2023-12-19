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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPage: function() { return /* binding */ setPage; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        page: 1,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            console.log(action.payload);\n        // state.count += 6;\n        },\n        setPage: (state, action)=>{\n            console.log(action.payload);\n        // state.page += 1;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n        // await fetch(\n        //   \"https://frontend-test-assignment-api.abz.agency/api/v1/users\",\n        //   {\n        //     method: \"POST\",\n        //     headers: { \"Content-Type\": \"multipart/form-data\", Token: token },\n        //     body: formData,\n        //   }\n        // )\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       return res.json();\n        //     } else {\n        //       console.error(\"Something went wrong\");\n        //     }\n        //   })\n        //   .then((data) => {\n        //     console.log(data);\n        //     if (data.success) {\n        //       console.log(data);\n        //     } else {\n        //       console.log(\"proccess server errors\");\n        //     }\n        //   })\n        //   .catch((error) => {\n        //     console.error(error);\n        //   });\n        dispatch(setCount(6));\n        dispatch(setPage(1));\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount, setPage } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBQ3pCO0FBRXhDLE1BQU1HLGNBQWNILDZEQUFXQSxDQUFDO0lBQzlCSSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsUUFBUSxFQUFFO1FBQ1ZDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQU9DO1lBQ2hCQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLE9BQU87UUFDMUIsb0JBQW9CO1FBQ3RCO1FBQ0FDLFNBQVMsQ0FBQ0wsT0FBT0M7WUFDZkMsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxPQUFPO1FBQzFCLG1CQUFtQjtRQUNyQjtJQUNGO0lBQ0FFLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVQyxPQUFPLEVBQUUsQ0FBQ1Y7WUFDbENBLE1BQU1ILGFBQWEsR0FBRztRQUN4QjtRQUNBVSxRQUFRQyxPQUFPLENBQUNDLFVBQVVFLFNBQVMsRUFBRSxDQUFDWCxPQUFPQztZQUMzQ0QsTUFBTVAsTUFBTSxHQUFHUSxPQUFPRyxPQUFPLENBQUNRLEtBQUs7WUFDbkNaLE1BQU1KLFVBQVUsR0FBR0ssT0FBT0csT0FBTyxDQUFDUyxXQUFXO1lBQzdDYixNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVUsUUFBUUMsT0FBTyxDQUFDQyxVQUFVSyxRQUFRLEVBQUUsQ0FBQ2QsT0FBT0M7WUFDMUNELE1BQU1ILGFBQWEsR0FBRztZQUN0QkcsTUFBTWUsS0FBSyxHQUFHZCxPQUFPYyxLQUFLO1FBQzVCO0lBQ0Y7QUFDRjtBQUNPLE1BQU1OLFlBQVlyQixrRUFBZ0JBLENBQ3ZDLG9CQUNBO1FBQU8sRUFBRU8sSUFBSSxFQUFFLFVBQUUsRUFBRXFCLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQzVDLE1BQU1DLE9BQU8sTUFBTUMsTUFDakIscUVBQTBFLE9BQUx4QixNQUFLLGFBQzFFeUIsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0o7QUFDVCxHQUNBO0FBQ0ssTUFBTUssV0FBV25DLGtFQUFnQkEsQ0FDdEMsbUJBQ0EsT0FBT29DO1FBQVUsRUFBRVIsUUFBUSxFQUFFQyxlQUFlLEVBQUVRLFFBQVEsRUFBRTtJQUN0RCw0QkFBNEI7SUFDNUIsd0NBQXdDO0lBQ3hDLElBQUk7UUFDRixNQUFNVCxTQUFTM0IscURBQVFBO1FBQ3ZCYSxRQUFRQyxHQUFHLENBQUNxQjtRQUNaLGVBQWU7UUFDZixvRUFBb0U7UUFDcEUsTUFBTTtRQUNOLHNCQUFzQjtRQUN0Qix3RUFBd0U7UUFDeEUsc0JBQXNCO1FBQ3RCLE1BQU07UUFDTixJQUFJO1FBQ0oscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IsT0FBTztRQUNQLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsK0NBQStDO1FBQy9DLFFBQVE7UUFDUixPQUFPO1FBQ1Asd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1JSLFNBQVNqQixTQUFTO1FBQ2xCaUIsU0FBU1gsUUFBUTtJQUNuQixFQUFFLE9BQU9VLE9BQU87UUFDZCxPQUFPRSxnQkFBZ0JGLE1BQU1XLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWVwQyxZQUFZcUMsT0FBTyxFQUFDO0FBQzVCLE1BQU0sRUFBRTVCLFFBQVEsRUFBRU0sT0FBTyxFQUFFLEdBQUdmLFlBQVlzQyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9wZW9wbGVTbGljZS5qcz9mNmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSBcIi4vdG9rZW5TbGljZVwiO1xuXG5jb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwZW9wbGVcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgcGVvcGxlOiBbXSxcbiAgICBjb3VudDogNixcbiAgICBwYWdlOiAxLFxuICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgZGF0YUlzTG9hZGluZzogdHJ1ZSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRDb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIC8vIHN0YXRlLmNvdW50ICs9IDY7XG4gICAgfSxcbiAgICBzZXRQYWdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xuICAgICAgLy8gc3RhdGUucGFnZSArPSAxO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlID0gYWN0aW9uLnBheWxvYWQudXNlcnM7XG4gICAgICBzdGF0ZS50b3RhbFVzZXJzID0gYWN0aW9uLnBheWxvYWQudG90YWxfdXNlcnM7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmRhdGFJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGUvc2V0UGVvcGxlXCIsXG4gIGFzeW5jICh7IHBhZ2UgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP3BhZ2U9JHtwYWdlfSZjb3VudD02YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuKTtcbmV4cG9ydCBjb25zdCBwb3N0Q2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlL3Bvc3RDYXJkXCIsXG4gIGFzeW5jIChmb3JtRGF0YSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IHRva2VuID0gc3RhdGUudG9rZW5TbGljZS50b2tlbjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0VG9rZW4oKSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAvLyBhd2FpdCBmZXRjaChcbiAgICAgIC8vICAgXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIixcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiwgVG9rZW46IHRva2VuIH0sXG4gICAgICAvLyAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIClcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gICAgIGlmIChyZXMub2spIHtcbiAgICAgIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcInByb2NjZXNzIHNlcnZlciBlcnJvcnNcIik7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAvLyAgIH0pO1xuICAgICAgZGlzcGF0Y2goc2V0Q291bnQoNikpO1xuICAgICAgZGlzcGF0Y2goc2V0UGFnZSgxKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IubWFzc2FnZSk7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwZW9wbGVTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHsgc2V0Q291bnQsIHNldFBhZ2UgfSA9IHBlb3BsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwic2V0VG9rZW4iLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGUiLCJjb3VudCIsInBhZ2UiLCJ0b3RhbFVzZXJzIiwiZGF0YUlzTG9hZGluZyIsInJlZHVjZXJzIiwic2V0Q291bnQiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwic2V0UGFnZSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJ1c2VycyIsInRvdGFsX3VzZXJzIiwicmVqZWN0ZWQiLCJlcnJvciIsImRpc3BhdGNoIiwicmVqZWN0V2l0aFZhbHVlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwb3N0Q2FyZCIsImZvcm1EYXRhIiwiZ2V0U3RhdGUiLCJtYXNzYWdlIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});