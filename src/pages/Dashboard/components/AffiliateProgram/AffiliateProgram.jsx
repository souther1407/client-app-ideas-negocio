import React, { useEffect, useState } from "react";
import styles from "./affiliateProgram.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Button from "../../../../components/atoms/Button/Button";
import { useLogin } from "../../../../hooks/useLogin";
import {
  getReferralsData,
  generateActivateLink,
  generatePaymentLink,
} from "../../../../services/affiliate/affiliate";
import { parseCentToMoney } from "../../../../utils/parse/parseMoney";
const AffiliateProgram = () => {
  const { userData, refreshToken } = useLogin({});
  const [loading, setLoading] = useState(false);
  const [referralsData, setReferralsData] = useState({
    earnings: 0,
    totalRegisters: "",
    totalSubcriptions: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getReferralsData();
        setReferralsData(data);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    if (userData.affiliateAccount.affiliateLink) {
      getData();
    }
  }, [userData]);

  const handleGeneratePaymentLink = async () => {
    try {
      await generatePaymentLink();
      await refreshToken();
    } catch (error) {
      alert(error.message);
    }
  };
  const handleActiveAffiliateAccount = async () => {
    try {
      const { url } = await generateActivateLink();
      window.location.replace(url);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      {userData.affiliateAccount.enabled ? (
        <>
          <Text>La tenes activada</Text>
          {!userData.affiliateAccount.affiliateLink ? (
            <Button onClick={handleGeneratePaymentLink}>
              <Text>Generar link de pago</Text>
            </Button>
          ) : (
            <>
              <Text>Link: {userData.affiliateAccount.affiliateLink}</Text>
              <Text>Registrados: {referralsData.totalRegisters}</Text>
              <Text>Subscritos: {referralsData.totalSubcriptions}</Text>
              <Text>
                Ganancias totales: {parseCentToMoney(referralsData.earnings)}
              </Text>
            </>
          )}
        </>
      ) : (
        <>
          <Text>Te falta completar datos</Text>
          <Button onClick={handleActiveAffiliateAccount}>
            <Text>Activar Cuenta</Text>
          </Button>
        </>
      )}
    </div>
  );
};

export default AffiliateProgram;
