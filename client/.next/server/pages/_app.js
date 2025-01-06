"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst buildClient = ({ req })=>{\n    if (true) {\n        //We are on the server!\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7SUFDeEIsSUFBRyxJQUE2QixFQUFDO1FBQzdCLHVCQUF1QjtRQUN2QixPQUFPRixvREFBWSxDQUFDO1lBQ2hCSSxTQUFVO1lBQ1ZDLFNBQVVILElBQUlHLE9BQU87UUFDekI7SUFDSixPQUNJLEVBTUg7QUFDTDtBQUVBLGlFQUFlSixXQUFXQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMveWFzaHR5YWdpL0Rlc2t0b3AvVGlja2V0L2NsaWVudC9hcGkvYnVpbGQtY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYnVpbGRDbGllbnQgPSAoeyByZXEgfSkgPT4ge1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgLy9XZSBhcmUgb24gdGhlIHNlcnZlciFcbiAgICAgICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMIDogJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXG4gICAgICAgICAgICBoZWFkZXJzIDogcmVxLmhlYWRlcnNcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgLy9XZSBhcmUgb24gdGhlIGJyb3dzZXIhXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTCA6ICcvJ1xuICAgICAgICB9KVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZENsaWVudDsiXSwibmFtZXMiOlsiYXhpb3MiLCJidWlsZENsaWVudCIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Header = ({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: 'Sign Up',\n            href: '/auth/signup'\n        },\n        !currentUser && {\n            label: 'Sign In',\n            href: '/auth/signin'\n        },\n        currentUser && {\n            label: 'Sign Out',\n            href: '/auth/signout'\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        }, href, false, {\n            fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yashtyagi/Desktop/Ticket/client/components/header.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsTUFBTUMsU0FBUyxDQUFDLEVBQUNDLFdBQVcsRUFBQztJQUN6QixNQUFNQyxRQUFRO1FBQ1gsQ0FBQ0QsZUFBZTtZQUNYRSxPQUFRO1lBQ1JDLE1BQU87UUFDWDtRQUNBLENBQUNILGVBQWU7WUFDWkUsT0FBUTtZQUNSQyxNQUFPO1FBQ1g7UUFDQUgsZUFBZTtZQUNYRSxPQUFRO1lBQ1JDLE1BQU87UUFDWDtLQUNILENBQUNDLE1BQU0sQ0FBRUMsQ0FBQUEsYUFBY0EsWUFDdkJDLEdBQUcsQ0FBRSxDQUFDLEVBQUVKLEtBQUssRUFBR0MsSUFBSSxFQUFDO1FBQ2xCLHFCQUFPLDhEQUFDSTtZQUFjQyxXQUFVO3NCQUM1Qiw0RUFBQ1Ysa0RBQUlBO2dCQUFDSyxNQUFNQTswQkFDUEQ7Ozs7OztXQUZPQzs7Ozs7SUFLcEI7SUFFQSxxQkFDSSw4REFBQ007UUFBSUQsV0FBVTs7MEJBQ1gsOERBQUNWLGtEQUFJQTtnQkFBQ1UsV0FBVTtnQkFBZUwsTUFBSzswQkFBSTs7Ozs7OzBCQUl4Qyw4REFBQ087Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUNUUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7QUFFQSxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3lhc2h0eWFnaS9EZXNrdG9wL1RpY2tldC9jbGllbnQvY29tcG9uZW50cy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoe2N1cnJlbnRVc2VyfSkgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gW1xuICAgICAgICFjdXJyZW50VXNlciAmJiB7XG4gICAgICAgICAgICBsYWJlbCA6ICdTaWduIFVwJyxcbiAgICAgICAgICAgIGhyZWYgOiAnL2F1dGgvc2lnbnVwJ1xuICAgICAgICB9LFxuICAgICAgICAhY3VycmVudFVzZXIgJiYge1xuICAgICAgICAgICAgbGFiZWwgOiAnU2lnbiBJbicsXG4gICAgICAgICAgICBocmVmIDogJy9hdXRoL3NpZ25pbidcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFVzZXIgJiYge1xuICAgICAgICAgICAgbGFiZWwgOiAnU2lnbiBPdXQnLFxuICAgICAgICAgICAgaHJlZiA6ICcvYXV0aC9zaWdub3V0J1xuICAgICAgICB9XG4gICAgXS5maWx0ZXIoIGxpbmtDb25maWcgPT4gbGlua0NvbmZpZylcbiAgICAubWFwKCAoeyBsYWJlbCAsIGhyZWZ9KSA9PiB7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICBHaXRUaXhcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiTGluayIsIkhlYWRlciIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJ1bCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst MyApp = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yashtyagi/Desktop/Ticket/client/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/yashtyagi/Desktop/Ticket/client/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yashtyagi/Desktop/Ticket/client/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nMyApp.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get('/api/users/currentuser');\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUUxQyxNQUFNRSxRQUFRLENBQUMsRUFBRUMsU0FBUyxFQUFHQyxTQUFTLEVBQUdDLFdBQVcsRUFBQztJQUNqRCxxQkFDQSw4REFBQ0M7OzBCQUNHLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFFaEM7QUFFQUYsTUFBTUssZUFBZSxHQUFHLE9BQU9DO0lBQzNCLE1BQU1DLFNBQVNULDZEQUFXQSxDQUFDUSxXQUFXRSxHQUFHO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsT0FBT0csR0FBRyxDQUFDO0lBQ2xDLElBQUlSLFlBQVksQ0FBQztJQUNqQixJQUFHSSxXQUFXTCxTQUFTLENBQUNJLGVBQWUsRUFBQztRQUNwQ0gsWUFBWSxNQUFNSSxXQUFXTCxTQUFTLENBQUNJLGVBQWUsQ0FBQ0MsV0FBV0UsR0FBRztJQUN6RTtJQUNBLE9BQU07UUFDRk47UUFDQSxHQUFHTyxJQUFJO0lBQ1g7QUFDSjtBQUNBLGlFQUFlVCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMveWFzaHR5YWdpL0Rlc2t0b3AvVGlja2V0L2NsaWVudC9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICwgY3VycmVudFVzZXJ9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgPC9kaXY+KVxufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgaWYoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4KTtcbiAgICB9XG4gICAgcmV0dXJue1xuICAgICAgICBwYWdlUHJvcHMsXG4gICAgICAgIC4uLmRhdGFcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJIZWFkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwiZGl2IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();