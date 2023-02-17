import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollState, setScrollState] = useState({
    scrollPosition: window.scrollY,
    isBegin: window.scrollY === 0,
    isEnd: window.scrollY === document.body.scrollHeight - window.innerHeight,
    isScrolledDown: false,
    isScrolledUp: true,
  });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollState((prev) => {
        const scrolledDown = prev.scrollPosition < window.scrollY;
        const scrolledUp = prev.scrollPosition > window.scrollY;

        return {
          isScrolledDown: scrolledDown,
          isScrolledUp: scrolledUp,
          isBegin: window.scrollY === 0,
          isEnd:
            window.scrollY === document.body.scrollHeight - window.innerHeight,
          scrollPosition: window.scrollY,
        };
      });
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return scrollState;
};
