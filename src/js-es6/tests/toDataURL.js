import '../../css/style.scss';
import GridFunny from "../functions/toDataURL";
const grid = new GridFunny();
grid.start();
grid.toDataURL("image/png", {}, (canvas, data) => {
    const image = new Image(),
        img = document.createElement("img");
    img.src = data;
    image.src = data;
    image.onload = () => {
        grid.settings.container.appendChild(img);
        grid.settings.container.removeChild(canvas);
        // 在这里做图片加载后的定制化代码
    };
    return image;
});
