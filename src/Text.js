import { Text } from "react-konva";
import { useContext } from "react";
import { Html } from "react-konva-utils";
import { Bounds } from "./App";

const TextC = ({ fontSize, text, family }) => {
  const bounds = useContext(Bounds);

  let _fontSize = Math.floor(Math.min(fontSize, bounds.height));
  return (
    <>
      <Text
        x={bounds.x + 1}
        y={bounds.y + 1}
        text={text}
        fontFamily={family === "serif" ? "Mondwest" : "NeueBit"}
        fontSize={_fontSize}
        fill="transparent"
      />

      <Html
        divProps={{
          style: {
            position: "absolute",
            left: `${(bounds.x + 0.5) * 2}px`,
            top: `${(bounds.y - 0.5) * 2}px`,
            zIndex: "20",
          },
        }}
      >
        <div
          style={{
            fontFamily: family === "serif" ? "Mondwest" : "NeueBit",
            fontSize: `${_fontSize * 2}px`,
            // color: "transparent",
            // whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </Html>
    </>
  );
};

export default TextC;
