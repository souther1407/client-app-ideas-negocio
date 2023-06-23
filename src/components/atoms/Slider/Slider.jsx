import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const Slider = ({
  label = "",
  id,
  onChange = () => {},
  min = 0,
  max = 10000,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    onChange(id, value);
  }, [value]);

  return (
    <div className={styles.slider}>
      <label className={styles.label}>{label}</label>
      <ChakraSlider
        aria-label="slider-ex-2"
        defaultValue={value}
        min={min}
        max={max}
        onChange={(val) => setValue(val)}
      >
        <SliderTrack bg={"gray.700"}>
          <SliderFilledTrack bg={"white"} />
        </SliderTrack>

        <SliderThumb />
      </ChakraSlider>
    </div>
  );
};

export default Slider;
