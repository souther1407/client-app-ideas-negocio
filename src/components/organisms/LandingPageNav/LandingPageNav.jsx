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
  DASHBOARD_IDEAS,
  DASHBOARD_FINDER,
} from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import Button from "../../atoms/Button/Button";
import GradientBorder from "../../../components/atoms/GradientBorder/GradientBorder";
import ShineEffect from "../../atoms/ShineEffect/ShineEffect";
import MobileMenu from "./components/MobileMenu";

import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";
import Sheet from "../../molecules/Sheer/Sheet";
import IconButton from "../../molecules/IconButton/IconButton";
const LandingPageNav = () => {
  const { logout, isLogged } = useLogin({});
  const location = useLocation();
  const navigate = useNavigate();
  const stateScroll = useScroll();

  const handleUserlogin = () => {
    if (isLogged()) logout();

    navigate(LOGIN);
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
      <section style={{ width: "1px", height: "1px" }}></section>
      <section className={styles.buttonsAndLinks}>
        {isLogged() && (
          <section className={styles.links}>
            <Link to={START_A_BUSINESS}>
              <Text
                size={"0.8rem"}
                color={location.pathname !== START_A_BUSINESS && "soft"}
              >
                New Report
              </Text>
            </Link>
            <Link to={DASHBOARD_IDEAS}>
              <Text
                size={"0.8rem"}
                color={location.pathname !== DASHBOARD_IDEAS && "soft"}
              >
                My Reports
              </Text>
            </Link>
            {/* <Link to={DASHBOARD_FINDER}>
              <Text
                size={"0.8rem"}
                color={location.pathname !== DASHBOARD_FINDER && "soft"}
              >
                Finder
              </Text>
            </Link> */}
          </section>
        )}
      </section>
      <div className={styles.menus}>
        {!isLogged() && (
          <section className={styles.mobileMenu}>
            <MobileMenu />
          </section>
        )}
        {isLogged() && (
          <section className={styles.usermenu}>
            <Sheet
              renderButton={() => (
                <div className={styles.menuIcon}>
                  <Icon type={"user"} size={"32px"} />
                </div>
              )}
              renderContent={() => (
                <div className={styles.usermenuContent}>
                  <Button
                    onClick={handleLogout}
                    style={{ backgroundColor: "#070E21", color: "white" }}
                  >
                    <Text>Log out</Text>
                  </Button>
                  <section className={styles.mobileLink}>
                    <Link to={START_A_BUSINESS}>
                      <Text
                        size={"1rem"}
                        color={location.pathname !== START_A_BUSINESS && "soft"}
                      >
                        New Report
                      </Text>
                    </Link>
                    <Link to={DASHBOARD_IDEAS}>
                      <Text
                        size={"1rem"}
                        color={location.pathname !== DASHBOARD_IDEAS && "soft"}
                      >
                        My Reports
                      </Text>
                    </Link>
                    {/* <Link to={DASHBOARD_FINDER}>
                      <Text
                        size={"1rem"}
                        color={location.pathname !== DASHBOARD_FINDER && "soft"}
                      >
                        Finder
                      </Text>
                    </Link> */}
                  </section>
                </div>
              )}
              renderFooter={() => {}}
            />
          </section>
        )}
      </div>
    </nav>
  );
};

export default LandingPageNav;
