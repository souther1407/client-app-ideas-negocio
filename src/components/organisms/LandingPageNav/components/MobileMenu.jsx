import React, { useState } from "react";
import IconButton from "../../../molecules/IconButton/IconButton";
import styles from "./mobileMenu.module.css";
import Button from "../../../atoms/Button/Button";
import Link from "../../../atoms/Link/Link";
import Text from "../../../atoms/Text/Text";
import {
  LANDING_PAGE,
  START_A_BUSINESS,
  LOGIN,
  DASHBOARD,
} from "../../../../utils/constants/routes";
import { useLocation, useNavigate } from "react-router-dom";
import GradientBorder from "../../../atoms/GradientBorder/GradientBorder";
import ChangeLanguage from "../../../molecules/ChangeLanguage/ChangeLanguage";
import ShineEffect from "../../../atoms/ShineEffect/ShineEffect";
import { useLogin } from "../../../../hooks/useLogin";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { isLogged, logout } = useLogin({});
  const navigate = useNavigate();

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
    setShowMenu(false);
  };

  return (
    <div className={styles.mobileMenu}>
      <IconButton icon={"bars"} onClick={() => setShowMenu(true)} />
      <section className={`${styles.subMenu} ${showMenu && styles.show}`}>
        <div className={styles.closeButton}>
          <IconButton icon={"close"} onClick={() => setShowMenu(false)} />
        </div>
        {/* <section className={styles.links}>
          <Link to={LANDING_PAGE}>
            <Text type="title">Home</Text>
          </Link>
          <Text
            type="title"
            onClick={handlerClick}
            style={{ cursor: "pointer" }}
          >
            Ejemplos
          </Text>
          <Link to={DASHBOARD}>
            <Text type="title">Dashboard</Text>
          </Link>
        </section> */}
        <section className={styles.buttons}>
          {/* <GradientBorder>
            <ChangeLanguage />
          </GradientBorder> */}
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
    </div>
  );
};

export default MobileMenu;
