import React, { useEffect, useState } from "react";
import styles from "./finder.module.css";
import PlansTable from "../../../../components/organisms/PlansTable/PlansTable";
import Paginator from "../../../../components/organisms/Paginator/Paginator";
import { getPublicPrompts } from "../../../../services/userPrompts/getPrompts";
import Text from "../../../../components/atoms/Text/Text";
import { MY_PROMPTS_DETAIL } from "../../../../utils/constants/routes";
import usePromptDetail from "../../../../states/prompDetail";
import { useNavigate } from "react-router-dom";

const PlanRow = ({ plan }) => {
  const { details, input, id } = plan;
  const setPromptDetail = usePromptDetail((state) => state.setPromptDetail);
  const navigate = useNavigate();
  const goToPlanDetail = () => {
    console.log(plan);
    setPromptDetail({
      ...plan.details,
      input: plan.input,
    });
    navigate(MY_PROMPTS_DETAIL + `/${id}`);
  };

  return (
    <>
      <td onClick={goToPlanDetail}>
        <Text>{details.title}</Text>
      </td>
      <td>
        <Text>{input.location}</Text>
      </td>
      <td>
        <Text>{input.budget}</Text>
      </td>
      <td>
        <Text>15</Text>
      </td>
      <td>
        <Text>algo</Text>
      </td>
    </>
  );
};

const Finder = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rowsNumber, setRowsNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const initPrompts = async () => {
      try {
        const data = await getPublicPrompts();
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
          <Text type="subtitle">Reports finder</Text>
          <div className={styles.table}>
            <PlansTable
              data={getFilteredPrompsList()}
              columns={["Title", "Country", "Budget", "adds", "Add"]}
              renderRow={(data) => <PlanRow plan={data} />}
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

export default Finder;
