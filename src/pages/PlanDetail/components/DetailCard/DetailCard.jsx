import React from "react";
import styles from "./detailCard.module.css";
import Text from "../../../../components/styled/Text/Text";
import Icon from "../../../../components/styled/Icon/Icon";

const DetailCard = ({ onShowDetail }) => {
  return (
    <section className={styles.detailCard}>
      <i className={styles.icon}>
        <Icon type={"gears"} />
      </i>
      <Text>MVP</Text>
      <button className={styles.btn} onClick={onShowDetail}>
        <Icon type={"arrows"} />
      </button>
    </section>
  );
};

export default DetailCard;
