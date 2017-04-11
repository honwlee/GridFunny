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
                window.setTimeout(callback, 1000 / 60 * 5);
            };
    })();

    var grid = new GridFunny({
        canvasClassName: "bg-canvas",
        prevDraw: function() {
            var self = this;
            var findDistance = function(p1, p2) {
                return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
            };
            this.canvas.style.left = (window.innerWidth - 500) / 2 + 'px';

            if (window.innerHeight > 500)
                this.canvas.style.top = (window.innerHeight - 500) / 2 + 'px';

            var Factory = function() {
                this.x = Math.round(Math.random() * w) + self.pixelX;
                this.y = Math.round(Math.random() * h) + self.pixelY;
                this.rad = Math.round(Math.random() * 1) + 1;
                this.rgba = self._randColor();
                this.vx = Math.round(Math.random() * 3) - 1.5 + self.pixelX;
                this.vy = Math.round(Math.random() * 3) - 1.5 + self.pixelY;
            }
            var ctx = this.context,
                num = this.settings.gridNum,
                particles = [],
                patriclesNum = 500,
                w = this.pixelX * num,
                h = this.pixelY * num;
            ctx.globalCompositeOperation = 'lighter';

            for (var i = 0; i < patriclesNum; i++) {
                particles.push(new Factory);
            }

            for (var i = 0; i < patriclesNum; i++) {
                var temp = particles[i];
                var factor = 1;

                for (var j = 0; j < patriclesNum; j++) {

                    var temp2 = particles[j];
                    ctx.linewidth = 0.5;

                    if (temp.rgba == temp2.rgba && findDistance(temp, temp2) < 50) {
                        ctx.strokeStyle = temp.rgba;
                        ctx.beginPath();
                        ctx.moveTo(temp.x, temp.y);
                        ctx.lineTo(temp2.x, temp2.y);
                        ctx.stroke();
                        factor++;
                    }
                }
                ctx.fillStyle = temp.rgba;
                ctx.strokeStyle = temp.rgba;

                ctx.beginPath();
                ctx.arc(temp.x, temp.y, temp.rad * factor, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.arc(temp.x, temp.y, (temp.rad + 5) * factor, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.closePath();
                temp.x += temp.vx;
                temp.y += temp.vy;

                if (temp.x > w) temp.x = 0;
                if (temp.x < 0) temp.x = w;
                if (temp.y > h) temp.y = 0;
                if (temp.y < 0) temp.y = h;
            }
        }
    });
    grid.start();
    var animate = function() {
        requestAnimationFrame(animate);
        grid._drawBoard();
    };
    animate();
});
