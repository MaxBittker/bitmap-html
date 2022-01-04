import { Rect } from "react-konva";
import { Bounds } from "./App";
const Border = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Rect
            x={bounds.x + 2.5}
            y={bounds.y + 2.5}
            width={bounds.width - 4}
            height={bounds.height - 4}
            stroke="black"
            strokeWidth={1}
          />
          <Bounds.Provider
            value={{
              x: bounds.x + 2,
              y: bounds.y + 2,
              width: bounds.width - 4,
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

export default Border;
