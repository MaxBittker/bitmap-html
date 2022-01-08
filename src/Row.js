import { useContext } from "react";
import { Bounds, pixelSize } from "./App";
import { snapPx } from "./utils";
const Row = ({ children }) => {
  const bounds = useContext(Bounds);

  let rw = snapPx(bounds.width / children.length);
  let remainder = bounds.width - snapPx(rw * children.length - 1) + pixelSize;

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
              x: snapPx(bounds.x + rw * i) - pixelSize,
              width: rw + pixelSize * 1 + bonus,
            }}
          >
            {child}
          </Bounds.Provider>
        );
      })}
    </>
  );
};

export default Row;
