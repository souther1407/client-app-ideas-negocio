import React, { useEffect, useState } from "react";
import styles from "./configPaymentMethod.module.css";
import VerticalLoginNav from "../../components/organisms/VerticalLoginNav/VerticalLoginNav";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import GradienBg from "../../components/atoms/GradientBg/GradientBg";
import Text from "../../components/atoms/Text/Text";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Button from "../../components/atoms/Button/Button";

import PaymentMethodCard from "./components/PaymentMethodCard/PaymentMethodCard";
import AddPaymentMethodModal from "./components/AddPaymentMethodModal/AddPaymentMethodModal";
import {
  getPaymentMethods,
  deletePaymentMethod,
} from "../../services/paymentMethods/paymentMethods";
import { useNavigate } from "react-router-dom";
const ConfigPaymentMethod = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initPaymentMethod = async () => {
      try {
        const data = await getPaymentMethods();
        console.log(data);
        setPaymentMethod(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    initPaymentMethod();
  }, []);
  const navigate = useNavigate();

  const addPaymentMethod = (paymentMethod) => {
    setPaymentMethod(paymentMethod);
  };
  const handleDeletePaymentMethod = async (id) => {
    try {
      await deletePaymentMethod(id);
      setPaymentMethod({});
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.configPaymentMethod}>
      <VerticalLoginNav />
      <main className={styles.content}>
        <LandingPageNav />
        <section className={styles.config}>
          <header className={styles.header}>
            <Text type="title">Métodos de pago</Text>
            <IconButton icon={"close"} onClick={() => navigate(-1)} />
          </header>

          {!loading && (
            <>
              {!paymentMethod.last4 && (
                <div className={styles.noPaymentMethod}>
                  <div>
                    <Text>No hay método de pago</Text>
                    <Text color="soft">
                      Guarda un método de pago para comprar más rápido
                    </Text>
                  </div>
                  <Button
                    flexible
                    color="secondary"
                    onClick={() => setIsFormOpen(true)}
                  >
                    <Text>Añadir método de pago</Text>
                  </Button>
                </div>
              )}
              {paymentMethod.last4 && (
                <div className={styles.paymentMethod}>
                  <PaymentMethodCard
                    last4={paymentMethod.last4}
                    brand={paymentMethod.brand}
                    id={paymentMethod.id}
                    onDelete={handleDeletePaymentMethod}
                  />
                </div>
              )}
            </>
          )}
        </section>
      </main>
      {!paymentMethod.last4 && (
        <AddPaymentMethodModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddPaymentMethod={addPaymentMethod}
        />
      )}
      <GradienBg />
    </div>
  );
};

export default ConfigPaymentMethod;
