import React from "react";
import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold,
  color = "inherit",
  children,
  textAlign = "start",
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${bold && styles.bold}`}
      style={{ textAlign }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
