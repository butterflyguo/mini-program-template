/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// app.js\nApp({\n  onLaunch() {\n    // 展示本地存储能力\n    const logs = wx.getStorageSync('logs') || []\n    logs.unshift(Date.now())\n    wx.setStorageSync('logs', logs)\n\n    // 登录\n    wx.login({\n      success: res => {\n        // 发送 res.code 到后台换取 openId, sessionKey, unionId\n      }\n    })\n  },\n  globalData: {\n    userInfo: null\n  }\n})\n\n\n//# sourceURL=webpack://wachat-wepack-template/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;