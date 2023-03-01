import React, { useEffect, useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/styled/Text/Text";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import Icon from "../../components/styled/Icon/Icon";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL, CHOOSE_BUSINESS } from "../../utils/constants/routes";
import useBusinessPlan from "../../states/businessPlan";
import NeedLoginOrPayWindow from "../../components/compounds/NeedLoginOrPayWindow/NeedLoginOrPayWindow";
import { useLogin } from "../../hooks/useLogin";
import GradientBorder from "../../components/styled/GradientBorder/GradientBorder";
import GradientBg from "../../components/styled/GradientBg/GradientBg";
import Input from "../../components/styled/Input/Input";
import { useStorage } from "../../hooks/useStorage";
const TEACHERS = {
  elonMusk: "Elon Musk",
  billGates: "Bill Gates",
  steveJobs: "Steve Jobs",
  joeBezos: "Joe Bezos",
  marcosGasperin: "Marcos Gasperin",
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
    if (!isLogged() || !userData.subscription) return setShowPopup(true);
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
          <GradientBorder>
            <Input
              type="text"
              id="location"
              value={input.location}
              className={`${styles.input} ${shine.location && styles.shine}`}
              onChange={handleChange}
              style={{
                border: "none",
                background: "#0F2233",
                borderRadius: "4px",
              }}
            />
          </GradientBorder>
        </section>
        <section className={`${styles.field} ${field === 2 && styles.show}`}>
          <Text type="title">Que edad tienes?</Text>
          <GradientBorder>
            <Input
              value={input.age}
              type="number"
              id="age"
              className={`${styles.input} ${shine.age && styles.shine}`}
              onChange={handleChange}
              style={{
                border: "none",
                background: "#0F2233",
                borderRadius: "4px",
              }}
            />
          </GradientBorder>
        </section>
        <section className={`${styles.field} ${field === 3 && styles.show}`}>
          <Text type="title">Qué habilidades tienes?</Text>
          <GradientBorder>
            <Input
              type="text"
              value={input.skills}
              id="skills"
              className={`${styles.input} ${shine.skills && styles.shine}`}
              onChange={handleChange}
              style={{
                border: "none",
                background: "#0F2233",
                borderRadius: "4px",
              }}
            />
          </GradientBorder>
        </section>
        <section className={`${styles.field} ${field === 4 && styles.show}`}>
          <Text type="title">Cual es tu presupuesto?</Text>
          <GradientBorder>
            <Input
              type="text"
              id="budget"
              value={input.budget}
              className={`${styles.input} ${shine.budget && styles.shine}`}
              onChange={handleChange}
              style={{
                border: "none",
                background: "#0F2233",
                borderRadius: "4px",
              }}
            />
          </GradientBorder>
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
                <Icon type={"image"} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.billGates && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.billGates)}
              >
                <Icon type={"image"} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#112A3B" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.joeBezos && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.joeBezos)}
              >
                <Icon type={"image"} />
              </div>
            </GradientBorder>
            <GradientBorder style={{ borderRadius: "50%" }}>
              <div
                style={{ background: "#0E2134" }}
                className={`${styles.teacher} ${
                  input.teacher === TEACHERS.marcosGasperin && styles.shine
                }`}
                onClick={() => handleTeacherSelect(TEACHERS.marcosGasperin)}
              >
                <Icon type={"image"} />
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
                <Icon type={"image"} />
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
                <Icon type={"image"} />
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
