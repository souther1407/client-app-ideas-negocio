import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./planSectionDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate, useParams } from "react-router-dom";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Avatar from "../../components/atoms/Avatar/Avatar";
import MVPImage from "../../assets/MPV_Banner.svg";
import MarketingImage from "../../assets/Marketing.svg";
import TargetcustomerImage from "../../assets/Figures Paddawan.gif";
import RobotImg from "../../assets/Padda Image.svg";
import Logo from "../../components/atoms/Logo/Logo";
import { DASHBOARD_IDEAS } from "../../utils/constants/routes";
import ReactMarkdown from "react-markdown";
import ToolPaginator from "./components/ToolPaginator/ToolPaginator";
import { useReportUrl } from "../../states/reportUrl";
import { getById } from "../../services/userPrompts/getPrompts";
import { addShare, addView } from "../../services/userPrompts/userPromts";
import HoverEffect from "../../components/atoms/HoverEffect/HoverEffect";
import { toolsIcons } from "../../utils/constants/toolsIcons";
import createProductImg from "../../assets/crear seccion icono1.svg";
import createMarketingPlanImg from "../../assets/crear seccion icono 2.svg";
import { generateReportSection } from "../../services/userPrompts/generateReportSection";
import MoreInfo from "../../components/molecules/MoreInfo/MoreInfo";
import Icon from "../../components/atoms/Icon/Icon";
import { formatStringToShort } from "../../utils/format/formatStringToShort";
import customerPlanImg from "../../assets/customerPlan.svg";
import customerDecidesImg from "../../assets/customerDecides.svg";
const banners = {
  targetCustomer: {
    overview: TargetcustomerImage,
    plan: customerPlanImg,
    decides: customerDecidesImg,
  },
  mvp: {
    overview: MVPImage,
    plan: "",
  },
  marketingPlan: {
    overview: MarketingImage,
    plan: "",
  },
};
const createSectionBtnData = {
  mvp: {
    title: "Generate Product Strategy",
    img: createProductImg,
  },
  marketingPlan: {
    title: "Generate Marketing Plan",
    img: createMarketingPlanImg,
  },
};
const PromptSectionDetail = () => {
  const { id, user } = useParams();
  const navigate = useNavigate();
  const url = useReportUrl((state) => state.url);
  const [reportSection, setReportSection] = useState("targetCustomer");

  const [reportSectionCollapsables, setReportSectionCollapsables] = useState({
    targetCustomer: {
      overview: false,
      plan: false,
      decides: false,
    },
    mvp: {
      overview: false,
      plan: false,
      plan2: false,
    },
    marketingPlan: {
      overview: false,
      plan: false,
    },
  });

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentTool, setCurrentTool] = useState(0);
  const [titles, setTitles] = useState({
    targetCustomer: {
      overview: "",
      plan: "",
    },
    mvp: {
      overview: "",
      plan: "",
      plan2: "",
    },
    marketingPlan: {
      overview: "",
      plan: "",
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const prompt = await getById(id, user);
        const newView = prompt.views ?? 0;
        await addView({
          reportId: id,
          userId: user,
          views: newView + 1,
        });
        setResponse({ ...prompt, views: newView + 1 });
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    })();
    /*   getById(id, user)
      .then((prompt) => {
        if (!isLogged() && !prompt.isPublic) {
          return navigate(LANDING_PAGE);
        }
        setResponse(prompt);
        addView({
          reportId: id,
          userId: user,
          views: prompt?.views ? prompt.views + 1 : 1,
        })
          .then((_) => {
            setResponse((prev) => ({
              ...prev,
              views: prompt?.views ? prompt.views + 1 : 1,
            }));
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false)); */
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

  const handleAddShare = () => {
    const newShare = response.shares ?? 0;
    addShare({ reportId: id, userId: user, shares: newShare + 1 });
  };
  const handleChangeSection = (section) => {
    setReportSection(section);
    setCurrentSection("detail");
    mainRef.current.scrollTop = 0;
  };
  useEffect(() => {
    changeSection();
  }, [scrollPos]);

  const tools = useMemo(() => {
    if (response.details && response.details[reportSection]) {
      const toolsList = response.details[reportSection]?.toolsList
        .trim()
        .split("\n\n");
      return toolsList.map((t) => JSON.parse(t));
    } else {
      return {};
    }
  }, [reportSection, response]);

  useEffect(() => {
    const getTitlesSection = (section) => {
      const regex = /^#[a-zA-Z\s\{\}\(\):,.';-]*\n{1,2}/g;
      const resultOverview = response?.details[section]?.overview?.match(regex);
      const resultPlan = response?.details[section]?.plan?.match(regex);
      return {
        overview: resultOverview ? resultOverview[0] : "",
        plan: resultPlan ? resultPlan[0] : "",
      };
    };
    if (response.details) {
      let loadedTitles = { ...titles };
      for (let section in loadedTitles) {
        if (!response.details[section]) continue;
        const titles = getTitlesSection(section);
        response.details[section].overview = response?.details[
          section
        ]?.overview?.replace(titles.overview, "");
        response.details[section].plan = response?.details[
          section
        ]?.plan?.replace(titles.plan, "");
        loadedTitles[section] = titles;
      }
      setTitles(loadedTitles);
    }
  }, [response]);

  const handleGenerateReportSection = async () => {
    try {
      setLoading(true);
      const updateResponse = await generateReportSection({
        reportId: id,
        userId: user,
        sectionName: reportSection,
        description: response.details.description,
        title: response.details.title,
        input: response.input,
      });
      setResponse(updateResponse);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSeeMoreClick = (section) => {
    setReportSectionCollapsables((prev) => ({
      ...prev,
      [reportSection]: { ...prev[reportSection], [section]: true },
    }));
  };
  return (
    <div className={styles.promptSectionDetail}>
      {!loading && (
        <div className={styles.content}>
          <nav
            className={`${styles.navigation} ${
              (scrollPos.scrolledDown || scrollPos.pos > 200) &&
              styles.scrolledDown
            }`}
          >
            <section className={styles.navigationReport}>
              <div className={styles.logo}>
                <Logo />
              </div>

              <section className={`${styles.options} ${styles.topOptions}`}>
                <HoverEffect>
                  <div
                    className={`${styles.hoverBg} ${
                      reportSection === "targetCustomer" && styles.showBg
                    }`}
                  >
                    <Text
                      bold
                      color={reportSection !== "targetCustomer" ? "soft" : ""}
                      onClick={() => handleChangeSection("targetCustomer")}
                    >
                      Customer
                    </Text>
                  </div>
                </HoverEffect>
                <HoverEffect>
                  <div
                    className={`${styles.hoverBg} ${
                      reportSection === "mvp" && styles.showBg
                    }`}
                  >
                    <Text
                      bold
                      color={reportSection !== "mvp" ? "soft" : ""}
                      onClick={() => handleChangeSection("mvp")}
                    >
                      Product
                    </Text>
                  </div>
                </HoverEffect>
                <HoverEffect>
                  <div
                    className={`${styles.hoverBg} ${
                      reportSection === "marketingPlan" && styles.showBg
                    }`}
                  >
                    <Text
                      bold
                      color={reportSection !== "marketingPlan" ? "soft" : ""}
                      onClick={() => handleChangeSection("marketingPlan")}
                    >
                      Marketing
                    </Text>
                  </div>
                </HoverEffect>
              </section>
              <section className={styles.close}>
                <HoverEffect>
                  <IconButton
                    icon={"close"}
                    onClick={() => navigate(DASHBOARD_IDEAS)}
                  />
                </HoverEffect>
              </section>
            </section>
            <section className={`${styles.navigationReport} ${styles.submenu}`}>
              <section className={styles.options}>
                <div
                  className={styles.planSectionName}
                  ref={menuTitleRef}
                  onClick={() =>
                    detailRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <HoverEffect>
                    <div
                      className={`${styles.hoverBg} ${
                        currentSection === "detail" && styles.showBg
                      }`}
                    >
                      <Text
                        bold
                        color={currentSection !== "detail" ? "soft" : ""}
                      >
                        {"Overview"}
                      </Text>
                    </div>
                  </HoverEffect>
                </div>

                <div
                  ref={menuAskRef}
                  onClick={() =>
                    questionsRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <HoverEffect>
                    <div
                      className={`${styles.hoverBg} ${
                        currentSection === "questions" && styles.showBg
                      }`}
                    >
                      <Text
                        bold
                        color={currentSection !== "questions" ? "soft" : ""}
                      >
                        Plan
                      </Text>
                    </div>
                  </HoverEffect>
                </div>
                {reportSection === "targetCustomer" && (
                  <div
                    ref={menuQuestionRef}
                    onClick={() =>
                      askQuestionsRef.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <HoverEffect>
                      <div
                        className={`${styles.hoverBg} ${
                          currentSection === "ask" && styles.showBg
                        }`}
                      >
                        <Text
                          bold
                          color={currentSection !== "ask" ? "soft" : ""}
                        >
                          Decides
                        </Text>
                      </div>
                    </HoverEffect>
                  </div>
                )}
                {reportSection === "mvp" && (
                  <div
                    ref={menuQuestionRef}
                    onClick={() =>
                      askQuestionsRef.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <HoverEffect>
                      <div
                        className={`${styles.hoverBg} ${
                          currentSection === "ask" && styles.showBg
                        }`}
                      >
                        <Text
                          bold
                          color={currentSection !== "ask" ? "soft" : ""}
                        >
                          Plan 2
                        </Text>
                      </div>
                    </HoverEffect>
                  </div>
                )}
              </section>
            </section>
          </nav>

          {response.details[reportSection] ? (
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
                  <Avatar
                    size={{ w: "80px", h: "80px" }}
                    src={RobotImg}
                    alt="robot-padda"
                  />
                  <Text type="subtitle" bold>
                    Padda
                  </Text>
                  <div className={styles.infoBtn}>
                    <MoreInfo message={"IA Marketing Expert"}>
                      <Icon size={"16px"} type={"info"} />
                    </MoreInfo>
                  </div>
                </section>
                <section className={styles.stats}>
                  <div className={styles.stat}>
                    <Text color="soft" bold>
                      Impressions
                    </Text>
                    <Text bold>{response.views}</Text>
                  </div>
                  <div className={styles.stat}>
                    <Text bold color="soft">
                      Shares
                    </Text>
                    <Text bold>{response.shares ?? 0}</Text>
                  </div>
                </section>
                <section className={styles.shareLinks}>
                  <HoverEffect>
                    <div className={styles.iconBg}>
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
                          handleAddShare();
                        }}
                      />
                    </div>
                  </HoverEffect>
                  <HoverEffect>
                    <div className={styles.iconBg}>
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
                          handleAddShare();
                        }}
                      />
                    </div>
                  </HoverEffect>

                  <HoverEffect>
                    <div className={styles.iconBg}>
                      <IconButton
                        icon={"clip"}
                        color={"#BDBDBD"}
                        size="24px"
                        onClick={async () => {
                          await window.navigator.clipboard.writeText(url);
                          alert("copied!");
                          handleAddShare();
                        }}
                      />
                    </div>
                  </HoverEffect>
                </section>
              </div>

              <div className={styles.details}>
                <section className={styles.detail} ref={detailRef}>
                  <ReactMarkdown className={styles.md}>
                    {titles[reportSection].overview}
                  </ReactMarkdown>

                  <ReactMarkdown
                    className={styles.md}
                    components={{
                      strong(props) {
                        return (
                          <span
                            className={styles.seeMore}
                            onClick={() => handleSeeMoreClick("overview")}
                          >
                            ...{props.children}
                          </span>
                        );
                      },
                    }}
                  >
                    {!reportSectionCollapsables[reportSection].overview
                      ? `${formatStringToShort(
                          response?.details[reportSection]?.overview,
                          120
                        )}\n**See more**`
                      : response?.details[reportSection]?.overview}
                  </ReactMarkdown>
                  <img
                    src={banners[reportSection].overview}
                    className={styles.bannerImg}
                  />
                </section>

                <section className={styles.questions} ref={questionsRef}>
                  <ReactMarkdown className={styles.md}>
                    {titles[reportSection].plan}
                  </ReactMarkdown>

                  <ReactMarkdown
                    className={styles.md}
                    components={{
                      strong(props) {
                        return (
                          <span
                            className={styles.seeMore}
                            onClick={() => handleSeeMoreClick("plan")}
                          >
                            ...{props.children}
                          </span>
                        );
                      },
                    }}
                  >
                    {!reportSectionCollapsables[reportSection].plan
                      ? `${formatStringToShort(
                          response?.details[reportSection]?.plan,
                          120
                        )}\n**See more**`
                      : response?.details[reportSection]?.plan}
                  </ReactMarkdown>
                  {banners[reportSection].plan && (
                    <img
                      src={banners[reportSection].plan}
                      className={styles.bannerImg}
                    />
                  )}
                </section>
                {reportSection === "targetCustomer" && (
                  <section className={styles.questions} ref={askQuestionsRef}>
                    <ReactMarkdown
                      className={styles.md}
                      components={{
                        strong(props) {
                          return (
                            <span
                              className={styles.seeMore}
                              onClick={() => handleSeeMoreClick("decides")}
                            >
                              ...{props.children}
                            </span>
                          );
                        },
                      }}
                    >
                      {!reportSectionCollapsables[reportSection]?.decides
                        ? `${formatStringToShort(
                            response?.details[reportSection]?.humanDecides ??
                              response?.details[reportSection]?.aiDecides,
                            160
                          )}\n**See more**`
                        : response?.details[reportSection]?.humanDecides ??
                          response?.details[reportSection]?.aiDecides}
                    </ReactMarkdown>
                    <img
                      src={banners[reportSection].decides}
                      className={styles.bannerImg}
                    />
                  </section>
                )}
                {reportSection === "mvp" && (
                  <section className={styles.questions} ref={askQuestionsRef}>
                    <ReactMarkdown
                      className={styles.md}
                      components={{
                        strong(props) {
                          return (
                            <span
                              className={styles.seeMore}
                              onClick={() => handleSeeMoreClick("plan2")}
                            >
                              ...{props.children}
                            </span>
                          );
                        },
                      }}
                    >
                      {!reportSectionCollapsables[reportSection].plan2
                        ? `${formatStringToShort(
                            response?.details[reportSection]?.plan2,
                            160
                          )}\n**See more**`
                        : response?.details[reportSection]?.plan2}
                    </ReactMarkdown>
                  </section>
                )}
              </div>
              <aside className={styles.tools}>
                <ToolPaginator
                  prompts={tools}
                  currentTool={currentTool}
                  onChangeTool={(newTool) => setCurrentTool(newTool)}
                />
              </aside>
            </main>
          ) : (
            <main className={styles.generateSectionContainer}>
              <div
                className={styles.createSectionBtn}
                onClick={handleGenerateReportSection}
              >
                <Text bold type="subtitle">
                  {createSectionBtnData[reportSection].title}
                </Text>
                <img
                  className={styles.createSectionImg}
                  src={createSectionBtnData[reportSection].img}
                />
              </div>
            </main>
          )}
        </div>
      )}
      {loading && (
        <div className={styles.loadingScreen}>
          <Text>Please wait...</Text>
        </div>
      )}
      <GradientBg opacity={15} />
    </div>
  );
};

export default PromptSectionDetail;
