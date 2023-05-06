import React, { useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import Boximg from "../../assets/box.png";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import GradienBorder from "../../components/atoms/GradientBorder/GradientBorder";
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
import GradientText from "../../components/molecules/GradientText/GradientText";
const parts = [
  { title: "Analisis de Mercado", id: "marketAnalisis" },
  { title: "Precio", id: "prices" },
  { title: "Ventas", id: "sales" },
  { title: "Plan de Marketing", id: "marketingPlan" },
  { title: "Tiempo", id: "time" },
  { title: "Analisis de Riesgo", id: "riskAnalisis" },
];
const PlanDetail = ({ response }) => {
  const navigate = useNavigate();
  console.log("response??", response);
  const { isLogged } = useLogin({});

  return (
    <div className={styles.planDetail}>
      {isLogged() && <VerticalLoginNav />}
      <section className={styles.content}>
        <LandingPageNav />

        <section className={styles.description}>
          <section className={styles.info}>
            <GradientText type="title" bold>
              {response.title}
            </GradientText>
            <Text>{response.description}</Text>
          </section>
          <section className={styles.cardsDetail}>
            <DetailCard
              title={response.title}
              sectionName={"Mensaje el profesor"}
              id="marketAnalisis"
              onShowDetail={() => {}}
              icon={"book"}
              img={
                "https://img.freepik.com/free-vector/teacher-classroom-pointing-chalkboard_40876-2422.jpg"
              }
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
      <GradientBg opacity={25} />
    </div>
  );
};

export default PlanDetail;
