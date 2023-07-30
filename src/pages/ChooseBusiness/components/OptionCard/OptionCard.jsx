import React from "react";
import styles from "./optionCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";

const IconDesc = ({ icon, title, desc }) => {
  return (
    <div className={styles.iconDesc}>
      <Icon size={"24px"} type={icon} />
      <section className={styles.desc}>
        <Text color="soft">{title}</Text>
        <Text bold>{desc}</Text>
      </section>
    </div>
  );
};

const OptionCard = ({
  title,
  estimatedTime,
  estimatedCost,
  onShowDetail,
  totalCost,
  img,
}) => {
  return (
    <div className={styles.optionCard} onClick={onShowDetail}>
      <div className={styles.img}>
        <img src={img} alt="imagen" />
      </div>
      <div className={styles.title}>
        <Text bold>{title}</Text>
      </div>

      <div className={styles.details}>
        <IconDesc icon={"calc"} title={"Estimated cost"} desc={estimatedCost} />
        <IconDesc
          icon={"clock"}
          title={"Estimated time"}
          desc={estimatedTime}
        />
      </div>
    </div>
  );
};

export default OptionCard;
