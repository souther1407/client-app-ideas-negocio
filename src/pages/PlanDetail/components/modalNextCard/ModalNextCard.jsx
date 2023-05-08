import React from "react";
import styles from "./modalNextCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";
import GradientBorder from "../../../../components/atoms/GradientBorder/GradientBorder";
const ModalNextCard = ({ onPrev, onNext }) => {
  return (
    <div className={styles.modalNextCard}>
      <div className={styles.ant} onClick={onPrev}>
        <button>{"<--"}</button>

        <Text>Anterior</Text>
      </div>
      <div className={styles.next} onClick={onNext}>
        <Text>Siguiente</Text>
        <button>{"-->"}</button>
      </div>
    </div>
  );
};

export default ModalNextCard;
