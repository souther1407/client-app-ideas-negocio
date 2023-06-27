import React from "react";
import styles from "./text.module.css";

const Text = ({
  type = "text",
  bold,
  color = "inherit",
  children,
  size,
  textAlign = "start",
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign, fontSize: size ?? "" }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <p
        className={`${styles.subtitle} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign, fontSize: size ?? "" }}
        {...otherProps}
      >
        {children}
      </p>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${bold && styles.bold}`}
      style={{ textAlign, fontSize: size ?? "" }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
