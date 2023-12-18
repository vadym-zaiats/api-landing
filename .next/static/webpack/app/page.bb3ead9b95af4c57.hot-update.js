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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        totalUsers: 0,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.peoples = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.isLoading = false;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/postCard\", async (param, param1)=>{\n    let { formData } = param, { dispatch, rejectWithValue, getState } = param1;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n    // try {\n    //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n    //     method: \"POST\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       Authorization: token,\n    //     },\n    //     body: JSON.stringify({\n    //       name,\n    //       email,\n    //       phone,\n    //       position,\n    //       photo,\n    //     }),\n    //   })\n    //     .then((res) => {\n    //       if (res.ok) {\n    //         //     renderAdminPage();\n    //         //     return res.text();\n    //       } else {\n    //         //     renderWrongPage();\n    //         //     console.log(\"Невірний логін або пароль\");\n    //       }\n    //     })\n    //     .then((data) => {\n    //       console.log(\"Server responce:\", data);\n    //     });\n    // } catch (error) {\n    //   console.error(\"Error:\", error);\n    // }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxjQUFjSCw2REFBV0EsQ0FBQztJQUM5QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0MsT0FBTyxFQUFFLENBQUNDO1lBQ25DQSxNQUFNTixTQUFTLEdBQUc7UUFDcEI7UUFDQUUsUUFBUUMsT0FBTyxDQUFDQyxXQUFXRyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDNUNGLE1BQU1SLE9BQU8sR0FBR1UsT0FBT0MsT0FBTyxDQUFDQyxLQUFLO1lBQ3BDSixNQUFNUCxVQUFVLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ0UsV0FBVztZQUM3Q0wsTUFBTU4sU0FBUyxHQUFHO1FBQ3BCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV1EsUUFBUSxFQUFFLENBQUNOLE9BQU9FO1lBQzNDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1PLEtBQUssR0FBR0wsT0FBT0ssS0FBSztRQUM1QjtJQUNGO0FBQ0Y7QUFDTyxNQUFNVCxhQUFhWCxrRUFBZ0JBLENBQ3hDLHNCQUNBO1FBQU8sRUFBRXFCLElBQUksRUFBRSxVQUFFLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQzVDLE1BQU1DLE9BQU8sTUFBTUMsTUFDakIscUVBQTBFLE9BQUxKLE1BQUssYUFDMUVLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQ3hCLE9BQU9KO0FBQ1QsR0FDQTtBQUNLLE1BQU1LLFdBQVc3QixrRUFBZ0JBLENBQ3RDLG9CQUNBO1FBQU8sRUFBRThCLFFBQVEsRUFBRSxVQUFFLEVBQUVSLFFBQVEsRUFBRUMsZUFBZSxFQUFFUSxRQUFRLEVBQUU7SUFDMUQsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJO1FBQ0YsTUFBTUosTUFBTSxNQUFNTCxTQUFTckIscURBQVFBO1FBQ25DK0IsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLFFBQVE7SUFDUiw0RUFBNEU7SUFDNUUsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLDJEQUEyRDtJQUMzRCxVQUFVO0lBQ1YsU0FBUztJQUNULHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsSUFBSTtJQUNOLEVBQUUsT0FBT1YsT0FBTztRQUNkLE9BQU9HLGdCQUFnQkgsTUFBTWMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFFRiwrREFBZWhDLFlBQVlpQyxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUFFLEdBQUdqQyxZQUFZa0MsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gXCIuL3Rva2VuU2xpY2VcIjtcblxuY29uc3QgcGVvcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlc1wiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGVzOiBbXSxcbiAgICB0b3RhbFVzZXJzOiAwLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnBlb3BsZXMgPSBhY3Rpb24ucGF5bG9hZC51c2VycztcbiAgICAgIHN0YXRlLnRvdGFsVXNlcnMgPSBhY3Rpb24ucGF5bG9hZC50b3RhbF91c2VycztcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGVzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvc2V0UGVvcGxlc1wiLFxuICBhc3luYyAoeyBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9NmBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbik7XG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvcG9zdENhcmRcIixcbiAgYXN5bmMgKHsgZm9ybURhdGEgfSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IHRva2VuID0gc3RhdGUudG9rZW5TbGljZS50b2tlbjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGlzcGF0Y2goc2V0VG9rZW4oKSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAvLyB0cnkge1xuICAgICAgLy8gICBmZXRjaChcImh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vyc1wiLCB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIC8vICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLy8gICAgICAgbmFtZSxcbiAgICAgIC8vICAgICAgIGVtYWlsLFxuICAgICAgLy8gICAgICAgcGhvbmUsXG4gICAgICAvLyAgICAgICBwb3NpdGlvbixcbiAgICAgIC8vICAgICAgIHBob3RvLFxuICAgICAgLy8gICAgIH0pLFxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJlbmRlckFkbWluUGFnZSgpO1xuICAgICAgLy8gICAgICAgICAvLyAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XG4gICAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICAgICAvLyAgICAgcmVuZGVyV3JvbmdQYWdlKCk7XG4gICAgICAvLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcItCd0LXQstGW0YDQvdC40Lkg0LvQvtCz0ZbQvSDQsNCx0L4g0L/QsNGA0L7Qu9GMXCIpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHJlc3BvbmNlOlwiLCBkYXRhKTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgLy8gfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVvcGxlU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7fSA9IHBlb3BsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwic2V0VG9rZW4iLCJwZW9wbGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGVzIiwidG90YWxVc2VycyIsImlzTG9hZGluZyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZXMiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJwYWdlIiwiZGlzcGF0Y2giLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBvc3RDYXJkIiwiZm9ybURhdGEiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXNzYWdlIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});