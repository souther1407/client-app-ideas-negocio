import React from "react";
import styles from "./effectButton.module.css";
import Icon from "../Icon/Icon";
const EffectButton = ({ children, text, icon }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.buttonContainer}>
        <span className={styles.mas}>
          <i style={{ marginRight: "8px" }}>
            <Icon size={"16px"} type={icon} color="black" />
          </i>
          <p style={{ fontSize: "0.8rem" }}>{text}</p>
        </span>
        <button id="work" type="button" name="Hover">
          <i style={{ marginRight: "8px" }}>
            <Icon size={"16px"} type={icon} color="white" />
          </i>
          {text}
        </button>
      </div>
    </div>
  );
};

export default EffectButton;
