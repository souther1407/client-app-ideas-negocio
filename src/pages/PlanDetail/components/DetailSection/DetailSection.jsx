import React from "react";
import styles from "./detailSection.module.css";
import Text from "../../../../components/atoms/Text/Text";
const DetailSection = ({ sectionName, isOpen, detail, onPrev, onNext }) => {
  return (
    <div className={styles.detailSection}>
      <nav className={styles.navigation}>
        <Text>Nav</Text>
      </nav>
      <main className={styles.main}>
        <section className={styles.content}>
          <Text>Content</Text>
        </section>
        <section className={styles.questions}>
          <Text>Questions</Text>
        </section>
        <section className={styles.askQuestions}>
          <Text>ask questions</Text>
        </section>
      </main>
    </div>
  );
};

export default DetailSection;
