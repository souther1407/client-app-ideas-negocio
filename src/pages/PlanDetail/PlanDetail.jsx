import React, { useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/styled/Text/Text";
import Boximg from "../../assets/box.png";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import Modal from "../../components/styled/Modal/Modal";
import ModalNextCard from "./components/modalNextCard/ModalNextCard";
const PlanDetail = () => {
  const [showDetails, setShowDetails] = useState(false);
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
        <DetailCard onShowDetail={() => setShowDetails(true)} />
        <DetailCard onShowDetail={() => setShowDetails(true)} />
        <DetailCard onShowDetail={() => setShowDetails(true)} />
        <DetailCard onShowDetail={() => setShowDetails(true)} />
        <DetailCard onShowDetail={() => setShowDetails(true)} />
        <DetailCard onShowDetail={() => setShowDetails(true)} />
      </section>
      <Modal
        isOpen={showDetails}
        onClose={() => {
          setShowDetails(false);
        }}
        title="MVP"
        renderFooter={() => <ModalNextCard />}
      >
        <section className={styles.details}>
          <Text>
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.
            <br />
            <br />
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.
            <br />
            <br />
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.
            <br />
            <br />
            Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.
            <br />
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
            <br /> Echa un vistazo a los 457 currículums de nuestros clientes ya
            contratados. Son nuestros héroes. Pueden ayudarte.Echa un vistazo a
            los 457 currículums...
          </Text>
        </section>
      </Modal>
    </div>
  );
};

export default PlanDetail;
