import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import { GB, ES } from "country-flag-icons/react/1x1";
import Select from "../../styled/Select/Select";
import styles from "./changeLanguage.module.css";

const ChangeLanguage = () => {
  const [t, instance] = useTranslation();

  const handlerChangeLanguage = (option, type) => {
    console.log(instance.language);
    if (option.value !== instance.language) {
      if (instance.language == "en") instance.changeLanguage("es-ES");
      else instance.changeLanguage("en");
    }
  };
  return (
    <Select
      options={[
        { value: "en", label: "EN" },
        { value: "es-ES", label: "ESP" },
      ]}
      onChange={handlerChangeLanguage}
    />
  );
  /* <Button onClick={handlerChangeLanguage}>
      <Text>{t("change language")}</Text>
      {instance.language === "en" ? (
        <ES title="ES" className={styles.flagIcon} />
      ) : (
        <GB title="uk" className={styles.flagIcon} />
      )}
    </Button> */
};

export default ChangeLanguage;
