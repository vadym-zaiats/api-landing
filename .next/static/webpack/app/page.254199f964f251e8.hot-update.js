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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setMaxResult: function() { return /* binding */ setMaxResult; },\n/* harmony export */   setPeoples: function() { return /* binding */ setPeoples; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peopleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"peoples\",\n    initialState: {\n        peoples: [],\n        maxRes: 0,\n        isLoading: false\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeoples.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setPeoples.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.peoples = action.payload;\n        });\n        builder.addCase(setPeoples.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n        builder.addCase(setMaxResult.pending, (state)=>{\n            state.isLoading = true;\n        });\n        builder.addCase(setMaxResult.fulfilled, (state, action)=>{\n            state.isLoading = false;\n            state.maxRes = action.payload;\n        });\n        builder.addCase(setMaxResult.rejected, (state, action)=>{\n            state.isLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeoples = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/setPeoples\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data.users;\n});\nconst setMaxResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/setMaxResult\", async (_, param)=>{\n    let { dispatch, rejectWithValue } = param;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?count=100\").then((res)=>res.json());\n    return data.users.length;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"peoples/postCard\", async (param, param1)=>{\n    let { name, email, phone, position, position_id, photo } = param, { dispatch, rejectWithValue, getState } = param1;\n    const state = getState();\n    const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(\"setToken() result:\", res);\n        try {\n            fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: token\n                },\n                body: JSON.stringify({\n                    name,\n                    email,\n                    phone,\n                    position,\n                    position_id,\n                    photo\n                })\n            }).then((res)=>{\n                if (res.ok) {\n                //     renderAdminPage();\n                //     return res.text();\n                } else {\n                //     renderWrongPage();\n                //     console.log(\"Невірний логін або пароль\");\n                }\n            }).then((data)=>{\n                console.log(\"Server responce:\", data);\n            });\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peopleSlice.reducer);\nconst {} = peopleSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUU7QUFDekI7QUFFeEMsTUFBTUcsY0FBY0gsNkRBQVdBLENBQUM7SUFDOUJJLE1BQU07SUFDTkMsY0FBYztRQUNaQyxTQUFTLEVBQUU7UUFDWEMsUUFBUTtRQUNSQyxXQUFXO0lBQ2I7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNDLFdBQVdDLE9BQU8sRUFBRSxDQUFDQztZQUNuQ0EsTUFBTU4sU0FBUyxHQUFHO1FBQ3BCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsV0FBV0csU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzVDRixNQUFNTixTQUFTLEdBQUc7WUFDbEJNLE1BQU1SLE9BQU8sR0FBR1UsT0FBT0MsT0FBTztRQUNoQztRQUNBUCxRQUFRQyxPQUFPLENBQUNDLFdBQVdNLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUMzQ0YsTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNSyxLQUFLLEdBQUdILE9BQU9HLEtBQUs7UUFDNUI7UUFDQVQsUUFBUUMsT0FBTyxDQUFDUyxhQUFhUCxPQUFPLEVBQUUsQ0FBQ0M7WUFDckNBLE1BQU1OLFNBQVMsR0FBRztRQUNwQjtRQUNBRSxRQUFRQyxPQUFPLENBQUNTLGFBQWFMLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUM5Q0YsTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNUCxNQUFNLEdBQUdTLE9BQU9DLE9BQU87UUFDL0I7UUFDQVAsUUFBUUMsT0FBTyxDQUFDUyxhQUFhRixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDN0NGLE1BQU1OLFNBQVMsR0FBRztZQUNsQk0sTUFBTUssS0FBSyxHQUFHSCxPQUFPRyxLQUFLO1FBQzVCO0lBQ0Y7QUFDRjtBQUNPLE1BQU1QLGFBQWFYLGtFQUFnQkEsQ0FDeEMsc0JBQ0E7UUFBTyxFQUFFb0IsSUFBSSxFQUFFLFVBQUUsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDNUMsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQixxRUFBMEUsT0FBTEosTUFBSyxhQUMxRUssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0osS0FBS0ssS0FBSztBQUNuQixHQUNBO0FBQ0ssTUFBTVQsZUFBZW5CLGtFQUFnQkEsQ0FDMUMsd0JBQ0EsT0FBTzZCO1FBQUcsRUFBRVIsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDckMsTUFBTUMsT0FBTyxNQUFNQyxNQUNoQiwwRUFDREMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDeEIsT0FBT0osS0FBS0ssS0FBSyxDQUFDRSxNQUFNO0FBQzFCLEdBQ0E7QUFFSyxNQUFNQyxXQUFXL0Isa0VBQWdCQSxDQUN0QyxvQkFDQTtRQUNFLEVBQUVHLElBQUksRUFBRTZCLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFLFVBQ3BELEVBQUVmLFFBQVEsRUFBRUMsZUFBZSxFQUFFZSxRQUFRLEVBQUU7SUFFdkMsTUFBTXhCLFFBQVF3QjtJQUNkLE1BQU1DLFFBQVF6QixNQUFNMEIsVUFBVSxDQUFDRCxLQUFLO0lBQ3BDLElBQUk7UUFDRixNQUFNWixNQUFNLE1BQU1MLFNBQVNwQixxREFBUUE7UUFDbkN1QyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCZjtRQUNsQyxJQUFJO1lBQ0ZGLE1BQU0sZ0VBQWdFO2dCQUNwRWtCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO29CQUNoQkMsZUFBZU47Z0JBQ2pCO2dCQUNBTyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CNUM7b0JBQ0E2QjtvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUM7Z0JBQ0Y7WUFDRixHQUNHWCxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0wsSUFBSUEsSUFBSXNCLEVBQUUsRUFBRTtnQkFDVix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDM0IsT0FBTztnQkFDTCx5QkFBeUI7Z0JBQ3pCLGdEQUFnRDtnQkFDbEQ7WUFDRixHQUNDdkIsSUFBSSxDQUFDLENBQUNGO2dCQUNMaUIsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmxCO1lBQ2xDO1FBQ0osRUFBRSxPQUFPTCxPQUFPO1lBQ2RzQixRQUFRdEIsS0FBSyxDQUFDLFVBQVVBO1FBQzFCO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2QsT0FBT0ksZ0JBQWdCSixNQUFNK0IsT0FBTztJQUN0QztBQUNGLEdBQ0E7QUFFRiwrREFBZS9DLFlBQVlnRCxPQUFPLEVBQUM7QUFDNUIsTUFBTSxFQUFFLEdBQUdoRCxZQUFZaUQsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzZXRUb2tlbiB9IGZyb20gXCIuL3Rva2VuU2xpY2VcIjtcblxuY29uc3QgcGVvcGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlc1wiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBwZW9wbGVzOiBbXSxcbiAgICBtYXhSZXM6IDAsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wZW9wbGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNldFBlb3BsZXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRNYXhSZXN1bHQucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRNYXhSZXN1bHQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5tYXhSZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0TWF4UmVzdWx0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvc2V0UGVvcGxlc1wiLFxuICBhc3luYyAoeyBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9NmBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGEudXNlcnM7XG4gIH1cbik7XG5leHBvcnQgY29uc3Qgc2V0TWF4UmVzdWx0ID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJwZW9wbGVzL3NldE1heFJlc3VsdFwiLFxuICBhc3luYyAoXywgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzP2NvdW50PTEwMGBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGEudXNlcnMubGVuZ3RoO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZXMvcG9zdENhcmRcIixcbiAgYXN5bmMgKFxuICAgIHsgbmFtZSwgZW1haWwsIHBob25lLCBwb3NpdGlvbiwgcG9zaXRpb25faWQsIHBob3RvIH0sXG4gICAgeyBkaXNwYXRjaCwgcmVqZWN0V2l0aFZhbHVlLCBnZXRTdGF0ZSB9XG4gICkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB0b2tlbiA9IHN0YXRlLnRva2VuU2xpY2UudG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNldFRva2VuKCkpO1xuICAgICAgY29uc29sZS5sb2coXCJzZXRUb2tlbigpIHJlc3VsdDpcIiwgcmVzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb25faWQsXG4gICAgICAgICAgICBwaG90byxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgIC8vICAgICByZW5kZXJBZG1pblBhZ2UoKTtcbiAgICAgICAgICAgICAgLy8gICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gICAgIHJlbmRlcldyb25nUGFnZSgpO1xuICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLQndC10LLRltGA0L3QuNC5INC70L7Qs9GW0L0g0LDQsdC+INC/0LDRgNC+0LvRjFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciByZXNwb25jZTpcIiwgZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvci5tYXNzYWdlKTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHBlb3BsZVNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3Qge30gPSBwZW9wbGVTbGljZS5hY3Rpb25zO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInNldFRva2VuIiwicGVvcGxlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicGVvcGxlcyIsIm1heFJlcyIsImlzTG9hZGluZyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZXMiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJlcnJvciIsInNldE1heFJlc3VsdCIsInBhZ2UiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidXNlcnMiLCJfIiwibGVuZ3RoIiwicG9zdENhcmQiLCJlbWFpbCIsInBob25lIiwicG9zaXRpb24iLCJwb3NpdGlvbl9pZCIsInBob3RvIiwiZ2V0U3RhdGUiLCJ0b2tlbiIsInRva2VuU2xpY2UiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibWFzc2FnZSIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});