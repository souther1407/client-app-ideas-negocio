import React from "react";
import styles from "./input.module.css";
import { useContext } from "react";
import { context } from "../../../context/ColorModeContext/ColorModeContext";

const Input = ({ type = "text", textarea, ...otherProps }) => {
  const { theme } = useContext(context);
  if (textarea) {
    return (
      <textarea
        {...otherProps}
        className={`${styles.textarea} ${styles[theme]}`}
      />
    );
  }
  return (
    <input
      {...otherProps}
      type={type}
      className={`${styles.input} ${styles[theme]}`}
    />
  );
};

export default Input;
