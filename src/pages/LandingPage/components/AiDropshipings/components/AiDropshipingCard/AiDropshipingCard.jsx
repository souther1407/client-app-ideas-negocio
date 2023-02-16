import React from "react";
import styles from "./aiDropshipingCard.module.css";
import Text from "../../../../../../components/styled/Text/Text";
import Icon from "../../../../../../components/styled/Icon/Icon";
const AiDropshipingCard = ({ show }) => {
  return (
    <div className={styles.card}>
      <section className={styles.title}>
        <div className={styles.icon}>
          <Icon type={"aiHead"} />
        </div>
        <Text>AI Dropshipping</Text>
      </section>
    </div>
  );
};

export default AiDropshipingCard;
