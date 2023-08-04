import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./planSectionDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import IconText from "../../components/molecules/IconText/IconText";
import IconButton from "../../components/molecules/IconButton/IconButton";
import usePromptDetail from "../../states/prompDetail";
import Link from "../../components/atoms/Link/Link";
import {
  PLAN_DETAIL,
  DASHBOARD_ASK_QUESTION,
} from "../../utils/constants/routes";

import ReactMarkdown from "react-markdown";
import EffectButton from "../../components/atoms/EffectButton/EffectButton";

const texts = {
  targetCustomer: "Target Customer",
  team: "Team",
  mvp: "Product development",
  marketingPlan: "Marketing plan",
  costs: "Costs",
  competitions: "Competition",
};
import { useStorage } from "../../hooks/useStorage";
import MagicEffect from "../../components/atoms/MagicEffect/MagicEffect";
const PromptSectionDetail = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  const { load } = useStorage();

  const onAnt = () => {
    if (section !== "competitions") mainRef.current.scrollTo({ top: 0 });
    switch (section) {
      case "marketingPlan":
        return navigate(PLAN_DETAIL + "/mvp");
      case "mvp":
        return navigate(PLAN_DETAIL + "/team");
      case "team":
        return navigate(PLAN_DETAIL + "/targetCustomer");
      case "targetCustomer":
        return navigate(PLAN_DETAIL + "/competitions");
      case "competitions":
        return;
      default:
        return;
    }
  };

  const onNext = () => {
    if (section !== "costs") mainRef.current.scrollTo({ top: 0 });

    switch (section) {
      case "competitions":
        return navigate(PLAN_DETAIL + "/targetCustomer");
      case "targetCustomer":
        return navigate(PLAN_DETAIL + "/team");
      case "team":
        return navigate(PLAN_DETAIL + "/mvp");
      case "mvp":
        return navigate(PLAN_DETAIL + "/marketingPlan");
      case "marketingPlan":
        return;
      default:
        return;
    }
  };
  const { details } = usePromptDetail((state) => state.promptDetail);

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
    const toolsList = details[section]?.toolsList.trim().split("\n\n");
    console.log("tools", toolsList);
    return toolsList;
  }, [section]);

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
                size="0.7rem"
              >
                {"Overview"}
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
                size="0.7rem"
              >
                Plan
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
            <div className={styles.header}>
              <Text type="subtitle" size={"1rem"} bold color="soft">
                {texts[section]}
              </Text>
              <div className={styles.prevNextBtns}>
                <IconButton
                  icon={"singleArrowLeft"}
                  size="2rem"
                  onClick={onAnt}
                />
                <IconButton
                  icon={"singleArrowRight"}
                  size="2rem"
                  onClick={onNext}
                />
              </div>
            </div>
            <section className={styles.detail} ref={detailRef}>
              <ReactMarkdown className={styles.md}>
                {details[section]?.overview}
              </ReactMarkdown>
            </section>

            <section className={styles.questions} ref={askQuestionsRef}>
              <ReactMarkdown className={styles.md}>
                {details[section]?.plan}
              </ReactMarkdown>
            </section>

            <section
              className={styles.askQuestions}
              ref={askQuestionsRef}
            ></section>
          </div>
          <aside className={styles.tools}>
            <Text type="subtitle" size={"1rem"} bold color="soft">
              Toolbox to execute
            </Text>
            {tools?.map((t) => {
              const element = JSON.parse(t);
              console.log(element);
              return (
                <>
                  <Text type="subtitle" bold>
                    {element.toolName}
                  </Text>
                  <ReactMarkdown className={styles.md}>
                    {element.description}
                  </ReactMarkdown>
                  <div className={styles.btns}>
                    <Link extern to={element.url} target={"_blank"}>
                      <EffectButton text={"link"} icon={"link"} />
                    </Link>
                    <Link extern to={element.tutorial} target={"_blank"}>
                      <EffectButton text={"tutorial"} icon={"youtube"} />
                    </Link>
                  </div>
                </>
              );
            })}
          </aside>
        </main>
      </div>

      <GradientBg opacity={15} />
    </div>
  );
};

export default PromptSectionDetail;
