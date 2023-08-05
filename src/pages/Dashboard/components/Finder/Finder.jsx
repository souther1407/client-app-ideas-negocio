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
import Combobox from "../../../../components/molecules/Combobox/Combobox";
import { countries } from "../../../../utils/constants/countries";
import Menu from "../../../../components/molecules/Menu/Menu";

const PlanRow = ({ plan, onToggle }) => {
  const { details, input, id, userId, isPublic, inMyReports, adds } = plan;

  const navigate = useNavigate();
  const { setPromptDetail } = usePromptDetail((state) => state);

  const goToPlanDetail = () => {
    setPromptDetail(plan);
    navigate(MY_PROMPTS_DETAIL + `/${id}/${userId}`);
  };

  const handleCheckBox = async () => {
    try {
      const done = await toggleAddMyPrompts({
        userId: userId,
        promptId: id,
      });
      alert("listo");
      onToggle(!inMyReports);
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
        <Text>{adds}</Text>
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
  const [promptsOrder, setPromptsOrder] = useState({});
  const [filters, setFilters] = useState({
    byCountry: "",
    byBudget: {
      lessThan100: false,
      between100and500: false,
      greaterThan500: false,
    },
  });
  useEffect(() => {
    const initPrompts = async () => {
      try {
        const data = await getPublicPrompts();
        setPrompts(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    initPrompts();
  }, []);

  const orderings = {
    Title: (a, b) => {
      const aTitle = a.details.title.toLowerCase();
      const bTitle = b.details.title.toLowerCase();
      return aTitle.localeCompare(bTitle);
    },
    Country: (a, b) => {
      const aCountry = a.input.location.toLowerCase();
      const bCountry = b.input.location.toLowerCase();
      return aCountry.localeCompare(bCountry);
    },
    Budget: (a, b) => {
      return a.input.budget - b.input.budget;
    },
    Adds: (a, b) => {
      return a.adds - b.adds;
    },
  };
  const getOrderedPrompsList = () => {
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
  const getFilteredPromptsList = () => {
    let ordereds = getOrderedPrompsList();
    if (filters.byCountry)
      ordereds = ordereds.filter(
        (p) =>
          p.input.location.toLowerCase() === filters.byCountry.toLowerCase()
      );
    const byBudgetFilter =
      filters.byBudget.between100and500 ||
      filters.byBudget.greaterThan500 ||
      filters.byBudget.lessThan100;
    if (byBudgetFilter) {
      ordereds = ordereds.filter((p) => {
        const lessThan100 =
          filters.byBudget.lessThan100 && p.input.budget < 100;
        const between100and500 =
          filters.byBudget.between100and500 &&
          p.input.budget >= 100 &&
          p.input.budget <= 500;
        const greaterThan500 =
          filters.byBudget.greaterThan500 && p.input.budget > 500;
        return lessThan100 || between100and500 || greaterThan500;
      });
    }
    return ordereds;
  };
  const toggleBudgetFilter = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      byBudget: { ...prev.byBudget, [filterName]: !prev.byBudget[filterName] },
    }));
  };
  return (
    <div className={styles.myPrompts}>
      <LandingPageNav />
      <section className={styles.content}>
        {loading && <Text>Loading...</Text>}
        {!loading && prompts.length > 0 && (
          <div className={styles.list}>
            <Text type="subtitle">Reports finder</Text>
            <Text color="soft">
              Business reports generated by entepreneurs around the world
            </Text>
            <div className={styles.filters}>
              <Combobox
                nofoundText={"not country found"}
                title={"Country"}
                data={countries}
                id={"location"}
                w="200px"
                onSelect={(_, country) => {
                  setFilters((prev) => ({ ...prev, byCountry: country }));
                }}
              />
              <div>
                <Menu
                  title={"budget"}
                  elements={[
                    () => (
                      <div className={styles.budgetFilterItem}>
                        <Checkbox
                          className="border-neutral-700 w-[24px] h-[24px]"
                          onCheckedChange={() =>
                            toggleBudgetFilter("lessThan100")
                          }
                        />
                        <Text>{"< $100"}</Text>
                      </div>
                    ),
                    () => (
                      <div className={styles.budgetFilterItem}>
                        <Checkbox
                          className="border-neutral-700 w-[24px] h-[24px]"
                          onCheckedChange={() =>
                            toggleBudgetFilter("between100and500")
                          }
                        />

                        <Text>{"$100 - $500"}</Text>
                      </div>
                    ),
                    () => (
                      <div className={styles.budgetFilterItem}>
                        <Checkbox
                          className="border-neutral-700 w-[24px] h-[24px]"
                          onCheckedChange={() =>
                            toggleBudgetFilter("greaterThan500")
                          }
                        />
                        <Text>{"> $500"}</Text>
                      </div>
                    ),
                  ]}
                />
              </div>
            </div>
            <div className={styles.table}>
              <PlansTable
                data={getFilteredPromptsList()}
                columns={[
                  { name: "Title", ordering: true },
                  { name: "Country", ordering: true },
                  { name: "Budget", ordering: true },
                  { name: "Adds", ordering: true },
                  { name: "Add", ordering: false },
                ]}
                onOrderClick={(name, order) => {
                  setPromptsOrder({ name, order });
                }}
                renderRow={(data) => (
                  <PlanRow
                    key={data.id}
                    plan={data}
                    onToggle={(value) => {
                      setPrompts(
                        prompts.map((p) => {
                          if (p.id == data.id) {
                            return {
                              ...p,
                              adds: value ? p.adds + 1 : p.adds - 1,
                              inMyReports: value,
                            };
                          }
                          return p;
                        })
                      );
                    }}
                  />
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
