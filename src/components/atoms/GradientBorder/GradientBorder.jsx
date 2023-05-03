import React from "react";
import styles from "./gradientBorder.module.css";
const GradientBorder = ({
  children,
  borderRadius = 4,
  w100,
  ...otherProps
}) => {
  return (
    <div
      className={styles.gradientBorder}
      style={{
        borderRadius: `${borderRadius}px`,
        width: `${w100 ? "100%" : "fit-content"}`,
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default GradientBorder;
