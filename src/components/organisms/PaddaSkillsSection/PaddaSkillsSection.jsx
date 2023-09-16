import React from "react";
import styles from "./paddaSkillsSection.module.css";
import paddaImg from "../../../assets/robot.svg";
import Avatar from "../../../components/atoms/Avatar/Avatar";
import Text from "../../../components/atoms/Text/Text";
import skillImg from "../../../assets/imgCosts.svg";
import Mark from "../../../components/atoms/Mark/Mark";

const PaddaSkillsSection = () => {
  const handleShineEffect = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <div className={styles.paddaSkillsSection}>
      <header className={styles.header}>
        <Avatar size={{ w: "80px", h: "80px" }} src={paddaImg} alt="padda" />
        <Text bold size={"1.5rem"}>
          Padda
        </Text>
        <Text>
          Padda is a business-trained AI, whose mission is to<br></br> find the{" "}
          <Mark>optimal tools</Mark> to execute any business idea.
        </Text>
      </header>
      <main>
        <Text bold>How to use Padda:</Text>
        <Text>1. Select your business settings</Text>
        <Text>
          2. Let Padda cook for <Mark>≈10 minutes</Mark>. Do not close<br></br>{" "}
          your tab 2.
        </Text>
        <Text>
          3. Enjoy an <Mark>actionable</Mark> business plan.
        </Text>
      </main>
    </div>
  );
};

export default PaddaSkillsSection;
