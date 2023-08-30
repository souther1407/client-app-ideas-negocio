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
  },
  Capcut: {
    link: capcutLinkImg,
    tutorial: capcutTutorialImg,
  },
  ChatGPT: {
    link: chatgptLinkImg,
    tutorial: chatgptTutorialImg,
  },
  "Facebook Ads": {
    link: facebookadsLinkImg,
    tutorial: facebookadsTutorialImg,
  },
  Figma: {
    link: figmaLinkImg,
    tutorial: figmaTutorialImg,
  },
  "Google Analytics": {
    link: googleanalyticsLinkImg,
    tutorial: googleanalyticsTutorialImg,
  },
  HootSuite: {
    link: hootsuiteLinkImg,
    tutorial: hootsuiteTutorialImg,
  },
  Hostinger: {
    link: hostingerLinkImg,
    tutorial: hostingerTutorialImg,
  },
  MailerLite: {
    link: mailerliteLinkImg,
    tutorial: mailerliteTutorialImg,
  },
  Notion: {
    link: notionLinkImg,
    tutorial: notionTutorialImg,
  },
  Semrush: {
    link: semrushLinkImg,
    tutorial: semrushTutorialImg,
  },
  Shopify: {
    link: shopifyLinkImg,
    tutorial: shopifyTutorialImg,
  },
  Stripe: {
    link: stripeLinkImg,
    tutorial: stripeTutorialImg,
  },
  SurveyMonkey: {
    link: surveymonkeyTutorialImg,
    tutorial: surveymonkeyTutorialImg,
  },
  Webflow: {
    link: webflowLinkImg,
    tutorial: webflowTutorialImg,
  },
  WordPress: {
    link: wordpressLinkImg,
    tutorial: wordpressTutorialImg,
  },
  Zapier: {
    link: zapierLinkImg,
    tutorial: zapierLinkImg,
  },
  Zoom: {
    link: zoomLinkImg,
    tutorial: zoomTutorialImg,
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
        <Text type="subtitle" bold>
          {prompts[currentPage].toolName}
        </Text>
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
