import React, { useState } from "react";
import styles from "./toolPaginator.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Link from "../../../../components/atoms/Link/Link";
import ReactMarkdown from "react-markdown";
import EffectButton from "../../../../components/atoms/EffectButton/EffectButton";
import Text from "../../../../components/atoms/Text/Text";
import ImgLinkBtn from "../../../../components/molecules/ImgLinkBtn/ImgLinkBtn";
import imgBanner from "../../../../assets/MPV_Banner.svg";
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
            src={imgBanner}
            to={prompts[currentPage].url}
            size={{ w: "100%", h: "120px" }}
          />
          <ImgLinkBtn
            extern
            src={imgBanner}
            to={prompts[currentPage].tutorial}
            size={{ w: "100%", h: "120px" }}
          />
        </div>
      </>
    </div>
  );
};

export default ToolPaginator;
