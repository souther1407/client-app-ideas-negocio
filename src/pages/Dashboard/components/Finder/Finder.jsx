import React, { useEffect, useState } from "react";
import styles from "./finder.module.css";
import PlansTable from "../../../../components/organisms/PlansTable/PlansTable";
import Paginator from "../../../../components/organisms/Paginator/Paginator";
import { getPublicPrompts } from "../../../../services/userPrompts/getPrompts";
import Text from "../../../../components/atoms/Text/Text";
import { MY_PROMPTS_DETAIL } from "../../../../utils/constants/routes";
import usePromptDetail from "../../../../states/prompDetail";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../../../../components/atoms/CheckBox/CheckBox";
import { toggleAddMyPrompts } from "../../../../services/userPrompts/toggleAddMyPrompts";
import LandingPageNav from "../../../../components/organisms/LandingPageNav/LandingPageNav";
import GradientBg from "../../../../components/atoms/GradientBg/GradientBg";

const PlanRow = ({ plan, onToggle }) => {
  const { details, input, id, userId, isPublic, inMyReports } = plan;

  const setPromptDetail = usePromptDetail((state) => state.setPromptDetail);
  const navigate = useNavigate();

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

  const handleCheckBox = async () => {
    try {
      const done = await toggleAddMyPrompts({
        userId: userId,
        promptId: id,
      });
      alert("listo");
    } catch (error) {
      alert(error.message);
    }
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
        <Checkbox
          className="border-neutral-700 w-[24px] h-[24px]"
          defaultChecked={inMyReports}
          onCheckedChange={handleCheckBox}
        />
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
      <LandingPageNav />
      <section className={styles.content}>
        {loading && <Text>Cargando...</Text>}{" "}
        {!loading && prompts.length > 0 && (
          <div className={styles.list}>
            <Text type="subtitle">Reports finder</Text>
            <div className={styles.table}>
              <PlansTable
                data={getFilteredPrompsList()}
                columns={["Title", "Country", "Budget", "adds", "Add"]}
                renderRow={(data) => (
                  <PlanRow plan={data} onToggle={() => {}} />
                )}
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

export default Finder;
