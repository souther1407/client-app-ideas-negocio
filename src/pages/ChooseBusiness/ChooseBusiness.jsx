import React, { useEffect, useState } from "react";
import styles from "./chooseBusiness.module.css";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import InfoModal from "../../components/molecules/InfoModal/InfoModal";
import useOptions from "../../states/useOptions";
import Button from "../../components/atoms/Button/Button";
import Text from "../../components/atoms/Text/Text";
import usePromptDetail from "../../states/prompDetail";
import { useNavigate } from "react-router-dom";
import {
  MY_PROMPTS_DETAIL,
  PLAN_DETAIL,
  START_A_BUSINESS,
} from "../../utils/constants/routes";
import { useStorage } from "../../hooks/useStorage";
import OptionCard from "./components/OptionCard/OptionCard";
import { createDetail } from "../../services/createText/createText";
import ShineEffect from "../../components/molecules/ShineEffect/ShineEffect";
import LoadingBooks from "../../components/molecules/LoadingBooks/LoadingBooks";
import imgOptions1 from "../../assets/imgOptions1.svg";
import imgOptions2 from "../../assets/imgOptions2.svg";
import imgOptions3 from "../../assets/imgOptions3.svg";
import imgOptions4 from "../../assets/imgOptions4.svg";
const ChooseBusiness = () => {
  const { load } = useStorage();

  const [option, setOption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navitagte = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(load("input"));
  const { setPromptDetail } = usePromptDetail((state) => state);
  const options = useOptions((states) => states.options);

  const handleClick = async () => {
    try {
      setLoading(true);
      setIsOpen(false);
      console.log("choose busines, detail", { input, header: options[option] });
      const detail = await createDetail({ input, header: options[option] });
      setPromptDetail(detail);
      navitagte(MY_PROMPTS_DETAIL + `/${detail.id}/${detail.userId}`);
    } catch (error) {
      alert("hubo un inconveniente, por favor inténtalo nuevamente");
      navitagte(START_A_BUSINESS);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chooseBusiness}>
      <LandingPageNav />

      {loading ? (
        <div style={{ position: "relative", zIndex: 1 }}>
          <LoadingBooks />
        </div>
      ) : (
        <section className={styles.options}>
          <ShineEffect>
            <OptionCard
              title={options[0].title}
              totalCost={input.budget}
              estimatedTime={options[0].estimatedTime}
              estimatedCost={options[0].estimatedCost}
              img={imgOptions1}
              onShowDetail={() => {
                setOption(0);
                setIsOpen(true);
              }}
            />
          </ShineEffect>
          <ShineEffect>
            <OptionCard
              title={options[1].title}
              totalCost={input.budget}
              estimatedTime={options[1].estimatedTime}
              estimatedCost={options[1].estimatedCost}
              img={imgOptions2}
              onShowDetail={() => {
                setOption(1);
                setIsOpen(true);
              }}
            />
          </ShineEffect>
          <ShineEffect>
            <OptionCard
              title={options[2].title}
              totalCost={input.budget}
              estimatedTime={options[2].estimatedTime}
              estimatedCost={options[2].estimatedCost}
              img={imgOptions3}
              onShowDetail={() => {
                setOption(2);
                setIsOpen(true);
              }}
            />
          </ShineEffect>
          <ShineEffect>
            <OptionCard
              title={options[3].title}
              totalCost={input.budget}
              estimatedTime={options[3].estimatedTime}
              estimatedCost={options[3].estimatedCost}
              img={imgOptions4}
              onShowDetail={() => {
                setOption(3);
                setIsOpen(true);
              }}
            />
          </ShineEffect>
        </section>
      )}
      <InfoModal
        title={options[option].title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        renderFooter={() => (
          <Button disabled={loading} onClick={handleClick}>
            <Text>{loading ? "creating..." : "Elegir opcion"}</Text>
          </Button>
        )}
      >
        <Text color="soft">{options[option].description}</Text>
      </InfoModal>
      <GradientBg opacity={15} />
    </div>
  );
};

export default ChooseBusiness;
