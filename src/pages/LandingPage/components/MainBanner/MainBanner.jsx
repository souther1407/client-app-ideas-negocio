import React from "react";
import styles from "./mainBanner.module.css";

import Text from "../../../../components/atoms/Text/Text";
import Box from "../../../../assets/box.png";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/atoms/Button/Button";
import { START_A_BUSINESS, LOGIN } from "../../../../utils/constants/routes";
import Mark from "../../../../components/atoms/Mark/Mark";
import bg from "../../../../assets/bg.webp";
import GradientBorder from "../../../../components/atoms/GradientBorder/GradientBorder";
import ShineEffect from "../../../../components/atoms/ShineEffect/ShineEffect";
const MainBanner = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(LOGIN);
  };
  return (
    <div className={styles.mainBanner}>
      <img src={bg} className={styles.imgbg} />
      <section className={styles.info}>
        <div className={styles.title}>
          <Text type="title">
            Explora el <Mark>Futuro</Mark> del emprendimiento con AI
          </Text>
        </div>
        <div className={styles.details}>
          <Text>
            Empieza tu primer negocio con ayuda de nuestra herramienta de
            Inteligencia Artificial, y nuestro equipo de expertos
          </Text>
          <div className={styles.buttons}>
            <ShineEffect>
              <Button
                color="secondary"
                onClick={() => navigate(START_A_BUSINESS)}
              >
                <Text>Prueba Gratis</Text>
              </Button>
            </ShineEffect>
            <GradientBorder
              style={{
                borderRadius: "16px",
                position: "relative",
                bottom: "2px",
              }}
            >
              <Button
                type="bordered"
                onClick={handleClick}
                style={{ backgroundColor: "#0F1E2F", borderRadius: "16px" }}
              >
                <Text>Log in</Text>
              </Button>
            </GradientBorder>
          </div>
        </div>
      </section>
      <section className={styles.boxImg}>
        <img src={Box} />
      </section>
    </div>
  );
};

export default MainBanner;
