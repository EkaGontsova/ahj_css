/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 930:
/***/ (() => {

/* eslint-disable no-new */
/* eslint-disable no-console */
/* eslint-disable no-alert */
class App {
  constructor(buttonId, contentId, copyTextClass) {
    this.collapseButton = document.getElementById(buttonId);
    this.collapsibleContent = document.getElementById(contentId);
    this.copyText = document.querySelector(copyTextClass);
    this.toggleContentHandler = this.toggleContent.bind(this);
    this.copyContentHandler = this.copyContent.bind(this);
    this.init();
  }
  init() {
    this.collapseButton.addEventListener('click', this.toggleContentHandler);
    this.copyText.addEventListener('click', this.copyContentHandler);
  }
  toggleContent() {
    if (this.collapsibleContent.classList.contains('fadein')) {
      this.collapsibleContent.classList.remove('fadein');
      this.collapsibleContent.classList.add('fadeout');
      this.collapseButton.removeEventListener('click', this.toggleContentHandler);
      this.collapsibleContent.addEventListener('animationend', () => {
        this.collapsibleContent.classList.remove('fadeout');
        this.collapseButton.addEventListener('click', this.toggleContentHandler);
      }, {
        once: true
      });
    } else {
      this.collapsibleContent.classList.remove('fadeout');
      this.collapsibleContent.classList.add('fadein');
      this.collapseButton.removeEventListener('click', this.toggleContentHandler);
      this.collapsibleContent.addEventListener('animationend', () => {
        this.collapseButton.addEventListener('click', this.toggleContentHandler); // Восстанавливаем обработчик
      }, {
        once: true
      });
    }
  }
  copyContent() {
    const textToCopy = this.collapsibleContent.innerText.trim();
    navigator.clipboard.writeText(textToCopy).then(() => alert('Text copied to clipboard!')).catch(err => console.error('Failed to copy text: ', err));
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new App('collapse-button', 'collapsible-content', '.copy-text');
});

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
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;