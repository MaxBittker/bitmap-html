import { Line } from "react-konva";
import { Bounds, pixelSize } from "./App";

const HR = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Line
            x={bounds.x}
            y={bounds.y + pixelSize * 1.5}
            points={[0, 0, bounds.width, 0]}
            stroke="black"
            strokeWidth={pixelSize}
          />
          <Bounds.Provider
            value={{
              ...bounds,
              y: bounds.y + pixelSize * 2,
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

export default HR;
