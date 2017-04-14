require([
    "src/GridFunny",
    "src/functions/scale",
    "src/functions/rotate",
    "src/functions/translate",
    "src/functions/transform"
], function(GridFunny) {
var grid = new GridFunny({
    gridColor: "green",
    canvasClassName: "transform-canvas",
    nextDraw: function() {
        var context = this.context,
            x = this.pixelX + 50,
            y = this.pixelY + 10,
            w = 240,
            h = 50;
        context.fillStyle = '#ccc';
        context.strokeStyle = 'red';
        context.font = '30px Arial';
        context.fillRect(x, y, w, h);
        context.strokeText("transform canvas", x + 5, 85);
    }
});
grid.start();
// scale
grid.scale({
    width: 300,
    height: 300
}, function(canvas) {
    canvas.className = grid.settings.canvasClassName;
    grid.settings.container.appendChild(canvas);
});
// rotate
grid.rotate({
    angle: 30 * Math.PI / 180
}, function(canvas) {
    canvas.className = grid.settings.canvasClassName;
    grid.settings.container.appendChild(canvas);
});
// translate
grid.translate({
    x: 120,
    y: 50
}, function(canvas) {
    canvas.className = grid.settings.canvasClassName;
    grid.settings.container.appendChild(canvas);
});
// transform
grid.transform({
    a: 0.5,
    b: 0.4,
    c: -0.2,
    d: 1.2,
    e: 200,
    f: 0
}, function(canvas) {
    canvas.className = grid.settings.canvasClassName;
    grid.settings.container.appendChild(canvas);
});
});
