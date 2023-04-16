import React from "react";
import styles from "./inputSection.module.css";
import Text from "../../../../components/atoms/Text/Text";

const InputSection = ({
  location,
  budget,
  age,
  skills,
  teacher,
  ...otherProps
}) => {
  return (
    <div className={styles.inputSection} {...otherProps}>
      <section className={styles.section}>
        <Text color="soft">Ubicación</Text>
        <Text>{location}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft">Presupuesto</Text>
        <Text>{budget}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft">Edad</Text>
        <Text>{age}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft">Habilidades</Text>
        <Text>{skills}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft">Profesor</Text>
        <Text>{teacher}</Text>
      </section>
    </div>
  );
};

export default InputSection;
