import React from "react";
import styles from "./yesNoQuestion.module.css";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
const YesNoQuestion = ({ onYes, onNo }) => {
  return (
    <div className={styles.yesNoQuestion}>
      <Text type="subtitle" textAlign="center" bold>
        Do you already have a business idea?
      </Text>
      <Button type="bordered" w onClick={onYes}>
        <Text type="subtitle" bold>
          YES
        </Text>
      </Button>
      <Button type="bordered" w onClick={onNo}>
        <Text type="subtitle" bold>
          NO
        </Text>
      </Button>
    </div>
  );
};

export default YesNoQuestion;
