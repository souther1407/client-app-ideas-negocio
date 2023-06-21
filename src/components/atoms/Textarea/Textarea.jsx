import React from "react";
import styles from "./textarea.module.css";
const Textarea = ({ placeholder, w = "100%", h = "100%" }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      style={{ width: w, height: h }}
    />
  );
};

export default Textarea;
