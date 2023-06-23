import React, { useEffect, useMemo, useState } from "react";
import styles from "./myPromps.module.css";
import Text from "../../../../components/atoms/Text/Text";
import { getPrompts } from "../../../../services/userPrompts/getPrompts";
import PlansTable from "../../../../components/organisms/PlansTable/PlansTable";
import Paginator from "../../../../components/organisms/Paginator/Paginator";

let id = 0;
const mockedPromps = [
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
  {
    id: ++id,
    input: {},
    details: {
      description: "descripcion...",
      title: `reporte ${id}`,
    },
  },
];

const MyPromps = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rowsNumber, setRowsNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const initPrompts = async () => {
      try {
        const data = await getPrompts();
        setPrompts(data);
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    };
    initPrompts();
  }, []);

  const getFilteredPrompsList = () => {
    const fileted = prompts.slice(
      (currentPage - 1) * rowsNumber,
      currentPage * rowsNumber
    );

    return fileted;
  };
  return (
    <div className={styles.myPrompts}>
      {loading && <Text>Cargando...</Text>}{" "}
      {!loading && prompts.length > 0 && (
        <div className={styles.list}>
          <Text type="subtitle">My reports</Text>
          <div className={styles.table}>
            <PlansTable
              data={getFilteredPrompsList()}
              onRowDelete={(id) => console.log(id)}
            />
          </div>
          <div className={styles.paginator}>
            <Paginator
              elementsPerPage={rowsNumber}
              totalElements={prompts.length}
              onNumPageChange={(value) => setRowsNumber(value)}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPromps;
