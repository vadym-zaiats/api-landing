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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        totalUsers: 0,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.peoples = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.isLoading = false;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/postCard\", async (param, param1)=>{\n    let { formData } = param, { dispatch, rejectWithValue, getState } = param1;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(\"setToken() result:\", res);\n    // try {\n    //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n    //     method: \"POST\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       Authorization: token,\n    //     },\n    //     body: JSON.stringify({\n    //       name,\n    //       email,\n    //       phone,\n    //       position,\n    //       photo,\n    //     }),\n    //   })\n    //     .then((res) => {\n    //       if (res.ok) {\n    //         //     renderAdminPage();\n    //         //     return res.text();\n    //       } else {\n    //         //     renderWrongPage();\n    //         //     console.log(\"Невірний логін або пароль\");\n    //       }\n    //     })\n    //     .then((data) => {\n    //       console.log(\"Server responce:\", data);\n    //     });\n    // } catch (error) {\n    //   console.error(\"Error:\", error);\n    // }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxjQUFjSCw2REFBV0EsQ0FBQztJQUM5QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNTixTQUFTLEdBQUc7UUFDcEI7UUFDQUUsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1SLE9BQU8sR0FBR1UsT0FBT0MsT0FBTyxDQUFDQyxLQUFLO1lBQ3BDSixNQUFNUCxVQUFVLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ0UsV0FBVztZQUM3Q0wsTUFBTU4sU0FBUyxHQUFHO1FBQ3BCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV1EsUUFBUSxFQUFFLENBQUNOLE9BQU9FO1lBQzNDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1PLEtBQUssR0FBR0wsT0FBT0ssS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNVCxhQUFhWCxrRUFBZ0JBLENBQ3hDLHNCQUNBO1FBQU8sRUFBRXFCLElBQUksRUFBRSxVQUFFLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQzVDLE1BQU1DLE9BQU8sTUFBTUMsTUFDakIscUVBQTBFLE9BQUxKLE1BQUssYUFDMUVLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQ3hCLE9BQU9KO0FBQ1QsR0FDQTtBQUNLLE1BQU1LLFdBQVc3QixrRUFBZ0JBLENBQ3RDLG9CQUNBO1FBQU8sRUFBRThCLFFBQVEsRUFBRSxVQUFFLEVBQUVSLFFBQVEsRUFBRUMsZUFBZSxFQUFFUSxRQUFRLEVBQUU7SUFDMUQsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJO1FBQ0YsTUFBTUosTUFBTSxNQUFNTCxTQUFTckIscURBQVFBO1FBQ25DK0IsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQk47SUFDbEMsUUFBUTtJQUNSLDRFQUE0RTtJQUM1RSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1Qyw4QkFBOEI7SUFDOUIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsMkRBQTJEO0lBQzNELFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxJQUFJO0lBQ04sRUFBRSxPQUFPUCxPQUFPO1FBQ2QsT0FBT0csZ0JBQWdCSCxNQUFNYyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUVGLCtEQUFlaEMsWUFBWWlDLE9BQU8sRUFBQztBQUM1QixNQUFNLEVBQUUsR0FBR2pDLFlBQVlrQyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9wZW9wbGVTbGljZS5qcz9mNmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHNldFRva2VuIH0gZnJvbSBcIi4vdG9rZW5TbGljZVwiO1xuXG5jb25zdCBwZW9wbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJwZW9wbGVzXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZXM6IFtdLFxuICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucGVvcGxlcyA9IGFjdGlvbi5wYXlsb2FkLnVzZXJzO1xuICAgICAgc3RhdGUudG90YWxVc2VycyA9IGFjdGlvbi5wYXlsb2FkLnRvdGFsX3VzZXJzO1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3Qgc2V0UGVvcGxlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlcy9zZXRQZW9wbGVzXCIsXG4gIGFzeW5jICh7IHBhZ2UgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP3BhZ2U9JHtwYWdlfSZjb3VudD02YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuKTtcbmV4cG9ydCBjb25zdCBwb3N0Q2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlcy9wb3N0Q2FyZFwiLFxuICBhc3luYyAoeyBmb3JtRGF0YSB9LCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUsIGdldFN0YXRlIH0pID0+IHtcbiAgICAvLyBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgLy8gY29uc3QgdG9rZW4gPSBzdGF0ZS50b2tlblNsaWNlLnRva2VuO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBkaXNwYXRjaChzZXRUb2tlbigpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2V0VG9rZW4oKSByZXN1bHQ6XCIsIHJlcyk7XG4gICAgICAvLyB0cnkge1xuICAgICAgLy8gICBmZXRjaChcImh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc1wiLCB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIC8vICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLy8gICAgICAgbmFtZSxcbiAgICAgIC8vICAgICAgIGVtYWlsLFxuICAgICAgLy8gICAgICAgcGhvbmUsXG4gICAgICAvLyAgICAgICBwb3NpdGlvbixcbiAgICAgIC8vICAgICAgIHBob3RvLFxuICAgICAgLy8gICAgIH0pLFxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJlbmRlckFkbWluUGFnZSgpO1xuICAgICAgLy8gICAgICAgICAvLyAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XG4gICAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICAgICAvLyAgICAgcmVuZGVyV3JvbmdQYWdlKCk7XG4gICAgICAvLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcItCd0LXQstGW0YDQvdC40Lkg0LvQvtCz0ZbQvSDQsNCx0L4g0L/QsNGA0L7Qu9GMXCIpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHJlc3BvbmNlOlwiLCBkYXRhKTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgLy8gfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVvcGxlU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7fSA9IHBlb3BsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwic2V0VG9rZW4iLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGVzIiwidG90YWxVc2VycyIsImlzTG9hZGluZyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZXMiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJwYWdlIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBvc3RDYXJkIiwiZm9ybURhdGEiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXNzYWdlIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});