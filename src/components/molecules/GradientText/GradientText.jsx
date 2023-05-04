import React from "react";
import styles from "./gradientText.module.css";
import Text from "../../atoms/Text/Text";
const GradientText = ({ children, ...textProps }) => {
  return (
    <div className={styles.gradientText}>
      <Text {...textProps}>{children}</Text>
    </div>
  );
};

export default GradientText;
