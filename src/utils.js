import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { pixelSize } from "./App";

export function snapPx(i) {
  return Math.round(i / pixelSize) * pixelSize;
}
export function useTimer({ frequency = 100 } = {}) {
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
  if (time === -1) {
    start();
  }
  return useMemo(() => ({ time, start, pause }), [time, start, pause]);
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
