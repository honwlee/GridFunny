require([
    "src/GridFunny"
], function(GridFunny) {
    var grid = new GridFunny({
        nextDraw: function() {
            var num = this.settings.gridNum,
                canvasSize = this.settings.canvasSize,
                cX = canvasSize.width / 2,
                cY = canvasSize.height / 2,
                gradient = this.context.createRadialGradient(cX,cY, 20, cX, cY, 110);
            gradient.addColorStop(0, 'yellow');
            gradient.addColorStop(1, 'green');
            this.context.fillStyle = gradient;
            this.context.beginPath();
            this.context.arc(cX, cY, 110, 0, 2 * Math.PI, false);
            this.context.fill();
            this.context.closePath();
        }
    });
    grid.start();
});
