import React, { useEffect, useState } from "react";
import styles from "./myPromps.module.css";
import CarouselMultiline from "../../../../components/organisms/CarouselMultiline/CarouselMultiline";
import Text from "../../../../components/atoms/Text/Text";
import { getPrompts } from "../../../../services/userPrompts/getPrompts";
import PromptCard from "../../../LandingPage/components/AiDropshipings/components/AiDropshipingCard/AiDropshipingCard";
import ShineEffect from "../../../../components/molecules/ShineEffect/ShineEffect";

const MyPromps = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initPrompts = async () => {
      try {
        setLoading(true);
        const data = await getPrompts();
        setPrompts(data);
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };
    initPrompts();
  }, []);

  return (
    <div className={styles.myPrompts}>
      {loading && <Text>Cargando...</Text>}{" "}
      {!loading && prompts.length > 0 && (
        <div className={styles.carousel}>
          <CarouselMultiline onChange={() => {}}>
            {prompts.map((p) => (
              <div className={styles.element}>
                <ShineEffect>
                  <PromptCard
                    show={true}
                    id={p.id}
                    details={p.details}
                    age={p.input.age}
                    budget={p.input.budget}
                    location={p.input.location}
                    skills={p.input.skills}
                    teacher={p.input.teacher}
                    key={p.id}
                  />
                </ShineEffect>
              </div>
            ))}

            {/* <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div>
            <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div>
            <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div>
            <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div>
            <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div>
            <div className={styles.element}>
              <PromptCard to={"example/1"} show={true} />
            </div> */}
          </CarouselMultiline>
        </div>
      )}
    </div>
  );
};

export default MyPromps;
