import React from "react";
import styles from "./detailCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";

const DetailCard = ({ title, id, onShowDetail }) => {
  return (
    <section className={styles.detailCard}>
      <div className={styles.title}>
        <i className={styles.icon}>
          <Icon type={"gears"} />
        </i>
        <Text>{title}</Text>
      </div>

      <button className={styles.btn} onClick={() => onShowDetail(id, title)}>
        <Icon type={"arrows"} />
      </button>
    </section>
  );
};

export default DetailCard;
