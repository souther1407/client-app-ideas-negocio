import React from "react";
import styles from "./iconText.module.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
const IconText = ({
  icon,
  children,
  color,
  size = "1rem",
  bold,
  ...otherProps
}) => {
  return (
    <div className={`${styles.iconText} ${styles[color]}`} {...otherProps}>
      <Icon size={size} type={icon} />
      <Text bold={bold} size={size}>
        {children}
      </Text>
    </div>
  );
};

export default IconText;
