import { Text } from "react-konva";
import { useContext } from "react";
import { Html } from "react-konva-utils";
import { Bounds } from "./App";

const TextC = ({ fontSize, text }) => {
  const bounds = useContext(Bounds);

  let _fontSize = Math.floor(Math.min(fontSize, bounds.height));
  return (
    <>
      <Text
        x={bounds.x}
        y={bounds.y + 1}
        text={text}
        fontFamily="Mondwest"
        fontSize={_fontSize}
      />
      <Text
        x={bounds.x}
        y={bounds.y + 1}
        text={text}
        fontFamily="Mondwest"
        fontSize={_fontSize}
      />

      <Html
        divProps={{
          style: {
            position: "absolute",
            left: `${bounds.x}px`,
            top: `${bounds.y}px`,
            zIndex: "20",
          },
        }}
      >
        <div
          style={{
            fontFamily: "Mondwest",
            fontSize: `${_fontSize}px`,
            color: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </Html>
    </>
  );
};

export default TextC;
