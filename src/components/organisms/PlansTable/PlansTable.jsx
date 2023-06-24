import React, { useEffect } from "react";
import styles from "./plansTable.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";

const HeadColumn = ({ name }) => {
  return (
    <div className={styles.headColumn}>
      <Text>{name}</Text>
      <IconButton size="20px" icon={"upDownArrows"} />
    </div>
  );
};

const PlansTable = ({ data, columns, renderRow }) => {
  return (
    <table className={styles.plansTable}>
      <thead className={styles.section}>
        <tr className={styles.row}>
          {columns.map((columName) => {
            if (columName)
              return (
                <td>
                  <HeadColumn name={columName} />
                </td>
              );
            return <td></td>;
          })}
        </tr>
      </thead>
      <tbody className={styles.section}>
        {data.map((d) => (
          <tr className={styles.row}>{renderRow(d, styles.row)}</tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default PlansTable;
