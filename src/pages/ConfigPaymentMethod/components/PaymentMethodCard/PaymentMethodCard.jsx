import React from "react";
import styles from "./paymentMethodCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";
import Button from "../../../../components/atoms/Button/Button";
const PaymentMethodCard = () => {
  return (
    <div className={styles.paymentMethodCard}>
      <section className={styles.cardInfo}>
        <div className={styles.icon}>
          <Icon type={"card"} />
        </div>
        <Text>Visa .... 3232</Text>
      </section>
      <section className={styles.buttons}>
        <Button>
          <Text>Eliminar</Text>
        </Button>
        <Button>
          <Text>Cambiar</Text>
        </Button>
      </section>
    </div>
  );
};

export default PaymentMethodCard;
