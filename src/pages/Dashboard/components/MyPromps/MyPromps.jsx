import React, { useEffect, useMemo, useState } from "react";
import styles from "./myPromps.module.css";
import Text from "../../../../components/atoms/Text/Text";
import { getPrompts } from "../../../../services/userPrompts/getPrompts";
import PlansTable from "../../../../components/organisms/PlansTable/PlansTable";
import Paginator from "../../../../components/organisms/Paginator/Paginator";
import { useNavigate } from "react-router-dom";
import usePromptDetail from "../../../../states/prompDetail";
import { formatStringToShort } from "../../../../utils/format/formatStringToShort";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
import { MY_PROMPTS_DETAIL } from "../../../../utils/constants/routes";
import GradientBg from "../../../../components/atoms/GradientBg/GradientBg";
import LandingPageNav from "../../../../components/organisms/LandingPageNav/LandingPageNav";
const PlanRow = ({ plan }) => {
  const { id, input, details, isPublic, userId, inMyReports, views } = plan;
  const navigate = useNavigate();
  const { setPromptDetail } = usePromptDetail((state) => state);
  const handleDelete = () => {};
  const goToPlanDetail = async () => {
    setPromptDetail(plan);
    navigate(MY_PROMPTS_DETAIL + `/${id}/${userId}`);
  };
  return (
    <>
      <td>
        <Text onClick={goToPlanDetail} bold>
          {formatStringToShort(details.description, 120)}
        </Text>
      </td>

      <td>
        <Text>{views}</Text>
      </td>
    </>
  );
};

const MyPromps = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rowsNumber, setRowsNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [promptsOrder, setPromptsOrder] = useState({});
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

  const orderings = {
    Title: (a, b) => {
      const aTitle = a.details.title.toLowerCase();
      const bTitle = b.details.title.toLowerCase();
      return aTitle.localeCompare(bTitle);
    },
    Status: (a, b) => {
      return a.isPublic - b.isPublic;
    },
    Views: (a, b) => {
      return a.views - b.views;
    },
  };
  const getFilteredPrompsList = () => {
    if (promptsOrder.name) {
      prompts.sort(orderings[promptsOrder.name]);
      if (promptsOrder.order === "DESC") {
        prompts.reverse();
      }
    }
    const fileted = prompts.slice(
      (currentPage - 1) * rowsNumber,
      currentPage * rowsNumber
    );

    return fileted;
  };
  return (
    <div className={styles.myPrompts}>
      <LandingPageNav />
      <section className={styles.content}>
        {loading && <Text>Loading</Text>}{" "}
        {!loading && prompts.length > 0 && (
          <div className={styles.list}>
            <Text type="subtitle" bold>
              My reports
            </Text>
            <div className={styles.table}>
              <PlansTable
                data={getFilteredPrompsList()}
                columns={[
                  { name: "Title", ordering: true },

                  { name: "Views", ordering: true },
                ]}
                onOrderClick={(name, order) => {
                  setPromptsOrder({ name, order });
                }}
                renderRow={(data) => <PlanRow key={data.id} plan={data} />}
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
      </section>
      <GradientBg opacity={15} />
    </div>
  );
};

export default MyPromps;
