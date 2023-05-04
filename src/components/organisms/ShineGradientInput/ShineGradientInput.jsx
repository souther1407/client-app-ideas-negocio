import React from "react";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import GradientBorder from "../../atoms/GradientBorder/GradientBorder";
import styles from "./shineGradientInput.module.css";
const ShineGradientInput = ({ shine = false, ...otherProps }) => {
  return (
    <div className={`${styles.container} ${shine && styles.shine}`}>
      <GradientBorder w100>
        <LabeledInput {...otherProps} />
      </GradientBorder>
    </div>
  );
};

export default ShineGradientInput;
