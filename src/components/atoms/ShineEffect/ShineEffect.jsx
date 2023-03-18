import React from "react";
import styles from "./shineEffect.module.css";

const ShineEffect = ({ children }) => {
  return (
    <div className={styles.shineEffect}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
};

export default ShineEffect;
