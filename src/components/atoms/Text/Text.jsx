import React from "react";
import styles from "./text.module.css";

const Text = ({ type = "text", bold, children, ...otherProps }) => {
  if (type === "title") {
    return (
      <h1 className={`${styles.title} ${bold && styles.bold}`} {...otherProps}>
        {children}
      </h1>
    );
  }
  return (
    <p className={`${styles.text} ${bold && styles.bold}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;
