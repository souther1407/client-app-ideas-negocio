import React from "react";
import styles from "./detailCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";

const DetailCard = ({
  title,
  id,
  onShowDetail,
  sectionName,
  img,
  icon,
  width = "100%",
}) => {
  return (
    <section
      style={{ width }}
      className={styles.detailCard}
      onClick={onShowDetail}
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      <div className={styles.img}>
        <img src={img} alt="imagen representativa de una seccion" />
      </div>
      <section className={styles.detail}>
        <div className={styles.icon}>
          <Icon size={"16px"} type={icon} />
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
