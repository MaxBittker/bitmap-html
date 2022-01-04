import { Rect } from "react-konva";
import { Bounds } from "./App";
const Border = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Rect
            x={bounds.x + 4}
            y={bounds.y + 4}
            width={bounds.width - 8}
            height={bounds.height - 8}
            stroke="black"
          />
          <Bounds.Provider
            value={{
              x: bounds.x + 4,
              y: bounds.y + 4,
              width: bounds.width - 8,
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

export default Border;
