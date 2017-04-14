import GridFunny from "../GridFunny";
const grid = new GridFunny({
    gridColor: "green",
    bindCanvasEvent: function() {
        const self = this,
            left = this.canvas.offsetLeft,
            top = this.canvas.offsetTop;
        this.grids = [];
        this.canvas.addEventListener("click", evt => {
            const x = evt.pageX,
                y = evt.pageY;
            self.grids.forEach(grid => {
                if (y > grid.y && y < grid.y + grid.height && x > grid.x && x < grid.x + grid.width) {
                    // if(self.context.isPointInStroke(grid.x, grid.y)){  // 当前stroke全部清空
                    if (grid.cleaned) {
                        grid.cleaned = false;
                        self.context.fillStyle = grid.color;
                    } else {
                        self.context.fillStyle = "#fff";
                        grid.cleaned = true
                    }
                    self.context.clearRect(grid.x, grid.y, grid.width, grid.height);
                    self.context.fillRect(grid.x, grid.y, grid.width, grid.height);
                }
            });
        });
    },
    fillGrid: function(keyX, keyY, pixelX, pixelY) {
        const color = this.context.fillStyle = this._randColor();
        this.grids.push({
            color: color,
            x: this.gridOfX[keyX],
            y: this.gridOfY[keyY],
            width: pixelX,
            height: pixelY
        });
        this.context.fillRect(this.gridOfX[keyX], this.gridOfY[keyY], pixelX, pixelY);
    }
});
grid.start();
