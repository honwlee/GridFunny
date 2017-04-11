require(["src/GridFunny"], function(GridFunny) {
    var grid = new GridFunny({
        fillGrid: function(keyX, keyY, pixelX, pixelY) {
            var paddingX = pixelX / 4,
                paddingY = pixelY / 4;
            // 填充格子颜色
            this.context.fillStyle = this._randColor();
            // 设置颜色的透明度
            this.context.globalAlpha = 0.5;
            this.context.fillRect(this.gridOfX[keyX], this.gridOfY[keyY], pixelX, pixelY);
            // 填充数字
            if (keyX <= keyY) {
                this.context.fillStyle = "black";
            } else {
                this.context.fillStyle = "blue";
            }
            // this.context.textAlign = 'center';
            // this.context.textBaseline = 'middle';
            this.context.fillText(keyX * keyY, this.gridOfX[keyX] + paddingX * 1.5, this.gridOfY[keyY] + paddingY * 2.5);
        }
    });
    grid.start();
});
