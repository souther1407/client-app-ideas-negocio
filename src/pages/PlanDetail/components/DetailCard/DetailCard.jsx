import React from "react";
import styles from "./detailCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";

const DetailCard = ({ title, id, onShowDetail, sectionName, img, icon }) => {
  return (
    <section className={styles.detailCard} onClick={onShowDetail}>
      <div className={styles.img}>
        <img src={img} alt="imagen representativa de una seccion" />
      </div>
      <section className={styles.detail}>
        <div className={styles.icon}>
          <Icon size={"28px"} type={icon} />
        </div>
        <div className={styles.nameTitle}>
          <Text>{sectionName}</Text>
          <Text color="soft">{title}</Text>
        </div>
      </section>
    </section>
  );
};

export default DetailCard;
