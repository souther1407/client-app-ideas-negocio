import React from "react";
import styles from "./shineEffect.module.css";
const ShineEffect = ({ children }) => {
  return (
    <div
      className={styles.effect}
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      {children}
    </div>
  );
};

export default ShineEffect;
