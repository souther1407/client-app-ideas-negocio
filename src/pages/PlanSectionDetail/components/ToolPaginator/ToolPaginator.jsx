import React, { useEffect, useState } from "react";
import styles from "./toolPaginator.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Link from "../../../../components/atoms/Link/Link";
import ReactMarkdown from "react-markdown";
import HoverEffect from "../../../../components/atoms/HoverEffect/HoverEffect";
import Text from "../../../../components/atoms/Text/Text";
import ImgLinkBtn from "../../../../components/molecules/ImgLinkBtn/ImgLinkBtn";
import imgBanner from "../../../../assets/MPV_Banner.svg";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
// imgs links y tutoriales
import alibabaTutorialImg from "../../../../assets/Alibaba Tutorial.svg";
import canvaLinkImg from "../../../../assets/Canva Link.svg";
import canvaTutorialImg from "../../../../assets/Canva Tutorial.svg";
import capcutLinkImg from "../../../../assets/Capcut Tutorial.svg";
import capcutTutorialImg from "../../../../assets/Capcut Link.svg";
import chatgptLinkImg from "../../../../assets/ChatGPT Link.svg";
import chatgptTutorialImg from "../../../../assets/ChatGPT Tutorial.svg";
import facebookadsLinkImg from "../../../../assets/Facebook Ads Link.svg";
import facebookadsTutorialImg from "../../../../assets/Facebook Ads Tutorial.svg";
import figmaLinkImg from "../../../../assets/Figma Link.svg";
import figmaTutorialImg from "../../../../assets/Figma Tutorial.svg";
import googleanalyticsLinkImg from "../../../../assets/Google Analytics Link.svg";
import googleanalyticsTutorialImg from "../../../../assets/Google Analytics Tutorial.svg";
import hootsuiteLinkImg from "../../../../assets/Hootsuite Link.svg";
import hootsuiteTutorialImg from "../../../../assets/Hootsuite Tutorial.svg";
import hostingerLinkImg from "../../../../assets/Hostinger Link.svg";
import hostingerTutorialImg from "../../../../assets/Hostinger Tutorial.svg";
import mailerliteLinkImg from "../../../../assets/MailerLite Link.svg";
import mailerliteTutorialImg from "../../../../assets/MailerLite Tutorial.svg";
import midjourneyLinkImg from "../../../../assets/Midjourney Link.svg";
import midjourneyTutorialImg from "../../../../assets/Midjourney Tutorial.svg";
import notionLinkImg from "../../../../assets/Notion Link.svg";
import notionTutorialImg from "../../../../assets/Notion  Tutorial.svg";
import semrushLinkImg from "../../../../assets/SemRush Link.svg";
import semrushTutorialImg from "../../../../assets/SemRush Tutorial.svg";
import shopifyLinkImg from "../../../../assets/Shopify Link.svg";
import shopifyTutorialImg from "../../../../assets/Shopify Tutorial.svg";
import stripeLinkImg from "../../../../assets/Stripe Link.svg";
import stripeTutorialImg from "../../../../assets/Stripe Tutorial.svg";
import surveymonkeyTutorialImg from "../../../../assets/SurveyMonkey Tutorial.svg";
import webflowLinkImg from "../../../../assets/Webflow Link.svg";
import webflowTutorialImg from "../../../../assets/Webflow Tutorial.svg";
import wordpressLinkImg from "../../../../assets/Wordpress Link.svg";
import wordpressTutorialImg from "../../../../assets/Wordpress Tutorial.svg";
import zapierLinkImg from "../../../../assets/Zapier Link.svg";
import zoomLinkImg from "../../../../assets/Zoom Link.svg";
import zoomTutorialImg from "../../../../assets/Zoom Tutorial.svg";
import statistaLinkImg from "../../../../assets/Statista Link.svg";
import statistaTutorialImg from "../../../../assets/Statista Tutorial.svg";
import producthuntLinkImg from "../../../../assets/Product Hunt Link.svg";
import producthuntTutorialImg from "../../../../assets/Product Hunt Tutorial.svg";
import tlvdLinkImg from "../../../../assets/TLDV  Link.svg";
import tldvTutorialImg from "../../../../assets/TLDV  Tutorial.svg";
import startupschoolLinkImg from "../../../../assets/Startup School Link.svg";
import startupschoolTutorialImg from "../../../../assets/Startup School Tutorial.svg";
import indiehackersLinkImg from "../../../../assets/Indie Hackers Link.svg";
import indiehackersTutorialImg from "../../../../assets/Indie Hackers Tutorial.svg";
import huggingfaceLinkImg from "../../../../assets/HuggingFace Link.svg";
import huggingfaceTutorialImg from "../../../../assets/HuggingFace Tutorial.svg";
import optimizelyLinkImg from "../../../../assets/Optimizely Link.svg";
import optimizelyTutorialImg from "../../../../assets/Optimizely Tutorial.svg";
import excelLinkImg from "../../../../assets/Excel Link.svg";
import excelTutorialImg from "../../../../assets/Excel Tutorial.svg";
import junglescoutLinkImg from "../../../../assets/JungleScout Link.svg";
import junglescoutTutorialImg from "../../../../assets/JungleScout Tutorial.svg";
import amazonLinkImg from "../../../../assets/Amazon Link.svg";
import amazonTutorialImg from "../../../../assets/Amazon Tutorial.svg";
import { toolsIcons } from "../../../../utils/constants/toolsIcons";

