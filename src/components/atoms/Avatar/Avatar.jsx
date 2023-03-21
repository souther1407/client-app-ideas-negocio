import React from "react";
import styles from "./avatar.module.css";
const Avatar = ({ src }) => {
  return <img className={styles.avatar} src={src} alt="avatar de profesor" />;
};

export default Avatar;
