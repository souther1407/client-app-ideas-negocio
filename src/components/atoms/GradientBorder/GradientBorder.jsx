import React from "react";
import styles from "./gradientBorder.module.css";
const GradientBorder = ({ children, ...otherProps }) => {
  return (
    <div className={styles.gradientBorder} {...otherProps}>
      {children}
    </div>
  );
};

export default GradientBorder;
