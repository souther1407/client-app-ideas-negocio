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
import CompetitionsImage from "../../assets/Competition.svg";
import MarketingImage from "../../assets/Marketing.svg";
import TargetcustomerImage from "../../assets/Target Customer.svg";
import RobotImg from "../../assets/robot.svg";
import Logo from "../../components/atoms/Logo/Logo";
import { DASHBOARD_IDEAS } from "../../utils/constants/routes";
import ReactMarkdown from "react-markdown";
import ToolPaginator from "./components/ToolPaginator/ToolPaginator";
import { useReportUrl } from "../../states/reportUrl";
import { getById } from "../../services/userPrompts/getPrompts";
import { useLogin } from "../../hooks/useLogin";

const banners = {
  targetCustomer: TargetcustomerImage,
  mvp: MVPImage,
  competitions: CompetitionsImage,
  marketingPlan: MarketingImage,
};
const PromptSectionDetail = () => {
  const { id, user } = useParams();
  const navigate = useNavigate();
  const url = useReportUrl((state) => state.url);
  const [reportSection, setReportSection] = useState("targetCustomer");

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [titles, setTitles] = useState({
    targetCustomer: "",
    mvp: "",
    marketingPlan: "",
    competitions: "",
  });
  const { isLogged } = useLogin({});

  useEffect(() => {
    getById(id, user)
      .then((prompt) => {
        if (!isLogged() && !prompt.isPublic) {
          return navigate(LANDING_PAGE);
        }

        setResponse(prompt);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, []);
  const mainRef = useRef();
  const detailRef = useRef();
  const questionsRef = useRef();
  const askQuestionsRef = useRef();

  const [scrollPos, setScrollPos] = useState({
    scrolledDown: false,
    scrolledUp: false,
    pos: 0,
  });
  const [currentSection, setCurrentSection] = useState("detail");
  const changeSection = () => {
    const isInDetail =
      mainRef.current?.clientHeight + scrollPos.pos <
        detailRef.current?.clientHeight || scrollPos.pos === 0;

    const isQuestion =
      mainRef.current?.clientHeight + scrollPos.pos >=
        detailRef.current?.clientHeight &&
      mainRef.current?.clientHeight + scrollPos.pos <
        detailRef.current?.clientHeight + questionsRef.current?.clientHeight;

    const isAsk =
      mainRef.current?.clientHeight + scrollPos.pos >=
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

  const handleChangeSection = (section) => {
    setReportSection(section);
    setCurrentSection("detail");
    mainRef.current.scrollTop = 0;
  };
  useEffect(() => {
    changeSection();
    console.log(scrollPos);
  }, [scrollPos]);

  const tools = useMemo(() => {
    if (response.details) {
      console.log(response.details);
      const toolsList = response.details[reportSection]?.toolsList
        .trim()
        .split("\n\n");
      return toolsList.map((t) => JSON.parse(t));
    } else {
      return {};
    }
  }, [reportSection, response]);

  useEffect(() => {
    if (response.details) {
      let loadedTitles = { ...titles };
      for (let section in loadedTitles) {
        const regex = /^#[a-zA-Z\s:,.';]*\n\n/g;
        const results = response?.details[section]?.overview.match(regex);
        const title = results ? results[0] : "";
        response.details[section].overview = response?.details[
          section
        ].overview.replace(title, "");
        loadedTitles[section] = title;
      }
      setTitles(loadedTitles);
    }
  }, [response]);
  return (
    <div className={styles.promptSectionDetail}>
      {!loading && (
        <div className={styles.content}>
          <nav
            className={`${styles.navigation} ${
              scrollPos.scrolledDown && styles.scrolledDown
            }`}
          >
            <section className={styles.navigationReport}>
              <Logo />
              <section className={`${styles.options} ${styles.topOptions}`}>
                <Text
                  color={reportSection !== "targetCustomer" ? "soft" : ""}
                  onClick={() => handleChangeSection("targetCustomer")}
                >
                  Customer
                </Text>
                {/* <Text
                  color={reportSection !== "competitions" ? "soft" : ""}
                  onClick={() => handleChangeSection("competitions")}
                >
                  Competitions
                </Text> */}
                <Text
                  color={reportSection !== "mvp" ? "soft" : ""}
                  onClick={() => handleChangeSection("mvp")}
                >
                  Product
                </Text>
                <Text
                  color={reportSection !== "marketingPlan" ? "soft" : ""}
                  onClick={() => handleChangeSection("marketingPlan")}
                >
                  Marketing
                </Text>
              </section>
              <section className={styles.close}>
                <IconButton
                  icon={"close"}
                  onClick={() => navigate(DASHBOARD_IDEAS)}
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
                  <Text color={currentSection !== "detail" ? "soft" : ""}>
                    {"Overview"}
                  </Text>
                </div>

                <div
                  style={{ transform: `translateX(${getTransitionValue()})` }}
                  ref={menuAskRef}
                  onClick={() =>
                    questionsRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Text color={currentSection !== "questions" ? "soft" : ""}>
                    Plan
                  </Text>
                </div>
                {reportSection === "mvp" && (
                  <div
                    style={{ transform: `translateX(${getTransitionValue()})` }}
                    ref={menuQuestionRef}
                    onClick={() =>
                      askQuestionsRef.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <Text color={currentSection !== "ask" ? "soft" : ""}>
                      Plan 2
                    </Text>
                  </div>
                )}
              </section>
            </section>
          </nav>

          <main
            className={styles.main}
            ref={mainRef}
            id="main"
            onScroll={(e) => {
              const newPos = e.currentTarget.scrollTop;
              setScrollPos((prev) => ({
                scrolledDown: prev.pos < newPos,
                scrolledUp: prev.pos >= newPos,
                pos: newPos,
              }));
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
                  onClick={() => {
                    const a = document.createElement("a");
                    a.setAttribute(
                      "href",
                      `https://www.linkedin.com/shareArticle?url=${window.location.href}`
                    );
                    a.setAttribute("target", `_blank`);
                    a.click();
                  }}
                />
                <IconButton
                  icon={"linkedin"}
                  color={"#BDBDBD"}
                  size="24px"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.setAttribute(
                      "href",
                      `https://twitter.com/intent/tweet?url=${window.location.href}`
                    );
                    a.setAttribute("target", `_blank`);
                    a.click();
                  }}
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
                    {titles[reportSection]}
                  </ReactMarkdown>
                  <img
                    src={banners[reportSection]}
                    className={styles.bannerImg}
                  />
                </div>
                <ReactMarkdown className={styles.md}>
                  {response?.details[reportSection]?.overview}
                </ReactMarkdown>
              </section>

              <section className={styles.questions} ref={questionsRef}>
                <ReactMarkdown className={styles.md}>
                  {response?.details[reportSection]?.plan}
                </ReactMarkdown>
              </section>
              {reportSection === "mvp" && (
                <section className={styles.questions} ref={askQuestionsRef}>
                  <ReactMarkdown className={styles.md}>
                    {response?.details[reportSection]?.plan2}
                  </ReactMarkdown>
                </section>
              )}
            </div>
            <aside className={styles.tools}>
              <ToolPaginator prompts={tools} />
            </aside>
          </main>
        </div>
      )}

      <GradientBg opacity={15} />
    </div>
  );
};

export default PromptSectionDetail;
