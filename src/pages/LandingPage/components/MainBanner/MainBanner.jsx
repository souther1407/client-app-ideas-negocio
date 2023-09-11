import React from "react";
import styles from "./mainBanner.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Box from "../../../../assets/box.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import { START_A_BUSINESS, LOGIN } from "../../../../utils/constants/routes";
import bg from "../../../../assets/bg.webp";
import YesNoQuestion from "../../../../components/organisms/YesNoQuestion/YesNoQuestion";
import PaddaSkillsSection from "../../../../components/organisms/PaddaSkillsSection/PaddaSkillsSection";
const MainBanner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(LOGIN);
  };

  return (
    <div className={styles.mainBanner}>
      <img src={bg} className={styles.imgbg} />
      <div className={styles.container}>
        <PaddaSkillsSection />
        <YesNoQuestion onNo={handleClick} onYes={handleClick} />
      </div>
    </div>
  );
};

export default MainBanner;
