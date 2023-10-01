import React from "react";
import styles from "./hoverEffect.module.css";
const HoverEffect = ({ children, disabled = false }) => {
  return <div className={!disabled && styles.hoverEffect}>{children}</div>;
};

export default HoverEffect;
