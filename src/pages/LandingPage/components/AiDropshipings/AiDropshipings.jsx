import React from "react";
import styles from "./aiDropshipings.module.css";
import Text from "../../../../components/styled/Text/Text";
import CarouselMultiline from "../../../../components/compounds/CarouselMultiline/CarouselMultiline";
import AiDropshipingCard from "./components/AiDropshipingCard/AiDropshipingCard";
const AiDropshipings = () => {
  return (
    <div id="airDropshipings" className={styles.aiDropshipings}>
      <section className={styles.title}>
        <Text type="title">La historia de tu éxito empieza ahora</Text>
      </section>
      <section className={styles.desc}>
        <Text>
          Echa un vistazo a los 457 currículums de nuestros clientes ya
          contratados. Son nuestros héroes. Pueden ayudarte.
        </Text>
      </section>
      <section className={styles.carousel}>
        <CarouselMultiline>
          <div className={styles.element}>
            <AiDropshipingCard />
          </div>
          <div className={styles.element}>
            <AiDropshipingCard />
          </div>
          <div className={styles.element}>
            <AiDropshipingCard />
          </div>
          <div className={styles.element}>
            <AiDropshipingCard />
          </div>
        </CarouselMultiline>
      </section>
    </div>
  );
};

export default AiDropshipings;