const imgLinks = {
  Alibaba: {
    link: alibabaTutorialImg,
    tutorial: alibabaTutorialImg,
    cost: "Free",
  },
  Canva: {
    link: canvaLinkImg,
    tutorial: canvaTutorialImg,
    cost: "Freemium",
  },
  Capcut: {
    link: capcutLinkImg,
    tutorial: capcutTutorialImg,
    cost: "Freemium",
  },
  ChatGPT: {
    link: chatgptLinkImg,
    tutorial: chatgptTutorialImg,
    cost: "Freemium",
  },
  "Facebook Ads": {
    link: facebookadsLinkImg,
    tutorial: facebookadsTutorialImg,
    cost: "Pay-as-you-go",
  },
  Figma: {
    link: figmaLinkImg,
    tutorial: figmaTutorialImg,
    cost: "Freemium",
  },
  "Google Analytics": {
    link: googleanalyticsLinkImg,
    tutorial: googleanalyticsTutorialImg,
    cost: "Freemium",
  },
  Hootsuite: {
    link: hootsuiteLinkImg,
    tutorial: hootsuiteTutorialImg,
    cost: "Freemium",
  },
  Hostinger: {
    link: hostingerLinkImg,
    tutorial: hostingerTutorialImg,
    hostinger: "$1.99+",
  },
  MailerLite: {
    link: mailerliteLinkImg,
    tutorial: mailerliteTutorialImg,
    cost: "Freemium",
  },
  Midjourney: {
    link: midjourneyLinkImg,
    tutorial: midjourneyTutorialImg,
    cost: "$10+",
  },
  Notion: {
    link: notionLinkImg,
    tutorial: notionTutorialImg,
    cost: "Freemium",
  },
  Semrush: {
    link: semrushLinkImg,
    tutorial: semrushTutorialImg,
    cost: "Freemium",
  },
  Shopify: {
    link: shopifyLinkImg,
    tutorial: shopifyTutorialImg,
    cost: "$25+",
  },
  Stripe: {
    link: stripeLinkImg,
    tutorial: stripeTutorialImg,
    cost: "Pay-as-you-go",
  },
  SurveyMonkey: {
    link: surveymonkeyTutorialImg,
    tutorial: surveymonkeyTutorialImg,
    cost: "Freemium",
  },
  Webflow: {
    link: webflowLinkImg,
    tutorial: webflowTutorialImg,
    cost: "Freemium",
  },
  WordPress: {
    link: wordpressLinkImg,
    tutorial: wordpressTutorialImg,
    cost: "Freemium",
  },
  Zapier: {
    link: zapierLinkImg,
    tutorial: zapierLinkImg,
    cost: "Freemium",
  },
  Zoom: {
    link: zoomLinkImg,
    tutorial: zoomTutorialImg,
    cost: "Freemium",
  },
  Statista: {
    link: statistaLinkImg,
    tutorial: statistaTutorialImg,
    cost: "Freemium",
  },
  ProductHunt: {
    link: producthuntLinkImg,
    tutorial: producthuntTutorialImg,
    cost: "Free",
  },
  tldv: {
    link: tlvdLinkImg,
    tutorial: tldvTutorialImg,
    cost: "Freemium",
  },
  Startupschool: {
    link: startupschoolLinkImg,
    tutorial: startupschoolTutorialImg,
    cost: "Free",
  },
  Indiehackers: {
    link: indiehackersLinkImg,
    tutorial: indiehackersTutorialImg,
    cost: "Free",
  },
  HuggingFace: {
    link: huggingfaceLinkImg,
    tutorial: huggingfaceTutorialImg,
    cost: "Free",
  },
  Optimizely: {
    link: optimizelyLinkImg,
    tutorial: optimizelyTutorialImg,
    cost: "Flexible",
  },
  Excel: {
    link: excelLinkImg,
    tutorial: excelTutorialImg,
    cost: "Free",
  },
  "Jungle Scout": {
    link: junglescoutLinkImg,
    tutorial: junglescoutTutorialImg,
    cost: "$29+",
  },
  Amazon: {
    link: amazonLinkImg,
    tutorial: amazonTutorialImg,
    cost: "Free",
  },
};

