import React, { useEffect, useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import { formatStringToShort } from "../../utils/format/formatStringToShort";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import { useLogin } from "../../hooks/useLogin";
import InputSection from "./components/InputSection/InputSection";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL } from "../../utils/constants/routes";
import imgMarketAnalisis from "../../assets/icon4.svg";
import imgCosts from "../../assets/icon5.svg";
import imgMarketingPlan from "../../assets/icon3.svg";
import imgProductMin from "../../assets/icon1.svg";
import imgTeam from "../../assets/icon2.svg";
import imgCompetition from "../../assets/icon6.svg";
import GradientText from "../../components/molecules/GradientText/GradientText";
import { Switch } from "../../components/atoms/Switch/Switch";
import { Checkbox } from "../../components/atoms/CheckBox/CheckBox";
import { useStorage } from "../../hooks/useStorage";
import { changeVisibility } from "../../services/userPrompts/chageVisibily";
import { toggleAddMyPrompts } from "../../services/userPrompts/toggleAddMyPrompts";
import { addView } from "../../services/userPrompts/addView";
import usePromptDetail from "../../states/prompDetail";
const PlanDetail = () => {
  const navigate = useNavigate();
  const { isLogged, userData } = useLogin({});
  const { save } = useStorage();
  const response = usePromptDetail((state) => state.promptDetail);
  const handleSwitch = async (value) => {
    try {
      await changeVisibility({ promptId: response.id, visibility: value });
      alert(value ? "report set to public" : "report set to private");
    } catch (error) {
      alert("someting went wrong, try again");
    }
  };

  const handleCheckBox = async () => {
    try {
      const done = await toggleAddMyPrompts({
        userId: response.userId,
        promptId: response.id,
      });
      alert("listo");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    save("PLAN_DETAIL_URL", window.location.pathname);
    try {
      addView({ userId: response.userId, promptId: response.id });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className={styles.planDetail}>
      <section className={styles.content}>
        <LandingPageNav />

        <section className={styles.description}>
          <section className={styles.header}>
            <div className={styles.info}>
              <Text type="title" bold size={"1.3rem"}>
                {response.details.title}
              </Text>
              <Text>{response.details.description}</Text>
            </div>
            {userData.uid === response.userId ? (
              <div className={styles.privatePublicSwitch}>
                <Text>Private</Text>
                <Switch
                  defaultChecked={response.isPublic}
                  onCheckedChange={handleSwitch}
                />
                <Text>Public</Text>
              </div>
            ) : (
              <div className={styles.addToFavorites}>
                <Checkbox
                  defaultChecked={response.inMyReports}
                  onCheckedChange={handleCheckBox}
                  className="border-neutral-700 w-[40px] h-[40px]"
                />
                <Text>Add to my reports</Text>
              </div>
            )}
          </section>
          <section className={styles.cardsDetail}>
            <DetailCard
              title={response.title}
              sectionName={"Competition"}
              id="marketAnalisis"
              onShowDetail={() => navigate(PLAN_DETAIL + "/teacherMessage")}
              img={imgCompetition}
            />

            <DetailCard
              title={response.title}
              sectionName={"Market Analysis"}
              id="marketAnalisis"
              onShowDetail={() => navigate(PLAN_DETAIL + "/marketAnalisis")}
              img={imgMarketAnalisis}
            />

            <DetailCard
              title={response.title}
              sectionName={"Product Development"}
              id={"prices"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/productMin")}
              img={imgProductMin}
            />

            <DetailCard
              title={response.title}
              sectionName={"Team"}
              id={"sales"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/team")}
              img={imgTeam}
            />

            <DetailCard
              title={response.title}
              sectionName={"Marketing Plan"}
              id={"marketingPlan"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/marketingPlan")}
              img={imgMarketingPlan}
            />

            <DetailCard
              title={response.title}
              sectionName={"Costs"}
              id={"riskAnalisis"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/costs")}
              img={imgCosts}
            />
          </section>
        </section>
        <section className={styles.inputUser}>
          <InputSection
            freeTime={formatStringToShort(response?.input?.freeTime)}
            budget={formatStringToShort(response?.input?.budget)}
            location={formatStringToShort(response?.input?.location)}
            skills={formatStringToShort(response?.input?.skills)}
            teacher={formatStringToShort(response?.input?.teacher)}
          />
        </section>
      </section>
      <GradientBg opacity={16} />
    </div>
  );
};

export default PlanDetail;
