import React, { useEffect, useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/atoms/Text/Text";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import Icon from "../../components/atoms/Icon/Icon";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL, CHOOSE_BUSINESS } from "../../utils/constants/routes";
import useBusinessPlan from "../../states/businessPlan";
import NeedLoginOrPayWindow from "../../components/organisms/NeedLoginOrPayWindow/NeedLoginOrPayWindow";
import { useLogin } from "../../hooks/useLogin";
import GradientBorder from "../../components/atoms/GradientBorder/GradientBorder";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LabeledInput from "../../components/molecules/LabeledInput/LabeledInput";
import { useStorage } from "../../hooks/useStorage";
import ShineGradientInput from "../../components/organisms/ShineGradientInput/ShineGradientInput";
import elomMuskImg from "../../assets/elon_musk.png";
import jeffBezosImg from "../../assets/jeff_bezos.png";
import markZuckerbergImg from "../../assets/mark_zuckerberg.png";
import samAltmanImg from "../../assets/sam_altman.png";
import steveJobsImg from "../../assets/steve_jobs.webp";
import warrenBuffetImg from "../../assets/warren_buffet.png";
import Avatar from "../../components/atoms/Avatar/Avatar";
const TEACHERS = {
  elonMusk: "Elon Musk",
  samAltman: "Sam Altman",
  steveJobs: "Steve Jobs",
  jeffBezos: "Jeff Bezos",
  markZuckerberg: "Mark Zuckerberg",
  warrenBuffet: "Warren Buffet",
};

const StartABusiness = () => {
  const { load, save } = useStorage();
  const [input, setInput] = useState(
    load("input") ?? {
      budget: "",
      age: "",
      skills: "",
      location: "",
      teacher: "",
    }
  );

  const { userData, isLogged } = useLogin({});

  const navigate = useNavigate();

  const [field, setField] = useState(load("field") ?? 1);
  const [shine, setShine] = useState({
    budget: false,
    age: false,
    skills: false,
    location: false,
    teacher: false,
  });

  useEffect(() => {
    return () => {
      save("input", input);
      save("field", field);
    };
  }, [input, field]);

  const [showPopup, setShowPopup] = useState(false);

  const { creating, generateOptions } = useBusinessPlan((state) => state);

  const handlerSendData = async () => {
    save("input", input);
    if (!isLogged()) return setShowPopup(true);
    await generateOptions(input);
    navigate(CHOOSE_BUSINESS);
  };
  const nextField = () => {
    if (field === 6) return;
    setField((prev) => prev + 1);
  };
  const antField = () => {
    if (field === 1) return;
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
      case 1:
        return shine.location;
      case 2:
        return shine.age;
      case 3:
        return shine.skills;
      case 4:
        return shine.budget;
      case 5:
        return shine.teacher;
      default:
        return false;
    }
  };
  return (
    <div className={styles.startABusiness}>
      <LandingPageNav />

      {field !== 5 && <ProgressBar value={(field * 100) / 6} />}

      <section className={styles.form}>
        <section className={`${styles.field} ${field === 1 && styles.show}`}>
          <Text type="title">De donde eres?</Text>

          <ShineGradientInput
            type="text"
            id="location"
            label=""
            value={input.location}
            shine={shine.location}
            onChange={handleChange}
            style={{
              border: "none",
              background: "#0F2233",
              borderRadius: "4px",
            }}
          />
        </section>
        <section className={`${styles.field} ${field === 2 && styles.show}`}>
          <Text type="title">Que edad tienes?</Text>

          <ShineGradientInput
            type="text"
            id="age"
            label=""
            value={input.age}
            shine={shine.age}
            onChange={handleChange}
            style={{
              border: "none",
              background: "#0F2233",
              borderRadius: "4px",
            }}
          />
        </section>
        <section className={`${styles.field} ${field === 3 && styles.show}`}>
          <Text type="title">Qué habilidades tienes?</Text>

          <ShineGradientInput
            type="text"
            id="skills"
            label=""
            value={input.skills}
            shine={shine.skills}
            onChange={handleChange}
            style={{
              border: "none",
              background: "#0F2233",
              borderRadius: "4px",
            }}
          />
        </section>
        <section className={`${styles.field} ${field === 4 && styles.show}`}>
          <Text type="title">Cual es tu presupuesto?</Text>

          <ShineGradientInput
            type="text"
            id="budget"
            label=""
            value={input.budget}
            shine={shine.budget}
            onChange={handleChange}
            style={{
              border: "none",
              background: "#0F2233",
              borderRadius: "4px",
            }}
          />
        </section>
        <section
          className={`${styles.field} ${styles.teachersField} ${
            field === 5 && styles.show
          }`}
        >
          <Text type="title">Elige a tu profesor</Text>
          <div className={styles.teachersContainer}>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.elonMusk && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.elonMusk)}
              >
                <Avatar src={elomMuskImg} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.samAltman && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.samAltman)}
              >
                <Avatar src={samAltmanImg} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.jeffBezos && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.jeffBezos)}
              >
                <Avatar src={jeffBezosImg} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#0E2134" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.markZuckerberg && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.markZuckerberg)}
              >
                <Avatar src={markZuckerbergImg} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#0E2134" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.steveJobs && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.steveJobs)}
              >
                <Avatar src={steveJobsImg} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#0E2036" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.warrenBuffet && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.warrenBuffet)}
              >
                <Avatar src={warrenBuffetImg} />
              </div>
            </GradientBorder>
          </div>
        </section>
        <section className={`${styles.field} ${field === 6 && styles.show}`}>
          <GradientBorder>
            <button
              disabled={creating}
              className={styles.generateIdeaBtn}
              onClick={handlerSendData}
              style={{ background: "#0F2A3A" }}
            >
              <Text type="title">
                {creating ? "creating...." : "Generar Plan"}
              </Text>
            </button>
          </GradientBorder>
        </section>
      </section>

      <section className={styles.controls}>
        <GradientBorder>
          <div
            style={{ background: "#0E1C2D" }}
            className={`${styles.antBtn} ${field > 1 && styles.enabled}`}
          >
            <button
              className={styles.arrow}
              disabled={field === 1}
              onClick={antField}
            >
              <Icon type={"leftArrow"} />
            </button>
            <div className={styles.desc}>
              <Text>Back</Text>
              <Text>MVP</Text>
            </div>
          </div>
        </GradientBorder>
        <GradientBorder>
          <div
            style={{ background: "#0E1C2D" }}
            className={`${styles.nextBtn} ${field < 6 && styles.enabled} ${
              isMustShine() && styles.shine
            }`}
          >
            <div className={styles.desc}>
              <Text>Next</Text>
              <Text>MVP</Text>
            </div>
            <button
              className={styles.arrow}
              disabled={field === 6}
              onClick={nextField}
            >
              <Icon type={"rightArrow"} />
            </button>
          </div>
        </GradientBorder>
      </section>
      {showPopup && <NeedLoginOrPayWindow />}
      <GradientBg />
    </div>
  );
};

export default StartABusiness;
