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
import setFavicon from "./Favicon";

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
      width: Math.floor((window.innerWidth - 1) / 2),
      height: Math.floor((window.innerHeight - 1) / 2),
    }),
    [size]
  );
  setFavicon();
  let t = Math.floor(timer.time / 100);
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    <>
      <Stage width={initBounds.width} height={initBounds.height}>
        <Layer pix>
          <Bounds.Provider value={initBounds}>
            <Margin margin={-1}>
              <Border>
                <Border>
                  <Border>
                    <HR>
                      <HR>
                        <HR>
                          <Column>
                            <Column lineHeight={32}>
                              <Text
                                text={`HTML de' Bitmap ~*~*~*~`}
                                fontSize={32}
                                family={"serif"}
                              ></Text>
                              <Text text={t} fontSize={32}></Text>
                              <Text
                                text={"Sans serif Text"}
                                fontSize={32}
                              ></Text>
                            </Column>
                            <Column>
                              <Row>
                                {[20, 24, 26, 27].map((s) => (
                                  <Border key={s}>
                                    <Text
                                      key={s}
                                      text={"abc " + s}
                                      fontSize={s}
                                    ></Text>
                                  </Border>
                                ))}
                              </Row>
                              <Row>
                                {[28, 29, 39].map((s) => (
                                  <Border key={s}>
                                    <Text text={"abc " + s} fontSize={s}></Text>
                                  </Border>
                                ))}
                              </Row>
                            </Column>

                            <Row>
                              <Margin margin={-2}>
                                <Border>
                                  <Bitmap />
                                </Border>
                              </Margin>
                              <Margin margin={-2}>
                                <Border>
                                  <Random />
                                </Border>
                              </Margin>
                              <Margin margin={-2}>
                                <Border>
                                  <Cross />
                                </Border>
                              </Margin>
                              <Margin margin={-2}>
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
