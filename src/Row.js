import { Bounds } from "./App";
const Row = ({ children }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          {children.map((child, i) => {
            return (
              <Bounds.Provider
                key={i}
                value={{
                  ...bounds,
                  x:
                    bounds.x + Math.round((bounds.width / children.length) * i),
                  width: Math.round(bounds.width / children.length),
                }}
              >
                {child}
              </Bounds.Provider>
            );
          })}
        </>
      )}
    </Bounds.Consumer>
  );
};

export default Row;
