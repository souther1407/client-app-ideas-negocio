import React from "react";
import styles from "./askQuestion.module.css";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
const AskQuestion = () => {
  return (
    <div className={styles.askQuestion}>
      <VerticalLoginNav />
    </div>
  );
};

export default AskQuestion;
