import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/atoms/Button/Button";
import Text from "../../components/atoms/Text/Text";
import Slider from "../../components/atoms/Slider/Slider";
import Input from "../../components/atoms/Input/Input";
import { parseData } from "../../utils/parse/parseData";
import Loading from "../../components/molecules/Loading/Loading";
import styles from "./generateIdea.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import Icon from "../../components/atoms/Icon/Icon";
import { context } from "../../Context/GenerateDataContext/GenerateDataContext";
import { LOGIN, RESPONSE } from "../../utils/constants/routes";
import Nav from "../../components/molecules/Nav/Nav";

const GenerateIdea = () => {
  const [input, setInput] = useState({
    edad: "1",
    habilidad: "",
    ubicacion: "",
  });
  console.log(auth.currentUser);
  const { data, updateData } = useContext(context);

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
      return navigate(LOGIN);
    }
    try {
      setResponse("");
      setLoading(true);
      const parsedData = parseData(input);
      const responseData = await createText(parsedData);
      updateData(responseData);
      navigate(RESPONSE);
    } catch (error) {
      alert("ocurrio un error :c", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.generateIdea}>
      <Nav />
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
    </div>
  );
};

export default GenerateIdea;
