import React from "react";
import styles from "./aiDropshipingCard.module.css";
import Text from "../../../../../../components/styled/Text/Text";
import Icon from "../../../../../../components/styled/Icon/Icon";
import Link from "../../../.././../../components/styled/Link/Link";
const AiDropshipingCard = ({ show, index }) => {
  return (
    <div className={`${styles.card} ${show && styles.show}`}>
      <section className={`${styles.title} ${show && styles.showDetails}`}>
        <div className={styles.icon}>
          <Icon type={"aiHead"} />
        </div>
        <Text>AI Dropshipping</Text>
      </section>
      <section className={`${styles.details} ${show && styles.showDetails}`}>
        <Text>Programador, 20 años, presupuesto de $1000...</Text>
        <Link to={"/"} className={styles.link}>
          <Text>Ver plan {"------->"}</Text>
        </Link>
      </section>
    </div>
  );
};

export default AiDropshipingCard;
