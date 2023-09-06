import { useEffect, useState } from "react";

export const useScroll = (element = window) => {
  const [scrollState, setScrollState] = useState({
    scrollPosition: element.scrollY,
    isBegin: element.scrollY === 0,
    isEnd: element.scrollY === document.body.scrollHeight - element.innerHeight,
    isScrolledDown: false,
    isScrolledUp: true,
  });

  useEffect(() => {
    element.addEventListener("scroll", (e) => {
      setScrollState((prev) => {
        const scrolledDown = prev.scrollPosition < element.scrollY;
        const scrolledUp = prev.scrollPosition > element.scrollY;

        return {
          isScrolledDown: scrolledDown,
          isScrolledUp: scrolledUp,
          isBegin: element.scrollY === 0,
          isEnd:
            element.scrollY ===
            document.body.scrollHeight - element.innerHeight,
          scrollPosition: element.scrollY,
        };
      });
    });
  }, []);

  return scrollState;
};
