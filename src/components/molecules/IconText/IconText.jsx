import React from "react";
import styles from "./iconText.module.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
const IconText = ({ icon, children, color, bold, ...otherProps }) => {
  return (
    <div className={`${styles.iconText} ${styles[color]}`} {...otherProps}>
      <Icon size={"24px"} type={icon} />
      <Text bold={bold}>{children}</Text>
    </div>
  );
};

export default IconText;