const ToolDropdown = ({ prompt }) => {
  const [desplegado, setDesplegado] = useState(false);
  const handleCloseMenu = (e) => {
    setDesplegado(false);
  };
  return (
    <div key={prompt.toolName} className={styles.tool}>
      <HoverEffect disabled={desplegado}>
        <header className={styles.header} onClick={() => setDesplegado(true)}>
          <div className={styles.headerDetails}>
            <img
              className={styles.iconTool}
              src={toolsIcons[prompt?.toolName]}
            />
            <div className={styles.title}>
              <Text bold>{prompt?.toolName}</Text>
              <Text size={"1rem"} color="soft">
                {imgLinks[prompt.toolName]?.cost}
              </Text>
            </div>
          </div>
          <div className={styles.iconDropDown}>
            {desplegado && (
              <Link extern to={prompt.tutorial} target="_blank">
                <HoverEffect>
                  <IconButton size={"2rem"} icon={"youtube"} />
                </HoverEffect>
              </Link>
            )}
            {!desplegado && <IconButton icon={"upDownArrows"} />}
          </div>
        </header>
      </HoverEffect>
      {desplegado && (
        <section className={styles.menu}>
          <Text color="soft">{prompt?.description}</Text>
          <ImgLinkBtn
            extern
            src={imgLinks[prompt.toolName]?.link}
            to={prompt.url}
          />
          <HoverEffect>
            <div
              className={styles.showLessBtn}
              onClick={() => setDesplegado(false)}
            >
              <Text>Show less</Text>
              <IconButton icon={"arrowUp"} />
            </div>
          </HoverEffect>
        </section>
      )}
    </div>
  );
};

const ToolPaginator = ({ prompts, currentTool = 0, onChangeTool }) => {
  console.log(prompts);
  return (
    <div className={styles.paginator}>
      <Text bold type="subtitle">
        Used tools in this plan
      </Text>
      <div className={styles.tools}>
        {prompts.map((p) => (
          <ToolDropdown prompt={p} />
        ))}
      </div>
    </div>
  );
};

export default ToolPaginator;
