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
import imgMarketAnalisis from "../../assets/imgMarketAnalisis.svg";
import imgCosts from "../../assets/imgCosts.svg";
import imgMarketingPlan from "../../assets/imgMarketingPlan.svg";
import imgProductMin from "../../assets/imgProductMin.svg";
import imgTeam from "../../assets/imgTeam.svg";
import imgTeacherMessage from "../../assets/imgTeacherMessage.svg";
import GradientText from "../../components/molecules/GradientText/GradientText";
import { Switch } from "../../components/atoms/Switch/Switch";
import { Checkbox } from "../../components/atoms/CheckBox/CheckBox";
import { useStorage } from "../../hooks/useStorage";
import { changeVisibility } from "../../services/userPrompts/chageVisibily";
const PlanDetail = ({ response }) => {
  const navigate = useNavigate();
  const { isLogged, userData } = useLogin({});
  const { save } = useStorage();

  const handleSwitch = async (value) => {
    try {
      console.log("entra aca");
      await changeVisibility({ promptId: response.id, visibility: value });
      alert(value ? "report set to public" : "report set to private");
    } catch (error) {
      alert("someting went wrong, try again");
    }
  };
  useEffect(() => {
    save("PLAN_DETAIL_URL", window.location.pathname);
  }, []);

  return (
    <div className={styles.planDetail}>
      <section className={styles.content}>
        <LandingPageNav />

        <section className={styles.description}>
          <section className={styles.header}>
            <div className={styles.info}>
              <GradientText type="title" bold>
                {response.title}
              </GradientText>
              <Text>{response.description}</Text>
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
                <Checkbox className="border-neutral-700 w-[40px] h-[40px]" />
                <Text>Add to my reports</Text>
              </div>
            )}
          </section>
          <section className={styles.cardsDetail}>
            <DetailCard
              title={response.title}
              sectionName={"Mensaje el profesor"}
              id="marketAnalisis"
              onShowDetail={() => navigate(PLAN_DETAIL + "/teacherMessage")}
              icon={"book"}
              img={imgTeacherMessage}
            />

            <DetailCard
              title={response.title}
              sectionName={"Analisis de mercado"}
              icon={"search"}
              id="marketAnalisis"
              onShowDetail={() => navigate(PLAN_DETAIL + "/marketAnalisis")}
              img={imgMarketAnalisis}
            />

            <DetailCard
              title={response.title}
              sectionName={"Producto mínimo viable"}
              id={"prices"}
              icon={"gears"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/productMin")}
              img={imgProductMin}
            />

            <DetailCard
              title={response.title}
              sectionName={"Equipo"}
              id={"sales"}
              icon={"team"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/team")}
              img={imgTeam}
            />

            <DetailCard
              title={response.title}
              sectionName={"Plan de Marketing"}
              id={"marketingPlan"}
              icon={"megaphone"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/marketingPlan")}
              img={imgMarketingPlan}
            />

            <DetailCard
              title={response.title}
              sectionName={"Costos"}
              id={"riskAnalisis"}
              icon={"money"}
              onShowDetail={() => navigate(PLAN_DETAIL + "/costs")}
              img={imgCosts}
            />
          </section>
        </section>
        <section className={styles.inputUser}>
          <InputSection
            age={formatStringToShort(response?.input?.age)}
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
