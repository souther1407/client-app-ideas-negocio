import React from "react";
import styles from "./moreInfo.module.css";
import Text from "../../atoms/Text/Text";
const MoreInfo = ({ children, message }) => {
  return (
    <div className={styles.moreInfo}>
      <div className={styles.targetElement}>{children}</div>
      <div className={styles.detailContainer}>
        <Text bold>{message}</Text>
      </div>
    </div>
  );
};

export default MoreInfo;
