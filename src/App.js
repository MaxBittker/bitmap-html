import "./App.css";
import { useState, useRef, useCallback, useMemo } from "react";
import { Stage, Layer, Rect, Line, Text } from "react-konva";
import { Html } from "react-konva-utils";

function useTimer({ frequency = 60 } = {}) {
  const [time, setTime] = useState(-1);
  const startTime = useRef();
  const interval = useRef();

  const start = useCallback(
    function start(initialTime = 0) {
      // Reset everything.
      setTime(initialTime);
      startTime.current = Date.now();
      clearInterval(interval.current);

      // Start the timer going.
      interval.current = setInterval(() => {
        setTime(initialTime + Date.now() - startTime.current);
      }, frequency);
    },
    [frequency]
  );
  const pause = useCallback(function pause() {
    clearInterval(interval.current);
  }, []);
  if (time == -1) {
    start();
  }
  return useMemo(() => ({ time, start, pause }), [time, start, pause]);
}

export const App = () => {
  const timer = useTimer();
  console.log(timer.time);
  // Restart the socket if we don’t get a message for 1.5 heartbeat periods.
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer pix>
          <Rect
            x={1}
            y={1}
            width={window.innerWidth - 2}
            height={window.innerHeight - 2}
            stroke="black"
          />
          <Rect
            x={4}
            y={4}
            width={window.innerWidth - 8}
            height={window.innerHeight - 8}
            stroke="black"
          />

          <Rect x={100} y={100} width={250} height={250} fill="#eef" />
          <Line
            x={100}
            y={100}
            points={[0, 0, 250, 0, 250, 250]}
            stroke="black"
          />
          <Line
            x={96}
            y={104}
            points={[0, 0, 250, 0, 250, 250]}
            stroke="black"
          />
          <Line
            x={92}
            y={108}
            points={[0, 0, 250, 0, 250, 250]}
            stroke="black"
          />
          <Rect x={88} y={112} width={250} height={250} fill="#eef" />

          <Line
            x={88}
            y={112}
            points={[0, 0, 250, 0, 250, 250]}
            stroke="black"
          />

          <Text
            y={10 + 3}
            x={5}
            text="HTML de' Bitmap ~*~*~*~"
            fontFamily="Mondwest"
            fontSize={50}
          />

          <Html
            divProps={{
              style: {
                position: "absolute",
                top: "10px",
                left: "5px",
                zIndex: "20",
              },
            }}
          >
            <div style={{ fontFamily: "Mondwest", fontSize: "50px" }}>
              HTML de' Bitmap ~*~*~*~
            </div>
          </Html>
        </Layer>
      </Stage>
    </>
  );
};

export default App;
