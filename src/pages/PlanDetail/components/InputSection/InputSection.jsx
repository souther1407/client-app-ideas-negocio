import React from "react";
import styles from "./inputSection.module.css";
import Text from "../../../../components/atoms/Text/Text";

const InputSection = ({
  location,
  budget,
  freeTime,
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
        <Text color="soft">Freetime</Text>
        <Text>{freeTime}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft">Habilidades</Text>
        <Text>{skills}</Text>
      </section>
    </div>
  );
};

export default InputSection;
