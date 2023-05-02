import React, { useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import Boximg from "../../assets/box.png";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import InfoModal from "../../components/molecules/InfoModal/InfoModal";
import ModalNextCard from "./components/modalNextCard/ModalNextCard";
import GradienBorder from "../../components/atoms/GradientBorder/GradientBorder";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import InputCard from "./components/InputCard/InputCard";
import { formatStringToShort } from "../../utils/format/formatStringToShort";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import { useLogin } from "../../hooks/useLogin";
import InputSection from "./components/InputSection/InputSection";
import DetailSection from "./components/DetailSection/DetailSection";
import { useNavigate } from "react-router-dom";
import { PLAN_DETAIL } from "../../utils/constants/routes";
const parts = [
  { title: "Analisis de Mercado", id: "marketAnalisis" },
  { title: "Precio", id: "prices" },
  { title: "Ventas", id: "sales" },
  { title: "Plan de Marketing", id: "marketingPlan" },
  { title: "Tiempo", id: "time" },
  { title: "Analisis de Riesgo", id: "riskAnalisis" },
];
const PlanDetail = ({ response }) => {
  const [partsCurrentIndex, setpartsCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { isLogged } = useLogin({});
  const handleModalOpen = (index) => {
    setpartsCurrentIndex(index);
    setShowModal(true);
  };

  const prevPart = () => {
    if (partsCurrentIndex === 0) return;
    setpartsCurrentIndex((prev) => prev - 1);
  };
  const nextPart = () => {
    if (partsCurrentIndex === parts.length - 1) return;
    setpartsCurrentIndex((prev) => prev + 1);
  };
  return (
    <div className={styles.planDetail}>
      {isLogged() && <VerticalLoginNav />}
      <section className={styles.content}>
        <LandingPageNav />

        <section className={styles.description}>
          <section className={styles.info}>
            <Text type="title">{response.title}</Text>
            <Text>{response.description}</Text>
          </section>
          <section className={styles.cardsDetail}>
            <GradienBorder>
              <DetailCard
                title={"Analisis de Mercado"}
                id="marketAnalisis"
                onShowDetail={() => navigate(PLAN_DETAIL + "/marketAnalisis")}
              />
            </GradienBorder>
            <GradienBorder>
              <DetailCard
                title={"Precio"}
                id={"prices"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/prices")}
              />
            </GradienBorder>
            <GradienBorder>
              <DetailCard
                title={"Ventas"}
                id={"sales"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/sales")}
              />
            </GradienBorder>
            <GradienBorder>
              <DetailCard
                title={"Plan de Marketing"}
                id={"marketingPlan"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/marketingPlan")}
              />
            </GradienBorder>
            <GradienBorder>
              <DetailCard
                title={"Tiempo"}
                id={"time"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/time")}
              />
            </GradienBorder>
            <GradienBorder>
              <DetailCard
                title={"Analisis de Riesgo"}
                id={"riskAnalisis"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/riskAnalisis")}
              />
            </GradienBorder>
          </section>
        </section>
        <section className={styles.inputUser}>
          <GradienBorder>
            <InputSection
              age={formatStringToShort(response?.input?.age)}
              budget={formatStringToShort(response?.input?.budget)}
              location={formatStringToShort(response?.input?.location)}
              skills={formatStringToShort(response?.input?.skills)}
              teacher={formatStringToShort(response?.input?.teacher)}
              style={{ backgroundColor: "#0C1C2F" }}
            />
          </GradienBorder>
        </section>
        {/*   <InfoModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          title={parts[partsCurrentIndex].title}
          renderFooter={() => (
            <ModalNextCard onPrev={prevPart} onNext={nextPart} />
          )}
        >
          <section className={styles.details}>
            <Text>
              {response[parts[partsCurrentIndex].id].split("\n").map((str) => (
                <>
                  {str}
                  <br />
                </>
              ))}
            </Text>
          </section>
        </InfoModal> */}
      </section>
      <GradientBg />
    </div>
  );
};

export default PlanDetail;
