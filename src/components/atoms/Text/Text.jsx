import React from "react";
import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold,
  color = "inherit",
  children,
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]} ${bold && styles.bold}`}
        {...otherProps}
      >
        {children}
      </h1>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${bold && styles.bold}`}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
