/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --zinc700: #3f3f46;\n}\n\nhtml, body {\n    height: 100vh;\n    margin: 0;\n    font-family: system-ui, \"Segoe UI\", 'Roboto', Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--zinc700);\n    color: white;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    height: inherit;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 50px;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n}\n.btn-and-display {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: grid;\n    justify-content: center;\n}\n\n.display, .ship-type {\n    text-align: center;\n    padding: 15px;\n    font-size: 1.3rem;\n}\n\n.rotate, .reset {\n    font-size: 1.5rem;\n    padding: 15px 25px;\n    background-color: #475569;\n    color: white;\n    border: 2px solid black;\n    border-radius: 8px;\n}\n\n.rotate:active, .reset:active {\n    background-color: #64748b;\n}\n\n.gameboard-container {\n    display: flex;\n    grid-column: 1 / 3;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.github-icon {\n    width: 40px\n}\n\n.player-gameboard, .ai-gameboard {\n    display: flex;\n    height: fit-content;\n    width: 375px;\n    flex-wrap: wrap;\n}\n\n.gameboard-square, .ai-gameboard-square {\n    height: 35px;\n    width: 35px;\n    border: 1px solid white;\n    cursor: pointer;\n}\n\n.ship-placement, .hover-placement {\n    background-color: green;\n}\n\n.missed {\n    background-color: blue;\n}\n\n.hit {\n    background-color: red;\n}\n\n.ai-gameboard-square + .hover-color {\n    background-color: rgba(141, 135, 141, 0.315);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAiBoardListeners: () => (/* binding */ addAiBoardListeners),\n/* harmony export */   announceWinner: () => (/* binding */ announceWinner),\n/* harmony export */   createAiBoard: () => (/* binding */ createAiBoard),\n/* harmony export */   createPlayerBoard: () => (/* binding */ createPlayerBoard),\n/* harmony export */   displayGameEvents: () => (/* binding */ displayGameEvents),\n/* harmony export */   markHit: () => (/* binding */ markHit),\n/* harmony export */   markMissedShot: () => (/* binding */ markMissedShot),\n/* harmony export */   removeAiBoardListeners: () => (/* binding */ removeAiBoardListeners)\n/* harmony export */ });\n/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ \"./src/gameloop.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']\n\nlet shipTypes = [ 'patrolBoat', 'submarine', 'destroyer', 'battleship', 'carrier' ]\nlet shipLength = 5;\nlet shipDirection = 'vertical';\nlet rotateBTN = document.querySelector('.rotate');\nrotateBTN.addEventListener('click', () => {\n    if (shipDirection === 'horizontal') {\n        shipDirection = 'vertical';\n    } else {\n        shipDirection = 'horizontal';\n    }\n})\n\nfunction createPlayerBoard() {\n    const gameboardContainer = document.querySelector('.gameboard-container')\n    const gameboard = document.createElement('div')\n    gameboard.classList.add('player-gameboard')\n    for (let i = 0; i < 10; i++) {\n        for (let j = 1; j < 11; j++) {\n            const gameboardSquare = document.createElement('div');\n            gameboardSquare.classList.add('gameboard-square');\n            gameboardSquare.setAttribute('data-square-vertex', `${j}${yAxis[i]}`)\n            gameboard.appendChild(gameboardSquare);\n        }\n    }\n    gameboardContainer.appendChild(gameboard)\n    addPlayerBoardListeners()\n}\n\nfunction createAiBoard() {\n    const gameboardContainer = document.querySelector('.gameboard-container')\n    const aiGameboard = document.createElement('div')\n    aiGameboard.classList.add('ai-gameboard')\n    for (let i = 0; i < 10; i++) {\n        for (let j = 1; j < 11; j++) {\n            const gameboardSquare = document.createElement('div')\n            gameboardSquare.classList.add('ai-gameboard-square')\n            gameboardSquare.setAttribute('data-square-vertex', `${j}${yAxis[i]}`)\n            aiGameboard.appendChild(gameboardSquare)\n        }\n    }\n    gameboardContainer.appendChild(aiGameboard)\n}\n\nfunction addPlayerBoardListeners() {\n    const gameboardSquares = document.querySelectorAll('.gameboard-square')\n    gameboardSquares.forEach((square) => {\n        square.addEventListener('mouseover', mouseHover)\n        square.addEventListener('mouseout', removeSquareHighlights)\n        square.addEventListener('click', mouseClick)\n    });\n}\n\nlet hovered = [];\nlet placement = [];\n\nfunction mouseHover() {\n    this.classList.add('hover-placement')\n    hovered.push(this)\n    let coords = this.dataset.squareVertex.split(\"\")\n    const gameboardSquares = document.querySelectorAll('.gameboard-square')\n    let i = 0\n    if (shipDirection === 'vertical') {\n        while (i < gameboardSquares.length) {\n            if (gameboardSquares[i] === this) {\n                break;\n            }\n            i++\n        }\n    }\n    let gameboardSquareElementSibling = this.nextSibling\n    let siblingCoords;\n    for (let j = 0; j < shipLength - 1; j++) {\n        if (shipDirection === 'horizontal' && gameboardSquareElementSibling) {\n            siblingCoords = gameboardSquareElementSibling.dataset.squareVertex.split(\"\")\n            if (siblingCoords[siblingCoords.length - 1] === coords[coords.length - 1]) {\n                hovered.push(gameboardSquareElementSibling)\n                if (gameboardSquareElementSibling.classList[1] !== 'ship-placement') gameboardSquareElementSibling.classList.add('hover-placement')\n                gameboardSquareElementSibling = gameboardSquareElementSibling.nextSibling\n            }\n        } else if (shipDirection === 'vertical') {\n            let verticalSiblingIndex = i + (10 * (j + 1))\n            if (verticalSiblingIndex < 100 && gameboardSquares[verticalSiblingIndex].classList[1] !== 'ship-placement') {\n                hovered.push(gameboardSquares[verticalSiblingIndex])\n                gameboardSquares[verticalSiblingIndex].classList.add('hover-placement')\n            }\n        }\n    }\n}\n\nfunction removeSquareHighlights() {\n    hovered.forEach(element => {\n        element.classList.remove('hover-placement')\n    })\n    hovered = []\n}\n\nlet ship = shipTypes.length - 1\nlet displayShipName = document.querySelector('.ship-type')\nlet shipName = shipTypes[ship].split('')\nshipName[0] = shipName[0].toUpperCase()\nshipName = shipName.join('')\ndisplayShipName.innerHTML = shipName\n\nfunction mouseClick() {\n    let coords = this.dataset.squareVertex.split(\"\")\n    if (coords.length > 2) {\n        coords[0] = coords[0] + coords.splice(1, 1)[0]\n    }\n    coords[0] = Number(coords[0])\n    let shipPlacement = (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.initShip)(coords, shipTypes[ship], shipDirection)\n    if (shipPlacement === false) {\n        alert(\"You can not have ships overlapping one another!\")\n        return\n    } else if (shipPlacement === 'invalid') {\n        alert(\"You can not place the ship here\")\n        return\n    }\n    ship -= 1\n    if (shipTypes[ship] !== 'submarine') \n        shipLength -= 1\n    if (shipTypes[ship] !== undefined) {\n        shipName = shipTypes[ship].split('')\n        shipName[0] = shipName[0].toUpperCase()\n        shipName = shipName.join('')\n        if (shipName === 'PatrolBoat')\n            displayShipName.innerHTML = 'Patrol Boat'\n        else\n            displayShipName.innerHTML = shipName\n    }\n    placement.push(hovered)\n    showPlayerShips(placement[placement.length - 1])\n    if (shipLength < 2) {\n        removePlayerBoardListeners()\n        adjustDisplay()\n        ;(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.startGame)()\n    }\n}\n\nfunction removePlayerBoardListeners() {\n    const gameboardSquares = document.querySelectorAll('.gameboard-square')\n    gameboardSquares.forEach((square) => {\n        square.removeEventListener('mouseover', mouseHover)\n        square.removeEventListener('mouseout', removeSquareHighlights)\n        square.removeEventListener('click', mouseClick)\n    });\n    removeSquareHighlights()\n}\n\nfunction addAiBoardListeners() {\n    const aiGameboardSquares = document.querySelectorAll('.ai-gameboard-square')\n    aiGameboardSquares.forEach((aiSquare) => {\n        aiSquare.addEventListener('click', parseElementAttackCoord)\n        aiSquare.addEventListener('mouseover', addAiSquareColorOnHover)\n        aiSquare.addEventListener('mouseout', removeAiSquareColorOffHover)\n    });\n}\n\nfunction removeAiBoardListeners() {\n    const aiGameboardSquares = document.querySelectorAll('.ai-gameboard-square')\n    aiGameboardSquares.forEach((aiSquare) => {\n        aiSquare.removeEventListener('click', parseElementAttackCoord)\n        aiSquare.removeEventListener('mouseover', addAiSquareColorOnHover)\n        aiSquare.removeEventListener('mouseout', removeAiSquareColorOffHover)\n    });\n}\n\nfunction parseElementAttackCoord() {\n    let coords = this.dataset.squareVertex.split(\"\")\n    if (coords.length > 2) {\n        coords[0] = coords[0] + coords.splice(1, 1)[0]\n    }\n    coords[0] = Number(coords[0])\n    ;(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.playerAttack)(coords)\n}\n\nfunction markMissedShot(missedShot, turn) {\n    let gameboardSquares;\n    if (turn === 'Player') {\n        gameboardSquares = document.querySelectorAll('.ai-gameboard-square')\n    } else {\n        gameboardSquares = document.querySelectorAll('.gameboard-square')\n    }\n    for (let i = 0; i < gameboardSquares.length; i++) {\n        let squareCoord = gameboardSquares[i].dataset.squareVertex.split(\"\")\n        if (squareCoord.length > 2) {\n            squareCoord[0] = squareCoord[0] + squareCoord.splice(1, 1)[0]\n        }\n        squareCoord[0] = Number(squareCoord[0])\n        if (squareCoord[0] === missedShot[0] && squareCoord[1] === missedShot[1]) {\n            gameboardSquares[i].classList.add('missed')\n            gameboardSquares[i].classList.remove('hover-color')\n        }\n    }\n}\n\nfunction markHit(attackCoords, turn) {\n    let gameboardSquares;\n    if (turn === 'Player') {\n        gameboardSquares = document.querySelectorAll('.ai-gameboard-square')\n    } else {\n        gameboardSquares = document.querySelectorAll('.gameboard-square')\n    }\n    for (let i = 0; i < gameboardSquares.length; i++) {\n        let squareCoord = gameboardSquares[i].dataset.squareVertex.split(\"\")\n        if (squareCoord.length > 2) {\n            squareCoord[0] = squareCoord[0] + squareCoord.splice(1, 1)[0]\n        }\n        squareCoord[0] = Number(squareCoord[0])\n        if (squareCoord[0] === attackCoords[0] && squareCoord[1] === attackCoords[1]) {\n            gameboardSquares[i].classList.add('hit')\n            gameboardSquares[i].classList.remove('hover-color')\n        }\n    }\n}\n\nfunction addAiSquareColorOnHover() {\n    if (this.classList[1] === 'missed' || this.classList[1] === 'hit') {\n        return\n    }\n    this.classList.add('hover-color')\n}\n\nfunction removeAiSquareColorOffHover() {\n    if (this.classList[1] === 'missed' || this.classList[1] === 'hit') {\n        return\n    }\n    this.classList.remove('hover-color')\n}\n\nfunction showPlayerShips(shipPlacement) {\n    removeSquareHighlights()\n    shipPlacement.forEach((element) => {\n        element.removeEventListener('mouseover', mouseHover)\n        element.removeEventListener('mouseout', removeSquareHighlights)\n        element.classList.add('ship-placement')\n    })\n}\n\nfunction announceWinner(winnerName) {\n    const display = document.querySelector('.display')\n    display.innerHTML = `The ${winnerName} is the winner!`\n}\n\nfunction displayGameEvents(message) {\n    const display = document.querySelector('.display')\n    display.innerHTML = message\n}\n\nfunction adjustDisplay() {\n    displayShipName.innerHTML = ''\n    rotateBTN.remove()\n    const display = document.querySelector('.display')\n    display.innerHTML = 'Attack'\n    displayShipName.remove()\n    const buttonAndDisplay = document.querySelector('.btn-and-display')\n    const resetBTN = document.createElement('button')\n    resetBTN.type = 'reset'\n    resetBTN.classList.add('reset')\n    resetBTN.innerHTML = 'Reset Game'\n    buttonAndDisplay.appendChild(resetBTN)\n    resetBTN.addEventListener('click', () => {\n        deleteBoards()\n        createPlayerBoard()\n        ;(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.resetGameStuff)()\n        resetBTN.remove()\n        resetDomStuff()\n    });\n}\n\nfunction deleteBoards() {\n    const gameboard = document.querySelector('.player-gameboard');\n    gameboard.remove()\n    const aiGameboard = document.querySelector('.ai-gameboard');\n    aiGameboard.remove()\n}\n\nfunction resetDomStuff() {\n    const buttonAndDisplay = document.querySelector('.btn-and-display')\n    const display = document.querySelector('.display')\n    display.innerHTML = 'Place your ships'\n    shipLength = 5;\n    shipDirection = 'vertical';\n    rotateBTN = document.createElement('button')\n    rotateBTN.classList.add('rotate')\n    rotateBTN.type = 'button'\n    rotateBTN.innerHTML = 'Rotate Ship'\n    buttonAndDisplay.appendChild(rotateBTN)\n    rotateBTN.addEventListener('click', () => {\n        if (shipDirection === 'horizontal') {\n            shipDirection = 'vertical';\n        } else {\n            shipDirection = 'horizontal';\n        }\n    })\n    placement = [];\n    ship = shipTypes.length - 1\n    shipName = shipTypes[ship].split('')\n    shipName[0] = shipName[0].toUpperCase()\n    shipName = shipName.join('')\n    displayShipName = document.createElement('span')\n    displayShipName.classList.add('ship-type')\n    displayShipName.innerHTML = shipName\n    buttonAndDisplay.appendChild(displayShipName)\n}\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n    constructor() {\n        this.xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n        this.yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']\n        this.ship = {}\n        this.missedShots = []\n        this.hits = []\n    }\n\n    receiveAttack(attackCoords) {\n        if (!this.xAxis.includes(attackCoords[0]) && !this.yAxis.includes(attackCoords[1]))\n            throw new Error('The attack coordinates are not within the gameboard')\n        if (this.missedShots.length > 0) {\n            for (let i = 0; i < this.missedShots.length; i++) {\n                if (this.missedShots[i][0] === attackCoords[0] && this.missedShots[i][1] === attackCoords[1]) {\n                    return 'already missed'\n                }\n            }\n        }\n        if (this.hits.length > 0) {\n            for (let i = 0; i < this.hits.length; i++) {\n                if (this.hits[i][0] === attackCoords[0] && this.hits[i][1] === attackCoords[1]) {\n                    return 'already hit'\n                }\n            }\n        }\n        const shipObjKeys = Object.keys(this.ship)\n        for (let i = 0; i < shipObjKeys.length; i++) {\n            const shipType = shipObjKeys[i]\n            const shipPlacement = this.ship[[shipType]][1]\n            for (let j = 0; j < shipPlacement.length; j++) {\n                if (shipPlacement[j][0] === attackCoords[0] && shipPlacement[j][1] === attackCoords[1]) {\n                    if (this.ship[[shipType]][0].sunk) return 'sunk';\n                    this.ship[[shipType]][0].hit()\n                    this.ship[[shipType]][0].isSunk()\n                    this.hits.push(attackCoords)\n                    return true;\n                }\n            }\n        }\n        this.missedShots.push(attackCoords)\n    }\n\n    createShipsPlacement(coords, shipType, direction = 'vertical') {\n        let shipObj;\n        if (shipType === 'carrier') {\n            shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5)\n        } else if (shipType === 'battleship') {\n            shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4)\n        } else if (shipType === 'destroyer') {\n            shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3)\n        } else if (shipType === 'submarine') {\n            shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3)\n        } else if (shipType === 'patrolBoat') {\n            shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2)\n        } else {\n            throw new Error('Ship type is not valid')\n        }\n        const boardPlacement = [coords]\n        for (let i = 1; i < shipObj.length; i++) {\n            if (direction === 'vertical') {\n                boardPlacement.push([coords[0], String.fromCharCode(coords[1].toString().charCodeAt(0) + i)])\n            } else {\n                boardPlacement.push([coords[0] + i , coords[1]])\n            }\n        }\n        for (let i = 0; i < boardPlacement.length; i++) {\n            if (this.checkIfShipPlacementOverlapsAnyOtherShip(boardPlacement[i]) === true) return false;\n        }\n        if (this.checkIfShipPlacementInGameBoard(boardPlacement)) {\n            this.ship[[shipType]] = [shipObj, boardPlacement]\n        } else {\n            return 'invalid'\n        }\n    }\n\n    checkIfShipPlacementInGameBoard(boardPlacement) {\n        for (let i = 0; i < boardPlacement.length; i++) {\n            if (!this.xAxis.includes(boardPlacement[i][0]) || !this.yAxis.includes(boardPlacement[i][1])) {\n                return false;\n            }\n        }\n        return true\n    }\n\n    checkIfShipPlacementOverlapsAnyOtherShip(placementVertex) {\n        const shipKeys = Object.keys(this.ship)\n        if (shipKeys.length === 0) {\n            return false\n        }\n        for (let i = 0; i < shipKeys.length; i++) {\n            const shipPlacement = this.ship[[shipKeys[i]]][1]\n            for (let j = 0; j < shipPlacement.length; j++) {\n                if (placementVertex[0] === shipPlacement[j][0] && placementVertex[1] === shipPlacement[j][1]) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n\n    checkIfAllShipsSunk() {\n        const keys = Object.keys(this.ship);\n        for (let i = 0; i < keys.length; i++) {\n            const shipType = keys[i];\n            const shipSunk = this.ship[[shipType]][0].sunk;\n            if (shipSunk === false) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initShip: () => (/* binding */ initShip),\n/* harmony export */   playerAttack: () => (/* binding */ playerAttack),\n/* harmony export */   resetGameStuff: () => (/* binding */ resetGameStuff),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\nlet player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player()\nlet aiPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__.Ai()\n\nfunction initShip(coords, shipType, direction) {\n    let returnValue = player.gameboard.createShipsPlacement(coords, shipType, direction)\n    if (returnValue === false) {\n        return false\n    } else if (returnValue === 'invalid') {\n        return 'invalid'\n    }\n}\n\nasync function initAiShips() {\n    let shipTypes = [ 'patrolBoat', 'submarine', 'destroyer', 'battleship', 'carrier' ]\n    let i = 4;\n    while (true) {\n        if (i < 0) {\n            break;\n        }\n        let aiPlacement = aiPlayer.gameboard.createShipsPlacement(aiPlayer.coordinatePick(), shipTypes[i], aiPlayer.directionPick())\n        if (aiPlacement === 'invalid' || aiPlacement === false) {\n            continue;\n        }\n        i -= 1\n    }\n}\n\nasync function startGame() {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createAiBoard)()\n    await initAiShips()\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addAiBoardListeners)()\n}\n\nfunction playerAttack(attackCoords) {\n    let attackStatus = aiPlayer.gameboard.receiveAttack(attackCoords)\n    if (attackStatus === 'already hit' || attackStatus === 'already missed') {\n        return\n    }\n    let turn = 'Player'\n    let missedShots = aiPlayer.gameboard.missedShots\n    let sunk = aiPlayer.gameboard.checkIfAllShipsSunk()\n    if (attackStatus === true) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.markHit)(attackCoords, turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)(\"You have hit one of the ai's ship's\")\n    } else if (attackStatus === 'sunk') {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)(\"You have sunk one of the ai's ship's\")\n        return\n    } else {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.markMissedShot)(missedShots[missedShots.length - 1], turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)('You missed an attack')\n    }\n    if (sunk) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeAiBoardListeners)()\n        return\n    }\n    aiAttack()\n}\n\nfunction aiAttack() {\n    let aiCoordsPick = aiPlayer.coordinatePick()\n    let attackStatus = player.gameboard.receiveAttack(aiCoordsPick)\n    while (true) {\n        if (attackStatus === 'already hit' || attackStatus === 'already missed') {\n            aiCoordsPick = aiPlayer.coordinatePick()\n            attackStatus = player.gameboard.receiveAttack(aiCoordsPick)\n        } else {\n            break;\n        }\n    }\n    let turn = 'Ai'\n    let missedShots = player.gameboard.missedShots\n    let sunk = aiPlayer.gameboard.checkIfAllShipsSunk()\n    if (attackStatus === true) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.markHit)(aiCoordsPick, turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)(\"The ai has hit one of your ship's\")\n    } else if (attackStatus === 'sunk') {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)(\"The ai has sunk one of your ship's\")\n        return\n    } else {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.markMissedShot)(missedShots[missedShots.length - 1], turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameEvents)('The ai has missed an attack')\n    }\n    if (sunk) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(turn)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeAiBoardListeners)()\n    }\n}\n\nfunction resetGameStuff() {\n    player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player()\n    aiPlayer = new _player__WEBPACK_IMPORTED_MODULE_1__.Ai()\n}\n\n//# sourceURL=webpack://battleship/./src/gameloop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_2__.createPlayerBoard)()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ai: () => (/* binding */ Ai),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\nclass Player {\n    constructor() {\n        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    }\n}\n\nclass Ai extends Player {\n    constructor() {\n        super()\n        this.direction = ['vertical', 'horizontal']\n    }\n    coordinatePick() {\n        return [this.gameboard.xAxis[Math.floor(Math.random() * 10)],  this.gameboard.yAxis[Math.floor(Math.random() * 10)]]\n    }\n    directionPick() {\n        return this.direction[Math.floor(Math.random() * 2)]\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length = null) {\n        this.length = length;\n        this.numOfTimesHit = 0;\n        this.sunk = false;\n    }\n    \n    hit() {\n        this.numOfTimesHit++;\n    }\n\n    isSunk() {\n        if (this.numOfTimesHit >= this.length) this.sunk = true;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;