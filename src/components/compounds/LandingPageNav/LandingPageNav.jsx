import React from "react";
import styles from "./landingPageNav.module.css";
import Link from "../../styled/Link/Link";
import Text from "../../styled/Text/Text";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import WhiteBtn from "../../styled/WhiteBtn/WhiteBtn";
const LandingPageNav = () => {
  const handlerClick = (e) => {
    const elementAirDrops = document.getElementById("airDropshipings");
    elementAirDrops.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <nav className={styles.landingPageNav}>
      <section className={styles.links}>
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>

        <Text onClick={handlerClick} style={{ cursor: "pointer" }}>
          Ejemplos
        </Text>

        <Link to={"/"}>
          <Text>Como funciona</Text>
        </Link>
      </section>
      <section className={styles.buttons}>
        <ChangeLanguage />
        <WhiteBtn type="bordered">
          <Text>Log in</Text>
        </WhiteBtn>
        <WhiteBtn>
          <Text>
            Star a<br></br> business
          </Text>
        </WhiteBtn>
      </section>
    </nav>
  );
};

export default LandingPageNav;
