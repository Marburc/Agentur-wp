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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/wp-content/themes/agentur/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/wp-content/themes/agentur/js/scripts.js":
/*!********************************************************!*\
  !*** ./public/wp-content/themes/agentur/js/scripts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// webpack\n// if (module.hot) {\n//     module.hot.accept()\n// }\n// //navbar adding active class when clicked\n// const burger = document.querySelector('.burger');\n// const links = document.querySelector('.navbar__links');\n//\n// burger.addEventListener('click', () => {\n//     links.classList.toggle('active')\n//\n// })\n// warten bis Content fertig geladen ist für Animation\ndocument.body.className += \"js-loading\";\nwindow.addEventListener(\"load\", showPage, false);\n\nfunction showPage() {\n  document.body.className = document.body.className.replace(\"js-loading\", \"\");\n} // Scroll Animation\n// Detect request animation frame\n\n\nvar scroll = window.requestAnimationFrame || // IE Fallback\nfunction (callback) {\n  window.setTimeout(callback, 1000 / 60);\n};\n\nvar elementsToShow = document.querySelectorAll('.show-on-scroll');\n\nfunction loop() {\n  elementsToShow.forEach(function (element) {\n    if (isElementInViewport(element)) {\n      element.classList.add('is-visible');\n    } else {\n      element.classList.remove('is-visible');\n    }\n  });\n  scroll(loop);\n} // Call the loop for the first time\n\n\nloop(); // Helper function from: http://stackoverflow.com/a/7557433/274826\n\nfunction isElementInViewport(el) {\n  // special bonus for those using jQuery\n  if (typeof jQuery === \"function\" && el instanceof jQuery) {\n    el = el[0];\n  }\n\n  var rect = el.getBoundingClientRect();\n  return rect.top <= 0 && rect.bottom >= 0 || rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight) || rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);\n}\n\n//# sourceURL=webpack:///./public/wp-content/themes/agentur/js/scripts.js?");

/***/ })

/******/ });