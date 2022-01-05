import { Text, TextPath } from "react-konva";
import { useContext, Fragment } from "react";
import { Html } from "react-konva-utils";
import { Bounds } from "./App";

const TextC = ({ fontSize, text, family }) => {
  const bounds = useContext(Bounds);

  let _fontSize = Math.floor(Math.min(fontSize));
  let lineHeight = family === "serif" ? 0.95 : 1.2;
  return (
    <Fragment>
      <Text
        x={bounds.x}
        y={bounds.y}
        text={text}
        fontFamily={family === "serif" ? "Mondwest" : "NeueBit"}
        fontSize={_fontSize}
        fill="black"
        // fill="transparent"
      />

      <Html
        divProps={{
          style: {
            position: "absolute",
            left: `${bounds.x * 2}px`,
            top: `${bounds.y * 2}px`,
            height: `${_fontSize * lineHeight * 2}px`,
            width: `${bounds.width * 2}px`,
            zIndex: "20",
          },
        }}
      >
        <div
          style={{
            fontFamily: family === "serif" ? "Mondwest" : "NeueBit",
            fontSize: `${_fontSize * 2}px`,
            color: "transparent",
            // color: "red",
            whiteSpace: "nowrap",
            lineHeight: `${_fontSize * lineHeight * 2}px`,
            // backgroundColor: `rgba(1,0,0,0.1)`,
          }}
        >
          {text}
        </div>
      </Html>
    </Fragment>
  );
};

export default TextC;
