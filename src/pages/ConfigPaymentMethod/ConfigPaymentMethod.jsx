import React, { useState } from "react";
import styles from "./configPaymentMethod.module.css";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import GradienBg from "../../components/atoms/GradientBg/GradientBg";
import Text from "../../components/atoms/Text/Text";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Button from "../../components/atoms/Button/Button";
import InfoModal from "../../components/molecules/InfoModal/InfoModal";
import PaymentMethodCard from "./components/PaymentMethodCard/PaymentMethodCard";
const ConfigPaymentMethod = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={styles.configPaymentMethod}>
      <VerticalLoginNav />
      <main className={styles.content}>
        <LandingPageNav />
        <section className={styles.config}>
          <header className={styles.header}>
            <Text type="title">Métodos de pago</Text>
            <IconButton icon={"close"} />
          </header>
          <div className={styles.noPaymentMethod}>
            <div>
              <Text>No hay método de pago</Text>
              <Text color="soft">
                Guarda un método de pago para comprar más rápido
              </Text>
            </div>
            <Button flexible color="secondary">
              <Text>Añadir método de pago</Text>
            </Button>
          </div>
          {/* <div className={styles.paymentMethod}>
            <PaymentMethodCard />
          </div> */}
        </section>
      </main>
      <InfoModal
        isOpen={isFormOpen}
        renderFooter={() => {}}
        onClose={() => setIsFormOpen(false)}
        title="agregue metodo de pago"
      ></InfoModal>
      <GradienBg />
    </div>
  );
};

export default ConfigPaymentMethod;
