import React, { useState } from "react";
import styles from "./slider.module.css";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const Slider = ({ label = "" }) => {
  const [value, setValue] = useState(20);
  return (
    <div className={styles.slider}>
      <label className={styles.label}>{label}</label>
      <ChakraSlider
        aria-label="slider-ex-2"
        defaultValue={value}
        onChange={(val) => setValue(val)}
      >
        <SliderTrack>
          <SliderFilledTrack bg={"primaryDark.base"} />
        </SliderTrack>

        <SliderMark
          value={value}
          textAlign="center"
          color="white"
          mt="-10"
          ml="-6"
          w="12"
        >
          {value}
        </SliderMark>
        <SliderThumb />
      </ChakraSlider>
    </div>
  );
};

export default Slider;
