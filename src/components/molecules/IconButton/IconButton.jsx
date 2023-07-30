import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./iconButton.module.css";
const IconButton = ({
  icon,
  size = "16px",
  color,
  onClick,
  ...buttonProps
}) => {
  return (
    <div {...buttonProps} onClick={onClick} className={styles.iconButton}>
      <Icon type={icon} size={size} color={color} />
    </div>
  );
};

export default IconButton;
