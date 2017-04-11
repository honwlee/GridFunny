require([
    "src/GridFunny"
], function(GridFunny) {
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var grid = new GridFunny({
        nextDraw: function() {
            var time = new Date().getTime() * 0.002,
                num = this.settings.gridNum,
                canvasSize = this.settings.canvasSize,
                cX = canvasSize.width / 2,
                cY = canvasSize.height / 2,
                x = Math.sin(time) * this.pixelX + cX,
                y = Math.cos(time * 0.9) * this.pixelY + cY,
                gradient = this.context.createRadialGradient(x, y, 20, cX, cY, 110);
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
    var animate = function() {
        requestAnimationFrame(animate);
        grid._drawBoard();
    };
    animate();
});
