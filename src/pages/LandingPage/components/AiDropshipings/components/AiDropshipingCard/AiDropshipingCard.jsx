import React from "react";
import styles from "./aiDropshipingCard.module.css";
import Text from "../../../../../../components/atoms/Text/Text";
import Icon from "../../../../../../components/atoms/Icon/Icon";
import Link from "../../../.././../../components/atoms/Link/Link";
import usePromptDetail from "../../../../../../states/prompDetail";
import { useNavigate } from "react-router-dom";
import { MY_PROMPTS_DETAIL } from "../../../../../../utils/constants/routes";

const AiDropshipingCard = ({
  show,
  index,
  to,
  budget = "1000",
  location = "Argetina",
  skills = "Programador",
  age = "20",
  teacher = "Bill Gates",
  details = "",
  id,
  ...otherProps
}) => {
  const setPromptDetail = usePromptDetail((state) => state.setPromptDetail);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(details);
    setPromptDetail({
      ...details,
      input: { age, teacher, skills, budget, location },
    });
    navigate(MY_PROMPTS_DETAIL + `/${id}`);
  };
  return (
    <div
      className={`${styles.containerShadow} ${show && styles.shadow}`}
      style={
        show
          ? {
              transform: "scale(125%)",
              position: "relative",
              bottom: "8px",
            }
          : {}
      }
    >
      <div className={`${styles.card} ${show && styles.show}`} {...otherProps}>
        <section className={`${styles.title} ${show && styles.showDetails}`}>
          <div className={styles.icon}>
            <Icon type={"aiHead"} />
          </div>
          <Text>AI Dropshipping</Text>
        </section>
        <section className={`${styles.details} ${show && styles.showDetails}`}>
          <Text>
            {skills}, {age} años, presupuesto de ${budget}...
          </Text>
          {to && (
            <Link to={to} className={styles.link}>
              <Text>Ver plan {"------->"}</Text>
            </Link>
          )}
          {!to && (
            <button onClick={handleClick} className={styles.link}>
              <Text>Ver plan {"------->"}</Text>
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default AiDropshipingCard;
