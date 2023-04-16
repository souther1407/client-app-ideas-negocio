import React, { useEffect, useState } from "react";
import styles from "./verticalLoginNav.module.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import {
  DASHBOARD_AFFILIATES,
  DASHBOARD_IDEAS,
  DASHBOARD_ASK_QUESTION,
  DASHBOARD_MY_QUESTIONS,
} from "../../../utils/constants/routes";

const VerticalLoginNav = () => {
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setActive(e.currentTarget.id);
  };
  useEffect(() => {
    switch (active) {
      case "ideas":
        navigate(DASHBOARD_IDEAS);
        break;
      case "affiliates":
        navigate(DASHBOARD_AFFILIATES);
        break;
      case "help":
        navigate(DASHBOARD_ASK_QUESTION);
        break;
      case "questions":
        navigate(DASHBOARD_MY_QUESTIONS);
        break;
      default:
        break;
    }
  }, [active]);
  return (
    <nav className={`${styles.verticalLoginNav} ${!expanded && styles.hidden}`}>
      <div className={`${styles.icon} ${styles.arrow}`}>
        <IconButton
          icon={expanded ? "leftArrow" : "rightArrow"}
          onClick={() => setExpanded((prev) => !prev)}
        />
      </div>

      <div
        id="ideas"
        className={`${styles.section} ${active == "ideas" && styles.active}`}
        onClick={handleClick}
      >
        <div className={styles.icon}>
          <Icon type={"bulb"} size={"inherit"} />
        </div>
        <Text bold={active == "ideas"}>Ideas</Text>
      </div>

      {/* <div
        id="affiliates"
        className={`${styles.section} ${
          active == "affiliates" && styles.active
        }`}
        onClick={handleClick}
      >
        <div className={styles.icon}>
          <Icon type={"userplus"} size={"inherit"} />
        </div>
        <Text bold={active == "affiliates"}>Affiliados</Text>
      </div>
 */}
      <div
        id="help"
        className={`${styles.section} ${active == "help" && styles.active}`}
        onClick={handleClick}
      >
        <div className={styles.icon}>
          <Icon type={"help"} size={"inherit"} />
        </div>
        <Text bold={active == "help"}>Consulta</Text>
      </div>

      <div
        id="questions"
        className={`${styles.section} ${
          active == "questions" && styles.active
        }`}
        onClick={handleClick}
      >
        <div className={styles.icon}>
          <Icon type={"checkMark"} size={"inherit"} />
        </div>
        <Text bold={active == "questions"}>Preguntas</Text>
      </div>
    </nav>
  );
};

export default VerticalLoginNav;
