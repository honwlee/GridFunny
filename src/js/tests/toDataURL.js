require([
    "src/GridFunny",
    "src/functions/toDataURL"
], function(GridFunny) {
    var grid = new GridFunny();
    grid.start();
    grid.toDataURL("image/png", {}, function(canvas, data) {
        var image = new Image(),
            img = document.createElement("img");
        img.src = data;
        image.src = data;
        image.onload = function() {
            grid.settings.container.appendChild(img);
            grid.settings.container.removeChild(canvas);
            // 在这里做图片加载后的定制化代码
        };
        return image;
    });
});
