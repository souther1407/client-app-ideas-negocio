import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./planSectionDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import IconText from "../../components/molecules/IconText/IconText";
import IconButton from "../../components/molecules/IconButton/IconButton";
import ModalNextCard from "../../pages/PlanDetail/components/modalNextCard/ModalNextCard";
import Button from "../../components/atoms/Button/Button";
import usePromptDetail from "../../states/prompDetail";
import Link from "../../components/atoms/Link/Link";
import {
  PLAN_DETAIL,
  DASHBOARD_ASK_QUESTION,
} from "../../utils/constants/routes";
import Mark from "../../components/atoms/Mark/Mark";
import ReactMarkdown from "react-markdown";

const texts = {
  marketAnalisis: "Análisis de mercado",
  team: "Equipo",
  productMin: "Producto mínimo viable",
  marketingPlan: "Plan de Marketing",
  costs: "Costes",
  teacherMessage: "Mensaje del profesor",
};
import { useStorage } from "../../hooks/useStorage";
import HorizontalCard from "../../components/organisms/HorizontalCard/HorizontalCard";

const PromptSectionDetail = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  const { load } = useStorage();

  const onAnt = () => {
    if (section !== "marketAnalisis") mainRef.current.scrollTo({ top: 0 });
    switch (section) {
      case "marketAnalisis":
        return navigate(PLAN_DETAIL + "/teacherMessage");
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
      case "teacherMessage":
        return navigate(PLAN_DETAIL + "/marketAnalisis");
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
    if (window.innerWidth <= 600)
      switch (currentSection) {
        case "questions":
          return `-${menuTitleRef.current.offsetWidth}px`;
        case "ask":
          return `-${
            menuTitleRef.current.offsetWidth +
            menuQuestionRef.current.offsetWidth
          }px`;
        default:
          return `0`;
      }
  };

  useEffect(() => {
    changeSection();
  }, [scrollPos]);
  const tools = useMemo(() => {
    const regex = /\{(?:[^{}]|(\{(?:[^{}]|())*\}))*\}/g;
    const jsons = promptDetail[section]?.urlTools?.match(regex) ?? [];
    return jsons.map((j) => JSON.parse(j));
  }, []);
  console.log(tools);
  return (
    <div className={styles.promptSectionDetail}>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <div style={{ width: "1px", height: "1px" }}></div>
          <section className={styles.options}>
            <div
              className={styles.planSectionName}
              style={{
                transform: `translateX(${getTransitionValue()})`,
                flexShrink: "0",
              }}
              ref={menuTitleRef}
              onClick={() =>
                detailRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconText
                icon={"case"}
                color={currentSection !== "detail" && "soft"}
                size="0.9rem"
              >
                {texts[section]}
              </IconText>
            </div>
            <div
              style={{ transform: `translateX(${getTransitionValue()})` }}
              ref={menuQuestionRef}
              onClick={() =>
                questionsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconText
                icon={"case"}
                color={currentSection !== "questions" && "soft"}
                size="0.9rem"
              >
                Preguntas
              </IconText>
            </div>
            <div
              style={{ transform: `translateX(${getTransitionValue()})` }}
              ref={menuAskRef}
              onClick={() =>
                askQuestionsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconText
                icon={"case"}
                color={currentSection !== "ask" && "soft"}
                size="0.9rem"
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
          <div className={styles.details}>
            <section className={styles.detail} ref={detailRef}>
              <ReactMarkdown className={styles.md}>
                {promptDetail[section]?.planDetail}
              </ReactMarkdown>
            </section>

            <section className={styles.questions} ref={questionsRef}>
              <Text type="title">Preguntas</Text>
              <ReactMarkdown className={styles.md}>
                {promptDetail[section]?.questions}
              </ReactMarkdown>
            </section>

            <section
              className={styles.askQuestions}
              ref={askQuestionsRef}
            ></section>
          </div>
          <aside className={styles.tools}>
            <Text type="subtitle" bold>
              Toolkit to execute
            </Text>
          </aside>
        </main>

        <div className={styles.antNextBtns}>
          <Button type="bordered" onClick={onAnt} width={"150px"}>
            <IconText bold icon={"leftArrow"}>
              Previus
            </IconText>
          </Button>
          <Button type="bordered" onClick={onNext} width={"150px"}>
            <IconText bold icon={"rightArrow"} iconPos="right">
              Next
            </IconText>
          </Button>
        </div>
      </div>

      <GradientBg opacity={15} />
    </div>
  );
};

export default PromptSectionDetail;
