import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carouselMultiline.module.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1080 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1080, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={styles.customButtons}>
      {" "}
      <button className={styles.leftBtn} onClick={() => next()}>
        {"<"}
      </button>
      <button className={styles.rightBtn} onClick={() => previous()}>
        {">"}
      </button>
    </div>
  );
};
const CarouselMultiline = ({ children, onChange, infinite = false }) => {
  return (
    <Carousel
      transitionDuration={700}
      beforeChange={onChange}
      customTransition="all .6s ease-out"
      className={styles.carousel}
      responsive={responsive}
      infinite={infinite}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      {children}
    </Carousel>
  );
};

export default CarouselMultiline;
