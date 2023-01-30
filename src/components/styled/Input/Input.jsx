import React from "react";
import styles from "./input.module.css";
import { useContext } from "react";
import { context } from "../../../Context/ColorModeContext/ColorModeContext";

const Input = ({ type = "text", textarea, label = "", ...otherProps }) => {
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
    <div className={styles.cont}>
      <label className={styles.label}>{label}</label>
      {textarea ? (
        <textarea
          {...otherProps}
          className={`${styles.textarea} ${styles[theme]}`}
        />
      ) : (
        <input
          {...otherProps}
          type={type}
          className={`${styles.input} ${styles[theme]}`}
        />
      )}
    </div>
  );
};

export default Input;
