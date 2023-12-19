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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setCount: function() { return /* binding */ setCount; },\n/* harmony export */   setPage: function() { return /* binding */ setPage; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        count: 6,\n        // page: 1,\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            state.count = action.payload === undefined ? state.count + 6 : action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setPeople\", async (param, param1)=>{\n    let { count } = param, { dispatch, rejectWithValue } = param1;\n    try {\n        const res = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=\".concat(count));\n        if (!res.ok) {\n            throw new Error(\"Server error\");\n        }\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n        // await fetch(\n        //   \"https://frontend-test-assignment-api.abz.agency/api/v1/users\",\n        //   {\n        //     method: \"POST\",\n        //     headers: { \"Content-Type\": \"multipart/form-data\", Token: token },\n        //     body: formData,\n        //   }\n        // )\n        //   .then((res) => {\n        //     if (res.ok) {\n        //       return res.json();\n        //     } else {\n        //       console.error(\"Something went wrong\");\n        //     }\n        //   })\n        //   .then((data) => {\n        //     console.log(data);\n        //     if (data.success) {\n        //       console.log(data);\n        //     } else {\n        //       console.log(\"proccess server errors\");\n        //     }\n        //   })\n        //   .catch((error) => {\n        //     console.error(error);\n        //   });\n        dispatch(setCount(6));\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst { setCount, setPage } = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBQ3pCO0FBRXhDLE1BQU1HLGNBQWNILDZEQUFXQSxDQUFDO0lBQzlCSSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsUUFBUSxFQUFFO1FBQ1ZDLE9BQU87UUFDUCxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsZUFBZTtJQUNqQjtJQUNBQyxVQUFVO1FBQ1JDLFVBQVUsQ0FBQ0MsT0FBT0M7WUFDaEJELE1BQU1MLEtBQUssR0FDVE0sT0FBT0MsT0FBTyxLQUFLQyxZQUFZSCxNQUFNTCxLQUFLLEdBQUcsSUFBSU0sT0FBT0MsT0FBTztRQUNuRTtJQUNGO0lBQ0FFLGVBQWUsQ0FBQ0M7UUFDZEEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVQyxPQUFPLEVBQUUsQ0FBQ1I7WUFDbENBLE1BQU1ILGFBQWEsR0FBRztRQUN4QjtRQUNBUSxRQUFRQyxPQUFPLENBQUNDLFVBQVVFLFNBQVMsRUFBRSxDQUFDVCxPQUFPQztZQUMzQ0QsTUFBTU4sTUFBTSxHQUFHTyxPQUFPQyxPQUFPLENBQUNRLEtBQUs7WUFDbkNWLE1BQU1KLFVBQVUsR0FBR0ssT0FBT0MsT0FBTyxDQUFDUyxXQUFXO1lBQzdDWCxNQUFNSCxhQUFhLEdBQUc7UUFDeEI7UUFDQVEsUUFBUUMsT0FBTyxDQUFDQyxVQUFVSyxRQUFRLEVBQUUsQ0FBQ1osT0FBT0M7WUFDMUNELE1BQU1ILGFBQWEsR0FBRztZQUN0QkcsTUFBTWEsS0FBSyxHQUFHWixPQUFPWSxLQUFLO1FBQzVCO0lBQ0Y7QUFDRjtBQUNPLE1BQU1OLFlBQVlsQixrRUFBZ0JBLENBQ3ZDLG9CQUNBO1FBQU8sRUFBRU0sS0FBSyxFQUFFLFVBQUUsRUFBRW1CLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQzdDLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLHNFQUE0RSxPQUFOdEI7UUFFeEUsSUFBSSxDQUFDcUIsSUFBSUUsRUFBRSxFQUFFO1lBQ1gsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixJQUFJSyxJQUFJO1FBQzNCLE9BQU9EO0lBQ1QsRUFBRSxPQUFPUCxPQUFPO1FBQ2QsT0FBT0UsZ0JBQWdCRixNQUFNUyxPQUFPO0lBQ3RDO0FBQ0YsR0FDQTtBQUNLLE1BQU1DLFdBQVdsQyxrRUFBZ0JBLENBQ3RDLG1CQUNBLE9BQU9tQztRQUFVLEVBQUVWLFFBQVEsRUFBRUMsZUFBZSxFQUFFVSxRQUFRLEVBQUU7SUFDdEQsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4QyxJQUFJO1FBQ0YsTUFBTVgsU0FBU3hCLHFEQUFRQTtRQUN2Qm9DLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixlQUFlO1FBQ2Ysb0VBQW9FO1FBQ3BFLE1BQU07UUFDTixzQkFBc0I7UUFDdEIsd0VBQXdFO1FBQ3hFLHNCQUFzQjtRQUN0QixNQUFNO1FBQ04sSUFBSTtRQUNKLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZiwrQ0FBK0M7UUFDL0MsUUFBUTtRQUNSLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IsT0FBTztRQUNQLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsUUFBUTtRQUNSVixTQUFTZixTQUFTO0lBQ3BCLEVBQUUsT0FBT2MsT0FBTztRQUNkLE9BQU9FLGdCQUFnQkYsTUFBTVMsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFFRiwrREFBZS9CLFlBQVlxQyxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUFFN0IsUUFBUSxFQUFFOEIsT0FBTyxFQUFFLEdBQUd0QyxZQUFZdUMsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gXCIuL3Rva2VuU2xpY2VcIjtcblxuY29uc3QgcGVvcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZTogW10sXG4gICAgY291bnQ6IDYsXG4gICAgLy8gcGFnZTogMSxcbiAgICB0b3RhbFVzZXJzOiAwLFxuICAgIGRhdGFJc0xvYWRpbmc6IHRydWUsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Q291bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5jb3VudCA9XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkID09PSB1bmRlZmluZWQgPyBzdGF0ZS5jb3VudCArIDYgOiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnBlb3BsZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJzO1xuICAgICAgc3RhdGUudG90YWxVc2VycyA9IGFjdGlvbi5wYXlsb2FkLnRvdGFsX3VzZXJzO1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlL3NldFBlb3BsZVwiLFxuICBhc3luYyAoeyBjb3VudCB9LCB7IGRpc3BhdGNoLCByZWplY3RXaXRoVmFsdWUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9jb3VudD0ke2NvdW50fWBcbiAgICAgICk7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgZXJyb3JcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcbmV4cG9ydCBjb25zdCBwb3N0Q2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlL3Bvc3RDYXJkXCIsXG4gIGFzeW5jIChmb3JtRGF0YSwgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IHRva2VuID0gc3RhdGUudG9rZW5TbGljZS50b2tlbjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0VG9rZW4oKSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAvLyBhd2FpdCBmZXRjaChcbiAgICAgIC8vICAgXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIixcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiwgVG9rZW46IHRva2VuIH0sXG4gICAgICAvLyAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIClcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gICAgIGlmIChyZXMub2spIHtcbiAgICAgIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcInByb2NjZXNzIHNlcnZlciBlcnJvcnNcIik7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAvLyAgIH0pO1xuICAgICAgZGlzcGF0Y2goc2V0Q291bnQoNikpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVvcGxlU2xpY2UucmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7IHNldENvdW50LCBzZXRQYWdlIH0gPSBwZW9wbGVTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInNldFRva2VuIiwicGVvcGxlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicGVvcGxlIiwiY291bnQiLCJ0b3RhbFVzZXJzIiwiZGF0YUlzTG9hZGluZyIsInJlZHVjZXJzIiwic2V0Q291bnQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ1bmRlZmluZWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJzZXRQZW9wbGUiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwidXNlcnMiLCJ0b3RhbF91c2VycyIsInJlamVjdGVkIiwiZXJyb3IiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibWFzc2FnZSIsInBvc3RDYXJkIiwiZm9ybURhdGEiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIiwic2V0UGFnZSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});