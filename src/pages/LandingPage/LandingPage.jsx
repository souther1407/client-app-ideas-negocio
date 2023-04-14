import React, { useEffect } from "react";
import styles from "./landingPage.module.css";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import MainBanner from "./components/MainBanner/MainBanner";
import AiDropshippings from "./components/AiDropshipings/AiDropshipings";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { DASHBOARD_IDEAS } from "../../utils/constants/routes";
import OptionCard from "../ChooseBusiness/components/OptionCard/OptionCard";
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
      <AiDropshippings />
      {/*  <OptionCard /> */}
    </div>
  );
};

export default LandingPage;
