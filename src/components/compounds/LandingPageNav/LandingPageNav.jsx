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
  LOGIN,
} from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import Button from "../../styled/Button/Button";
const LandingPageNav = () => {
  const { credentials, logout } = useLogin({});
  const location = useLocation();
  const navigate = useNavigate();
  const stateScroll = useScroll();

  const handleUserlogin = () => {
    if (credentials) logout();
    else navigate(LOGIN);
  };

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
      <section className={styles.logo}>
        <Text>Prodigy AI</Text>
      </section>
      <section className={styles.butonsAndLinks}>
        <section className={styles.links}>
          <Link to={LANDING_PAGE}>
            <Text>Home</Text>
          </Link>

          <Text onClick={handlerClick} style={{ cursor: "pointer" }}>
            Ejemplos
          </Text>
        </section>
        <section className={styles.buttons}>
          <ChangeLanguage />
          <Button
            type="bordered"
            classes={styles.loginBtn}
            onClick={handleUserlogin}
          >
            <Text>{credentials ? "log out" : "log in"}</Text>
          </Button>
          <Button
            classes={styles.startBusinessBtn}
            color="secondary"
            onClick={() => navigate(START_A_BUSINESS)}
          >
            <Text>Crear Negocio</Text>
          </Button>
        </section>
      </section>
    </nav>
  );
};

export default LandingPageNav;
