import React from "react";
import styles from "./optionCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import bg from "../../../../assets/gradient-card.svg";
import Avatar from "../../../../components/atoms/Avatar/Avatar";
import { formatStringToShort } from "../../../../utils/format/formatStringToShort";
import bussinessMan from "../../../../assets/bussinessman.svg";
import Icon from "../../../../components/atoms/Icon/Icon";
import IMG from "../../../../assets/imgProductMin.svg";

const extractValues = (estimatedCost) => {
  return Number(estimatedCost.replace("$", ""));
};

const IconDesc = ({ icon, title, desc }) => {
  return (
    <div className={styles.iconDesc}>
      <Icon size={"16px"} type={icon} />
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
}) => {
  console.log(estimatedTime);
  return (
    <div className={styles.optionCard} onClick={onShowDetail}>
      <div className={styles.img}>
        <img src={IMG} alt="imagen" />
      </div>
      <div className={styles.title}>
        <Text bold>{formatStringToShort(title)}</Text>
      </div>
      <div className={styles.details}>
        <IconDesc icon={"calc"} title={"Coste estimado"} desc={estimatedCost} />
        <IconDesc
          icon={"clock"}
          title={"Tiempo estimado"}
          desc={estimatedTime}
        />
      </div>
    </div>
  );
};

export default OptionCard;
