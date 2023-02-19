import React from "react";
import styles from "./modalNextCard.module.css";
import Text from "../../../../components/styled/Text/Text";
import Icon from "../../../../components/styled/Icon/Icon";
const ModalNextCard = () => {
  return (
    <div className={styles.modalNextCard}>
      <div className={styles.ant}>
        <button>{"<--"}</button>
        <section className={styles.info}>
          <Text>Ant</Text>
          <Text>MVP</Text>
        </section>
      </div>
      <div className={styles.next}>
        <section className={styles.info}>
          <Text>Next</Text>
          <Text>MVP</Text>
        </section>
        <button>{"-->"}</button>
      </div>
    </div>
  );
};

export default ModalNextCard;
