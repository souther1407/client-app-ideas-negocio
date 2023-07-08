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
        <Text color="soft" size={"0.6rem"}>
          Ubicación
        </Text>
        <Text bold>{location}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft" size={"0.6rem"}>
          Presupuesto
        </Text>
        <Text bold>{budget}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft" size={"0.6rem"}>
          Freetime
        </Text>
        <Text bold>{freeTime}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft" size={"0.6rem"}>
          Habilidades
        </Text>
        <Text bold>{skills}</Text>
      </section>
    </div>
  );
};

export default InputSection;
