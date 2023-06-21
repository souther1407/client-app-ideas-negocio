import React from "react";
import styles from "./formPlayground.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Text from "../../../../components/atoms/Text/Text";

const FormPlayground = () => {
  return (
    <form className={styles.formPlayground}>
      <Button>
        <Text>Hola</Text>
      </Button>
    </form>
  );
};

export default FormPlayground;
