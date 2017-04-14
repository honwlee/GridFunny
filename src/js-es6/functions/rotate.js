import GridFunny from "./toDataURL";
GridFunny.prototype.rotate = function(options, callback) {
    const self = this,
        canvasSize = this.settings.canvasSize,
        width = canvasSize.width,
        height = canvasSize.height,
        ratioX = this._canvasRatio("width", options.width || width),
        ratioY = this._canvasRatio("height", options.height || height);
    this.toDataURL("image/png", {}, (canvas, data) => {
        const image = new Image();
        image.src = data;
        image.onload = () => {
            const _canvas = self._initCanvas(options.width || width, options.width || width),
                ctx = _canvas.getContext('2d');
            ctx.scale(ratioX, ratioY);
            ctx.rotate(options.angle);
            ctx.drawImage(image, 0, 0);
            callback(_canvas);
        };
    });
}
export default GridFunny;
