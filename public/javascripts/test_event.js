/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: LHW\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Email: lihongwang0618@gmail.com\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DateTime: 2017-4-10\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Description: 一个学习Canvas的例子，创建一个表格，然后基于表格填充内容\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Usage:\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     var gridFunny = new GridFunny({});\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     gridFunny.start();\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\n\nvar _baseFunc = __webpack_require__(1);\n\nvar _baseFunc2 = _interopRequireDefault(_baseFunc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GridFunny = function () {\n    function GridFunny(options) {\n        _classCallCheck(this, GridFunny);\n\n        this._started = false;\n        this.grid = {};\n        this.gridOfX = {};\n        this.gridOfY = {};\n        this.settings = {\n            container: document.body,\n            gridColor: \"#ccc\", // 格子的颜色\n            gridNum: 9, // 格子的数量\n            globalAlpha: 1,\n            canvasClassName: \"\",\n            canvasSize: {\n                width: 500,\n                height: 500\n            }, // canvas的尺寸\n            bindCanvasEvent: function bindCanvasEvent() {},\n            generateGridKey: function generateGridKey(x, y) {\n                return [x, y].join(\"-\");\n            },\n            // 创建每个格子在grid对象中的key\n            onDraw: function onDraw() {},\n            // 提供绘画钩子方法，方便定制绘画\n            prevDraw: function prevDraw() {},\n            nextDraw: function nextDraw() {},\n            fillGrid: function fillGrid(keyX, keyY, pixelX, pixelY) {},\n            // 填充每个格子内容的方法\n            contextType: \"2d\", // canvas文本类型（2d或者3d）\n            border: 1 // 表格的边框大小\n        };\n        this._extendObject(this.settings, options || {});\n        return this;\n    }\n\n    _createClass(GridFunny, [{\n        key: \"start\",\n        value: function start() {\n            this.canvas = this._initCanvas(this.settings.canvasSize.width, this.settings.canvasSize.height);\n            this.canvas.style.left = (window.innerWidth - 500) / 2 + 'px';\n\n            if (window.innerHeight > 500) this.canvas.style.top = (window.innerHeight - 500) / 2 + 'px';\n\n            this.settings.bindCanvasEvent.call(this);\n            this.canvas.className = this.settings.canvasClassName;\n            this.settings.container.appendChild(this.canvas);\n            this.context = this.canvas.getContext(this.settings.contextType);\n            this._drawBoard();\n            this._started = true;\n        }\n    }, {\n        key: \"_initCanvas\",\n        value: function _initCanvas(width, height) {\n            var canvas = document.createElement(\"canvas\");\n            canvas.width = width;\n            canvas.height = height;\n            return canvas;\n        }\n    }, {\n        key: \"_drawBoard\",\n        value: function _drawBoard() {\n            var width = this.settings.canvasSize.width,\n                height = this.settings.canvasSize.height,\n                num = this.settings.gridNum,\n                border = this.settings.border,\n                halfBorder = border / 2,\n                context = this.context,\n                color = this.settings.gridColor,\n                pixelX = this.pixelX = (width - border) / (num + 2),\n                pixelY = this.pixelY = (height - border) / (num + 2),\n                rectXSize = pixelX * (num + 1),\n                rectYSize = pixelY * (num + 1);\n            context.clearRect(0, 0, width, height);\n            this.settings.prevDraw.call(this);\n            context.beginPath();\n            /* 垂直线 */\n            for (var i = 0, x = pixelX; x <= rectXSize; x += pixelX) {\n                i++;\n                var beginCoordinate = halfBorder + x;\n                if (i <= num) this.gridOfX[i] = beginCoordinate;\n                context.moveTo(beginCoordinate, pixelX);\n                context.lineTo(beginCoordinate, rectXSize);\n            }\n\n            /* 水平线 */\n            for (var j = 0, y = pixelY; y <= rectYSize; y += pixelY) {\n                j++;\n                var endCoordinate = halfBorder + y;\n                if (j <= num) this.gridOfY[j] = endCoordinate;\n                context.moveTo(pixelY, endCoordinate);\n                context.lineTo(rectYSize, endCoordinate);\n            }\n            this._initGridCoordinate(pixelX, pixelY);\n            context.strokeStyle = color;\n            context.stroke();\n            this.settings.onDraw.call(this);\n            context.closePath();\n            this.settings.nextDraw.call(this);\n            /* 开始画 */\n        }\n    }, {\n        key: \"_initGridCoordinate\",\n        value: function _initGridCoordinate(pixelX, pixelY) {\n            var context = this.context,\n                grid = this.grid,\n                gridOfX = this.gridOfX,\n                gridOfY = this.gridOfY;\n            for (var keyX in gridOfX) {\n                for (var keyY in gridOfY) {\n                    // 记录每个格子的坐标\n                    var key = this.settings.generateGridKey(keyX, keyY);\n                    grid[key] = [gridOfX[keyX], gridOfY[keyY]];\n                    this.settings.fillGrid.call(this, keyX, keyY, pixelX, pixelY);\n                }\n            }\n        }\n    }, {\n        key: \"_canvasRatio\",\n        value: function _canvasRatio(key, value) {\n            return value / this.settings.canvasSize[key];\n        }\n    }, {\n        key: \"_randColor\",\n        value: function _randColor() {\n            return _baseFunc2.default.randColor();\n        }\n    }, {\n        key: \"_extendObject\",\n        value: function _extendObject(obj1, obj2) {\n            return _baseFunc2.default.extend(obj1, obj2);\n        }\n    }]);\n\n    return GridFunny;\n}();\n\nexports.default = GridFunny;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMtZXM2L0dyaWRGdW5ueS5qcz82YmFkIl0sIm5hbWVzIjpbIkdyaWRGdW5ueSIsIm9wdGlvbnMiLCJfc3RhcnRlZCIsImdyaWQiLCJncmlkT2ZYIiwiZ3JpZE9mWSIsInNldHRpbmdzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiZ3JpZENvbG9yIiwiZ3JpZE51bSIsImdsb2JhbEFscGhhIiwiY2FudmFzQ2xhc3NOYW1lIiwiY2FudmFzU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmluZENhbnZhc0V2ZW50IiwiZ2VuZXJhdGVHcmlkS2V5IiwieCIsInkiLCJqb2luIiwib25EcmF3IiwicHJldkRyYXciLCJuZXh0RHJhdyIsImZpbGxHcmlkIiwia2V5WCIsImtleVkiLCJwaXhlbFgiLCJwaXhlbFkiLCJjb250ZXh0VHlwZSIsImJvcmRlciIsIl9leHRlbmRPYmplY3QiLCJjYW52YXMiLCJfaW5pdENhbnZhcyIsInN0eWxlIiwibGVmdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRvcCIsImNhbGwiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiX2RyYXdCb2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJudW0iLCJoYWxmQm9yZGVyIiwiY29sb3IiLCJyZWN0WFNpemUiLCJyZWN0WVNpemUiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJpIiwiYmVnaW5Db29yZGluYXRlIiwibW92ZVRvIiwibGluZVRvIiwiaiIsImVuZENvb3JkaW5hdGUiLCJfaW5pdEdyaWRDb29yZGluYXRlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJrZXkiLCJ2YWx1ZSIsInJhbmRDb2xvciIsIm9iajEiLCJvYmoyIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7cWpCQUFBOzs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7SUFDTUEsUztBQUNGLHVCQUFZ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QyxNQUE5QyxFQUFzREMsTUFBdEQ7QUFDSDtBQUNKO0FBQ0o7OztxQ0FFWW9DLEcsRUFBS0MsSyxFQUFPO0FBQ3JCLG1CQUFPQSxRQUFRLEtBQUs1RCxRQUFMLENBQWNRLFVBQWQsQ0FBeUJtRCxHQUF6QixDQUFmO0FBQ0g7OztxQ0FFWTtBQUNULG1CQUFPLG1CQUFRRSxTQUFSLEVBQVA7QUFDSDs7O3NDQUVhQyxJLEVBQU1DLEksRUFBTTtBQUN0QixtQkFBTyxtQkFBUUMsTUFBUixDQUFlRixJQUFmLEVBQXFCQyxJQUFyQixDQUFQO0FBQ0g7Ozs7OztrQkFFVXJFLFMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aG9yOiBMSFdcbiAqIEVtYWlsOiBsaWhvbmd3YW5nMDYxOEBnbWFpbC5jb21cbiAqIERhdGVUaW1lOiAyMDE3LTQtMTBcbiAqIERlc2NyaXB0aW9uOiDkuIDkuKrlrabkuaBDYW52YXPnmoTkvovlrZDvvIzliJvlu7rkuIDkuKrooajmoLzvvIznhLblkI7ln7rkuo7ooajmoLzloavlhYXlhoXlrrlcbiAqIFVzYWdlOlxuICogICAgIHZhciBncmlkRnVubnkgPSBuZXcgR3JpZEZ1bm55KHt9KTtcbiAqICAgICBncmlkRnVubnkuc3RhcnQoKTtcbiAqXG4gKi9cbmltcG9ydCBiYXNlQVBJIGZyb20gXCIuL2Jhc2VGdW5jXCI7XG5jbGFzcyBHcmlkRnVubnkge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyaWQgPSB7fTtcbiAgICAgICAgdGhpcy5ncmlkT2ZYID0ge307XG4gICAgICAgIHRoaXMuZ3JpZE9mWSA9IHt9O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgZ3JpZENvbG9yOiBcIiNjY2NcIiwgLy8g5qC85a2Q55qE6aKc6ImyXG4gICAgICAgICAgICBncmlkTnVtOiA5LCAvLyDmoLzlrZDnmoTmlbDph49cbiAgICAgICAgICAgIGdsb2JhbEFscGhhOiAxLFxuICAgICAgICAgICAgY2FudmFzQ2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICAgICAgY2FudmFzU2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBcbiAgICAgICAgICAgIH0sIC8vIGNhbnZhc+eahOWwuuWvuFxuICAgICAgICAgICAgYmluZENhbnZhc0V2ZW50KCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VuZXJhdGVHcmlkS2V5KHgsIHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgfSwgLy8g5Yib5bu65q+P5Liq5qC85a2Q5ZyoZ3JpZOWvueixoeS4reeahGtleVxuICAgICAgICAgICAgb25EcmF3KCkge1xuXG4gICAgICAgICAgICB9LCAvLyDmj5Dkvpvnu5jnlLvpkqnlrZDmlrnms5XvvIzmlrnkvr/lrprliLbnu5jnlLtcbiAgICAgICAgICAgIHByZXZEcmF3KCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dERyYXcoKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWxsR3JpZChrZXlYLCBrZXlZLCBwaXhlbFgsIHBpeGVsWSkge1xuXG4gICAgICAgICAgICB9LCAvLyDloavlhYXmr4/kuKrmoLzlrZDlhoXlrrnnmoTmlrnms5VcbiAgICAgICAgICAgIGNvbnRleHRUeXBlOiBcIjJkXCIsIC8vIGNhbnZhc+aWh+acrOexu+Wei++8iDJk5oiW6ICFM2TvvIlcbiAgICAgICAgICAgIGJvcmRlcjogMSAvLyDooajmoLznmoTovrnmoYblpKflsI9cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZXh0ZW5kT2JqZWN0KHRoaXMuc2V0dGluZ3MsIG9wdGlvbnMgfHwge30pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLl9pbml0Q2FudmFzKHRoaXMuc2V0dGluZ3MuY2FudmFzU2l6ZS53aWR0aCwgdGhpcy5zZXR0aW5ncy5jYW52YXNTaXplLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLSA1MDApIC8gMiArICdweCc7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IDUwMClcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MDApIC8gMiArICdweCc7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5iaW5kQ2FudmFzRXZlbnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5jYW52YXNDbGFzc05hbWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCh0aGlzLnNldHRpbmdzLmNvbnRleHRUeXBlKTtcbiAgICAgICAgdGhpcy5fZHJhd0JvYXJkKCk7XG4gICAgICAgIHRoaXMuX3N0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9pbml0Q2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgX2RyYXdCb2FyZCgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNldHRpbmdzLmNhbnZhc1NpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNldHRpbmdzLmNhbnZhc1NpemUuaGVpZ2h0LFxuICAgICAgICAgICAgbnVtID0gdGhpcy5zZXR0aW5ncy5ncmlkTnVtLFxuICAgICAgICAgICAgYm9yZGVyID0gdGhpcy5zZXR0aW5ncy5ib3JkZXIsXG4gICAgICAgICAgICBoYWxmQm9yZGVyID0gYm9yZGVyIC8gMixcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuc2V0dGluZ3MuZ3JpZENvbG9yLFxuICAgICAgICAgICAgcGl4ZWxYID0gdGhpcy5waXhlbFggPSAod2lkdGggLSBib3JkZXIpIC8gKG51bSArIDIpLFxuICAgICAgICAgICAgcGl4ZWxZID0gdGhpcy5waXhlbFkgPSAoaGVpZ2h0IC0gYm9yZGVyKSAvIChudW0gKyAyKSxcbiAgICAgICAgICAgIHJlY3RYU2l6ZSA9IHBpeGVsWCAqIChudW0gKyAxKSxcbiAgICAgICAgICAgIHJlY3RZU2l6ZSA9IHBpeGVsWSAqIChudW0gKyAxKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJldkRyYXcuY2FsbCh0aGlzKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgLyog5Z6C55u057q/ICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCB4ID0gcGl4ZWxYOyB4IDw9IHJlY3RYU2l6ZTsgeCArPSBwaXhlbFgpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbnN0IGJlZ2luQ29vcmRpbmF0ZSA9IGhhbGZCb3JkZXIgKyB4O1xuICAgICAgICAgICAgaWYgKGkgPD0gbnVtKSB0aGlzLmdyaWRPZlhbaV0gPSBiZWdpbkNvb3JkaW5hdGU7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhiZWdpbkNvb3JkaW5hdGUsIHBpeGVsWCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhiZWdpbkNvb3JkaW5hdGUsIHJlY3RYU2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiDmsLTlubPnur8gKi9cbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIHkgPSBwaXhlbFk7IHkgPD0gcmVjdFlTaXplOyB5ICs9IHBpeGVsWSkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgY29uc3QgZW5kQ29vcmRpbmF0ZSA9IGhhbGZCb3JkZXIgKyB5O1xuICAgICAgICAgICAgaWYgKGogPD0gbnVtKSB0aGlzLmdyaWRPZllbal0gPSBlbmRDb29yZGluYXRlO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocGl4ZWxZLCBlbmRDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJlY3RZU2l6ZSwgZW5kQ29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdEdyaWRDb29yZGluYXRlKHBpeGVsWCwgcGl4ZWxZKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9uRHJhdy5jYWxsKHRoaXMpO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5leHREcmF3LmNhbGwodGhpcyk7XG4gICAgICAgIC8qIOW8gOWni+eUuyAqL1xuICAgIH1cblxuICAgIF9pbml0R3JpZENvb3JkaW5hdGUocGl4ZWxYLCBwaXhlbFkpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIGdyaWQgPSB0aGlzLmdyaWQsXG4gICAgICAgICAgICBncmlkT2ZYID0gdGhpcy5ncmlkT2ZYLFxuICAgICAgICAgICAgZ3JpZE9mWSA9IHRoaXMuZ3JpZE9mWTtcbiAgICAgICAgZm9yIChjb25zdCBrZXlYIGluIGdyaWRPZlgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5WSBpbiBncmlkT2ZZKSB7XG4gICAgICAgICAgICAgICAgLy8g6K6w5b2V5q+P5Liq5qC85a2Q55qE5Z2Q5qCHXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5zZXR0aW5ncy5nZW5lcmF0ZUdyaWRLZXkoa2V5WCwga2V5WSk7XG4gICAgICAgICAgICAgICAgZ3JpZFtrZXldID0gW2dyaWRPZlhba2V5WF0sIGdyaWRPZllba2V5WV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZmlsbEdyaWQuY2FsbCh0aGlzLCBrZXlYLCBrZXlZLCBwaXhlbFgsIHBpeGVsWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FudmFzUmF0aW8oa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgLyB0aGlzLnNldHRpbmdzLmNhbnZhc1NpemVba2V5XTtcbiAgICB9XG5cbiAgICBfcmFuZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gYmFzZUFQSS5yYW5kQ29sb3IoKTtcbiAgICB9XG5cbiAgICBfZXh0ZW5kT2JqZWN0KG9iajEsIG9iajIpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VBUEkuZXh0ZW5kKG9iajEsIG9iajIpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdyaWRGdW5ueTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy1lczYvR3JpZEZ1bm55LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar baseAPI = {\n    extend: function extend(obj1, obj2) {\n        for (var i in obj2) {\n            if (obj2.hasOwnProperty(i)) {\n                obj1[i] = obj2[i];\n            }\n        }\n        return obj1;\n    },\n\n    randColor: function randColor() {\n        var colors = [\"#cfd9df\", \"#a1c4fd\", \"#8fd3f4\", \"#e6dee9\", \"#c3cfe2\", \"#a8edea\", \"#e0c3fc\", \"#ebbba7\", \"#fff1eb\", \"#accbee\", \"#c1dfc4\", \"#deecdd\", \"#fbfcdb\", \"#6a85b6\", \"#9face6\", '#f35d4f', '#f36849', '#c0d988', '#6ddaf1', '#f1e85b'];\n        return colors[Math.floor(Math.random() * colors.length)];\n    }\n};\nexports.default = baseAPI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMtZXM2L2Jhc2VGdW5jLmpzPzUwZDYiXSwibmFtZXMiOlsiYmFzZUFQSSIsImV4dGVuZCIsIm9iajEiLCJvYmoyIiwiaSIsImhhc093blByb3BlcnR5IiwicmFuZENvbG9yIiwiY29sb3JzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFDLElBQU1BLFVBQVU7QUFDWkMsWUFBUSxnQkFBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ3pCLGFBQUssSUFBTUMsQ0FBWCxJQUFnQkQsSUFBaEIsRUFBc0I7QUFDbEIsZ0JBQUlBLEtBQUtFLGNBQUwsQ0FBb0JELENBQXBCLENBQUosRUFBNEI7QUFDeEJGLHFCQUFLRSxDQUFMLElBQVVELEtBQUtDLENBQUwsQ0FBVjtBQUNIO0FBQ0o7QUFDRCxlQUFPRixJQUFQO0FBQ0gsS0FSVzs7QUFVWkksZUFBVyxxQkFBVztBQUNsQixZQUFNQyxTQUFTLENBQ1gsU0FEVyxFQUNBLFNBREEsRUFDVyxTQURYLEVBQ3NCLFNBRHRCLEVBQ2lDLFNBRGpDLEVBRVgsU0FGVyxFQUVBLFNBRkEsRUFFVyxTQUZYLEVBRXNCLFNBRnRCLEVBRWlDLFNBRmpDLEVBR1gsU0FIVyxFQUdBLFNBSEEsRUFHVyxTQUhYLEVBR3NCLFNBSHRCLEVBR2lDLFNBSGpDLEVBSVgsU0FKVyxFQUlBLFNBSkEsRUFJVyxTQUpYLEVBSXNCLFNBSnRCLEVBSWlDLFNBSmpDLENBQWY7QUFNQSxlQUFPQSxPQUFPQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JILE9BQU9JLE1BQWxDLENBQVAsQ0FBUDtBQUNIO0FBbEJXLENBQWhCO2tCQW9CZVgsTyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGNvbnN0IGJhc2VBUEkgPSB7XG4gICAgIGV4dGVuZDogZnVuY3Rpb24ob2JqMSwgb2JqMikge1xuICAgICAgICAgZm9yIChjb25zdCBpIGluIG9iajIpIHtcbiAgICAgICAgICAgICBpZiAob2JqMi5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICBvYmoxW2ldID0gb2JqMltpXTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gb2JqMTtcbiAgICAgfSxcblxuICAgICByYW5kQ29sb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgICAgICAgIFwiI2NmZDlkZlwiLCBcIiNhMWM0ZmRcIiwgXCIjOGZkM2Y0XCIsIFwiI2U2ZGVlOVwiLCBcIiNjM2NmZTJcIixcbiAgICAgICAgICAgICBcIiNhOGVkZWFcIiwgXCIjZTBjM2ZjXCIsIFwiI2ViYmJhN1wiLCBcIiNmZmYxZWJcIiwgXCIjYWNjYmVlXCIsXG4gICAgICAgICAgICAgXCIjYzFkZmM0XCIsIFwiI2RlZWNkZFwiLCBcIiNmYmZjZGJcIiwgXCIjNmE4NWI2XCIsIFwiIzlmYWNlNlwiLFxuICAgICAgICAgICAgICcjZjM1ZDRmJywgJyNmMzY4NDknLCAnI2MwZDk4OCcsICcjNmRkYWYxJywgJyNmMWU4NWInXG4gICAgICAgICBdO1xuICAgICAgICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgYmFzZUFQSTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy1lczYvYmFzZUZ1bmMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _GridFunny = __webpack_require__(0);\n\nvar _GridFunny2 = _interopRequireDefault(_GridFunny);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar grid = new _GridFunny2.default({\n    gridColor: \"green\",\n    bindCanvasEvent: function bindCanvasEvent() {\n        var self = this,\n            left = this.canvas.offsetLeft,\n            top = this.canvas.offsetTop;\n        this.grids = [];\n        this.canvas.addEventListener(\"click\", function (evt) {\n            var x = evt.pageX,\n                y = evt.pageY;\n            self.grids.forEach(function (grid) {\n                if (y > grid.y && y < grid.y + grid.height && x > grid.x && x < grid.x + grid.width) {\n                    // if(self.context.isPointInStroke(grid.x, grid.y)){  // 当前stroke全部清空\n                    if (grid.cleaned) {\n                        grid.cleaned = false;\n                        self.context.fillStyle = grid.color;\n                    } else {\n                        self.context.fillStyle = \"#fff\";\n                        grid.cleaned = true;\n                    }\n                    self.context.clearRect(grid.x, grid.y, grid.width, grid.height);\n                    self.context.fillRect(grid.x, grid.y, grid.width, grid.height);\n                }\n            });\n        });\n    },\n    fillGrid: function fillGrid(keyX, keyY, pixelX, pixelY) {\n        var color = this.context.fillStyle = this._randColor();\n        this.grids.push({\n            color: color,\n            x: this.gridOfX[keyX],\n            y: this.gridOfY[keyY],\n            width: pixelX,\n            height: pixelY\n        });\n        this.context.fillRect(this.gridOfX[keyX], this.gridOfY[keyY], pixelX, pixelY);\n    }\n});\ngrid.start();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMtZXM2L3Rlc3RzL2V2ZW50LmpzPzI2ZTYiXSwibmFtZXMiOlsiZ3JpZCIsImdyaWRDb2xvciIsImJpbmRDYW52YXNFdmVudCIsInNlbGYiLCJsZWZ0IiwiY2FudmFzIiwib2Zmc2V0TGVmdCIsInRvcCIsIm9mZnNldFRvcCIsImdyaWRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIngiLCJldnQiLCJwYWdlWCIsInkiLCJwYWdlWSIsImZvckVhY2giLCJoZWlnaHQiLCJ3aWR0aCIsImNsZWFuZWQiLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiY29sb3IiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImZpbGxHcmlkIiwia2V5WCIsImtleVkiLCJwaXhlbFgiLCJwaXhlbFkiLCJfcmFuZENvbG9yIiwicHVzaCIsImdyaWRPZlgiLCJncmlkT2ZZIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUNBLElBQU1BLE9BQU8sd0JBQWM7QUFDdkJDLGVBQVcsT0FEWTtBQUV2QkMscUJBQWlCLDJCQUFXO0FBQ3hCLFlBQU1DLE9BQU8sSUFBYjtBQUFBLFlBQ0lDLE9BQU8sS0FBS0MsTUFBTCxDQUFZQyxVQUR2QjtBQUFBLFlBRUlDLE1BQU0sS0FBS0YsTUFBTCxDQUFZRyxTQUZ0QjtBQUdBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0osTUFBTCxDQUFZSyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxlQUFPO0FBQ3pDLGdCQUFNQyxJQUFJQyxJQUFJQyxLQUFkO0FBQUEsZ0JBQ0lDLElBQUlGLElBQUlHLEtBRFo7QUFFQVosaUJBQUtNLEtBQUwsQ0FBV08sT0FBWCxDQUFtQixnQkFBUTtBQUN2QixvQkFBSUYsSUFBSWQsS0FBS2MsQ0FBVCxJQUFjQSxJQUFJZCxLQUFLYyxDQUFMLEdBQVNkLEtBQUtpQixNQUFoQyxJQUEwQ04sSUFBSVgsS0FBS1csQ0FBbkQsSUFBd0RBLElBQUlYLEtBQUtXLENBQUwsR0FBU1gsS0FBS2tCLEtBQTlFLEVBQXFGO0FBQ2pGO0FBQ0Esd0JBQUlsQixLQUFLbUIsT0FBVCxFQUFrQjtBQUNkbkIsNkJBQUttQixPQUFMLEdBQWUsS0FBZjtBQUNBaEIsNkJBQUtpQixPQUFMLENBQWFDLFNBQWIsR0FBeUJyQixLQUFLc0IsS0FBOUI7QUFDSCxxQkFIRCxNQUdPO0FBQ0huQiw2QkFBS2lCLE9BQUwsQ0FBYUMsU0FBYixHQUF5QixNQUF6QjtBQUNBckIsNkJBQUttQixPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0RoQix5QkFBS2lCLE9BQUwsQ0FBYUcsU0FBYixDQUF1QnZCLEtBQUtXLENBQTVCLEVBQStCWCxLQUFLYyxDQUFwQyxFQUF1Q2QsS0FBS2tCLEtBQTVDLEVBQW1EbEIsS0FBS2lCLE1BQXhEO0FBQ0FkLHlCQUFLaUIsT0FBTCxDQUFhSSxRQUFiLENBQXNCeEIsS0FBS1csQ0FBM0IsRUFBOEJYLEtBQUtjLENBQW5DLEVBQXNDZCxLQUFLa0IsS0FBM0MsRUFBa0RsQixLQUFLaUIsTUFBdkQ7QUFDSDtBQUNKLGFBYkQ7QUFjSCxTQWpCRDtBQWtCSCxLQXpCc0I7QUEwQnZCUSxjQUFVLGtCQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUJDLE1BQXJCLEVBQTZCQyxNQUE3QixFQUFxQztBQUMzQyxZQUFNUCxRQUFRLEtBQUtGLE9BQUwsQ0FBYUMsU0FBYixHQUF5QixLQUFLUyxVQUFMLEVBQXZDO0FBQ0EsYUFBS3JCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0I7QUFDWlQsbUJBQU9BLEtBREs7QUFFWlgsZUFBRyxLQUFLcUIsT0FBTCxDQUFhTixJQUFiLENBRlM7QUFHWlosZUFBRyxLQUFLbUIsT0FBTCxDQUFhTixJQUFiLENBSFM7QUFJWlQsbUJBQU9VLE1BSks7QUFLWlgsb0JBQVFZO0FBTEksU0FBaEI7QUFPQSxhQUFLVCxPQUFMLENBQWFJLFFBQWIsQ0FBc0IsS0FBS1EsT0FBTCxDQUFhTixJQUFiLENBQXRCLEVBQTBDLEtBQUtPLE9BQUwsQ0FBYU4sSUFBYixDQUExQyxFQUE4REMsTUFBOUQsRUFBc0VDLE1BQXRFO0FBQ0g7QUFwQ3NCLENBQWQsQ0FBYjtBQXNDQTdCLEtBQUtrQyxLQUFMIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWRGdW5ueSBmcm9tIFwiLi4vR3JpZEZ1bm55XCI7XG5jb25zdCBncmlkID0gbmV3IEdyaWRGdW5ueSh7XG4gICAgZ3JpZENvbG9yOiBcImdyZWVuXCIsXG4gICAgYmluZENhbnZhc0V2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHRvcCA9IHRoaXMuY2FudmFzLm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5ncmlkcyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZ0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldnQucGFnZVgsXG4gICAgICAgICAgICAgICAgeSA9IGV2dC5wYWdlWTtcbiAgICAgICAgICAgIHNlbGYuZ3JpZHMuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeSA+IGdyaWQueSAmJiB5IDwgZ3JpZC55ICsgZ3JpZC5oZWlnaHQgJiYgeCA+IGdyaWQueCAmJiB4IDwgZ3JpZC54ICsgZ3JpZC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZihzZWxmLmNvbnRleHQuaXNQb2ludEluU3Ryb2tlKGdyaWQueCwgZ3JpZC55KSl7ICAvLyDlvZPliY1zdHJva2Xlhajpg6jmuIXnqbpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWQuY2xlYW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGVhbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZmlsbFN0eWxlID0gZ3JpZC5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xlYW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KGdyaWQueCwgZ3JpZC55LCBncmlkLndpZHRoLCBncmlkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5maWxsUmVjdChncmlkLngsIGdyaWQueSwgZ3JpZC53aWR0aCwgZ3JpZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGZpbGxHcmlkOiBmdW5jdGlvbihrZXlYLCBrZXlZLCBwaXhlbFgsIHBpeGVsWSkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9yYW5kQ29sb3IoKTtcbiAgICAgICAgdGhpcy5ncmlkcy5wdXNoKHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHg6IHRoaXMuZ3JpZE9mWFtrZXlYXSxcbiAgICAgICAgICAgIHk6IHRoaXMuZ3JpZE9mWVtrZXlZXSxcbiAgICAgICAgICAgIHdpZHRoOiBwaXhlbFgsXG4gICAgICAgICAgICBoZWlnaHQ6IHBpeGVsWVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMuZ3JpZE9mWFtrZXlYXSwgdGhpcy5ncmlkT2ZZW2tleVldLCBwaXhlbFgsIHBpeGVsWSk7XG4gICAgfVxufSk7XG5ncmlkLnN0YXJ0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMtZXM2L3Rlc3RzL2V2ZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(17);


/***/ })

/******/ });