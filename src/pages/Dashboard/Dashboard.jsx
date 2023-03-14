import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import Text from "../../components/atoms/Text/Text";
import PromptCard from "../../components/molecules/PromptCard/PromptCard";
import { useLogged } from "../../hooks/useLogged";
import { useSubscribed } from "../../hooks/useSubscribed";
import { getPrompts } from "../../services/userPrompts/getPrompts";
const Dashboard = () => {
  useLogged();
  const { subscribed } = useSubscribed();
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initPrompts = async () => {
      try {
        setLoading(true);
        setPrompts(await getPrompts());
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };
    initPrompts();
  }, []);

  return (
    <div className={styles.dashboard}>
      <LandingPageNav />
      <nav className={styles.verticalNav}>
        <Text>Negocios</Text>
        <Text>Programa de afiliados</Text>
      </nav>
      <section className={styles.myPrompts}>
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
      <GradientBg />
    </div>
  );
};

export default Dashboard;
