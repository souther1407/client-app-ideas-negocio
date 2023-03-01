import React from "react";
import styles from "./gearCard.module.css";
import Text from "../../../../components/styled/Text/Text";
import Icon from "../../../../components/styled/Icon/Icon";

const GearCard = ({ title, id, onShowDetail }) => {
  return (
    <section className={styles.gearCard}>
      <div className={styles.title}>
        <i className={styles.icon}>
          <Icon type={"gears"} />
        </i>
        <Text>{title}</Text>
      </div>

      <button className={styles.btn} onClick={() => onShowDetail(id, title)}>
        <Icon type={"downArrow"} />
      </button>
    </section>
  );
};

export default GearCard;
