define([
    "src/GridFunny",
    "src/functions/toDataURL"
], function(GridFunny) {
    GridFunny.prototype.clone = function(options, callback) {
        if (!this._started) this.start();
        var self = this,
            canvasSize = this.settings.canvasSize,
            width = canvasSize.width,
            height = canvasSize.height,
            destGridW = this._canvasRatio("width", options.width || width) * this.pixelX,
            destGridH = this._canvasRatio("height", options.height || height) * this.pixelY,
            _opts = this._extendObject({
                type: "image/png",
                opts: {},
                width: width,
                height: height,
                sx: this.pixelX,
                sy: this.pixelY,
                sw: options.gridNum ? options.gridNum * this.pixelX : this.settings.canvasSize.width - this.pixelX * 2,
                sh: options.gridNum ? options.gridNum * this.pixelY : this.settings.canvasSize.height - this.pixelY * 2,
                dx: destGridW,
                dy: destGridH,
                dw: (options.width || width) - (destGridW * 2),
                dh: (options.width || width) - (destGridH * 2)
            }, options || {});
        this.toDataURL(_opts.type, _opts.opts, function(canvas, data) {
            var image = new Image();
            image.src = data;
            image.onload = function() {
                var _canvas = self._initCanvas(_opts.width, _opts.height),
                    ctx = _canvas.getContext('2d');
                ctx.drawImage(image, _opts.sx, _opts.sy, _opts.sw, _opts.sh, _opts.dx, _opts.dy, _opts.dw, _opts.dh);
                callback(_canvas);
            };
        });
    }
});
