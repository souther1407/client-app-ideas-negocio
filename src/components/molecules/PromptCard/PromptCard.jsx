import React from "react";
import Text from "../../atoms/Text/Text";
import Container from "../../atoms/Container/Container";
import Link from "../../atoms/Link/Link";
import styles from "./promptCard.module.css";
import { MY_PROMPTS_DETAIL } from "../../../utils/constants/routes";
import { useNavigate } from "react-router-dom";
import usePromptDetail from "../../../states/prompDetail";
const PromptCard = ({
  budget,
  location,
  skills,
  age,
  teacher,
  details,
  id,
}) => {
  const navigate = useNavigate();
  const setPromptDetail = usePromptDetail((state) => state.setPromptDetail);

  const handleClick = () => {
    setPromptDetail(details);
    navigate(MY_PROMPTS_DETAIL + `/${id}`);
  };
  return (
    <div className={styles.card}>
      <Container>
        <Text>
          {skills}, {age} años, {location}
        </Text>
        <Text onClick={handleClick}>Ver detalle</Text>
      </Container>
    </div>
  );
};

export default PromptCard;
