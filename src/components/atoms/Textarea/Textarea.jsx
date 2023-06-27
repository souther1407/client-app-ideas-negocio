import React from "react";
import styles from "./textarea.module.css";
const Textarea = ({
  placeholder,

  id,
  className,
  onChange,
  ...otherProps
}) => {
  const handleChange = (e) => {
    const trimmed = e.target.value.trim();
    onChange(id, trimmed);
  };

  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default Textarea;
