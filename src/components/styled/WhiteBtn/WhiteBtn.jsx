import React from "react";
import styles from "./whiteBtn.module.css";
const WhiteBtn = ({
  children,
  type = "fulled",
  onClick,
  classes,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${classes}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default WhiteBtn;
