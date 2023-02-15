import React from "react";
import styles from "./subscribeForm.module.css";
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";
import Text from "../../../../components/styled/Text/Text";
import Button from "../../../../components/styled/Button/Button";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { auth } from "../../../../firebase";
import { createSubscription } from "../../../../services/subscribe/createSubscription";

const productId = "prod_NIWRInDTSlNtdl";

const SubscribeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) return alert(error.message);
    try {
      const response = await createSubscription({
        user: auth.currentUser,
        paymentMethod: paymentMethod.id,
        productId,
      });
      console.log(response);
      alert("exito :D");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.subscribeForm} onSubmit={handleSubmit}>
      <form>
        <Text>Subscribe :D</Text>
        <CardElement
          options={{
            classes: { base: styles.cardInput },
            style: { base: { color: "white" } },
          }}
        />
        <Button>
          <Text>Subscribe!</Text>
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
