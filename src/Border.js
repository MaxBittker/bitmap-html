import { Rect } from "react-konva";
import { Bounds, pixelSize } from "./App";

const Border = ({ children, color = "black" }) => {
  // const Border = ({ children, color = "rgba(255,0,255,0.5)" }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Rect
            x={bounds.x + pixelSize / 2}
            y={bounds.y + pixelSize / 2}
            width={bounds.width - pixelSize * 1.0}
            height={bounds.height - pixelSize}
            stroke={color}
            strokeWidth={pixelSize}
          />
          <Bounds.Provider
            value={{
              x: bounds.x + pixelSize,
              y: bounds.y + pixelSize,
              width: bounds.width - pixelSize * 2,
              height: bounds.height - pixelSize * 2,
            }}
          >
            {children}
          </Bounds.Provider>
        </>
      )}
    </Bounds.Consumer>
  );
};

export default Border;
