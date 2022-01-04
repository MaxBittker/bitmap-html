import Konva from "konva";
import { useRef, useEffect, useContext } from "react";

import { Line } from "react-konva";

import { Bounds } from "./App";

const Scratch = () => {
  const shapeRef = useRef(null);
  const shapeRef2 = useRef(null);
  const bounds = useContext(Bounds);

  useEffect(() => {
    // it will log `Konva.Circle` instance
    // when image is loaded we need to cache the shape
    if (shapeRef.current) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      // shapeRef.current.cache();
      // shapeRef2.current.cache();
    }
  }, [bounds]);

  return (
    <>
      <Line
        ref={shapeRef}
        filters={[Konva.Filters.Threshold]}
        threshold={0.5}
        strokeWidth={2}
        x={bounds.x}
        y={bounds.y}
        points={[0, 0, bounds.width, bounds.height]}
        stroke="black"
      />
      <Line
        ref={shapeRef2}
        filters={[Konva.Filters.Threshold]}
        threshold={0.5}
        strokeWidth={2}
        x={bounds.x}
        y={bounds.y}
        points={[0, bounds.height, bounds.width, 0]}
        stroke="black"
      />
    </>
  );
};

export default Scratch;
