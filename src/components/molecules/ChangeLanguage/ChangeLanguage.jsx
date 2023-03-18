import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { GB, ES } from "country-flag-icons/react/1x1";
import Select from "../../atoms/Select/Select";
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
    <div className={styles.changeLanguage}>
      <Select
        options={[
          { value: "en", label: "EN" },
          { value: "es-ES", label: "ESP" },
        ]}
        onChange={handlerChangeLanguage}
      />
    </div>
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
