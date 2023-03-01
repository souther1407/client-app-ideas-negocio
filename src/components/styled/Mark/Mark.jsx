import React from "react";
import styles from "./mark.module.css";
const Mark = ({ children, color, ...otherProps }) => {
  return (
    <strong className={`${styles.mark} ${styles[color]}`} {...otherProps}>
      {children}
    </strong>
  );
};

export default Mark;
