import React from "react";
import styles from "./hoverEffect.module.css";
const HoverEffect = ({ children }) => {
  return <div className={styles.hoverEffect}>{children}</div>;
};

export default HoverEffect;
