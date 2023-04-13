import React, { useState } from "react";
import styles from "./paymentMethodCard.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";
import Button from "../../../../components/atoms/Button/Button";

const PaymentMethodCard = ({ last4, brand, id, onDelete }) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await onDelete(id);
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      throw new Error(error.message);
    }
  };
  return (
    <div className={styles.paymentMethodCard}>
      <section className={styles.cardInfo}>
        <div className={styles.icon}>
          <Icon type={"card"} />
        </div>
        <Text>
          {brand} .... {last4}
        </Text>
      </section>
      <section className={styles.buttons}>
        <Button onClick={handleDelete} disabled={deleting}>
          <Text>{deleting ? "borrando..." : "borrar"}</Text>
        </Button>
        <Button>
          <Text>Cambiar</Text>
        </Button>
      </section>
    </div>
  );
};

export default PaymentMethodCard;
