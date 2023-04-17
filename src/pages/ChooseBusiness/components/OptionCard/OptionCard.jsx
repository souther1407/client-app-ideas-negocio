import React from "react";
import styles from "./optionCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import bg from "../../../../assets/gradient-card.svg";
import Avatar from "../../../../components/atoms/Avatar/Avatar";
import { formatStringToShort } from "../../../../utils/format/formatStringToShort";
import bussinessMan from "../../../../assets/bussinessman.svg";
const extractValues = (estimatedCost) => {
  return Number(estimatedCost.replace("$", ""));
};
const CostBar = ({ total, estimatedMin = 0, estimatedminMax }) => {
  return (
    <div className={styles.costBar}>
      <Text>
        {estimatedMin}-{estimatedminMax}$
      </Text>
      <div
        className={styles.filled}
        style={{ width: `${(estimatedminMax * 100) / total}%` }}
      ></div>
    </div>
  );
};

/*
2000 --> 100%
800 --> x
*/

const OptionCard = ({
  title,
  estimatedTime,
  estimatedCost,
  onShowDetail,
  totalCost,
}) => {
  console.log(totalCost);
  return (
    <div
      className={styles.optionCard}
      style={{ backgroundImage: `url(${bg})` }}
      onClick={onShowDetail}
    >
      <div className={styles.profile}>
        <Avatar src={bussinessMan} alt="foto de un perfil" />
      </div>
      <Text>{formatStringToShort(title)}</Text>
      <section className={styles.time}>
        <Text color="soft">Tiempo estimado</Text>
        <Text>{estimatedTime}</Text>
      </section>
      <section className={styles.estimatedCost}>
        <Text color="soft">Costo estimado</Text>
        <CostBar
          total={totalCost}
          estimatedminMax={extractValues(estimatedCost)}
        />
      </section>
    </div>
  );
};

export default OptionCard;
