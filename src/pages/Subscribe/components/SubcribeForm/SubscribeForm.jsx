import React, { useEffect, useState } from "react";
import styles from "./subscribeForm.module.css";
import { CardElement } from "@stripe/react-stripe-js";
import Text from "../../../../components/atoms/Text/Text";
import Button from "../../../../components/atoms/Button/Button";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useLogin } from "../../../../hooks/useLogin";
import { createSubscription } from "../../../../services/subscribe/createSubscription";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE } from "../../../../utils/constants/routes";
import { getPaymentMethods } from "../../../../services/paymentMethods/paymentMethods";
//CAMBIAR: SE DEBE OBTENER DE DEL BACK
const productId = "prod_NIWRInDTSlNtdl";

const SubscribeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { userData, refreshToken } = useLogin({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const initPaymentMethod = async () => {
      try {
        const payment = await getPaymentMethods();
        setPaymentMethod(payment);
      } catch (error) {
        alert(error.message);
      }
    };
    initPaymentMethod();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) return alert(error.message);
    console.log("funciono hasta aca");
    try {
      const body = await createSubscription({
        user: userData.uid,
        paymentMethod: paymentMethod.id,
        productId,
      });

      const confirmation = await stripe.confirmCardPayment(body.clientSecret);
      console.log("listoooo");
      await refreshToken();
      alert("subscription created");
      navigate(-1);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      <Text type="title">Subscribe</Text>

      {!paymentMethod.id && (
        <CardElement
          options={{
            classes: { base: styles.cardInput },
            style: { base: { color: "white" } },
          }}
        />
      )}

      {paymentMethod.id && (
        <Text>
          {paymentMethod.brand} ... {paymentMethod.last4}
        </Text>
      )}

      <Button color="secondary">
        <Text>Subscribe!</Text>
      </Button>
    </form>
  );
};

export default SubscribeForm;
