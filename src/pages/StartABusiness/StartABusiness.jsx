import React, { useEffect, useState } from "react";
import styles from "./startABusiness.module.css";
import Text from "../../components/atoms/Text/Text";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import { useNavigate } from "react-router-dom";
import {
  PLAN_DETAIL,
  CHOOSE_BUSINESS,
  MY_PROMPTS_DETAIL,
} from "../../utils/constants/routes";
import useOptions from "../../states/useOptions";
import usePromptDetail from "../../states/prompDetail";
import { useLogin } from "../../hooks/useLogin";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import { useStorage } from "../../hooks/useStorage";
import { createDetail } from "../../services/createText/createText";
import LoadingBooks from "../../components/molecules/LoadingBooks/LoadingBooks";
import FormPlayground from "./components/FormPlayground/FormPlayground";
import YesNoQuestion from "../../components/organisms/YesNoQuestion/YesNoQuestion";
import PaddaSkillsSection from "../../components/organisms/PaddaSkillsSection/PaddaSkillsSection";
import { wait } from "../../utils/time/wait";
const TEACHERS = {
  elonMusk: "Elon Musk",
  samAltman: "Sam Altman",
  steveJobs: "Steve Jobs",
  jeffBezos: "Jeff Bezos",
  markZuckerberg: "Mark Zuckerberg",
  warrenBuffet: "Warren Buffet",
};
const MAX_SECTION_NUMBER = 2;
const StartABusiness = () => {
  const { load, save } = useStorage();
  const [input, setInput] = useState({
    budget: "",
    age: "30",
    skills: "",
    location: "",
    teacher: "Elon musk",
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

  const handlerSendData = async (input) => {
    const parsedInputToMakeCompatibleWithPrompts = {
      ...input,
      age: "30",
      skills: input.skills.join(", "),
      teacher: "Elon musk",
    };
    save("input", parsedInputToMakeCompatibleWithPrompts);
    if (!isLogged()) return setShowPopup(true);
    if (parsedInputToMakeCompatibleWithPrompts.description.length > 0) {
      try {
        setLoading(true);
        const detail = await createDetail({
          input: parsedInputToMakeCompatibleWithPrompts,
          header: {
            title: "My business idea",
            description: parsedInputToMakeCompatibleWithPrompts.description,
          },
        });

        setPromptDetail(detail);
        await wait(1000);
        navigate(MY_PROMPTS_DETAIL + `/${detail.id}/${detail.userId}`);
      } catch (error) {
        alert("hubo un problema, inténtalo nuevamente");
      } finally {
        setLoading(false);
      }
    } else {
      await generateOptions(parsedInputToMakeCompatibleWithPrompts);
      navigate(CHOOSE_BUSINESS);
    }
  };

  /* const handleTeacherSelect = (teacher) => {
    setShine((prev) => ({ ...prev, teacher: true }));
    setInput((prev) => ({ ...prev, teacher: teacher }));
  }; */
  /* 
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
 */
  return (
    <div className={styles.startABusiness}>
      <main className={styles.content}>
        <LandingPageNav />

        <section className={styles.form}>
          <section className={`${styles.field} ${field === 1 && styles.show}`}>
            <div className={styles.yesNoQuestionContainer}>
              <PaddaSkillsSection />

              <YesNoQuestion
                onNo={() => {
                  setHasAnIdea(false);
                  setField(2);
                }}
                onYes={() => {
                  setHasAnIdea(true);
                  setField(2);
                }}
              />
            </div>
          </section>
          {(creating || loading) && (
            <div className={styles.loading}>
              <LoadingBooks />
            </div>
          )}
          {!(creating || loading) && (
            <section
              className={`${styles.field} ${
                field === MAX_SECTION_NUMBER && styles.show
              }`}
            >
              <FormPlayground
                onSubmit={handlerSendData}
                alreadyIdea={hasAnIdea}
              />
            </section>
          )}
        </section>
      </main>
      <GradientBg opacity={15} />
    </div>
  );
};

export default StartABusiness;
