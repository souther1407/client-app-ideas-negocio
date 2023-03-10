import React, { useState } from "react";
import styles from "./chooseBusiness.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import InfoModal from "../../components/molecules/InfoModal/InfoModal";
import GearCard from "./components/GearCard/GearCard";
import Button from "../../components/atoms/Button/Button";
import Text from "../../components/atoms/Text/Text";
import useBusinessPlan from "../../states/businessPlan";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL } from "../../utils/constants/routes";

const ChooseBusiness = () => {
  const [option, setOption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navitagte = useNavigate();
  const { options, generateBusinessPlan, creating } = useBusinessPlan(
    (state) => state
  );
  const handleClick = async () => {
    try {
      await generateBusinessPlan(options[option]);
      navitagte(PLAN_DETAIL);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.chooseBusiness}>
      <LandingPageNav />
      <section className={styles.options}>
        <GearCard
          title={"opcion 1"}
          onShowDetail={() => {
            setOption(0);
            setIsOpen(true);
          }}
        />
        <GearCard
          title={"opcion 2"}
          onShowDetail={() => {
            setOption(1);
            setIsOpen(true);
          }}
        />
        <GearCard
          title={"opcion 3"}
          onShowDetail={() => {
            setOption(2);
            setIsOpen(true);
          }}
        />
        <GearCard
          title={"opcion 4"}
          onShowDetail={() => {
            setOption(3);
            setIsOpen(true);
          }}
        />
      </section>
      <InfoModal
        title={options[option].title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        renderFooter={() => (
          <Button color="secondary" disabled={creating} onClick={handleClick}>
            <Text>{creating ? "creating..." : "Elegir opcion"}</Text>
          </Button>
        )}
      >
        <section>{options[option].description}</section>
      </InfoModal>
      <GradientBg />
    </div>
  );
};

export default ChooseBusiness;
