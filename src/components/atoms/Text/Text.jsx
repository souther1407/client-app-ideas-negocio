import React from "react";
import styles from "./text.module.css";

const Text = ({ type = "text", children, ...otherProps }) => {
  if (type === "title") {
    return (
      <h1 className={styles.title} {...otherProps}>
        {children}
      </h1>
    );
  }
  return (
    <p className={styles.text} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;
