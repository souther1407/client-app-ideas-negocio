import React from "react";
import styles from "./inputSection.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Link from "../../../../components/atoms/Link/Link";
import Icon from "../../../../components/atoms/Icon/Icon";
const InputSection = ({
  location,
  budget,
  freeTime,
  skills,
  teacher,
  ...otherProps
}) => {
  return (
    <div className={styles.inputSection} {...otherProps}>
      <div className={styles.text}>
        <Text>
          Discover similar Business plan:
          <span style={{ color: "gainsboro" }}>Location</span>
          <strong>{location}</strong>,
          <span style={{ color: "gainsboro" }}>Budget:</span>
          <strong>{budget}</strong>
        </Text>
      </div>
      <div>
        <Link to={"/"}>
          <Icon color="white" type={"singleArrowRight"} size={30} />
        </Link>
      </div>
    </div>
  );
};

export default InputSection;
