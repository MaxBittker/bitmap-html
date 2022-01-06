import { useContext } from "react";

import Line from "./Line";

import { Bounds, pixelSize } from "./App";

const Cross = () => {
  const bounds = useContext(Bounds);
  // console.log(bounds);
  return (
    <>
      <Line
        x={bounds.x}
        y={bounds.y}
        x2={bounds.x + bounds.width - pixelSize}
        y2={bounds.y + bounds.height - pixelSize}
      ></Line>
      <Line
        x={bounds.x}
        y={bounds.y + bounds.height - pixelSize}
        x2={bounds.x + bounds.width - pixelSize}
        y2={bounds.y}
      ></Line>
    </>
  );
};

export default Cross;
