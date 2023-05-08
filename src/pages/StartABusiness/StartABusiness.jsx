import React, { useEffect, useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/atoms/Text/Text";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import Icon from "../../components/atoms/Icon/Icon";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL, CHOOSE_BUSINESS } from "../../utils/constants/routes";
import useOptions from "../../states/useOptions";
import usePromptDetail from "../../states/prompDetail";
import NeedLoginOrPayWindow from "../../components/organisms/NeedLoginOrPayWindow/NeedLoginOrPayWindow";
import { useLogin } from "../../hooks/useLogin";
import GradientBorder from "../../components/atoms/GradientBorder/GradientBorder";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import { useStorage } from "../../hooks/useStorage";
import ShineGradientInput from "../../components/organisms/ShineGradientInput/ShineGradientInput";
import elomMuskImg from "../../assets/elon_musk.png";
import jeffBezosImg from "../../assets/jeff_bezos.png";
import markZuckerbergImg from "../../assets/mark_zuckerberg.png";
import samAltmanImg from "../../assets/sam_altman.png";
import steveJobsImg from "../../assets/steve_jobs.webp";
import warrenBuffetImg from "../../assets/warren_buffet.png";
import Avatar from "../../components/atoms/Avatar/Avatar";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import Button from "../../components/atoms/Button/Button";
import { createDetail } from "../../services/createText/createText";
const TEACHERS = {
  elonMusk: "Elon Musk",
  samAltman: "Sam Altman",
  steveJobs: "Steve Jobs",
  jeffBezos: "Jeff Bezos",
  markZuckerberg: "Mark Zuckerberg",
  warrenBuffet: "Warren Buffet",
};
const MAX_SECTION_NUMBER = 8;
const StartABusiness = () => {
  const { load, save } = useStorage();
  const [input, setInput] = useState({
    budget: "",
    age: "",
    skills: "",
    location: "",
    teacher: "",
    description: "",
  });

  const { userData, isLogged } = useLogin({});

  const navigate = useNavigate();

  const [field, setField] = useState(1);
  const [shine, setShine] = useState({
    description: false,
    budget: false,
    age: false,
    skills: false,
    location: false,
    teacher: false,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => {
      save("input", input);
      save("field", field);
    };
  }, [input, field]);

  const [showPopup, setShowPopup] = useState(false);

  const { creating, generateOptions } = useOptions((state) => state);
  const { setPromptDetail } = usePromptDetail((state) => state);
  const [hasAnIdea, setHasAnIdea] = useState(false);
  const handlerSendData = async () => {
    save("input", input);
    if (!isLogged()) return setShowPopup(true);
    if (input.description.length > 0) {
      try {
        setLoading(true);
        const detail = await createDetail({
          input,
          header: {
            title: "Mi idea de negocio",
            description: input.description,
          },
        });
        console.log(detail);
        setPromptDetail(detail);
        navigate(PLAN_DETAIL);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      await generateOptions(input);
      navigate(CHOOSE_BUSINESS);
    }
  };

  const nextField = () => {
    console.log(field + 1);
    if (field === MAX_SECTION_NUMBER) return;
    setField((prev) => prev + 1);
  };

  const antField = () => {
    if (hasAnIdea ? field === 2 : field === 3) return;
    setField((prev) => prev - 1);
  };

  const handleChange = (id, value) => {
    setShine((prev) => ({ ...prev, [id]: value.length > 0 }));
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleTeacherSelect = (teacher) => {
    setShine((prev) => ({ ...prev, teacher: true }));
    setInput((prev) => ({ ...prev, teacher: teacher }));
  };

  const isMustShine = () => {
    switch (field) {
      case 2:
        return shine.description;
      case 3:
        return shine.location;
      case 4:
        return shine.age;
      case 5:
        return shine.skills;
      case 6:
        return shine.budget;
      case 7:
        return shine.teacher;
      default:
        return false;
    }
  };

  return (
    <div className={styles.startABusiness}>
      {isLogged() && <VerticalLoginNav />}
      <main className={styles.content}>
        <LandingPageNav />
        {/*  {field !== 5 && <ProgressBar value={(field * 100) / 6} />} */}
        <section className={styles.form}>
          <section className={`${styles.field} ${field === 1 && styles.show}`}>
            <Text type="title" textAlign="center">
              ¿Ya tienes una idea de negocios?
            </Text>
            <Button
              type="bordered"
              w
              onClick={() => {
                setHasAnIdea(true);
                setField(2);
              }}
            >
              <Text>SI</Text>
            </Button>
            <Button
              type="bordered"
              w
              onClick={() => {
                setHasAnIdea(false);
                setField(3);
              }}
            >
              <Text>NO</Text>
            </Button>
          </section>
          <section className={`${styles.field} ${field === 2 && styles.show}`}>
            <Text type="title" textAlign="center">
              Describe tu Idea de Negocio en 100 palabras
            </Text>
            <textarea
              className={`${styles.textarea} ${
                shine.description && styles.shine
              }`}
              onChange={(e) =>
                handleChange("description", e.currentTarget.value)
              }
            ></textarea>
          </section>
          <section className={`${styles.field} ${field === 3 && styles.show}`}>
            <Text type="title">¿De donde eres?</Text>

            <ShineGradientInput
              type="text"
              id="location"
              label=""
              value={input.location}
              shine={shine.location}
              onChange={handleChange}
              style={{
                border: "none",
              }}
            />
            <Text color="soft" textAlign="center">
              Ingresa un país, o tu ciudad junto con el país.
            </Text>
          </section>
          <section className={`${styles.field} ${field === 4 && styles.show}`}>
            <Text type="title">¿Qué edad tienes?</Text>

            <ShineGradientInput
              type="text"
              id="age"
              label=""
              value={input.age}
              shine={shine.age}
              onChange={handleChange}
              style={{
                border: "none",
              }}
            />
            <Text color="soft" textAlign="center"></Text>
          </section>
          <section className={`${styles.field} ${field === 5 && styles.show}`}>
            <Text type="title">¿Qué habilidades tienes?</Text>

            <ShineGradientInput
              type="text"
              id="skills"
              label=""
              value={input.skills}
              shine={shine.skills}
              onChange={handleChange}
              style={{
                border: "none",
              }}
            />
            <Text color="soft" textAlign="center"></Text>
          </section>
          <section className={`${styles.field} ${field === 6 && styles.show}`}>
            <Text type="title">¿Cuál es tu presupuesto?</Text>

            <ShineGradientInput
              type="text"
              id="budget"
              label=""
              value={input.budget}
              shine={shine.budget}
              onChange={handleChange}
              style={{
                border: "none",
              }}
            />
            <Text color="soft" textAlign="center">
              Los planes de negocio son generados basados en cifras en dólares
              americanos.
            </Text>
          </section>
          <section
            className={`${styles.field} ${styles.teachersField} ${
              field === 7 && styles.show
            }`}
          >
            <Text type="title">Elige a tu profesor</Text>
            <div className={styles.teachersContainer}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.elonMusk && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.elonMusk)}
              >
                <Avatar src={elomMuskImg} />
              </div>

              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.samAltman && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.samAltman)}
              >
                <Avatar src={samAltmanImg} />
              </div>

              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.jeffBezos && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.jeffBezos)}
              >
                <Avatar src={jeffBezosImg} />
              </div>

              <div
                style={{ background: "#0E2134" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.markZuckerberg && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.markZuckerberg)}
              >
                <Avatar src={markZuckerbergImg} />
              </div>

              <div
                style={{ background: "#0E2134" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.steveJobs && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.steveJobs)}
              >
                <Avatar src={steveJobsImg} />
              </div>

              <div
                style={{ background: "#0E2036" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.warrenBuffet && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.warrenBuffet)}
              >
                <Avatar src={warrenBuffetImg} />
              </div>
            </div>
          </section>
          <section
            className={`${styles.field} ${
              field === MAX_SECTION_NUMBER && styles.show
            }`}
          >
            <button
              disabled={creating || loading}
              className={styles.generateIdeaBtn}
              onClick={handlerSendData}
            >
              <Text type="title">
                {creating || loading ? "creating...." : "Generar Plan"}
              </Text>
            </button>
          </section>
        </section>

        {field !== 1 && (
          <section className={styles.controls}>
            <button
              style={{ background: "#0E1C2D" }}
              className={`${styles.antBtn} ${field > 1 && styles.enabled}`}
              onClick={antField}
            >
              <span className={styles.arrow}>
                <Icon type={"leftArrow"} />
              </span>

              <span className={styles.desc}>
                <Text>Atrás</Text>
              </span>
            </button>

            <button
              style={{ background: "#0E1C2D" }}
              onClick={nextField}
              disabled={field === MAX_SECTION_NUMBER}
              className={`${styles.nextBtn} ${
                field < MAX_SECTION_NUMBER && styles.enabled
              } ${isMustShine() && styles.shine}`}
            >
              <span className={styles.desc}>
                <Text>Siguiente</Text>
              </span>
              <span className={styles.arrow}>
                <Icon type={"rightArrow"} />
              </span>
            </button>
          </section>
        )}
        {showPopup && <NeedLoginOrPayWindow />}
      </main>
      <GradientBg opacity={15} />
    </div>
  );
};

export default StartABusiness;
