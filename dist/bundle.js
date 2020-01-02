/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden; }\\n\\nbutton {\\n  width: 8rem;\\n  height: 2.2rem;\\n  margin: 0.3rem;\\n  font-size: 1.3rem; }\\n  button:nth-child(1) {\\n    background: #ff9994; }\\n  button:nth-child(2) {\\n    background: #ffffa1; }\\n  button:nth-child(3) {\\n    background: #a6f1a6; }\\n  button:nth-child(4) {\\n    background: #add8e6; }\\n\\n.active {\\n  display: block; }\\n\\n.screenOne,\\n.screenTwo {\\n  display: none; }\\n\\n.demoSelect {\\n  z-index: 1;\\n  position: absolute;\\n  top: 0.5rem;\\n  width: 20vw;\\n  height: 20rem;\\n  top: 0;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center; }\\n  .demoSelect button {\\n    background-color: #ccc; }\\n\\n.center {\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.smallContainer {\\n  padding: 1rem;\\n  border: #ccc dotted 2px;\\n  width: 32rem; }\\n\\n.fullscreen {\\n  width: 100vw;\\n  height: 100vh; }\\n\\n.leftsidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  padding: 3rem;\\n  height: auto;\\n  width: auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center; }\\n  .leftsidebar > * {\\n    margin: 1rem; }\\n  .leftsidebar button {\\n    background: #d8bfd8;\\n    min-width: auto;\\n    height: auto;\\n    font-size: 1rem; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/*! exports provided: demoSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"demoSelect\", function() { return demoSelect; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n\n\nconst demoSelect = () => {\n    document.getElementById('demoOneBtn').addEventListener('click', function() {\n        //add demo one class\n        makeScreenActive('demoScreenOne');\n    });\n    document.getElementById('demoTwoBtn').addEventListener('click', function() {\n        //add demo two class\n        makeScreenActive('demoScreenTwo');\n    });\n\n    function makeScreenActive(className) {\n        let screens = document.querySelectorAll('[class*=demoScreen]');\n        screens.forEach(screen => screen.classList.remove('active'));\n        document.getElementsByClassName(className)[0].classList.add('active');\n    }\n};\n\n(function initDemoOne() {\n    document\n        .getElementById('newEventListenerBtn')\n        .addEventListener('click', function() {\n            let number = prompt(\n                'Enter a number of button to add event listener to:',\n            );\n            let string = prompt('Enter string to print on button press:');\n            let el = 'btn' + number;\n\n            if (document.getElementById(el) && string) {\n                _index_js__WEBPACK_IMPORTED_MODULE_0__[\"createEventListener\"](el, 'click', function() {\n                    document.getElementById(\n                        'messages',\n                    ).innerHTML += `${string}<br>`;\n                });\n            }\n            updateEventListenerInfo();\n        });\n\n    document\n        .getElementById('deleteEventListenerBtn')\n        .addEventListener('click', function() {\n            let number = prompt(\n                'Enter a number of button to delete event listener from:',\n            );\n            let hashkey = prompt('Enter the eventListenerID:');\n            let element = 'btn' + number;\n            let elementObj = document.getElementById(element);\n            if (elementObj) {\n                try {\n                    let selected_EL_ID = getEventListenerByHash(\n                        element,\n                        hashkey,\n                    ).eventListenerID;\n                    elementObj.deleteEventListener(selected_EL_ID);\n                } catch (e) {\n                    console.log(e);\n                    console.log(`No event listener with hash: ${hashkey}`);\n                }\n            }\n            updateEventListenerInfo();\n        });\n\n    document\n        .getElementById('deleteAllEventListenersBtn')\n        .addEventListener('click', function() {\n            let number = prompt(\n                'Enter a number of button to delete all event listeners from:',\n            );\n            let element = 'btn' + number;\n            let elementObj = document.getElementById(element);\n            if (elementObj) {\n                try {\n                    elementObj.deleteAllEventListeners();\n                } catch (e) {\n                    console.log(e);\n                }\n            }\n            updateEventListenerInfo();\n        });\n\n    document\n        .getElementById('clearMessagesBtn')\n        .addEventListener('click', function() {\n            document.getElementById('messages').innerHTML = '';\n        });\n\n    function updateEventListenerInfo() {\n        document.getElementById('eventListenerInfo').innerHTML = JSON.stringify(\n            _index_js__WEBPACK_IMPORTED_MODULE_0__[\"getEventListenerList\"](),\n        ).replace(/},{/g, '}<br>{');\n    }\n})();\n\n\n//# sourceURL=webpack:///./src/js/demo.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: createEventListener, getEventListenerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEventListener\", function() { return createEventListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventListenerList\", function() { return getEventListenerList; });\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.js */ \"./src/js/demo.js\");\n/* harmony import */ var _intervals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intervals.js */ \"./src/js/intervals.js\");\n\n\n\n\n\nlet eventListenerStorage = [];\n\nconst createEventListener = (elementID, eventType, elementFunc) => {\n    let el = document.getElementById(elementID);\n    if (el) {\n        let randID = Math.random()\n            .toString(36)\n            .slice(2);\n        eventListenerStorage.push({\n            elementID,\n            eventType,\n            elementFunc,\n            eventListenerID: randID,\n        });\n        el.addEventListener(eventType, elementFunc);\n        el.deleteEventListener = function deleteEventListener(delete_EL_ID) {\n            let deleteEL = getEventListenerByHash(elementID, delete_EL_ID);\n            el.removeEventListener(deleteEL.eventType, deleteEL.elementFunc);\n            eventListenerStorage = eventListenerStorage.filter(\n                obj => obj.eventListenerID !== deleteEL.eventListenerID,\n            );\n        };\n        el.deleteAllEventListeners = function deleteAllEventListeners() {\n            let eventListeners = getElementEventListeners(elementID);\n            eventListeners.forEach(evnList =>\n                el.deleteEventListener(evnList.eventListenerID),\n            );\n        };\n        return randID;\n    }\n};\n\nfunction getEventListenerByHash(element, hashkey) {\n    return getElementEventListeners(element).filter(\n        el => el.eventListenerID === hashkey,\n    )[0];\n}\n\nfunction getElementEventListeners(element) {\n    return eventListenerStorage.filter(el => el.elementID === element);\n}\n\nconst getEventListenerList = () => {\n    return eventListenerStorage;\n};\n\n_demo_js__WEBPACK_IMPORTED_MODULE_1__[\"demoSelect\"]();\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/intervals.js":
/*!*****************************!*\
  !*** ./src/js/intervals.js ***!
  \*****************************/
/*! exports provided: createInterval, clearIntervals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInterval\", function() { return createInterval; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearIntervals\", function() { return clearIntervals; });\nclass IntervalObj {\n    constructor(intervalID, type, active) {\n        this.intervalID = intervalID;\n        this.type = type;\n        this.active = active;\n    }\n}\n\nlet intervalStorage = [];\n\nconst createInterval = (funcToPass, typeOfInterval, tickTime) => {\n    const foundInt = intervalStorage.some(\n        el => el.active === true && el.type === typeOfInterval,\n    );\n    foundInt\n        ? null\n        : intervalStorage.push(\n              new IntervalObj(\n                  setInterval(funcToPass, tickTime),\n                  typeOfInterval,\n                  true,\n              ),\n          );\n};\n\nconst clearIntervals = typeOfInterval => {\n    for (var i = 0; i < intervalStorage.length; i++) {\n        if (intervalStorage[i].type == typeOfInterval) {\n            clearInterval(intervalStorage[i].intervalID);\n            intervalStorage[i].active = false;\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/js/intervals.js?");

/***/ })

/******/ });