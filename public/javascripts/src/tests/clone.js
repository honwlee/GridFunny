require([
    "src/GridFunny",
    "src/functions/clone"
], function(GridFunny) {
    var grid = new GridFunny();

    // 剪切三个格子
    grid.clone({
        gridNum: 3,
        width: 300,
        height: 300
    }, function(canvas) {
        grid.settings.container.appendChild(canvas);
    });

    // 全部复制
    grid.clone({
        width: 300,
        height: 300
    }, function(canvas) {
        grid.settings.container.appendChild(canvas);
    });
});
