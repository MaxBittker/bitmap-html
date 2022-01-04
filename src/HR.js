import { Line } from "react-konva";
import { Bounds } from "./App";
const HR = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Line
            x={bounds.x}
            y={bounds.y + 2 + 0.5}
            points={[0, 0, bounds.width, 0]}
            stroke="black"
            strokeWidth={1}
          />
          <Bounds.Provider
            value={{
              ...bounds,
              y: bounds.y + 2,
              height: bounds.height - 4,
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
