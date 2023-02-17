import React from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/styled/Text/Text";
import Boximg from "../../assets/box.png";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
const PlanDetail = () => {
  return (
    <div className={styles.planDetail}>
      <LandingPageNav />
      <section className={styles.description}>
        <section className={styles.info}>
          <Text type="title">AI Dropshipping</Text>
          <Text>
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.
            <br />
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte
          </Text>
        </section>
        <section className={styles.img}>
          <img src={Boximg} />
        </section>
      </section>
      <section className={styles.cardsDetail}>
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </section>
    </div>
  );
};

export default PlanDetail;
