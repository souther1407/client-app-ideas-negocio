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
  const results = useMemo(() => {
    const results = promptDetail[section]?.questions.match(
      /\bhttps?:\/\/[^\n]+\b/g
    );
    return results;
  }, []);
  console.log(results);
  useEffect(() => {
    changeSection();
  }, [scrollPos]);
  return (
    <div className={styles.promptSectionDetail}>
      <section className={styles.close}>
        <IconButton
          icon={"close"}
          onClick={() => navigate(load("PLAN_DETAIL_URL"))}
        />
      </section>
      <div className={styles.content}>
        <nav className={styles.navigation}>
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
              >
                Herramientas
              </IconText>
            </div>
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
            <ReactMarkdown className={styles.md}>
              {promptDetail[section]?.planDetail}
            </ReactMarkdown>
          </section>

          <section className={styles.questions} ref={questionsRef}>
            <Text type="title">Preguntas</Text>
            <ReactMarkdown className={styles.md}>
              {promptDetail[section]?.questions}
            </ReactMarkdown>
            {results.map((r) => (
              <Link extern to={r}>
                <Button>
                  <Text>{r}</Text>
                </Button>
              </Link>
            ))}
          </section>

          <section className={styles.askQuestions} ref={askQuestionsRef}>
            <Text type="title">Empieza a construir tu negocio</Text>
            <Text color="soft">
              ¿Tienes algún problema que no puedes resolver en tu negocio?
              &nbsp;
              <Mark color={"primary"}>
                Responde todas tus preguntas con ayuda de nuestros expertos.
                Ejemplo:
              </Mark>
            </Text>

            <HorizontalCard
              title={"Marketing"}
              detail={promptDetail.title}
              onClick={() => navigate(DASHBOARD_ASK_QUESTION + "?to=Marketing")}
            />

            <HorizontalCard
              title={"Redes Sociales"}
              detail={promptDetail.title}
              onClick={() =>
                navigate(DASHBOARD_ASK_QUESTION + "?to=socialMedia")
              }
            />

            <HorizontalCard
              title={"Product Manager"}
              detail={promptDetail.title}
              onClick={() =>
                navigate(DASHBOARD_ASK_QUESTION + "?to=productManager")
              }
            />

            <HorizontalCard
              title={"Diseño Web"}
              detail={promptDetail.title}
              onClick={() =>
                navigate(DASHBOARD_ASK_QUESTION + "?to=webDesigner")
              }
            />

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
