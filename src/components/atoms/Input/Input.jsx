import React from "react";
import styles from "./input.module.css";
const Input = React.forwardRef(
  (
    {
      type = "text",
      variant = "borderBottom",
      color = "primary",
      w = "100%",
      h = "auto",
      fontSize = "inherit",
      ...otherProps
    },
    ref
  ) => {
    return (
      <input
        type={type}
        style={{ width: w, fontSize, height: h }}
        className={`${styles.input} ${styles[variant]} ${styles[color]}`}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Input;
