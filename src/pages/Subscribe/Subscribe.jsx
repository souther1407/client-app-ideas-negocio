import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import SubscribeForm from "./components/SubcribeForm/SubscribeForm";
import styles from "./subscribe.module.css";
import { useLogged } from "../../hooks/useLogged";
const Subscribe = () => {
  useLogged();
  return (
    <div className={styles.subscribe}>
      <Elements stripe={stripePromise}>
        <SubscribeForm />
      </Elements>
    </div>
  );
};

export default Subscribe;
