import { useContext } from "react";

import { Shape } from "react-konva";

import { Bounds } from "./App";

const Random = () => {
  const bounds = useContext(Bounds);

  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        // http://members.chello.at/easyfilter/bresenham.js
        let i = 0;
        for (let x = bounds.x; x < bounds.width + bounds.x; x += 1) {
          for (let y = bounds.y; y < bounds.height + bounds.y; y += 1) {
            if (i++ > 100000) {
              break;
            }

            if (Math.random() > 0.9) {
              context.rect(x, y, 1, 1);
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