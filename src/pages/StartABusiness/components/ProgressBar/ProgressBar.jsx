import React from "react";
import styles from "./progressBar.module.css";
const ProgressBar = ({ value }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.innerBar} style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
