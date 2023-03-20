import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import Text from "../../components/atoms/Text/Text";
import PromptCard from "../../components/molecules/PromptCard/PromptCard";
import { useLogged } from "../../hooks/useLogged";
import { useSubscribed } from "../../hooks/useSubscribed";
import { getPrompts } from "../../services/userPrompts/getPrompts";
import { useLogin } from "../../hooks/useLogin";

import AffiliateProgram from "./components/AffiliateProgram/AffiliateProgram";
import MyPromps from "./components/MyPromps/MyPromps";
const Dashboard = () => {
  useLogged();
  const { subscribed } = useSubscribed();
  const [showAffiliateSection, setShowAffiliateSection] = useState(false);
  const { userData, refreshToken } = useLogin({});

  useEffect(() => {}, [subscribed]);

  return (
    <div className={styles.dashboard}>
      <LandingPageNav />
      <nav className={styles.verticalNav}>
        <Text
          onClick={() => showAffiliateSection && setShowAffiliateSection(false)}
        >
          Negocios
        </Text>
        <Text
          onClick={() => !showAffiliateSection && setShowAffiliateSection(true)}
        >
          Programa de afiliados
        </Text>
      </nav>
      <section
        className={`${styles.myPrompts} ${
          !showAffiliateSection && styles.show
        }`}
      >
        <MyPromps />
      </section>
      <section
        className={`${styles.affiliateProgram} ${
          showAffiliateSection && styles.show
        }`}
      >
        <AffiliateProgram />
      </section>
      <GradientBg />
    </div>
  );
};

export default Dashboard;
