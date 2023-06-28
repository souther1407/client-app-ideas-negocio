import React from "react";
import styles from "./magicEffect.module.css";

const MagicEffect = ({ children }) => {
  return (
    <div className={styles.buttonContainer}>
      <span className={styles.mas}>{children}</span>
      <div id="work" type="button" name="Hover" className={styles.element}>
        {children}
      </div>
    </div>
  );
};

export default MagicEffect;
