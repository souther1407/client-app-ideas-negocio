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
      <LandingPageNav />
      <section className={styles.description}>
        <section className={styles.info}>
          <Text type="title">{response.title}</Text>
          <Text>{response.description}</Text>
        </section>
        <section className={styles.cardsDetail}>
          <DetailCard
            title={"Analisis de Mercado"}
            id="marketAnalisis"
            onShowDetail={() => handleModalOpen(0)}
          />

          <DetailCard
            title={"Precio"}
            id={"prices"}
            onShowDetail={() => handleModalOpen(1)}
          />

          <DetailCard
            title={"Ventas"}
            id={"sales"}
            onShowDetail={() => handleModalOpen(2)}
          />

          <DetailCard
            title={"Plan de Marketing"}
            id={"marketingPlan"}
            onShowDetail={() => handleModalOpen(3)}
          />
          <DetailCard
            title={"Tiempo"}
            id={"time"}
            onShowDetail={() => handleModalOpen(4)}
          />
          <DetailCard
            title={"Analisis de Riesgo"}
            id={"riskAnalisis"}
            onShowDetail={() => handleModalOpen(5)}
          />
        </section>
      </section>
      <section className={styles.inputUser}>
        <InputCard
          info={formatStringToShort(response.input.location)}
          title={"Ubicación"}
        />
        <InputCard
          info={formatStringToShort(response.input.budget)}
          title={"Presupuesto"}
        />
        <InputCard
          info={formatStringToShort(response.input.age)}
          title={"Edad"}
        />
        <InputCard
          info={formatStringToShort(response.input.skills)}
          title={"Habilidades"}
        />
        <InputCard info={formatStringToShort("tiempo")} title={"Tiempo"} />

        <InputCard
          info={formatStringToShort(response.input.teacher)}
          title={"Profesor"}
        />
      </section>
      <InfoModal
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
      </InfoModal>
      <GradientBg />
    </div>
  );
};

export default PlanDetail;
