import React from "react";
import styles from "./aiDropshipings.module.css";
import Text from "../../../../components/styled/Text/Text";
import CarouselMultiline from "../../../../components/compounds/CarouselMultiline/CarouselMultiline";
import AiDropshipingCard from "./components/AiDropshipingCard/AiDropshipingCard";
import { useState } from "react";

const AiDropshipings = () => {
  const [currentCard, setCurrentCard] = useState(5);
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
        <CarouselMultiline onChange={(before, state) => setCurrentCard(before)}>
          <div className={`${styles.element} `}>
            <AiDropshipingCard
              show={
                currentCard + 1 === 0 ||
                currentCard + 1 === 10 ||
                currentCard + 1 === 5
              }
              index={1}
            />
          </div>
          <div className={`${styles.element}`}>
            <AiDropshipingCard
              show={
                currentCard + 1 === 1 ||
                currentCard + 1 === 11 ||
                currentCard + 1 === 6
              }
              index={2}
            />
          </div>
          <div className={`${styles.element}`}>
            <AiDropshipingCard
              index={3}
              show={
                currentCard + 1 === 2 ||
                currentCard + 1 === 12 ||
                currentCard + 1 === 7
              }
            />
          </div>
          <div className={`${styles.element}`}>
            <AiDropshipingCard
              show={
                currentCard + 1 === 3 ||
                currentCard + 1 === 13 ||
                currentCard + 1 === 8
              }
              index={4}
            />
          </div>
          <div className={`${styles.element}`}>
            <AiDropshipingCard
              show={
                currentCard + 1 === 4 ||
                currentCard + 1 === 14 ||
                currentCard + 1 === 9
              }
              index={5}
            />
          </div>
        </CarouselMultiline>
      </section>
    </div>
  );
};

export default AiDropshipings;
