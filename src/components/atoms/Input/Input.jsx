import React from "react";
import styles from "./input.module.css";
const Input = ({
  type = "text",
  variant = "borderBottom",
  color = "primary",
  ...otherProps
}) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${styles[variant]} ${styles[color]}`}
      {...otherProps}
    />
  );
};

export default Input;
