import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import { GB, ES } from "country-flag-icons/react/1x1";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import styles from "./changeLanguage.module.css";
const ChangeLanguage = () => {
  const [t, instance] = useTranslation();
  console.log(<GB title="hola" />);
  const handlerChangeLanguage = () => {
    if (instance.language == "en") instance.changeLanguage("es-ES");
    else instance.changeLanguage("en");
  };
  return (
    <Button onClick={handlerChangeLanguage}>
      <Text>{t("change language")}</Text>
      {instance.language === "en" ? (
        <ES title="ES" className={styles.flagIcon} />
      ) : (
        <GB title="uk" className={styles.flagIcon} />
      )}
    </Button>
  );
};

export default ChangeLanguage;
