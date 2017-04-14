import '../../css/style.scss';
import GridFunny from "../GridFunny";
window.requestAnimFrame = ((() => window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    (( /* function */ callback, /* DOMElement */ element) => {
        window.setTimeout(callback, 1000 / 60);
    })))();

window.cancelRequestAnimFrame = ((() => window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout))();

const grid = new GridFunny({
    canvasClassName: "bg-canvas",
    nextDraw: function() {
        const self = this;
        const findDistance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        const ctx = this.context,
            num = this.settings.gridNum,
            particles = [],
            patriclesNum = 500,
            w = this.pixelX * num,
            h = this.pixelY * num;
        const Factory = function() {
            this.x = Math.round(Math.random() * w) + self.pixelX;
            this.y = Math.round(Math.random() * h) + self.pixelY;
            this.rad = Math.round(Math.random() * 1) + 1;
            this.rgba = self._randColor();
            this.vx = Math.round(Math.random() * 3) - 1.5;
            this.vy = Math.round(Math.random() * 3) - 1.5;
        };
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 0; i < patriclesNum; i++) {
            particles.push(new Factory);
        }

        for (var i = 0; i < patriclesNum; i++) {
            const temp = particles[i];
            let factor = 1;

            for (let j = 0; j < patriclesNum; j++) {

                const temp2 = particles[j];
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

            if (temp.x > w) temp.x = self.pixelX;
            if (temp.x < 0) temp.x = w;
            if (temp.y > h) temp.y = self.pixelY;
            if (temp.y < 0) temp.y = h;
        }
    }
});
grid.start();
const animate = () => {
    requestAnimationFrame(animate);
    grid._drawBoard();
};
animate();
