import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import SubscribeForm from "./components/SubcribeForm/SubscribeForm";

const Subscribe = () => {
  return (
    <Elements stripe={stripePromise}>
      <SubscribeForm />
    </Elements>
  );
};

export default Subscribe;
