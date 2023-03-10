import React from "react";
import styles from "./modalNextCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";
import GradientBorder from "../../../../components/atoms/GradientBorder/GradientBorder";
const ModalNextCard = ({ onPrev, onNext }) => {
  return (
    <div className={styles.modalNextCard}>
      <GradientBorder>
        <div className={styles.ant} style={{ background: "#07253E" }}>
          <button onClick={onPrev}>{"<--"}</button>
          <section className={styles.info}>
            <Text>Ant</Text>
            <Text>MVP</Text>
          </section>
        </div>
      </GradientBorder>
      <GradientBorder>
        <div className={styles.next} style={{ background: "#07253E" }}>
          <section className={styles.info}>
            <Text>Next</Text>
            <Text>MVP</Text>
          </section>
          <button onClick={onNext}>{"-->"}</button>
        </div>
      </GradientBorder>
    </div>
  );
};

export default ModalNextCard;
