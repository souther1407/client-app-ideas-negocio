import React, { useState } from "react";
import styles from "./affiliate.module.css";
import Text from "../../components/styled/Text/Text";
import Button from "../../components/styled/Button/Button";
import { useLogin } from "../../hooks/useLogin";
import {
  affiliateUser,
  generatePaymentLink,
} from "../../services/affiliate/affiliate";
const Affiliate = () => {
  const [paymentLink, setPaymentLink] = useState("");
  const { userData, refreshToken } = useLogin({});
  const handleClick = async () => {
    try {
      const { url } = await affiliateUser();
      await refreshToken();
      window.location.assign(url);
    } catch (error) {
      alert(error.message);
    }
  };
  const handlerGeneratePaymentLink = async () => {
    try {
      const { url } = await generatePaymentLink();
      await refreshToken();
      setPaymentLink(url);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.affiliate}>
      <Text>Affiliate :D</Text>
      {!userData.affiliateAccount && (
        <Button onClick={handleClick}>
          <Text>Quiero ser afiliado</Text>
        </Button>
      )}
      {userData.affiliateAccount.enabled && (
        <>
          <Button onClick={handlerGeneratePaymentLink}>
            <Text>Generar Link de Pago</Text>
          </Button>
          <Text>{paymentLink}</Text>
        </>
      )}
    </div>
  );
};

export default Affiliate;
