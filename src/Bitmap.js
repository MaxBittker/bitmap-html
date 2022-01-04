import { useContext } from "react";

import { Shape } from "react-konva";

import { Bounds } from "./App";

const Bitmap = () => {
  const bounds = useContext(Bounds);

  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        // http://members.chello.at/easyfilter/bresenham.js
        let i = 0;
        for (let x = bounds.x; x < bounds.width + bounds.x; x += 2) {
          for (let y = bounds.y; y < bounds.height + bounds.y; y += 2) {
            if (i++ > 100000) {
              break;
            }
            if ((((x / 2) * y) / 2) % 2 === 0) {
              context.rect(x, y, 2, 2);
            }
            // if (Math.random() > 0.9) {
            //   context.rect(x, y, 2, 2);
            // }
          }
        }

        context.closePath();
        // // (!) Konva specific method, it is very important
        context.fillShape(shape);
      }}
      fill="black"
    />
  );
};

export default Bitmap;
