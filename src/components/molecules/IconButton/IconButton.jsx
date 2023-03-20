import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./iconButton.module.css";
const IconButton = ({ icon, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={styles.iconButton}>
      <Icon type={icon} />
    </button>
  );
};

export default IconButton;
