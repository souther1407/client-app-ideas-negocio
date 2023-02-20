import React, { useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/styled/Text/Text";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import Icon from "../../components/styled/Icon/Icon";
import ProgressBar from "./components/ProgressBar/ProgressBar";
const StartABusiness = () => {
  const [input, setInput] = useState({
    budget: "",
    age: "",
    skills: "",
    location: "",
  });

  const [field, setField] = useState(1);
  const [shine, setShine] = useState({
    budget: false,
    age: false,
    skills: false,
    location: false,
  });
  const nextField = () => {
    if (field === 5) return;
    setField((prev) => prev + 1);
  };
  const antField = () => {
    if (field === 1) return;
    setField((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setShine((prev) => ({ ...prev, [e.target.id]: e.target.value.length > 0 }));
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const isMustShine = () => {
    switch (field) {
      case 1:
        return shine.location;
      case 2:
        return shine.age;
      case 3:
        return shine.skills;
      case 4:
        return shine.budget;
      default:
        return false;
    }
  };
  return (
    <div className={styles.startABusiness}>
      <LandingPageNav />
      <ProgressBar value={(field * 100) / 5} />
      <section className={styles.form}>
        <section className={`${styles.field} ${field === 1 && styles.show}`}>
          <Text type="title">De donde eres?</Text>
          <input
            type="text"
            id="location"
            className={`${styles.input} ${shine.location && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 2 && styles.show}`}>
          <Text type="title">Que edad tienes?</Text>
          <input
            type="number"
            id="age"
            className={`${styles.input} ${shine.age && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 3 && styles.show}`}>
          <Text type="title">Qué habilidades tienes?</Text>
          <input
            type="text"
            id="skills"
            className={`${styles.input} ${shine.skills && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 4 && styles.show}`}>
          <Text type="title">Cual es tu presupuesto?</Text>
          <input
            type="text"
            id="budget"
            className={`${styles.input} ${shine.budget && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 5 && styles.show}`}>
          <button className={styles.generateIdeaBtn}>
            <Text type="title">Generar Idea</Text>
          </button>
        </section>
      </section>
      <section className={styles.controls}>
        <div className={`${styles.antBtn} ${field > 1 && styles.enabled}`}>
          <button
            className={styles.arrow}
            disabled={field === 1}
            onClick={antField}
          >
            <Icon type={"leftArrow"} />
          </button>
          <div className={styles.desc}>
            <Text>Back</Text>
            <Text>MVP</Text>
          </div>
        </div>

        <div
          className={`${styles.nextBtn} ${field < 5 && styles.enabled} ${
            isMustShine() && styles.shine
          }`}
        >
          <div className={styles.desc}>
            <Text>Next</Text>
            <Text>MVP</Text>
          </div>
          <button
            className={styles.arrow}
            disabled={field === 5}
            onClick={nextField}
          >
            <Icon type={"rightArrow"} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StartABusiness;
