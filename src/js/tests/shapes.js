require([
    "src/GridFunny"
], function(GridFunny) {
    var grid = new GridFunny({
        gridColor: "green",
        fillGrid: function(keyX, keyY, pixelX, pixelY) {
            this.context.fillStyle = this._randColor();
            this.context.fillRect(this.gridOfX[keyX], this.gridOfY[keyY], pixelX, pixelY);
        }
    });
    grid.start();
});
