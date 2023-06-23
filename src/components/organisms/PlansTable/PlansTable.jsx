import React, { useEffect } from "react";
import styles from "./plansTable.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import { MY_PROMPTS_DETAIL } from "../../../utils/constants/routes";
import usePromptDetail from "../../../states/prompDetail";
import { formatStringToShort } from "../../../utils/format/formatStringToShort";
const PlanRow = ({ plan }) => {
  const { id, input, details } = plan;
  const navigate = useNavigate();
  const { setPromptDetail } = usePromptDetail((state) => state);
  const handleDelete = () => {};
  const goToPlanDetail = () => {
    console.log(plan);
    setPromptDetail({
      ...plan.details,
      input: plan.input,
    });
    navigate(MY_PROMPTS_DETAIL + `/${id}`);
  };
  return (
    <tr className={styles.row}>
      <td>
        <Text onClick={goToPlanDetail}>
          {formatStringToShort(details.description, 25)}
        </Text>
      </td>
      <td>private</td>
      <td>26</td>
      <td>
        <IconButton size="16px" icon={"trash"} onClick={handleDelete} />
      </td>
    </tr>
  );
};
const HeadColumn = ({ name }) => {
  return (
    <div className={styles.headColumn}>
      <Text>{name}</Text>
      <IconButton size="20px" icon={"upDownArrows"} />
    </div>
  );
};
const PlansTable = ({ data, onRowDelete }) => {
  return (
    <table className={styles.plansTable}>
      <thead className={styles.section}>
        <tr className={styles.row}>
          <td>
            <HeadColumn name={"Title"} />
          </td>
          <td>
            <HeadColumn name={"Status"} />
          </td>
          <td>
            <HeadColumn name={"Views"} />
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody className={styles.section}>
        {data.map((d) => (
          <PlanRow plan={d} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default PlansTable;
