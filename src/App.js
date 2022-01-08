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
export const pixelRatio = 2;
export const pixelSize = 2;

export const App = () => {
  const timer = useTimer();
  const size = useWindowSize();
  const initBounds = useMemo(
    () => ({
      x: 0,
      y: 0,
      width: Math.round(window.innerWidth / pixelRatio),
      height: Math.round(window.innerHeight / pixelRatio),
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
            <Margin margin={-pixelSize * 0}>
              <Border>
                <Border color="transparent">
                  <Border>
                    <Border color="transparent">
                      <Border>
                        <HR>
                          <HR>
                            <HR>
                              <Margin top={1} bottom={1}>
                                <Column>
                                  <Column lineHeight={40}>
                                    <Text
                                      text={`HTML de' Bitmap ~*~*~*~`}
                                      fontSize={22}
                                      family={"serif"}
                                    ></Text>
                                    <Text text={t} fontSize={22}></Text>
                                    <Text
                                      text={"Sans serif Text"}
                                      fontSize={22}
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
                                          <Text
                                            text={"abc " + s}
                                            fontSize={s}
                                          ></Text>
                                        </Border>
                                      ))}
                                    </Row>
                                  </Column>

                                  <Row>
                                    <Border>
                                      <Bitmap />
                                    </Border>

                                    <Border>
                                      <Random />
                                    </Border>

                                    <Border>
                                      <Cross />
                                    </Border>
                                    <Border>
                                      <Cross />
                                    </Border>
                                  </Row>
                                  <Border>
                                    <Cross />
                                  </Border>
                                </Column>
                                {/* <Cross /> */}
                              </Margin>
                            </HR>
                          </HR>
                        </HR>
                      </Border>
                    </Border>
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
