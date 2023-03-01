import React, { useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/styled/Text/Text";
import Boximg from "../../assets/box.png";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import Modal from "../../components/styled/Modal/Modal";
import ModalNextCard from "./components/modalNextCard/ModalNextCard";

import GradienBorder from "../../components/styled/GradientBorder/GradientBorder";
import GradientBg from "../../components/styled/GradientBg/GradientBg";
const parts = [
  { title: "Analisis de Mercado", id: "marketAnalisis" },
  { title: "Precio", id: "prices" },
  { title: "Ventas", id: "sales" },
  { title: "Plan de Marketing", id: "marketingPlan" },
  { title: "Analisis de Riesgo", id: "riskAnalisis" },
];

const PlanDetail = ({ response }) => {
  const [partsCurrentIndex, setpartsCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  //const response = useBusinessPlan((state) => state.businessPlan);
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
        <section className={styles.img}>
          <img src={Boximg} />
        </section>
      </section>
      <section className={styles.cardsDetail}>
        <GradienBorder>
          <DetailCard
            title={"Analisis de Mercado"}
            id="marketAnalisis"
            onShowDetail={() => handleModalOpen(0)}
          />
        </GradienBorder>
        <GradienBorder>
          <DetailCard
            title={"Precio"}
            id={"prices"}
            onShowDetail={() => handleModalOpen(1)}
          />
        </GradienBorder>
        <GradienBorder>
          <DetailCard
            title={"Ventas"}
            id={"sales"}
            onShowDetail={() => handleModalOpen(2)}
          />
        </GradienBorder>
        <GradienBorder>
          <DetailCard
            title={"Plan de Marketing"}
            id={"marketingPlan"}
            onShowDetail={() => handleModalOpen(3)}
          />
        </GradienBorder>
        <GradienBorder>
          <DetailCard
            title={"Analisis de Riesgo"}
            id={"riskAnalisis"}
            onShowDetail={() => handleModalOpen(4)}
          />
        </GradienBorder>
      </section>
      <Modal
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
      </Modal>
      <GradientBg />
    </div>
  );
};

export default PlanDetail;
