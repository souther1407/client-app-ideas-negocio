import React from "react";
import styles from "./mark.module.css";
const Mark = ({ children }) => {
  return <strong className={styles.mark}>{children}</strong>;
};

export default Mark;
