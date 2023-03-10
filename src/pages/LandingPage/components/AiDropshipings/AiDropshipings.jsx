import React from "react";
import styles from "./aiDropshipings.module.css";
import Text from "../../../../components/atoms/Text/Text";
import CarouselMultiline from "../../../../components/organisms/CarouselMultiline/CarouselMultiline";
import AiDropshipingCard from "./components/AiDropshipingCard/AiDropshipingCard";
import { useState } from "react";
import { PLAN_EXAMPLE_1 } from "../../../../utils/constants/routes";
import GradientBg from "../../../../components/atoms/GradientBg/GradientBg";
import GradientBorder from "../../../../components/atoms/GradientBorder/GradientBorder";
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
              to={PLAN_EXAMPLE_1}
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
              to={PLAN_EXAMPLE_1}
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
              to={PLAN_EXAMPLE_1}
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
              to={PLAN_EXAMPLE_1}
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
              to={PLAN_EXAMPLE_1}
            />
          </div>
        </CarouselMultiline>
      </section>
      <GradientBg />
    </div>
  );
};

export default AiDropshipings;
