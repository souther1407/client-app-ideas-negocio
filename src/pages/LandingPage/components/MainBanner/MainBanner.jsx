import React from "react";
import styles from "./mainBanner.module.css";

import Text from "../../../../components/styled/Text/Text";
import Box from "../../../../assets/box.png";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/styled/Button/Button";
import { START_A_BUSINESS } from "../../../../utils/constants/routes";
import Mark from "../../../../components/styled/Mark/Mark";
import bg from "../../../../assets/bg.webp";
import GradientBorder from "../../../../components/styled/GradientBorder/GradientBorder";
import ShineEffect from "../../../../components/styled/ShineEffect/ShineEffect";
const MainBanner = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const elementAiDropships = document.getElementById("airDropshipings");
    elementAiDropships.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={styles.mainBanner}>
      <img src={bg} className={styles.imgbg} />
      <section className={styles.info}>
        <div className={styles.title}>
          <Text type="title">
            La historia de tu <Mark>éxito</Mark> empieza ahora
          </Text>
        </div>
        <div className={styles.details}>
          <Text>
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte
          </Text>
          <div className={styles.buttons}>
            <ShineEffect>
              <Button
                color="secondary"
                onClick={() => navigate(START_A_BUSINESS)}
              >
                <Text>Crear negocio</Text>
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
                <Text>Ver ejemplos</Text>
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
