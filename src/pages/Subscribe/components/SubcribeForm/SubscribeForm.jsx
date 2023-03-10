import React from "react";
import styles from "./subscribeForm.module.css";
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";
import Text from "../../../../components/atoms/Text/Text";
import Button from "../../../../components/atoms/Button/Button";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useLogin } from "../../../../hooks/useLogin";
import { createSubscription } from "../../../../services/subscribe/createSubscription";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE } from "../../../../utils/constants/routes";
const productId = "prod_NIWRInDTSlNtdl";

const SubscribeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { userData, refreshToken } = useLogin({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) return alert(error.message);
    try {
      const body = await createSubscription({
        user: userData.uid,
        paymentMethod: paymentMethod.id,
        productId,
      });

      const confirmation = await stripe.confirmCardPayment(body.clientSecret);
      console.log("listoooo");
      alert("subscription created");
      navigate(-1);
    } catch (error) {
      alert(error.message);
    }
    await refreshToken();
  };
  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      <Text type="title">Subscribe</Text>

      <CardElement
        options={{
          classes: { base: styles.cardInput },
          style: { base: { color: "white" } },
        }}
      />

      <Button color="secondary">
        <Text>Subscribe!</Text>
      </Button>
    </form>
  );
};

export default SubscribeForm;
