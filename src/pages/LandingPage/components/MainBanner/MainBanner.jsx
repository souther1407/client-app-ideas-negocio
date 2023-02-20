import React from "react";
import styles from "./mainBanner.module.css";
import WhiteBtn from "../../../../components/styled/WhiteBtn/WhiteBtn";
import Text from "../../../../components/styled/Text/Text";
import Box from "../../../../assets/box.png";
import { useNavigate } from "react-router-dom";
import { START_A_BUSINESS } from "../../../../utils/constants/routes";
const MainBanner = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const elementAiDropships = document.getElementById("airDropshipings");
    elementAiDropships.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={styles.mainBanner}>
      <section className={styles.info}>
        <div className={styles.title}>
          <Text type="title">La historia de tu éxito empieza ahora</Text>
        </div>
        <div className={styles.details}>
          <Text>
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte
          </Text>
          <div className={styles.buttons}>
            <WhiteBtn onClick={() => navigate(START_A_BUSINESS)}>
              <Text>
                Crear mi<br></br> negocio
              </Text>
            </WhiteBtn>
            <WhiteBtn type="bordered" onClick={handleClick}>
              <Text>
                Ver<br></br> ejemplos
              </Text>
            </WhiteBtn>
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
