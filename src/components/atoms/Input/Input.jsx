import React from "react";
import styles from "./input.module.css";
const Input = React.forwardRef(
  (
    {
      type = "text",
      variant = "borderBottom",
      color = "primary",
      ...otherProps
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={`${styles.input} ${styles[variant]} ${styles[color]}`}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Input;
