/**
 * Author: LHW
 * Email: lihongwang0618@gmail.com
 * DateTime: 2017-4-10
 * Description: 一个学习Canvas的例子，创建一个表格，然后基于表格填充内容
 * Usage:
 *     var gridFunny = new GridFunny({});
 *     gridFunny.start();
 *
 */


(function(global) {
    'use strict';

    function _extend(obj1, obj2) {
        for (var i in obj2) {
            if (obj2.hasOwnProperty(i)) {
                obj1[i] = obj2[i];
            }
        }
        return obj1;
    }

    function randColor() {
        var colors = [
            "#cfd9df", "#a1c4fd", "#8fd3f4", "#e6dee9", "#c3cfe2",
            "#a8edea", "#e0c3fc", "#ebbba7", "#fff1eb", "#accbee",
            "#c1dfc4", "#deecdd", "#fbfcdb", "#6a85b6", "#9face6",
            '#f35d4f', '#f36849', '#c0d988', '#6ddaf1', '#f1e85b'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function GridFunny(options) {
        this._started = false;
        this.grid = {};
        this.gridOfX = {};
        this.gridOfY = {};
        this.settings = {
            container: document.body,
            gridColor: "#ccc", // 格子的颜色
            gridNum: 9, // 格子的数量
            globalAlpha: 1,
            canvasClassName: "",
            canvasSize: {
                width: 500,
                height: 500
            }, // canvas的尺寸
            bindCanvasEvent: function() {

            },
            generateGridKey: function(x, y) {
                return [x, y].join("-");
            }, // 创建每个格子在grid对象中的key
            onDraw: function() {

            }, // 提供绘画钩子方法，方便定制绘画
            prevDraw: function() {

            },
            nextDraw: function() {

            },
            fillGrid: function(keyX, keyY, pixelX, pixelY) {

            }, // 填充每个格子内容的方法
            contextType: "2d", // canvas文本类型（2d或者3d）
            border: 1 // 表格的边框大小
        };
        _extend(this.settings, options || {});
        return this;
    }

    GridFunny.prototype.start = function() {
        this.canvas = this._initCanvas(this.settings.canvasSize.width, this.settings.canvasSize.height);
        this.settings.bindCanvasEvent.call(this);
        this.canvas.className = this.settings.canvasClassName;
        this.settings.container.appendChild(this.canvas);
        this.context = this.canvas.getContext(this.settings.contextType);
        this._drawBoard();
        this._started = true;
    }

    GridFunny.prototype._initCanvas = function(width, height) {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    GridFunny.prototype._drawBoard = function() {
        var width = this.settings.canvasSize.width,
            height = this.settings.canvasSize.height,
            num = this.settings.gridNum,
            border = this.settings.border,
            halfBorder = border / 2,
            context = this.context,
            color = this.settings.gridColor,
            pixelX = this.pixelX = (width - border) / (num + 2),
            pixelY = this.pixelY = (height - border) / (num + 2),
            rectXSize = pixelX * (num + 1),
            rectYSize = pixelY * (num + 1);
        context.clearRect(0, 0, width, height);
        this.settings.prevDraw.call(this);
        context.beginPath();
        /* 垂直线 */
        for (var i = 0, x = pixelX; x <= rectXSize; x += pixelX) {
            i++;
            var beginCoordinate = halfBorder + x;
            if (i <= num) this.gridOfX[i] = beginCoordinate;
            context.moveTo(beginCoordinate, pixelX);
            context.lineTo(beginCoordinate, rectXSize);
        }

        /* 水平线 */
        for (var j = 0, y = pixelY; y <= rectYSize; y += pixelY) {
            j++;
            var endCoordinate = halfBorder + y;
            if (j <= num) this.gridOfY[j] = endCoordinate;
            context.moveTo(pixelY, endCoordinate);
            context.lineTo(rectYSize, endCoordinate);
        }
        this._initGridCoordinate(pixelX, pixelY);
        context.strokeStyle = color;
        context.stroke();
        this.settings.onDraw.call(this);
        context.closePath();
        this.settings.nextDraw.call(this);
        /* 开始画 */
    }

    GridFunny.prototype._initGridCoordinate = function(pixelX, pixelY) {
        var context = this.context,
            grid = this.grid,
            gridOfX = this.gridOfX,
            gridOfY = this.gridOfY;
        for (var keyX in gridOfX) {
            for (var keyY in gridOfY) {
                // 记录每个格子的坐标
                var key = this.settings.generateGridKey(keyX, keyY);
                grid[key] = [gridOfX[keyX], gridOfY[keyY]];
                this.settings.fillGrid.call(this, keyX, keyY, pixelX, pixelY);
            }
        }
    }

    GridFunny.prototype._canvasRatio = function(key, value) {
        return value / this.settings.canvasSize[key];
    }

    GridFunny.prototype._randColor = function() {
        return randColor();
    }

    GridFunny.prototype._extendObject = function(obj1, obj2) {
        return _extend(obj1, obj2);
    }

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return GridFunny;
        });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = GridFunny;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.GridFunny = GridFunny;
    } else {
        global.GridFunny = GridFunny;
    }
}(this));
