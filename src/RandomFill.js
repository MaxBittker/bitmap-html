import { useContext } from "react";

import { Shape } from "react-konva";

import { Bounds, pixelSize } from "./App";

const Random = () => {
  const bounds = useContext(Bounds);

  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        // http://members.chello.at/easyfilter/bresenham.js
        let i = 0;
        for (let x = bounds.x; x < bounds.width + bounds.x; x += pixelSize) {
          for (let y = bounds.y; y < bounds.height + bounds.y; y += pixelSize) {
            if (i++ > 100000) {
              break;
            }

            if (Math.random() > 0.9) {
              context.rect(x, y, pixelSize, pixelSize);
            }
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

export default Random;
