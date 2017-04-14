import GridFunny from "../functions/clone";
const grid = new GridFunny();

// 剪切三个格子
grid.clone({
    gridNum: 3,
    width: 300,
    height: 300
}, canvas => {
    grid.settings.container.appendChild(canvas);
});

// 全部复制
grid.clone({
    width: 300,
    height: 300
}, canvas => {
    grid.settings.container.appendChild(canvas);
});
