import React, { useEffect, useState } from "react";
import styles from "./myPromps.module.css";
import Text from "../../../../components/atoms/Text/Text";
import { getPrompts } from "../../../../services/userPrompts/getPrompts";
import PlansTable from "../../../../components/organisms/PlansTable/PlansTable";
import Paginator from "../../../../components/organisms/Paginator/Paginator";
const MyPromps = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={styles.myPrompts}>
      {loading && <Text>Cargando...</Text>}{" "}
      {!loading && prompts.length > 0 && (
        <div className={styles.list}>
          <Text type="subtitle">My reports</Text>
          <PlansTable data={prompts} onRowDelete={(id) => console.log(id)} />
          <div className={styles.paginator}>
            <Paginator />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPromps;
