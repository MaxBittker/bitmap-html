import { Bounds, pixelSize } from "./App";
import { useContext } from "react";

const Column = ({ children, lineHeight }) => {
  const bounds = useContext(Bounds);
  let maxlineHeight = Math.round(bounds.height / children.length);
  let lh = lineHeight || Math.round(bounds.height / children.length);
  if (lh > maxlineHeight) {
    lh = maxlineHeight;
  }

  return (
    <>
      {children.map((child, i) => {
        return (
          <Bounds.Provider
            key={i}
            value={{
              ...bounds,
              y: bounds.y + lh * i,

              height: lh + pixelSize,
            }}
          >
            {child}
          </Bounds.Provider>
        );
      })}
    </>
  );
};

export default Column;
