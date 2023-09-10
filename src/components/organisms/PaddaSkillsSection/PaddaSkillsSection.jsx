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
          Hello Human! I will generate a <Mark>tool-based </Mark>plan for you.
        </Text>
      </header>
      <main>
        <Text bold>Padda skills</Text>
        <section className={styles.skills}>
          <div className={styles.skill} onMouseMove={handleShineEffect}>
            <img src={skillImg} alt="skills" className={styles.imgSkill} />
            <Text>Psychology</Text>
          </div>
          <div className={styles.skill} onMouseMove={handleShineEffect}>
            <img src={skillImg} alt="skills" className={styles.imgSkill} />
            <Text>Psychology</Text>
          </div>
          <div className={styles.skill} onMouseMove={handleShineEffect}>
            <img src={skillImg} alt="skills" className={styles.imgSkill} />
            <Text>Design</Text>
          </div>
          <div className={styles.skill} onMouseMove={handleShineEffect}>
            <img src={skillImg} alt="skills" className={styles.imgSkill} />
            <Text>Social Media</Text>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaddaSkillsSection;
