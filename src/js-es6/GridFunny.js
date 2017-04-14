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
import baseAPI from "./baseFunc";
class GridFunny {
    constructor(options) {
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
            bindCanvasEvent() {

            },
            generateGridKey(x, y) {
                return [x, y].join("-");
            }, // 创建每个格子在grid对象中的key
            onDraw() {

            }, // 提供绘画钩子方法，方便定制绘画
            prevDraw() {

            },
            nextDraw() {

            },
            fillGrid(keyX, keyY, pixelX, pixelY) {

            }, // 填充每个格子内容的方法
            contextType: "2d", // canvas文本类型（2d或者3d）
            border: 1 // 表格的边框大小
        };
        this._extendObject(this.settings, options || {});
        return this;
    }

    start() {
        this.canvas = this._initCanvas(this.settings.canvasSize.width, this.settings.canvasSize.height);
        this.canvas.style.left = (window.innerWidth - 500) / 2 + 'px';

        if (window.innerHeight > 500)
            this.canvas.style.top = (window.innerHeight - 500) / 2 + 'px';

        this.settings.bindCanvasEvent.call(this);
        this.canvas.className = this.settings.canvasClassName;
        this.settings.container.appendChild(this.canvas);
        this.context = this.canvas.getContext(this.settings.contextType);
        this._drawBoard();
        this._started = true;
    }

    _initCanvas(width, height) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    _drawBoard() {
        const width = this.settings.canvasSize.width,
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
        for (let i = 0, x = pixelX; x <= rectXSize; x += pixelX) {
            i++;
            const beginCoordinate = halfBorder + x;
            if (i <= num) this.gridOfX[i] = beginCoordinate;
            context.moveTo(beginCoordinate, pixelX);
            context.lineTo(beginCoordinate, rectXSize);
        }

        /* 水平线 */
        for (let j = 0, y = pixelY; y <= rectYSize; y += pixelY) {
            j++;
            const endCoordinate = halfBorder + y;
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

    _initGridCoordinate(pixelX, pixelY) {
        const context = this.context,
            grid = this.grid,
            gridOfX = this.gridOfX,
            gridOfY = this.gridOfY;
        for (const keyX in gridOfX) {
            for (const keyY in gridOfY) {
                // 记录每个格子的坐标
                const key = this.settings.generateGridKey(keyX, keyY);
                grid[key] = [gridOfX[keyX], gridOfY[keyY]];
                this.settings.fillGrid.call(this, keyX, keyY, pixelX, pixelY);
            }
        }
    }

    _canvasRatio(key, value) {
        return value / this.settings.canvasSize[key];
    }

    _randColor() {
        return baseAPI.randColor();
    }

    _extendObject(obj1, obj2) {
        return baseAPI.extend(obj1, obj2);
    }
}
export default GridFunny;
