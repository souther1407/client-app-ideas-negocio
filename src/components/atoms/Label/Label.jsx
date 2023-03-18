import React from "react";
import styles from "./label.module.css";
const Label = ({ children, ...otherProps }) => {
  return (
    <label className={styles.label} {...otherProps}>
      {children}
    </label>
  );
};

export default Label;
