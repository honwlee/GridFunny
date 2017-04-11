define(["src/GridFunny"], function(GridFunny) {
    GridFunny.prototype.toDataURL = function(type, options, callback) {
        // 保证canvas被创建
        if (!this._started) this.start();
        var data = this.canvas.toDataURL(type || "image/png", options || {});
        callback(this.canvas, data);
    }
});
