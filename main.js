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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/skeleton */ \"./src/modules/skeleton.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\n\n(0,_modules_skeleton__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst home = document.getElementById('resto');\nconst menu = document.getElementById('menu');\nconst checkMenu = document.getElementById('check-menu');\n\nconst contact = document.getElementById('contact');\n\nhome.addEventListener('click', () => {\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\nmenu.addEventListener('click', () => {\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\ncontact.addEventListener('click', () => {\n    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createInfo(){\n    const container = document.createElement('div');\n    container.setAttribute('class','contact-div');\n    const makeReserv= document.createElement('h3');\n    makeReserv.textContent=\"MAKE A RESERVATION\";\n    makeReserv.setAttribute('class','makeReserv');\n\n    const phone= document.createElement('h3');\n    phone.textContent='PHONE NUMBER';\n    phone.setAttribute('class','phone');\n\n    const phoneNumber= document.createElement('h3');\n    phoneNumber.textContent='251-968-2627';\n    phoneNumber.setAttribute('class','phoneNumber');\n\n\n\n    container.appendChild(makeReserv);\n    container.appendChild(phone);\n    container.appendChild(phoneNumber);\n\n\n    return container;\n}\n\n\n\n\n\nfunction loadContact(){\n\n    const main = document.getElementById('tab-content');\n    main.innerHTML = '';\n\n    const contact= createInfo();\n    main.appendChild(contact);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction imgHandler(){\n    const div = document.createElement('div');\n    div.setAttribute('class','img-div')\n    const h1=document.createElement('h3');\n    h1.textContent='ABOUT US'\n    h1.setAttribute('id','aboutus')\n    const h3=document.createElement('h3');\n    h3.textContent=\"“Do right and far exceed expectations daily. We do the right thing and lead by putting people first. Each and every connection with our team, guests and shareholders is our opportunity to create an experience that FEEDs – Far Exceeds Expectations Daily – and show how much we care.”\".toUpperCase();\n    h3.setAttribute('class','aboutText')\n    \n    div.appendChild(h1);\n    div.appendChild(h3);\n    return div;\n}\n\n\n\n\n\nfunction loadHome(){\n    const main = document.getElementById('tab-content');\n    main.innerHTML = '';\n\n    const div = imgHandler();\n    main.appendChild(div);\n    return main;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(text,price,src,id){\n    const food = document.createElement('div');\n    food.setAttribute('class','food-item-div');\n    food.setAttribute('id',id);\n\n    const desc = document.createElement('h3');\n    desc.setAttribute('class','food-desc');\n    desc.textContent=text;\n\n    const foodPrice = document.createElement('h3');\n    foodPrice.setAttribute('class','food-price');\n    foodPrice.textContent=price;\n\n    const img = document.createElement('img');\n    img.setAttribute('src',src);\n\n    food.appendChild(desc);\n    food.appendChild(foodPrice);\n    food.appendChild(img);\n\n    return food;\n}\n\nfunction loadMenu(){\n    const main = document.getElementById('tab-content');\n    main.innerHTML = '';\n    const div= document.createElement('div');\n    div.setAttribute('id','menu-container');\n    \n\n    const food=[\n        createMenu('RIB-EYE STEAK',\n        '€19,90',\n        'https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png','1'),\n        createMenu('TOMAHAWK',\n        '€44,00','https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png',\"2\"),\n        createMenu(\"RIBS WITH JACK DANIEL'S\",\n        '€13,00',\n        'https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0669.jpg',\"3\"),\n        createMenu('T-BONE',\n        '€23,00','https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0753.jpg',\"4\"),\n        createMenu(\"BUTCHER'S BEEF\",\n        '€9,90','https://www.butchersburger-steak.gr/wp-content/uploads/Steak.png',\"item5\"),\n        createMenu('CHICKEN FINGERS',\n        '€12,00','https://www.butchersburger-steak.gr/wp-content/uploads/Butchers_Burger_0800.jpg',\"item6\")\n    ];\n    food.forEach((foods) => {\n        div.appendChild(foods);\n      });\n      main.appendChild(div);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(){\n    const div= document.createElement('div');\n    div.setAttribute('class','header-container');\n\n    const header= document.createElement('h2');\n    header.setAttribute('id','header');\n    header.innerHTML='333  Amethyst Drive, Alabama, 36542 | 251-968-2627';\n    div.appendChild(header);\n    return div;\n}\nfunction createBtn(text){\n    const btn = document.createElement('button');\n    btn.setAttribute('id',text);\n    btn.setAttribute('class','item');\n\n    btn.innerText=text.toUpperCase();\n\n    return btn;\n}\nfunction createNav(){\n    \n    const nav = document.createElement('nav');\n    const menu= createBtn('menu');\n    const logo= createBtn('resto');\n\n    const contact= createBtn('contact');\n\n    nav.appendChild(menu);\n    nav.appendChild(logo);\n    nav.appendChild(contact);\n    return nav;\n}\nfunction createMain(id){\n    const main = document.createElement('main');\n    main.setAttribute('id', id);\n    return main; \n}\n\nfunction createFooter(){\n    const footer= document.createElement('footer');\n    const develop=document.createElement('h3');\n    develop.innerText='Developed by Gusloox';\n    develop.setAttribute('id','develop');\n\n    const allRights=document.createElement('h3');\n    allRights.innerText='All Rights Reserved';\n    allRights.setAttribute('id','rights');\n\n    footer.appendChild(develop);\n    footer.appendChild(allRights);\n\n\n    return footer;\n}\n\n\nfunction loadPage(){\n    const container = document.querySelector('#content');\n    const header=createHeader();\n    container.appendChild(header);\n\n    const nav = createNav();\n    container.appendChild(nav);\n\n    const main = createMain('tab-content');\n    container.appendChild(main);\n\n    const footer= createFooter();\n    container.appendChild(footer)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/skeleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;