import '../../css/style.scss';
import GridFunny from "../GridFunny";
const grid = new GridFunny({
    gridColor: "green",
    fillGrid: function(keyX, keyY, pixelX, pixelY) {
        const paddingX = pixelX / 4,
            paddingY = pixelY / 4;
        if (keyX <= keyY) {
            this.context.fillStyle = "black";
        } else {
            this.context.fillStyle = "blue";
        }
        this.context.font = "20px Arial";
        this.context.fillText(keyX * keyY, this.gridOfX[keyX] + paddingX * 1.5, this.gridOfY[keyY] + paddingY * 2.5);
    }
});
grid.start();
