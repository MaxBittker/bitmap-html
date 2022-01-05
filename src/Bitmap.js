import { useContext, useState } from "react";

import { Shape, Rect } from "react-konva";

import { Bounds } from "./App";

const Bitmap = () => {
  const bounds = useContext(Bounds);
  const [v, setV] = useState(7);
  return (
    <>
      {/* <Rect
        x={bounds.x + 2.5}
        y={bounds.y + 2.5}
        width={bounds.width - 5}
        height={bounds.height - 5}
        fill="black"
        strokeWidth={0}
        onMouseDown={(e) => {
          console.log(e);
          setV(Math.ceil(Math.random() * 100));
        }}
      ></Rect> */}
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
              if ((x + y) % (i % v) == 0) {
                context.rect(x, y, 1, 1);
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
    </>
  );
};

export default Bitmap;
