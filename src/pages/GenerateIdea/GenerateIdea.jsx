import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import Logout from "../../components/compounds/Logout/Logout";
import Icon from "../../components/styled/Icon/Icon";

const GenerateIdea = () => {
  const [input, setInput] = useState({
    edad: "1",
    habilidad: "",
    ubicacion: "",
  });

  const navigate = useNavigate();
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [userLogged, setUserLogged] = useState(false);

  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(!!user);
    });
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      return navigate("/login");
    }
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
      {/* {userLogged && <Logout />}
      <ChangeLanguage /> */}
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Slider label={t("age label")} id={"edad"} onChange={handlerChange} />
        <Input
          label={t("habilities label")}
          id={"habilidad"}
          onChange={handlerChange}
          color="secondary"
          icon={() => <Icon type={"ai"} />}
        />
        <Input
          label={t("location label")}
          id={"ubicacion"}
          color="secondary"
          onChange={handlerChange}
          icon={() => <Icon type={"location"} />}
        />
        <Input
          label={t("budget label")}
          id={"presupuesto"}
          color="secondary"
          onChange={handlerChange}
          icon={() => <Icon type={"budget"} />}
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
