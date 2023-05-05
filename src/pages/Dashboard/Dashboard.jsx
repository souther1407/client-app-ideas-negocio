import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";

import { useLogged } from "../../hooks/useLogged";
import { useSubscribed } from "../../hooks/useSubscribed";
import { useLogin } from "../../hooks/useLogin";
import AffiliateProgram from "./components/AffiliateProgram/AffiliateProgram";
import MyPromps from "./components/MyPromps/MyPromps";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import { useParams } from "react-router-dom";
import AskQuestion from "./components/AskQuetion/AskQuestion";
import MyQuestions from "./components/MyQuestions/MyQuestions";

const Dashboard = () => {
  useLogged();
  const { section } = useParams();
  const { subscribed } = useSubscribed();
  const { userData, refreshToken } = useLogin({});

  return (
    <div className={styles.dashboard}>
      <VerticalLoginNav section={section} />

      <section className={styles.content}>
        <LandingPageNav />
        <section
          className={`${styles.myPrompts} ${section == "ideas" && styles.show}`}
        >
          <MyPromps />
        </section>
        <section
          className={`${styles.affiliateProgram} ${
            section == "affiliates" && styles.show
          }`}
        >
          <AffiliateProgram />
        </section>
        <section
          className={`${styles.askQuestion} ${
            section == "help" && styles.show
          }`}
        >
          <AskQuestion />
        </section>
        <section
          className={`${styles.myQuestions} ${
            section == "questions" && styles.show
          }`}
        >
          <MyQuestions />
        </section>
      </section>
      <GradientBg />
    </div>
  );
};

export default Dashboard;
