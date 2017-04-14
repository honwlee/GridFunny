import '../../css/style.scss';
import GridFunny from "../GridFunny";
const grid = new GridFunny({
    onDraw: function() {
        const num = this.settings.gridNum,
            gradient = this.context.createLinearGradient(0, 0, 0, this.pixelY * num);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        this.context.fillStyle = gradient;
        this.context.fillRect(this.gridOfX[1], this.gridOfY[1], this.pixelX * num, this.pixelY * num);
    }
});
grid.start();
