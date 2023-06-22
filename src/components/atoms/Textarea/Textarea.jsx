import React from "react";
import styles from "./textarea.module.css";
const Textarea = ({
  placeholder,
  w = "100%",
  h = "100%",
  id,
  onChange,
  ...otherProps
}) => {
  const handleChange = (e) => {
    const trimmed = e.target.value.trim();
    onChange(id, trimmed);
  };

  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      onChange={handleChange}
      style={{ width: w, height: h }}
      {...otherProps}
    />
  );
};

export default Textarea;
