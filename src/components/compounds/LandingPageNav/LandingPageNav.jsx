import React, { useEffect } from "react";
import styles from "./landingPageNav.module.css";
import Link from "../../styled/Link/Link";
import Text from "../../styled/Text/Text";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import { useScroll } from "../../../hooks/useScroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LANDING_PAGE,
  START_A_BUSINESS,
  LOGIN,
} from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import Button from "../../styled/Button/Button";
import GradientBorder from "../../../components/styled/GradientBorder/GradientBorder";
import ShineEffect from "../../styled/ShineEffect/ShineEffect";
const LandingPageNav = () => {
  const { logout, isLogged } = useLogin({});
  const location = useLocation();
  const navigate = useNavigate();
  const stateScroll = useScroll();

  const handleUserlogin = () => {
    if (isLogged()) logout();
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
          <GradientBorder>
            <ChangeLanguage />
          </GradientBorder>
          {location.pathname !== LOGIN && (
            <GradientBorder style={{ borderRadius: "16px" }}>
              <Button
                type="bordered"
                classes={styles.loginBtn}
                onClick={handleUserlogin}
                style={{ backgroundColor: "#0B263C", borderRadius: "16px" }}
              >
                <Text>{isLogged() ? "log out" : "log in"}</Text>
              </Button>
            </GradientBorder>
          )}
          <ShineEffect>
            <Button
              classes={styles.startBusinessBtn}
              color="secondary"
              onClick={() => navigate(START_A_BUSINESS)}
            >
              <Text>Crear Negocio</Text>
            </Button>
          </ShineEffect>
        </section>
      </section>
    </nav>
  );
};

export default LandingPageNav;
