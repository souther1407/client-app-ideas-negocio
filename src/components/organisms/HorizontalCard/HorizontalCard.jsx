import React from "react";
import styles from "./horizontalCard.module.css";
import ShineEffect from "../../molecules/ShineEffect/ShineEffect";
import Text from "../../atoms/Text/Text";
import IMG from "../../../assets/imgProductMin.svg";

const HorizontalCard = ({ img, title, detail, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <ShineEffect>
        <div className={styles.effect}>
          <div className={styles.img}>
            <img src={IMG} alt="loguito de python" />
          </div>
          <div className={styles.detail}>
            <Text bold>{title}</Text>
            <Text color="soft">{detail}</Text>
          </div>
        </div>
      </ShineEffect>
    </div>
  );
};

export default HorizontalCard;
