import React, { useState } from "react";
import styles from "./toolPaginator.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Link from "../../../../components/atoms/Link/Link";
import ReactMarkdown from "react-markdown";
import EffectButton from "../../../../components/atoms/EffectButton/EffectButton";
import Text from "../../../../components/atoms/Text/Text";
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
          <Link extern to={prompts[currentPage].url} target={"_blank"}>
            <EffectButton text={"link"} icon={"link"} />
          </Link>
          <Link extern to={prompts[currentPage].tutorial} target={"_blank"}>
            <EffectButton text={"tutorial"} icon={"youtube"} />
          </Link>
        </div>
      </>
    </div>
  );
};

export default ToolPaginator;
