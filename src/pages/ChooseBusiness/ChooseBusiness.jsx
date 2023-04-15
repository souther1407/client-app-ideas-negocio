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
import { useStorage } from "../../hooks/useStorage";
import OptionCard from "./components/OptionCard/OptionCard";
const ChooseBusiness = () => {
  const { load } = useStorage();

  const [option, setOption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navitagte = useNavigate();
  const [input, setInput] = useState(load("input"));
  const { options, generateBusinessPlan, creating } = useBusinessPlan(
    (state) => state
  );
  const handleClick = async () => {
    try {
      await generateBusinessPlan({
        input: input,
        header: options[option],
      });
      navitagte(PLAN_DETAIL);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.chooseBusiness}>
      <LandingPageNav />
      <section className={styles.options}>
        <OptionCard
          title={options[0].title}
          totalCost={input.budget}
          estimatedTime={options[0].estimatedTime}
          estimatedCost={options[0].estimatedCost}
          onShowDetail={() => {
            setOption(0);
            setIsOpen(true);
          }}
        />
        <OptionCard
          title={options[1].title}
          totalCost={input.budget}
          estimatedTime={options[1].estimatedTime}
          estimatedCost={options[1].estimatedCost}
          onShowDetail={() => {
            setOption(1);
            setIsOpen(true);
          }}
        />
        <OptionCard
          title={options[2].title}
          totalCost={input.budget}
          estimatedTime={options[2].estimatedTime}
          estimatedCost={options[2].estimatedCost}
          onShowDetail={() => {
            setOption(2);
            setIsOpen(true);
          }}
        />
        <OptionCard
          title={options[3].title}
          totalCost={input.budget}
          estimatedTime={options[3].estimatedTime}
          estimatedCost={options[3].estimatedCost}
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
