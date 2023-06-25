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
  const goToPlanDetail = () => {
    setPromptDetail({
      id,
      userId,
      isPublic,
      inMyReports,
      ...plan.details,
      input: plan.input,
    });
    navigate(MY_PROMPTS_DETAIL + `/${id}`);
  };
  return (
    <>
      <td>
        <Text onClick={goToPlanDetail}>
          {formatStringToShort(details.description, 25)}
        </Text>
      </td>
      <td>
        <Text>{isPublic ? "public" : "private"}</Text>
      </td>
      <td>
        <Text>{views}</Text>
      </td>
      <td>
        <IconButton size="16px" icon={"trash"} onClick={handleDelete} />
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
        {loading && <Text>Cargando...</Text>}{" "}
        {!loading && prompts.length > 0 && (
          <div className={styles.list}>
            <Text type="subtitle">My reports</Text>
            <div className={styles.table}>
              <PlansTable
                data={getFilteredPrompsList()}
                columns={[
                  { name: "Title", ordering: true },
                  { name: "Status", ordering: true },
                  { name: "Views", ordering: true },
                  { name: "", ordering: false },
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
