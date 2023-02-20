import React, { useEffect } from "react";
import styles from "./landingPageNav.module.css";
import Link from "../../styled/Link/Link";
import Text from "../../styled/Text/Text";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import WhiteBtn from "../../styled/WhiteBtn/WhiteBtn";
import { useScroll } from "../../../hooks/useScroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LANDING_PAGE,
  START_A_BUSINESS,
} from "../../../utils/constants/routes";
const LandingPageNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stateScroll = useScroll();
  const handlerClick = (e) => {
    if (location.pathname !== LANDING_PAGE) navigate(LANDING_PAGE);
    else {
      const elementAirDrops = document.getElementById("airDropshipings");
      elementAirDrops.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav
      className={`${styles.landingPageNav} ${
        stateScroll.isScrolledUp && styles.show
      }`}
    >
      <section className={styles.links}>
        <Link to={LANDING_PAGE}>
          <Text>Home</Text>
        </Link>

        <Text onClick={handlerClick} style={{ cursor: "pointer" }}>
          Ejemplos
        </Text>

        <Link to={LANDING_PAGE}>
          <Text>Como funciona</Text>
        </Link>
      </section>
      <section className={styles.buttons}>
        <ChangeLanguage />
        <WhiteBtn type="bordered" classes={styles.loginBtn}>
          <Text>Log in</Text>
        </WhiteBtn>
        <WhiteBtn
          classes={styles.startBusinessBtn}
          onClick={() => navigate(START_A_BUSINESS)}
        >
          <Text>
            Star a<br></br> business
          </Text>
        </WhiteBtn>
      </section>
    </nav>
  );
};

export default LandingPageNav;
