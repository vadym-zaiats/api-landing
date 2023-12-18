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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postCard: function() { return /* binding */ postCard; },\n/* harmony export */   setPeople: function() { return /* binding */ setPeople; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenSlice */ \"(app-pages-browser)/./src/redux/slices/tokenSlice.js\");\n\n\nconst peoplelice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"people\",\n    initialState: {\n        people: [],\n        totalUsers: 0,\n        dataIsLoading: true\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(setPeople.pending, (state)=>{\n            state.dataIsLoading = true;\n        });\n        builder.addCase(setPeople.fulfilled, (state, action)=>{\n            state.people = action.payload.users;\n            state.totalUsers = action.payload.total_users;\n            state.dataIsLoading = false;\n        });\n        builder.addCase(setPeople.rejected, (state, action)=>{\n            state.dataIsLoading = false;\n            state.error = action.error;\n        });\n    }\n});\nconst setPeople = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/setpeople\", async (param, param1)=>{\n    let { page } = param, { dispatch, rejectWithValue } = param1;\n    const data = await fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=\".concat(page, \"&count=6\")).then((res)=>res.json());\n    return data;\n});\nconst postCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"people/postCard\", async (formData, param)=>{\n    let { dispatch, rejectWithValue, getState } = param;\n    // const state = getState();\n    // const token = state.tokenSlice.token;\n    try {\n        const res = await dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_0__.setToken)());\n        console.log(formData);\n        // try {\n        //   fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n        //     method: \"POST\",\n        //     headers: {\n        //       \"Content-Type\": \"application/json\",\n        //       Authorization: token,\n        //     },\n        //     body: JSON.stringify({\n        //       name,\n        //       email,\n        //       phone,\n        //       position,\n        //       photo,\n        //     }),\n        //   })\n        //     .then((res) => {\n        //       if (res.ok) {\n        //         //     renderAdminPage();\n        //         //     return res.text();\n        //       } else {\n        //         //     renderWrongPage();\n        //         //     console.log(\"Невірний логін або пароль\");\n        //       }\n        //     })\n        //     .then((data) => {\n        //       console.log(\"Server responce:\", data);\n        //     });\n        // } catch (error) {\n        //   console.error(\"Error:\", error);\n        // }\n        fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n            method: \"POST\",\n            headers: {\n                Token: token\n            },\n            body: formData\n        }).then((res)=>{\n            if (res.ok) {\n                return res.json();\n            } else {\n                console.error(\"Something went wrong\");\n            }\n        }).then((data)=>{\n            console.log(data);\n            if (data.success) {\n                console.log(data);\n            } else {\n                \"proccess server errors\";\n            }\n        }).catch((error)=>{\n            console.error(error);\n        });\n    } catch (error) {\n        return rejectWithValue(error.massage);\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (peoplelice.reducer);\nconst {} = peoplelice.actions; // var formData = new FormData();\n // var fileField = document.querySelector('input[type=\"file\"]');\n // formData.append(\"position_id\", 2);\n // formData.append(\"name\", \"Jhon\");\n // formData.append(\"email\", \"Jhon@gmail.com\");\n // formData.append(\"phone\", \"+380955388485\");\n // formData.append(\"photo\", fileField.files[0]);\n // fetch(\"https://frontend-test-assignment-api.abz.agency/api/v1/users\", {\n //   method: \"POST\",\n //   body: formData,\n //   headers: { Token: token },\n // })\n //   .then(function (response) {\n //     return response.json();\n //   })\n //   .then(function (data) {\n //     console.log(data);\n //     if (data.success) {\n //       (\"process success response\");\n //     } else {\n //       (\"proccess server errors\");\n //     }\n //   })\n //   .catch(function (error) {\n //     \"proccess network errors\";\n //   });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zbGljZXMvcGVvcGxlU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN6QjtBQUV4QyxNQUFNRyxhQUFhSCw2REFBV0EsQ0FBQztJQUM3QkksTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFFBQVEsRUFBRTtRQUNWQyxZQUFZO1FBQ1pDLGVBQWU7SUFDakI7SUFDQUMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNDLFVBQVVDLE9BQU8sRUFBRSxDQUFDQztZQUNsQ0EsTUFBTU4sYUFBYSxHQUFHO1FBQ3hCO1FBQ0FFLFFBQVFDLE9BQU8sQ0FBQ0MsVUFBVUcsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzNDRixNQUFNUixNQUFNLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ0MsS0FBSztZQUNuQ0osTUFBTVAsVUFBVSxHQUFHUyxPQUFPQyxPQUFPLENBQUNFLFdBQVc7WUFDN0NMLE1BQU1OLGFBQWEsR0FBRztRQUN4QjtRQUNBRSxRQUFRQyxPQUFPLENBQUNDLFVBQVVRLFFBQVEsRUFBRSxDQUFDTixPQUFPRTtZQUMxQ0YsTUFBTU4sYUFBYSxHQUFHO1lBQ3RCTSxNQUFNTyxLQUFLLEdBQUdMLE9BQU9LLEtBQUs7UUFDNUI7SUFDRjtBQUNGO0FBQ08sTUFBTVQsWUFBWVgsa0VBQWdCQSxDQUN2QyxvQkFDQTtRQUFPLEVBQUVxQixJQUFJLEVBQUUsVUFBRSxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUM1QyxNQUFNQyxPQUFPLE1BQU1DLE1BQ2pCLHFFQUEwRSxPQUFMSixNQUFLLGFBQzFFSyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUN4QixPQUFPSjtBQUNULEdBQ0E7QUFDSyxNQUFNSyxXQUFXN0Isa0VBQWdCQSxDQUN0QyxtQkFDQSxPQUFPOEI7UUFBVSxFQUFFUixRQUFRLEVBQUVDLGVBQWUsRUFBRVEsUUFBUSxFQUFFO0lBQ3RELDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsSUFBSTtRQUNGLE1BQU1KLE1BQU0sTUFBTUwsU0FBU3JCLHFEQUFRQTtRQUNuQytCLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixRQUFRO1FBQ1IsNEVBQTRFO1FBQzVFLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsNENBQTRDO1FBQzVDLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsVUFBVTtRQUNWLE9BQU87UUFDUCx1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLG9DQUFvQztRQUNwQyxvQ0FBb0M7UUFDcEMsaUJBQWlCO1FBQ2pCLG9DQUFvQztRQUNwQywyREFBMkQ7UUFDM0QsVUFBVTtRQUNWLFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIsK0NBQStDO1FBQy9DLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsb0NBQW9DO1FBQ3BDLElBQUk7UUFDSkwsTUFBTSxnRUFBZ0U7WUFDcEVTLFFBQVE7WUFDUkMsU0FBUztnQkFBRUMsT0FBT0M7WUFBTTtZQUN4QkMsTUFBTVI7UUFDUixHQUNHSixJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxJQUFJWSxFQUFFLEVBQUU7Z0JBQ1YsT0FBT1osSUFBSUMsSUFBSTtZQUNqQixPQUFPO2dCQUNMSSxRQUFRWixLQUFLLENBQUM7WUFDaEI7UUFDRixHQUNDTSxJQUFJLENBQUMsQ0FBQ0Y7WUFDTFEsUUFBUUMsR0FBRyxDQUFDVDtZQUNaLElBQUlBLEtBQUtnQixPQUFPLEVBQUU7Z0JBQ2hCUixRQUFRQyxHQUFHLENBQUNUO1lBQ2QsT0FBTztnQkFDSjtZQUNIO1FBQ0YsR0FDQ2lCLEtBQUssQ0FBQyxDQUFDckI7WUFDTlksUUFBUVosS0FBSyxDQUFDQTtRQUNoQjtJQUNKLEVBQUUsT0FBT0EsT0FBTztRQUNkLE9BQU9HLGdCQUFnQkgsTUFBTXNCLE9BQU87SUFDdEM7QUFDRixHQUNBO0FBRUYsK0RBQWV4QyxXQUFXeUMsT0FBTyxFQUFDO0FBQzNCLE1BQU0sRUFBRSxHQUFHekMsV0FBVzBDLE9BQU8sQ0FBQyxDQUVyQyxpQ0FBaUM7Q0FFakMsZ0VBQWdFO0NBQ2hFLHFDQUFxQztDQUNyQyxtQ0FBbUM7Q0FDbkMsOENBQThDO0NBQzlDLDZDQUE2QztDQUM3QyxnREFBZ0Q7Q0FFaEQsMEVBQTBFO0NBQzFFLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsK0JBQStCO0NBQy9CLEtBQUs7Q0FDTCxnQ0FBZ0M7Q0FDaEMsOEJBQThCO0NBQzlCLE9BQU87Q0FDUCw0QkFBNEI7Q0FDNUIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQixzQ0FBc0M7Q0FDdEMsZUFBZTtDQUNmLG9DQUFvQztDQUNwQyxRQUFRO0NBQ1IsT0FBTztDQUNQLDhCQUE4QjtDQUM5QixpQ0FBaUM7Q0FDakMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2xpY2VzL3Blb3BsZVNsaWNlLmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgc2V0VG9rZW4gfSBmcm9tIFwiLi90b2tlblNsaWNlXCI7XG5cbmNvbnN0IHBlb3BsZWxpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicGVvcGxlXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHBlb3BsZTogW10sXG4gICAgdG90YWxVc2VyczogMCxcbiAgICBkYXRhSXNMb2FkaW5nOiB0cnVlLFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2Uoc2V0UGVvcGxlLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnBlb3BsZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJzO1xuICAgICAgc3RhdGUudG90YWxVc2VycyA9IGFjdGlvbi5wYXlsb2FkLnRvdGFsX3VzZXJzO1xuICAgICAgc3RhdGUuZGF0YUlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShzZXRQZW9wbGUucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICB9KTtcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNldFBlb3BsZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicGVvcGxlL3NldHBlb3BsZVwiLFxuICBhc3luYyAoeyBwYWdlIH0sIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZnJvbnRlbmQtdGVzdC1hc3NpZ25tZW50LWFwaS5hYnouYWdlbmN5L2FwaS92MS91c2Vycz9wYWdlPSR7cGFnZX0mY291bnQ9NmBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbik7XG5leHBvcnQgY29uc3QgcG9zdENhcmQgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInBlb3BsZS9wb3N0Q2FyZFwiLFxuICBhc3luYyAoZm9ybURhdGEsIHsgZGlzcGF0Y2gsIHJlamVjdFdpdGhWYWx1ZSwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIC8vIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAvLyBjb25zdCB0b2tlbiA9IHN0YXRlLnRva2VuU2xpY2UudG9rZW47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc3BhdGNoKHNldFRva2VuKCkpO1xuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgZmV0Y2goXCJodHRwczovL2Zyb250ZW5kLXRlc3QtYXNzaWdubWVudC1hcGkuYWJ6LmFnZW5jeS9hcGkvdjEvdXNlcnNcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAvLyAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWUsXG4gICAgICAvLyAgICAgICBlbWFpbCxcbiAgICAgIC8vICAgICAgIHBob25lLFxuICAgICAgLy8gICAgICAgcG9zaXRpb24sXG4gICAgICAvLyAgICAgICBwaG90byxcbiAgICAgIC8vICAgICB9KSxcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAvLyAgICAgICAgIC8vICAgICByZW5kZXJBZG1pblBhZ2UoKTtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgICAgLy8gICAgIHJlbmRlcldyb25nUGFnZSgpO1xuICAgICAgLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLQndC10LLRltGA0L3QuNC5INC70L7Qs9GW0L0g0LDQsdC+INC/0LDRgNC+0LvRjFwiKTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciByZXNwb25jZTpcIiwgZGF0YSk7XG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIC8vIH1cbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBUb2tlbjogdG9rZW4gfSxcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChcInByb2NjZXNzIHNlcnZlciBlcnJvcnNcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1hc3NhZ2UpO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcGVvcGxlbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHt9ID0gcGVvcGxlbGljZS5hY3Rpb25zO1xuXG4vLyB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuLy8gdmFyIGZpbGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XG4vLyBmb3JtRGF0YS5hcHBlbmQoXCJwb3NpdGlvbl9pZFwiLCAyKTtcbi8vIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgXCJKaG9uXCIpO1xuLy8gZm9ybURhdGEuYXBwZW5kKFwiZW1haWxcIiwgXCJKaG9uQGdtYWlsLmNvbVwiKTtcbi8vIGZvcm1EYXRhLmFwcGVuZChcInBob25lXCIsIFwiKzM4MDk1NTM4ODQ4NVwiKTtcbi8vIGZvcm1EYXRhLmFwcGVuZChcInBob3RvXCIsIGZpbGVGaWVsZC5maWxlc1swXSk7XG5cbi8vIGZldGNoKFwiaHR0cHM6Ly9mcm9udGVuZC10ZXN0LWFzc2lnbm1lbnQtYXBpLmFiei5hZ2VuY3kvYXBpL3YxL3VzZXJzXCIsIHtcbi8vICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgYm9keTogZm9ybURhdGEsXG4vLyAgIGhlYWRlcnM6IHsgVG9rZW46IHRva2VuIH0sXG4vLyB9KVxuLy8gICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICB9KVxuLy8gICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbi8vICAgICAgIChcInByb2Nlc3Mgc3VjY2VzcyByZXNwb25zZVwiKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgKFwicHJvY2Nlc3Mgc2VydmVyIGVycm9yc1wiKTtcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbi8vICAgICBcInByb2NjZXNzIG5ldHdvcmsgZXJyb3JzXCI7XG4vLyAgIH0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsInNldFRva2VuIiwicGVvcGxlbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwZW9wbGUiLCJ0b3RhbFVzZXJzIiwiZGF0YUlzTG9hZGluZyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInNldFBlb3BsZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJ1c2VycyIsInRvdGFsX3VzZXJzIiwicmVqZWN0ZWQiLCJlcnJvciIsInBhZ2UiLCJkaXNwYXRjaCIsInJlamVjdFdpdGhWYWx1ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicG9zdENhcmQiLCJmb3JtRGF0YSIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJUb2tlbiIsInRva2VuIiwiYm9keSIsIm9rIiwic3VjY2VzcyIsImNhdGNoIiwibWFzc2FnZSIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/slices/peopleSlice.js\n"));

/***/ })

});