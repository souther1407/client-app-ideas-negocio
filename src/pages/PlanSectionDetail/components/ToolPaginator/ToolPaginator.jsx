import React, { useState } from "react";
import styles from "./toolPaginator.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Link from "../../../../components/atoms/Link/Link";
import ReactMarkdown from "react-markdown";
import EffectButton from "../../../../components/atoms/EffectButton/EffectButton";
import Text from "../../../../components/atoms/Text/Text";
import ImgLinkBtn from "../../../../components/molecules/ImgLinkBtn/ImgLinkBtn";
import imgBanner from "../../../../assets/MPV_Banner.svg";
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
  HootSuite: {
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
};
const ToolPaginator = ({ prompts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleChangePage = (newPage) => {
    if (newPage >= 0 && newPage < prompts.length) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className={styles.paginator}>
      <div className={styles.paginatorBtns}>
        <Button
          key={"ant"}
          type="bordered"
          style={{ borderRadius: "0", height: "auto", width: "auto" }}
          onClick={() => handleChangePage(currentPage - 1)}
        >
          <Text>{"<"}</Text>
        </Button>
        <Button
          key={"next"}
          type="bordered"
          style={{ borderRadius: "0", height: "auto", width: "auto" }}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <Text>{">"}</Text>
        </Button>
        {prompts.map((e, index) => (
          <Button
            key={index}
            type="bordered"
            style={{ borderRadius: "0", height: "auto", width: "auto" }}
            onClick={() => handleChangePage(index)}
          >
            <Text>{index + 1}</Text>
          </Button>
        ))}
      </div>
      <>
        <div className={styles.title}>
          <Text type="subtitle" bold>
            {prompts[currentPage].toolName}
          </Text>
          <div className={styles.toolCost}>
            <Text bold>{imgLinks[prompts[currentPage].toolName]?.cost}</Text>
          </div>
        </div>
        <ReactMarkdown className={styles.md}>
          {prompts[currentPage].description}
        </ReactMarkdown>
        <div className={styles.btns}>
          <ImgLinkBtn
            extern
            src={imgLinks[prompts[currentPage].toolName]?.link ?? imgBanner}
            to={prompts[currentPage].url}
            size={{ w: "100%", h: "120px" }}
          />
          <ImgLinkBtn
            extern
            src={imgLinks[prompts[currentPage].toolName]?.tutorial ?? imgBanner}
            to={prompts[currentPage].tutorial}
            size={{ w: "100%", h: "120px" }}
          />
        </div>
      </>
    </div>
  );
};

export default ToolPaginator;
