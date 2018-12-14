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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/addPage.js":
/*!***********************************!*\
  !*** ./src/js/modules/addPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction insertElements(array, template) {\n  array.forEach(function (item) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    var wrap = document.querySelector(template.wrap);\n    wrap.appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElements);\n\n//# sourceURL=webpack:///./src/js/modules/addPage.js?");

/***/ }),

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.catalog__list',\n  tag: 'article',\n  tagClass: 'product-card-mini',\n  setContent: function setContent(object) {\n    return \"<h2 class=\\\"product-card-mini__title\\\">\\n        <a href=\\\"\".concat(object.uri, \"\\\">\").concat(object.name, \"</a>\\n      </h2>\\n      <a href=\\\"\").concat(object.uri, \"\\\" class=\\\"product-card-mini__img-wrap\\\">\\n        <img src=\\\"img/books_all/\").concat(object.uri, \".png\\\" alt=\\\"some picture\\\" class=\\\"product-card-mini__img\\\">\\n      </a>\\n      <p class=\\\"product-card-mini__descr\\\">\").concat(object.desc, \"</p>\\n      <div class=\\\"product-card-mini__price\\\">\").concat(object.price, \"</div>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/bookData.js":
/*!************************************!*\
  !*** ./src/js/modules/bookData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = {\n  books: [{\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }, {\n    src: '/img/books_all/45-tatuirovok-prodavana.png',\n    title: '45 Татуировок продавана',\n    descr: 'Правила для тех, кто продает и управляет продажами',\n    price: '500 ₽',\n    href: '#'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/modules/bookData.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cardsWrap = document.querySelector('.catalog__list');\n\nfunction createCards(object, template) {\n  var card = document.createElement(template.tag);\n  card.classList.add(template.tagList); // card.innerHTML =`<h2 class=\"product-card-mini__title\">\n  //     <a href=\"${object.href}\">${object.title}</a>\n  //   </h2>\n  //   <a href=\"${object.href}\" class=\"product-card-mini__img-wrap\">\n  //     <img src=\"${object.src}\" alt=\"some picture\" class=\"product-card-mini__img\">\n  //   </a>\n  //   <p class=\"product-card-mini__descr\">${object.descr}</p>\n  //   <div class=\"product-card-mini__price\">${object.price}</div>`;\n\n  card.innerHTML = template.setContent(object);\n  return card;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createCards);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// функция подготовки url'а для GET запроса\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj); // const wrap = document.querySelector(bookCardTemplate.wrap);\n      // if (wrap.children) {\n      //   wrap.innerHTML = '';\n      // }\n      // console.log(request.items);\n      // addPage(request.items, bookCardTemplate);\n    } else {}\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addPage.js */ \"./src/js/modules/addPage.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_bookData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bookData.js */ \"./src/js/modules/bookData.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n\n\n\n // import createElement from './modules/createElement.js';\n\nfunction ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}\n\nready(function () {\n  Object(_modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_modules_bookData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].books, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}); // Объект данных для AJAX запроса\n\nvar data = {\n  page: 1,\n  perPage: 1,\n  type: ''\n};\nObject(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(createDataAjax(), function (data) {\n  console.log(data);\n}); // вешаем слушатель на табы\n\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type; // if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    //   data.perPage = 8;\n    // } else {\n    //   data.perPage = 3;\n    // }\n\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataAjax);\n  });\n}); // агинация\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });