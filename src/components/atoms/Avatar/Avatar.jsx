import React from "react";
import styles from "./avatar.module.css";
const Avatar = ({ src, alt = "avatar de profesor", size }) => {
  return (
    <img
      className={styles.avatar}
      src={src}
      alt={alt}
      style={{ width: size.w, height: size.h }}
    />
  );
};

export default Avatar;
