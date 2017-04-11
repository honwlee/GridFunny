define([
    "src/GridFunny",
    "src/functions/toDataURL"
], function(GridFunny) {
    GridFunny.prototype.translate = function(options, callback) {
        var self = this,
            canvasSize = this.settings.canvasSize,
            width = canvasSize.width,
            height = canvasSize.height,
            ratioX = this._canvasRatio("width", options.width || width),
            ratioY = this._canvasRatio("height", options.height || height);
        this.toDataURL("image/png", {}, function(canvas, data) {
            var image = new Image();
            image.src = data;
            image.onload = function() {
                var _canvas = self._initCanvas(options.width || width, options.width || width),
                    ctx = _canvas.getContext('2d');
                ctx.scale(ratioX, ratioY);
                ctx.translate(options.x, options.y);
                ctx.drawImage(image, 0, 0);
                callback(_canvas);
            };
        });
    }
});
