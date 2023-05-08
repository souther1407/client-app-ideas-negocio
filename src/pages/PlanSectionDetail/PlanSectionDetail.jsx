import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./planSectionDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate, useParams } from "react-router-dom";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import IconText from "../../components/molecules/IconText/IconText";
import IconButton from "../../components/molecules/IconButton/IconButton";
import ModalNextCard from "../../pages/PlanDetail/components/modalNextCard/ModalNextCard";
import Button from "../../components/atoms/Button/Button";
import usePromptDetail from "../../states/prompDetail";
import {
  PLAN_DETAIL,
  DASHBOARD_ASK_QUESTION,
} from "../../utils/constants/routes";
import { useScroll } from "../../hooks/useScroll";
import { formatText } from "../../utils/format/formatText";
import ReactMarkdown from "react-markdown";
const texts = {
  marketAnalisis: "Análisis de mercado",
  team: "Equipo",
  productMin: "Producto mínimo viable",
  marketingPlan: "Plan de Marketing",
  costs: "Costes",
};
import { useStorage } from "../../hooks/useStorage";
const PromptSectionDetail = ({ detail }) => {
  const { section } = useParams();
  const navigate = useNavigate();
  const { load } = useStorage();
  const onAnt = () => {
    if (section !== "marketAnalisis") mainRef.current.scrollTo({ top: 0 });
    switch (section) {
      case "team":
        return navigate(PLAN_DETAIL + "/marketAnalisis");
      case "productMin":
        return navigate(PLAN_DETAIL + "/team");
      case "marketingPlan":
        return navigate(PLAN_DETAIL + "/marketingPlan");
      case "costs":
        return navigate(PLAN_DETAIL + "/productMin");
      default:
        return;
    }
  };

  const onNext = () => {
    if (section !== "costs") mainRef.current.scrollTo({ top: 0 });

    switch (section) {
      case "marketAnalisis":
        return navigate(PLAN_DETAIL + "/team");
      case "team":
        return navigate(PLAN_DETAIL + "/productMin");
      case "productMin":
        return navigate(PLAN_DETAIL + "/marketingPlan");
      case "marketingPlan":
        return navigate(PLAN_DETAIL + "/costs");
      default:
        return;
    }
  };
  const promptDetail = usePromptDetail((state) => state.promptDetail);

  const mainRef = useRef();
  const detailRef = useRef();
  const questionsRef = useRef();
  const askQuestionsRef = useRef();

  const [scrollPos, setScrollPos] = useState(0);
  const [currentSection, setCurrentSection] = useState("detail");
  const changeSection = () => {
    const isInDetail =
      mainRef.current?.clientHeight + scrollPos <
        detailRef.current?.clientHeight || scrollPos === 0;

    const isQuestion =
      mainRef.current?.clientHeight + scrollPos >=
        detailRef.current?.clientHeight &&
      mainRef.current?.clientHeight + scrollPos <
        detailRef.current?.clientHeight + questionsRef.current?.clientHeight;

    const isAsk =
      mainRef.current?.clientHeight + scrollPos >=
      detailRef.current?.clientHeight + questionsRef.current?.clientHeight;

    if (isInDetail) setCurrentSection("detail");
    else if (isQuestion) setCurrentSection("questions");
    else setCurrentSection("ask");
  };

  const menuTitleRef = useRef();
  const menuQuestionRef = useRef();
  const menuAskRef = useRef();

  const getTransitionValue = () => {
    switch (currentSection) {
      case "questions":
        return `-${menuTitleRef.current.offsetWidth}px`;
      case "ask":
        return `-${
          menuTitleRef.current.offsetWidth + menuQuestionRef.current.offsetWidth
        }px`;
      default:
        return `0`;
    }
  };

  useEffect(() => {
    changeSection();
  }, [scrollPos]);
  return (
    <div className={styles.promptSectionDetail}>
      <VerticalLoginNav />
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <section className={styles.options}>
            <div
              style={{ transform: `translateX(${getTransitionValue()})` }}
              ref={menuTitleRef}
            >
              <IconText
                icon={"case"}
                color={currentSection !== "detail" && "soft"}
              >
                {texts[section]}
              </IconText>
            </div>
            <div
              style={{ transform: `translateX(${getTransitionValue()})` }}
              ref={menuQuestionRef}
            >
              <IconText
                icon={"case"}
                color={currentSection !== "questions" && "soft"}
              >
                Preguntas
              </IconText>
            </div>
            <div
              style={{ transform: `translateX(${getTransitionValue()})` }}
              ref={menuAskRef}
            >
              <IconText
                icon={"case"}
                color={currentSection !== "ask" && "soft"}
              >
                Herramientas
              </IconText>
            </div>
          </section>
          <section className={styles.close}>
            <IconButton
              icon={"close"}
              onClick={() => navigate(load("PLAN_DETAIL_URL"))}
            />
          </section>
        </nav>
        <main
          className={styles.main}
          ref={mainRef}
          onScroll={(e) => {
            setScrollPos(e.currentTarget.scrollTop);
          }}
        >
          <section className={styles.detail} ref={detailRef}>
            {/*  <Text>
              {formatText(promptDetail[section].planDetail, (p) => (
                <Text>{p}</Text>
              ))}
            </Text> */}
            <ReactMarkdown>{promptDetail[section].planDetail}</ReactMarkdown>
          </section>
          <section className={styles.questions} ref={questionsRef}>
            <Text type="title">Preguntas</Text>
            <ReactMarkdown>{promptDetail[section].questions}</ReactMarkdown>
          </section>
          <section className={styles.askQuestions} ref={askQuestionsRef}>
            <Text type="title">Empieza a construir tu negocio</Text>
            <Text color="soft">
              Responde todas tus preguntas con ayuda de nuestros expertos
            </Text>
            <Button
              color="secondary"
              flexible
              onClick={() => navigate(DASHBOARD_ASK_QUESTION)}
            >
              <Text>Empieza ahora</Text>
            </Button>
            <div className={styles.antNextBtns}>
              <ModalNextCard onPrev={onAnt} onNext={onNext} />
            </div>
          </section>
        </main>
      </div>
      <GradientBg opacity={20} />
    </div>
  );
};

export default PromptSectionDetail;
