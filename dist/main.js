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

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoardFactory: () => (/* binding */ gameBoardFactory)\n/* harmony export */ });\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n\nvar gameBoardFactory = function gameBoardFactory() {\n  var allShips = [];\n  var shipPlacement = new Map();\n  var attackHistory = new Map();\n  function placeShip(coordinates) {\n    var length = coordinates.length;\n    var newShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(length);\n    allShips.push(newShip);\n    coordinates.forEach(function (coord) {\n      shipPlacement.set(coord, newShip);\n    });\n  }\n  function receiveAttack(coordinate) {\n    attackHistory.set(coordinate, true);\n    if (shipPlacement.has(coordinate)) {\n      var attackedShip = shipPlacement.get(coordinate);\n      attackedShip.hit();\n      return true;\n    }\n    return false;\n  }\n  function isEnemyWinner() {\n    return allShips.reduce(function (prev, cur) {\n      return prev && cur.isSunk();\n    }, true);\n  }\n  function isHit(coordinate) {\n    if (attackHistory.has(coordinate)) {\n      return shipPlacement.has(coordinate) ? true : false;\n    } else return null;\n  }\n  return {\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    isEnemyWinner: isEnemyWinner,\n    isHit: isHit\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\nvar gameController = function () {\n  var playerOne = \"playerOne\";\n  var playerTwo = \"playerTwo\";\n  var currentTurn = 1;\n  var switchTurn = function switchTurn() {\n    return currentTurn == 1 ? currentTurn = 2 : currentTurn = 1;\n  };\n  var getEnemyBoard = function getEnemyBoard() {\n    return currentTurn == 1 ? playerTwoBoard : playerOneBoard;\n  };\n  var getCurrentPlayer = function getCurrentPlayer() {\n    return currentTurn == 1 ? \"\".concat(playerOne) : \"\".concat(playerTwo);\n  };\n  var playerOneBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameBoardFactory)();\n  playerOneBoard.placeShip([\"a2\", \"b2\"]);\n  playerOneBoard.placeShip([\"c5\", \"d5\", \"e5\"]);\n  var playerTwoBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameBoardFactory)();\n  playerTwoBoard.placeShip([\"b3\", \"c3\"]);\n  playerTwoBoard.placeShip([\"b6\", \"b7\", \"b8\"]);\n  function playRound(square) {\n    var enemyBoard = getEnemyBoard();\n    enemyBoard.receiveAttack(square);\n    enemyBoard.isEnemyWinner() ? console.log(\"\".concat(getCurrentPlayer(), \" wins!\")) //send event that declare winner later\n    : switchTurn();\n  }\n  return {\n    playRound: playRound,\n    getCurrentPlayer: getCurrentPlayer\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);\n\n//# sourceURL=webpack://battleship/./src/gameController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerFactory: () => (/* binding */ playerFactory)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\nvar playerFactory = function playerFactory() {\n  var gameBoard = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)();\n  var possibleMoves = possibleMovesGenerator();\n  function randomAttack() {\n    var randomIndex = getRandomInt(possibleMoves.length);\n    return possibleMoves.splice(randomIndex, 1).toString();\n  }\n  return {\n    randomAttack: randomAttack\n  };\n};\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\nfunction possibleMovesGenerator() {\n  var columns = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n  var possibleMovesArray = [];\n  columns.forEach(function (col) {\n    for (var index = 0; index < 10; index++) {\n      possibleMovesArray.push(\"\".concat(col).concat(index));\n    }\n  });\n  return possibleMovesArray;\n}\n\n//# sourceURL=webpack://battleship/./src/playerFactory.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shipFactory: () => (/* binding */ shipFactory)\n/* harmony export */ });\nvar shipFactory = function shipFactory(length) {\n  var _length = length;\n  var hp = length;\n  function getLength() {\n    return _length;\n  }\n  function isSunk() {\n    return hp > 0 ? false : true;\n  }\n  function hit() {\n    hp--;\n  }\n  return {\n    isSunk: isSunk,\n    hit: hit,\n    getLength: getLength\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

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