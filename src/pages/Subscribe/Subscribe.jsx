import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import styles from "./subscribe.module.css";
import { useLogged } from "../../hooks/useLogged";
import Text from "../../components/styled/Text/Text";
const Subscribe = () => {
  useLogged();
  return (
    <Elements stripe={stripePromise}>
      <div className={styles.subscribe}>
        <Text>Holaa</Text>
      </div>
    </Elements>
  );
};

export default Subscribe;
