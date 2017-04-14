import GridFunny from "../GridFunny";
GridFunny.prototype.circle = function(ctx, options) {
    ctx.beginPath();
    ctx.fillStyle = options.color || 'purple';
    ctx.arc(options.x, options.y, options.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
export default GridFunny;
