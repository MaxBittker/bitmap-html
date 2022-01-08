import { Bounds, pixelSize } from "./App";
import { useContext } from "react";
import { snapPx } from "./utils";

const Column = ({ children, lineHeight }) => {
  const bounds = useContext(Bounds);
  let maxlineHeight = Math.round(bounds.height / children.length);
  let lh = lineHeight || Math.round(bounds.height / children.length);
  if (lh > maxlineHeight) {
    lh = maxlineHeight;
  }
  lh = snapPx(lh);
  let remainder = bounds.height - snapPx(lh * children.length - 1) + pixelSize;
  return (
    <>
      {children.map((child, i) => {
        let bonus = 0;
        if (i === children.length - 1) {
          bonus += remainder;
        }
        return (
          <Bounds.Provider
            key={i}
            value={{
              ...bounds,
              y: snapPx(bounds.y + lh * i),

              height: lh + pixelSize + bonus,
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
