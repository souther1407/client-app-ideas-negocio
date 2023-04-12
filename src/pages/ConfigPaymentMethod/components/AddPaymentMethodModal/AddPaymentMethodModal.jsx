import React, { useState } from "react";
import InfoModal from "../../../../components/molecules/InfoModal/InfoModal";
import styles from "./addPaymentMethodModal.module.css";
import stripePromise from "../../../../stripe";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Button from "../../../../components/atoms/Button/Button";
import Text from "../../../../components/atoms/Text/Text";
import { setPaymentMethods } from "../../../../services/paymentMethods/paymentMethods.js";
const Form = ({ onAddPayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSavePaymentMethod = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) return alert(error.message);
    try {
      const newPaymentMethod = await setPaymentMethods(paymentMethod.id);
      onAddPayment(newPaymentMethod);
      alert("listo");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSavePaymentMethod}>
      <CardElement />
      <Button>
        <Text>Guardar</Text>
      </Button>
    </form>
  );
};

const AddPaymentMethodModal = ({ onClose, isOpen, onAddPaymentMethod }) => {
  return (
    <div className={styles.addPaymentMethodModal}>
      <InfoModal isOpen={isOpen} onClose={onClose} renderFooter={() => {}}>
        <Elements stripe={stripePromise}>
          <Form onAddPayment={onAddPaymentMethod} />
        </Elements>
      </InfoModal>
    </div>
  );
};

export default AddPaymentMethodModal;
