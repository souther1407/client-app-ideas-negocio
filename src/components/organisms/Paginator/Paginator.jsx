import React from "react";
import styles from "./paginator.module.css";
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import IconButton from "../../molecules/IconButton/IconButton";
const Paginator = ({}) => {
  return (
    <div className={styles.paginator}>
      <div className={styles.rowPerPage}>
        <Text>Rows per page</Text>
        <Input type={"number"} w={"50px"} variant="borderFull" value={5} />
      </div>
      <div className={styles.pages}>
        <Text>page 1 of 10</Text>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <IconButton size={"24px"} icon={"doubleArrowLeft"} />
          </div>
          <div className={styles.btn}>
            <IconButton size={"24px"} icon={"singleArrowLeft"} />
          </div>
          <div className={styles.btn}>
            <IconButton size={"24px"} icon={"singleArrowRight"} />
          </div>
          <div className={styles.btn}>
            <IconButton size={"24px"} icon={"doubleArrowRight"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
