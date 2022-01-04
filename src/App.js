import "./App.css";
import { createContext, useMemo } from "react";
import { Stage, Layer } from "react-konva";
import { useTimer, useWindowSize } from "./utils.js";
import Text from "./Text.js";
import Border from "./Border.js";
import HR from "./HR.js";
import Margin from "./Margin.js";
import Column from "./Column.js";
import Row from "./Row.js";
import Bitmap from "./Bitmap";
import Random from "./RandomFill";
import Cross from "./Cross";

const Bounds = createContext({
  x: 0,
  y: 0,
  width: window.innerWidth,
  height: window.innerHeight,
});

export { Bounds };

export const App = () => {
  const timer = useTimer();
  const size = useWindowSize();
  const initBounds = useMemo(
    () => ({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    [size]
  );
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer pix>
          <Bounds.Provider value={initBounds}>
            <Margin margin={-2}>
              <Border>
                <Border>
                  <Border>
                    <HR>
                      <HR>
                        <HR>
                          <Column>
                            <Column lineHeight={54}>
                              <Text
                                text={`HTML de' Bitmap ~*~*~*~`}
                                fontSize={50}
                              ></Text>
                              <Text
                                text={Math.floor(timer.time / 100)}
                                fontSize={50}
                              ></Text>
                              <Text text={3} fontSize={50}></Text>
                            </Column>
                            <Border>
                              <Cross />
                            </Border>

                            <Cross />

                            <Row>
                              <Margin margin={-4}>
                                <Border>
                                  <Bitmap />
                                </Border>
                              </Margin>
                              <Margin margin={-4}>
                                <Border>
                                  <Random />
                                </Border>
                              </Margin>
                              <Margin margin={-4}>
                                <Border>
                                  <Cross />
                                </Border>
                              </Margin>
                              <Margin margin={-4}>
                                <Border>
                                  <Cross />
                                </Border>
                              </Margin>
                            </Row>
                          </Column>
                          {/* <Cross /> */}
                          {/* <Cross /> */}
                        </HR>
                      </HR>
                    </HR>
                  </Border>
                </Border>
              </Border>
            </Margin>
          </Bounds.Provider>
        </Layer>
      </Stage>
    </>
  );
};

export default App;
