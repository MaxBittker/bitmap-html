import { Shape } from "react-konva";
import { pixelSize } from "./App";

function plotLine(x0, y0, x1, y1, drawPixel) {
  var dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? pixelSize : -pixelSize;
  var dy = -Math.abs(y1 - y0),
    sy = y0 < y1 ? pixelSize : -pixelSize;
  var err = dx + dy,
    e2; /* error value e_xy */
  let i = 0;
  for (;;) {
    i++;
    if (i > 1000) {
      break;
    }
    /* loop */
    drawPixel(x0, y0);
    if (Math.abs(x0 - x1) < pixelSize && Math.abs(y0 - y1) < pixelSize) break;
    e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x0 += sx;
    } /* x step */
    if (e2 <= dx) {
      err += dx;
      y0 += sy;
    } /* y step */
  }
}

const Line = ({ x, y, x2, y2 }) => {
  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        // http://members.chello.at/easyfilter/bresenham.js
        plotLine(
          x,
          y,
          x2,
          y2,

          (xx, yy) => context.rect(xx, yy, pixelSize, pixelSize)
        );

        context.closePath();
        // // (!) Konva specific method, it is very important
        context.fillShape(shape);
      }}
      fill="black"
    />
  );
};

export default Line;
