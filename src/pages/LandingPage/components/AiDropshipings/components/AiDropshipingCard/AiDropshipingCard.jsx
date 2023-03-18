import React from "react";
import styles from "./aiDropshipingCard.module.css";
import Text from "../../../../../../components/atoms/Text/Text";
import Icon from "../../../../../../components/atoms/Icon/Icon";
import Link from "../../../.././../../components/atoms/Link/Link";
import GradientBorder from "../../../../../../components/atoms/GradientBorder/GradientBorder";
import gradient from "../../../../../../assets/blue-gradient.jpg";
const AiDropshipingCard = ({ show, index, to, ...otherProps }) => {
  return (
    <div className={`${styles.containerShadow} ${show && styles.shadow}`}>
      <GradientBorder
        style={
          show
            ? {
                transform: "scale(130%)",
                position: "relative",
                bottom: "8px",
              }
            : {}
        }
      >
        <div className={`${styles.card} `} {...otherProps}>
          <section
            className={`${styles.title} ${show && styles.showDetails}`}
            style={show ? { borderImage: `url(${gradient}) 30` } : {}}
          >
            <div className={styles.icon}>
              <Icon type={"aiHead"} />
            </div>
            <Text>AI Dropshipping</Text>
          </section>
          <section
            className={`${styles.details} ${show && styles.showDetails}`}
          >
            <Text>Programador, 20 años, presupuesto de $1000...</Text>
            <Link to={to} className={styles.link}>
              <Text>Ver plan {"------->"}</Text>
            </Link>
          </section>
        </div>
      </GradientBorder>
    </div>
  );
};

export default AiDropshipingCard;
