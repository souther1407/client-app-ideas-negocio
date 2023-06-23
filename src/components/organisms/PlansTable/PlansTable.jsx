import React from "react";
import styles from "./plansTable.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";

const PlanRow = ({ id, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <tr className={styles.row}>
      <td>
        <Text>{title}</Text>
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
          <PlanRow title={d.details.title} id={d.id} onDelete={onRowDelete} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default PlansTable;
