define(["src/GridFunny"], function(GridFunny) {
    GridFunny.prototype.fillCircle = function(ctx, options) {
        ctx.beginPath();
        ctx.fillStyle = options.color || 'purple';
        ctx.arc(options.x, options.y, options.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
});
