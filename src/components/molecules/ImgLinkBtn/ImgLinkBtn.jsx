import React from "react";
import styles from "./imgLinkBtn.module.css";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
const ImgLinkBtn = ({ src, size = { w: "100%", h: "100%" }, to, extern }) => {
  return (
    <div
      className={styles.imgLinkBtn}
      style={{ width: size.w, height: size.h }}
    >
      <img
        src={src}
        className={styles.img}
        style={{ width: size.w, height: size.h }}
      />

      <Link to={to} extern={extern} target={"_blank"}>
        <div className={`${styles.view}`}>
          <Text>View</Text>
        </div>
      </Link>
    </div>
  );
};

export default ImgLinkBtn;
