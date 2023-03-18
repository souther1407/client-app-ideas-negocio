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
import Button from "../../components/atoms/Button/Button";

import AffiliateProgram from "./components/AffiliateProgram/AffiliateProgram";

const Dashboard = () => {
  useLogged();

  const { subscribed } = useSubscribed();
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAffiliateSection, setShowAffiliateSection] = useState(false);
  const { userData, refreshToken } = useLogin({});

  useEffect(() => {
    const initPrompts = async () => {
      try {
        setLoading(true);
        const data = await getPrompts();
        setPrompts(data);
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };
    initPrompts();
  }, []);

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
        {loading && <Text>Cargando...</Text>}
        {!loading &&
          prompts.length > 0 &&
          prompts.map((p) => (
            <PromptCard
              id={p.id}
              age={p.input.age}
              budget={p.input.budget}
              location={p.input.location}
              skills={p.input.skills}
              teacher={p.input.teacher}
              details={p.details}
            />
          ))}
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
