import React, { useState } from "react";
import Button from "../../components/styled/Button/Button";
import Text from "../../components/styled/Text/Text";

import Slider from "../../components/styled/Slider/Slider";
import Input from "../../components/styled/Input/Input";
import { parseData } from "../../utils/parse/parseData";
import { createText } from "../../services/createText/createText";
import Loading from "../../components/compounds/Loading/Loading";
import TextResponse from "../../components/compounds/TextResponse/TextResponse";
import styles from "./generateIdea.module.css";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../components/compounds/ChangeLanguage/ChangeLanguage";

const GenerateIdea = () => {
  const [input, setInput] = useState({
    edad: "1",
    habilidad: "",
    ubicacion: "",
  });
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      setResponse("");
      setLoading(true);
      const parsedData = parseData(input);
      const responseData = await createText(parsedData);
      setResponse(responseData);
    } catch (error) {
      alert("ocurrio un error :c", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.generateIdea}>
      <ChangeLanguage />
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Text type="title">{t("main title")}</Text>
        <Slider label={t("age label")} id={"edad"} onChange={handlerChange} />
        <Input
          label={t("habilities label")}
          id={"habilidad"}
          onChange={handlerChange}
        />
        <Input
          label={t("location label")}
          id={"ubicacion"}
          onChange={handlerChange}
        />
        <Button disabled={loading}>
          <Text>{t("generate idea button")}</Text>
        </Button>
      </form>
      {loading && <Loading />}
      {response.length > 0 && <TextResponse response={response} />}
      {/* <TextResponse response={"esto es una respuesta harcodeada"} /> */}
    </div>
  );
};

export default GenerateIdea;
