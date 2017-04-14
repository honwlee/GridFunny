require([
    "src/GridFunny"
], function(GridFunny) {
    var grid = new GridFunny({
        gridColor: "green"
    });
    grid.start();
});
