import React from "react";
import styles from "./text.module.css";

const Text = ({ type = "text", children, ...otherProps }) => {
  const props = {
    className: `${styles.text}`,
  };
  if (type === "title") {
    return (
      <h1 {...props} {...otherProps}>
        {children}
      </h1>
    );
  }
  return (
    <p {...props} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;
