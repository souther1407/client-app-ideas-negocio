import React from "react";
import styles from "./mainBanner.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Box from "../../../../assets/box.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import { START_A_BUSINESS, LOGIN } from "../../../../utils/constants/routes";
import Mark from "../../../../components/atoms/Mark/Mark";
import bg from "../../../../assets/bg.webp";
import GradientBorder from "../../../../components/atoms/GradientBorder/GradientBorder";
import ShineEffect from "../../../../components/atoms/ShineEffect/ShineEffect";
import YesNoQuestion from "../../../../components/organisms/YesNoQuestion/YesNoQuestion";
const MainBanner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(LOGIN);
  };

  return (
    <div className={styles.mainBanner}>
      <img src={bg} className={styles.imgbg} />
      <div className={styles.container}>
        <YesNoQuestion onNo={handleClick} onYes={handleClick} />
      </div>
      {/* <section className={styles.info}>
        <div className={styles.title}>
          <Text type="title">
            Explore the <Mark>Future</Mark> of entrepreneurship with AI
          </Text>
        </div>
        <div className={styles.details}>
          <Text>
            Generate an easy-to-follow business plan in under 5 minutes with our
            GPT-3.5 fueled tool
          </Text>
          <div className={styles.buttons}>
            <ShineEffect>
              <Button color="secondary" onClick={() => navigate(LOGIN)}>
                <Text>Login</Text>
              </Button>
            </ShineEffect>
          </div>
        </div>
      </section>
      <section className={styles.boxImg}>
        <img src={Box} />
      </section> */}
    </div>
  );
};

export default MainBanner;
