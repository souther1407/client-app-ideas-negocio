import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import SubscribeForm from "./components/SubcribeForm/SubscribeForm";
import styles from "./subscribe.module.css";
import { useLogged } from "../../hooks/useLogged";
import GradiendBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";

const Subscribe = () => {
  useLogged();
  return (
    <div className={styles.subscribe}>
      <LandingPageNav />
      <Elements stripe={stripePromise}>
        <SubscribeForm />
      </Elements>
      <GradiendBg />
    </div>
  );
};

export default Subscribe;
