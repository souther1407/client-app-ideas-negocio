import React from "react";
import styles from "./gradientBorder.module.css";
const GradientBorder = ({ children }) => {
  return <div className={styles.gradientBorder}>{children}</div>;
};

export default GradientBorder;
