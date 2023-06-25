import React, { useEffect, useState } from "react";
import styles from "./plansTable.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";

const HeadColumn = ({ name, onClick, ordering }) => {
  const [order, setOrder] = useState("ASC");
  const handleClick = () => {
    onClick(name, order);
    setOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
  };
  return (
    <div className={styles.headColumn}>
      <Text>{name}</Text>
      {ordering && (
        <IconButton size="20px" icon={"upDownArrows"} onClick={handleClick} />
      )}
    </div>
  );
};

const PlansTable = ({ data, columns, renderRow, onOrderClick }) => {
  return (
    <table className={styles.plansTable}>
      <thead className={styles.section}>
        <tr className={styles.row}>
          {columns.map((column) => {
            if (column.name)
              return (
                <td>
                  <HeadColumn
                    name={column.name}
                    onClick={onOrderClick}
                    ordering={column.ordering}
                  />
                </td>
              );
            return <td></td>;
          })}
        </tr>
      </thead>
      <tbody className={styles.section}>
        {data.map((d) => (
          <tr className={styles.row}>{renderRow(d)}</tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default PlansTable;
