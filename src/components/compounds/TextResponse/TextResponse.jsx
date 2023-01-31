import React, { useState } from "react";
import styles from "./textResponse.module.css";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import Icon from "../../styled/Icon/Icon";
import { parserResponse } from "../../../utils/format/formatResponse";

const TextResponse = ({ response }) => {
  const [show, setShow] = useState(false);
  const [steps] = useState(parserResponse(response));
  return (
    <div className={styles.textResponse}>
      <Button onClick={() => setShow((prev) => !prev)}>
        <Text>Idea de negocio</Text>
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
