import React from "react";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./inputCard.module.css";
const InputCard = ({ title, info, ...otherProps }) => {
  return (
    <div className={styles.inputCard} {...otherProps}>
      <Text>{title}</Text>
      <Text>{info}</Text>
    </div>
  );
};

export default InputCard;
