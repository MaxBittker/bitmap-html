import { Line } from "react-konva";
import { Bounds } from "./App";
const HR = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Line
            x={bounds.x}
            y={bounds.y + 4}
            points={[0, 0, bounds.width, 0]}
            stroke="black"
          />
          <Bounds.Provider
            value={{
              ...bounds,
              y: bounds.y + 4,
              height: bounds.height - 8,
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
