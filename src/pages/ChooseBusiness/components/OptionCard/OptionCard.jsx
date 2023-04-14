import React from "react";
import styles from "./optionCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import bg from "../../../../assets/gradient-card.svg";
import Avatar from "../../../../components/atoms/Avatar/Avatar";

const CostBar = ({ total, estimatedMin, estimatedminMax }) => {
  return (
    <div className={styles.costBar}>
      <div
        className={styles.filled}
        style={{ width: `${(estimatedminMax * 100) / total}%` }}
      >
        <Text>
          {estimatedMin}-{estimatedminMax}$
        </Text>
      </div>
    </div>
  );
};

/*
2000 --> 100%
800 --> x
*/

const OptionCard = () => {
  return (
    <div
      className={styles.optionCard}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.profile}>
        <Avatar
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="foto de un perfil"
        />
      </div>
      <Text>Ai dropshiping</Text>
      <section className={styles.time}>
        <Text color="soft">Tiempo estimado</Text>
        <Text>24 HORAS SEMANALES</Text>
      </section>
      <section className={styles.estimatedCost}>
        <Text color="soft">Costo estimado</Text>
        <CostBar total={2000} estimatedMin={500} estimatedminMax={800} />
      </section>
    </div>
  );
};

export default OptionCard;
