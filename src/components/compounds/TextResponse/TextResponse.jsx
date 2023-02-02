import React, { useState } from "react";
import styles from "./textResponse.module.css";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import Icon from "../../styled/Icon/Icon";
import { parserResponse } from "../../../utils/format/formatResponse";
import { useTranslation } from "react-i18next";
const TextResponse = ({ response }) => {
  const [show, setShow] = useState(false);
  const [steps] = useState(parserResponse(response));
  const [t] = useTranslation();
  return (
    <div className={styles.textResponse}>
      <Button onClick={() => setShow((prev) => !prev)}>
        <Text>
          {t("idea dropdown")}
          <div className={styles.arrowIcon}>
            <Icon type={!show ? "arrowDown" : "arrowUp"} />
          </div>
        </Text>
      </Button>
      {show && (
        <div className={styles.textContent}>
          {steps.map((step) => (
            <>
              <Text>{step}</Text>
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextResponse;
