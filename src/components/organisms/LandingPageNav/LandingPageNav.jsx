import React, { useEffect } from "react";
import styles from "./landingPageNav.module.css";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
import ChangeLanguage from "../../molecules/ChangeLanguage/ChangeLanguage";
import { useScroll } from "../../../hooks/useScroll";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LANDING_PAGE,
  START_A_BUSINESS,
  LOGIN,
  DASHBOARD,
  PAYMENT_METHOD,
} from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import Button from "../../atoms/Button/Button";
import GradientBorder from "../../../components/atoms/GradientBorder/GradientBorder";
import ShineEffect from "../../atoms/ShineEffect/ShineEffect";
import MobileMenu from "./components/MobileMenu";

import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";

const LandingPageNav = () => {
  const { logout, isLogged } = useLogin({});
  const location = useLocation();
  const navigate = useNavigate();
  const stateScroll = useScroll();

  const handleUserlogin = () => {
    if (isLogged()) logout();

    navigate(LOGIN);
  };

  const handlerClick = (e) => {
    if (location.pathname !== LANDING_PAGE) navigate(LANDING_PAGE);
    else {
      const elementAirDrops = document.getElementById("airDropshipings");
      elementAirDrops.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleLogout = () => {
    logout();
    navigate(LANDING_PAGE);
  };

  return (
    <nav
      className={`${styles.landingPageNav} ${
        stateScroll.isScrolledUp && styles.show
      }`}
    >
      <section className={`${styles.logo} ${isLogged() && styles.positioned}`}>
        <Text>Paddawan</Text>
      </section>
      <section className={styles.elements}>
        <section className={styles.buttonsAndLinks}>
          {!isLogged() && (
            <section className={styles.links}>
              <Link to={LANDING_PAGE}>
                <Text>Home</Text>
              </Link>
              <Text onClick={handlerClick} style={{ cursor: "pointer" }}>
                Ejemplos
              </Text>
              <Link to={DASHBOARD}>
                <Text>Dashboard</Text>
              </Link>
            </section>
          )}
          <section className={styles.buttons}>
            {/* <GradientBorder>
            <ChangeLanguage />
          </GradientBorder> */}
            {location.pathname !== LOGIN && !isLogged() && (
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
        {!isLogged() && (
          <section className={styles.mobileMenu}>
            <MobileMenu />
          </section>
        )}
        {isLogged() && (
          <section className={styles.usermenu}>
            <Drawer
              renderIcon={(onOpen, isOpen) => (
                <div className={styles.menuIcon} onClick={onOpen}>
                  <Icon type={"user"} />
                  {<Icon type={isOpen ? "arrowUp" : "arrowDown"} />}
                </div>
              )}
              renderContent={() => (
                <div className={styles.usermenuContent}>
                  <GradientBorder>
                    <Button
                      onClick={handleLogout}
                      style={{ backgroundColor: "#070E21", color: "white" }}
                    >
                      <Text>Log out</Text>
                    </Button>
                  </GradientBorder>
                  <GradientBorder>
                    <Button
                      onClick={() => navigate(PAYMENT_METHOD)}
                      style={{ backgroundColor: "#070E21", color: "white" }}
                    >
                      <Text>Payment method</Text>
                    </Button>
                  </GradientBorder>
                </div>
              )}
            />
          </section>
        )}
      </section>
    </nav>
  );
};

export default LandingPageNav;
