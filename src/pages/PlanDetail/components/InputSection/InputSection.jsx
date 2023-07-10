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
          Location
        </Text>
        <Text bold>{location}</Text>
      </section>
      <section className={styles.section}>
        <Text color="soft" size={"0.6rem"}>
          Budget
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
          Skills
        </Text>
        <Text bold>{skills}</Text>
      </section>
    </div>
  );
};

export default InputSection;
