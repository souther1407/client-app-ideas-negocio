import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./planSectionDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate, useParams } from "react-router-dom";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import IconText from "../../components/molecules/IconText/IconText";
import IconButton from "../../components/molecules/IconButton/IconButton";
import usePromptDetail from "../../states/prompDetail";
import Avatar from "../../components/atoms/Avatar/Avatar";
import MVPImage from "../../assets/MPV_Banner.svg";
import RobotImg from "../../assets/robot.svg";
import {
  PLAN_DETAIL,
  DASHBOARD_ASK_QUESTION,
} from "../../utils/constants/routes";

import ReactMarkdown from "react-markdown";
import ToolPaginator from "./components/ToolPaginator/ToolPaginator";
const texts = {
  targetCustomer: "Target Customer",
  team: "Team",
  mvp: "Product development",
  marketingPlan: "Marketing plan",
  costs: "Costs",
  competitions: "Competition",
};
import { useStorage } from "../../hooks/useStorage";
import { useReportUrl } from "../../states/reportUrl";

const PromptSectionDetail = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const url = useReportUrl((state) => state.url);
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

        default:
          return `0`;
      }
  };

  useEffect(() => {
    changeSection();
  }, [scrollPos]);

  const tools = useMemo(() => {
    const toolsList = details[section]?.toolsList.trim().split("\n\n");
    return toolsList.map((t) => JSON.parse(t));
  }, [section]);
  const overviewTitle = useMemo(() => {
    const regex = /^#[a-zA-Z\s:,.';]*\n\n/g;
    const results = details[section]?.overview.match(regex);
    const title = results ? results[0] : "";
    details[section].overview = details[section].overview.replace(title, "");
    return title;
  }, [section]);
  return (
    <div className={styles.promptSectionDetail}>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <section className={styles.navigationReport}>
            <div style={{ width: "1px", height: "1px" }}></div>
            <section className={styles.options}>
              <Text>Target Customer</Text>
              <Text>Competitions</Text>
              <Text>Product</Text>
              <Text>Marketing</Text>
            </section>
            <section className={styles.close}>
              <IconButton
                icon={"close"}
                onClick={() => navigate(load("PLAN_DETAIL_URL"))}
              />
            </section>
          </section>
          <section className={`${styles.navigationReport} ${styles.submenu}`}>
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
                  questionsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <IconText
                  icon={"case"}
                  color={currentSection !== "questions" && "soft"}
                  size="0.7rem"
                >
                  Plan
                </IconText>
              </div>
              {section === "mvp" && (
                <div
                  style={{ transform: `translateX(${getTransitionValue()})` }}
                  ref={menuQuestionRef}
                  onClick={() =>
                    askQuestionsRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <IconText
                    icon={"case"}
                    color={currentSection !== "ask" && "soft"}
                    size="0.7rem"
                  >
                    Plan 2
                  </IconText>
                </div>
              )}
            </section>
          </section>
        </nav>

        <main
          className={styles.main}
          ref={mainRef}
          onScroll={(e) => {
            setScrollPos(e.currentTarget.scrollTop);
          }}
        >
          <div className={styles.socialMedia}>
            <section className={styles.banner}>
              <Avatar size={"80px"} src={RobotImg} alt="robot-padda" />
              <Text type="subtitle" bold>
                Padda
              </Text>
              <Text>IA Marketing Expert</Text>
            </section>
            <section className={styles.stats}>
              <div className={styles.stat}>
                <Text>Words</Text>
                <Text>≈1000</Text>
              </div>
              <div className={styles.stat}>
                <Text>Impressions</Text>
                <Text>10</Text>
              </div>
              <div className={styles.stat}>
                <Text>Shares</Text>
                <Text>5</Text>
              </div>
            </section>
            <section className={styles.shareLinks}>
              <IconButton
                icon={"twitter"}
                color={"#BDBDBD"}
                size="24px"
                onClick={() => {}}
              />
              <IconButton
                icon={"linkedin"}
                color={"#BDBDBD"}
                size="24px"
                onClick={() => {}}
              />
              <IconButton
                icon={"clip"}
                color={"#BDBDBD"}
                size="24px"
                onClick={async () => {
                  await window.navigator.clipboard.writeText(url);
                  alert("copied!");
                }}
              />
            </section>
          </div>
          <div className={styles.details}>
            <section className={styles.detail} ref={detailRef}>
              <div className={styles.banner}>
                <ReactMarkdown className={styles.md}>
                  {overviewTitle}
                </ReactMarkdown>
                <img src={MVPImage} className={styles.bannerImg} />
              </div>
              <ReactMarkdown className={styles.md}>
                {details[section]?.overview}
              </ReactMarkdown>
            </section>

            <section className={styles.questions} ref={questionsRef}>
              <ReactMarkdown className={styles.md}>
                {details[section]?.plan}
              </ReactMarkdown>
            </section>
            {section === "mvp" && (
              <section className={styles.questions} ref={askQuestionsRef}>
                <ReactMarkdown className={styles.md}>
                  {details[section]?.plan2}
                </ReactMarkdown>
              </section>
            )}
          </div>
          <aside className={styles.tools}>
            <ToolPaginator prompts={tools} />
          </aside>
        </main>
      </div>

      <GradientBg opacity={15} />
    </div>
  );
};

export default PromptSectionDetail;
