import React, { useContext, useState } from "react";
import styles from "./response.module.css";
import { context } from "../../Context/GenerateDataContext/GenerateDataContext";
import Text from "../../components/styled/Text/Text";
import { parserResponse } from "../../utils/format/formatResponse";
import Nav from "../../components/compounds/Nav/Nav";
const Response = () => {
  const { data } = useContext(context);
  const [steps] = useState(parserResponse(data));
  return (
    <div className={styles.response}>
      <Nav />
      <div className={styles.textContent}>
        {data.length > 0
          ? steps.map((step) => (
              <>
                <Text>{step}</Text>
                <br />
              </>
            ))
          : "no hay datos aun"}
      </div>
    </div>
  );
};

export default Response;
