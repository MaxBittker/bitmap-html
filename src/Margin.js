import { Bounds, pixelSize } from "./App";
const Margin = ({ children, margin = 0, top, bottom, left, right }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Bounds.Provider
            value={{
              x: bounds.x + (left || margin) * pixelSize,
              y: bounds.y + (top || margin) * pixelSize,
              width:
                bounds.width -
                ((right || margin) + (left || margin)) * pixelSize,
              height:
                bounds.height -
                ((top || margin) + (bottom || margin)) * pixelSize,
            }}
          >
            {children}
          </Bounds.Provider>
        </>
      )}
    </Bounds.Consumer>
  );
};

export default Margin;
