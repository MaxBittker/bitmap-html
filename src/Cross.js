import { useContext } from "react";

import { Shape } from "react-konva";
import Line from "./Line";

import { Bounds } from "./App";

const Cross = () => {
  const bounds = useContext(Bounds);

  return (
    <>
      <Line
        x={bounds.x}
        y={bounds.y}
        x2={bounds.x + bounds.width}
        y2={bounds.y + bounds.height}
      ></Line>
      <Line
        x={bounds.x}
        y={bounds.y + bounds.height}
        x2={bounds.x + bounds.width}
        y2={bounds.y}
      ></Line>
    </>
  );
};

export default Cross;
