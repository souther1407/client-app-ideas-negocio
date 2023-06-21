import React from "react";
import styles from "./dashboard.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import MyPromps from "./components/MyPromps/MyPromps";
import Finder from "./components/Finder/Finder";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { section } = useParams();

  return (
    <div className={styles.dashboard}>
      <section className={styles.content}>
        <LandingPageNav />
        <section
          className={`${styles.myPrompts} ${section == "ideas" && styles.show}`}
        >
          <MyPromps />
        </section>
        <section
          className={`${styles.myPrompts} ${
            section == "finder" && styles.show
          }`}
        >
          <Finder />
        </section>
        {/* <section
          className={`${styles.affiliateProgram} ${
            section == "affiliates" && styles.show
          }`}
        >
          <AffiliateProgram />
        </section> */}
        {/* <section
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
        </section> */}
      </section>
      <GradientBg opacity={15} />
    </div>
  );
};

export default Dashboard;
