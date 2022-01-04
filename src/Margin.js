import { Bounds } from "./App";
const Margin = ({ children, margin }) => {
  return (
    <Bounds.Consumer>
      {(bounds) => (
        <>
          <Bounds.Provider
            value={{
              x: bounds.x + margin,
              y: bounds.y + margin,
              width: bounds.width - margin * 2,
              height: bounds.height - margin * 2,
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
