import React from "react";
import bg from "../../../assets/bg.webp";
import styles from "./gradient.module.css";
const GradientBg = ({ opacity = 35 }) => {
  return (
    <img
      src={bg}
      className={styles.gradient}
      style={{ filter: `opacity(${opacity}%)` }}
    />
  );
};

export default GradientBg;
