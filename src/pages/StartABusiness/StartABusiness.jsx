import React, { useEffect, useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/styled/Text/Text";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import Icon from "../../components/styled/Icon/Icon";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL } from "../../utils/constants/routes";
import useBusinessPlan from "../../states/businessPlan";
import NeedLoginOrPayWindow from "../../components/compounds/NeedLoginOrPayWindow/NeedLoginOrPayWindow";
import { useLogin } from "../../hooks/useLogin";
import GradientBorder from "../../components/styled/GradientBorder/GradientBorder";

const TEACHERS = {
  elonMusk: "Elon Musk",
  billGates: "Bill Gates",
  steveJobs: "Steve Jobs",
  joeBezos: "Joe Bezos",
  marcosGasperin: "Marcos Gasperin",
  warrenBuffet: "Warren Buffet",
};

const StartABusiness = () => {
  const [input, setInput] = useState({
    budget: "",
    age: "",
    skills: "",
    location: "",
    teacher: "",
  });

  const { credentials, lastSubscription } = useLogin({});

  const navigate = useNavigate();

  const [field, setField] = useState(1);
  const [shine, setShine] = useState({
    budget: false,
    age: false,
    skills: false,
    location: false,
    teacher: false,
  });

  const [showPopup, setShowPopup] = useState(false);

  const { creating, generateBusinessPlan } = useBusinessPlan((state) => state);

  const handlerSendData = async () => {
    if (!credentials || lastSubscription.length === 0)
      return setShowPopup(true);
    await generateBusinessPlan(input);
    navigate(PLAN_DETAIL);
  };
  const nextField = () => {
    if (field === 6) return;
    setField((prev) => prev + 1);
  };
  const antField = () => {
    if (field === 1) return;
    setField((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setShine((prev) => ({ ...prev, [e.target.id]: e.target.value.length > 0 }));
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
          <input
            type="text"
            id="location"
            className={`${styles.input} ${shine.location && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 2 && styles.show}`}>
          <Text type="title">Que edad tienes?</Text>
          <input
            type="number"
            id="age"
            className={`${styles.input} ${shine.age && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 3 && styles.show}`}>
          <Text type="title">Qué habilidades tienes?</Text>
          <input
            type="text"
            id="skills"
            className={`${styles.input} ${shine.skills && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section className={`${styles.field} ${field === 4 && styles.show}`}>
          <Text type="title">Cual es tu presupuesto?</Text>
          <input
            type="text"
            id="budget"
            className={`${styles.input} ${shine.budget && styles.shine}`}
            onChange={handleChange}
          />
        </section>
        <section
          className={`${styles.field} ${styles.teachersField} ${
            field === 5 && styles.show
          }`}
        >
          <Text type="title">Elige a tu profesor</Text>
          <div className={styles.teachersContainer}>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.elonMusk && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.elonMusk)}
            >
              <Icon type={"image"} />
            </div>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.billGates && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.billGates)}
            >
              <Icon type={"image"} />
            </div>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.joeBezos && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.joeBezos)}
            >
              <Icon type={"image"} />
            </div>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.marcosGasperin && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.marcosGasperin)}
            >
              <Icon type={"image"} />
            </div>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.steveJobs && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.steveJobs)}
            >
              <Icon type={"image"} />
            </div>
            <div
              className={`${styles.teacher} ${
                input.teacher === TEACHERS.warrenBuffet && styles.shine
              }`}
              onClick={() => handleTeacherSelect(TEACHERS.warrenBuffet)}
            >
              <Icon type={"image"} />
            </div>
          </div>
        </section>
        <section className={`${styles.field} ${field === 6 && styles.show}`}>
          <button
            disabled={creating}
            className={styles.generateIdeaBtn}
            onClick={handlerSendData}
          >
            <Text type="title">
              {creating ? "creating...." : "Generar Plan"}
            </Text>
          </button>
        </section>
      </section>

      <section className={styles.controls}>
        <div className={`${styles.antBtn} ${field > 1 && styles.enabled}`}>
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

        <div
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
      </section>
      {showPopup && <NeedLoginOrPayWindow />}
    </div>
  );
};

export default StartABusiness;
