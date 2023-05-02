import React, { useEffect } from "react";
import styles from "./landingPage.module.css";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import MainBanner from "./components/MainBanner/MainBanner";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { DASHBOARD_IDEAS } from "../../utils/constants/routes";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isLogged } = useLogin({});
  useEffect(() => {
    if (isLogged()) navigate(DASHBOARD_IDEAS);
  }, []);
  return (
    <div className={styles.landingPage}>
      <LandingPageNav />
      <MainBanner />
    </div>
  );
};

export default LandingPage;
