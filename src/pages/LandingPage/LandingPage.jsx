import React from "react";
import styles from "./landingPage.module.css";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import MainBanner from "./components/MainBanner/MainBanner";
import AiDropshippings from "./components/AiDropshipings/AiDropshipings";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <LandingPageNav />
      <MainBanner />
      <AiDropshippings />
    </div>
  );
};

export default LandingPage;
