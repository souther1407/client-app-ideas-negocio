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
import ShineEffect from "../../../../components/atoms/ShineEffect/ShineEffect";
import AreaChart from "../../../../components/organisms/AreaChart/AreaChart";
const AffiliateProgram = () => {
  const { userData, refreshToken } = useLogin({});
  const [loading, setLoading] = useState(false);
  const [referralsData, setReferralsData] = useState({
    earnings: 0,
    totalClicks: 0,
    totalSubcriptions: 0,
    lastWeekData: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getReferralsData();
        console.log("data", data);
        setReferralsData(data);
      } catch (error) {
        console.log("affiliate program:", error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
    console.log(referralsData);
  }, []);

  const handleActiveAffiliateAccount = async () => {
    try {
      if (!userData.affiliateAccount) return alert("need to subscribe :c");
      const { url } = await generateActivateLink();
      window.location.replace(url);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(userData.affiliateAccount.affiliateLink);
    alert("copiado");
  };

  return (
    <div className={styles.affiliateProgram}>
      <section className={styles.card}>
        <div className={styles.clicks}>
          <Text>Clicks</Text>
          <Text type="title">{referralsData.totalClicks}</Text>
        </div>

        <div className={styles.convertions}>
          <Text>Número de conversiones</Text>
          <Text type="title">{referralsData.totalSubcriptions}</Text>
        </div>
      </section>

      <section className={`${styles.card} ${styles.middle}`}>
        <div className={styles.earnings}>
          <Text>Dinero ganado</Text>
          <Text type="title">{parseCentToMoney(referralsData.earnings)}</Text>
          {!userData.affiliateAccount.enabled ? (
            <ShineEffect>
              <Button color="secondary" onClick={handleActiveAffiliateAccount}>
                <Text>Unirse</Text>
              </Button>
            </ShineEffect>
          ) : (
            <Button color="secondary" onClick={handleCopyLink}>
              <Text>Copiar link</Text>
            </Button>
          )}
        </div>

        <div className={styles.monthResume}>
          <Text>Resumen de este mes</Text>
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.lastClicks}>
          <Text>Clicks</Text>
          <div className={styles.chart}>
            <AreaChart
              earnings={referralsData.lastWeekData}
              label={"totalClicks"}
            />
          </div>
        </div>

        <div className={styles.lastCovertions}>
          <Text>Conversiones</Text>
          <div className={styles.chart}>
            <AreaChart
              earnings={referralsData.lastWeekData}
              label={"totalSubscriptions"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
