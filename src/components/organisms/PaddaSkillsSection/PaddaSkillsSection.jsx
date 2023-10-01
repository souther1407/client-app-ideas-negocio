import React from "react";
import styles from "./paddaSkillsSection.module.css";
import paddaImg from "../../../assets/robot.svg";
import Avatar from "../../../components/atoms/Avatar/Avatar";
import Text from "../../../components/atoms/Text/Text";
import Mark from "../../../components/atoms/Mark/Mark";
import MoreInfo from "../../molecules/MoreInfo/MoreInfo";
import Icon from "../../atoms/Icon/Icon";
const PaddaSkillsSection = () => {
  return (
    <div className={styles.paddaSkillsSection}>
      <header className={styles.header}>
        <Avatar size={{ w: "3rem", h: "3rem" }} src={paddaImg} />
        <Text bold type="subtitle">
          Padda
        </Text>
        <MoreInfo message={"Padda"}>
          <Icon size={"1rem"} type={"info"} color="var(--white-transparent)" />
        </MoreInfo>
      </header>
      <main>
        <Text bold>Steps:</Text>
        <Text>
          1.Introduce your <Mark>million-dollars</Mark> idea.
        </Text>
        <Text>
          2.Let Padda process your idea for <Mark>≈3 minutes</Mark>.
        </Text>
        <Text>
          3.Enjoy an <Mark>actionable</Mark> business plan.
        </Text>
      </main>
    </div>
  );
};

export default PaddaSkillsSection;
