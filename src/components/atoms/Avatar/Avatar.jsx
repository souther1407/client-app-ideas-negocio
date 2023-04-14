import React from "react";
import styles from "./avatar.module.css";
const Avatar = ({ src, alt = "avatar de profesor" }) => {
  return <img className={styles.avatar} src={src} alt={alt} />;
};

export default Avatar;
