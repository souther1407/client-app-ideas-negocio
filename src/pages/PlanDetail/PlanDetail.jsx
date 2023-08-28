import React, { useEffect, useState } from "react";
import styles from "./planDetail.module.css";
import Text from "../../components/atoms/Text/Text";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import DetailCard from "./components/DetailCard/DetailCard";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import { formatStringToShort } from "../../utils/format/formatStringToShort";
import { useLogin } from "../../hooks/useLogin";
import InputSection from "./components/InputSection/InputSection";
import { useNavigate, useParams } from "react-router-dom";
import { PLAN_DETAIL, LANDING_PAGE } from "../../utils/constants/routes";
import imgMarketAnalisis from "../../assets/icon4.svg";
import imgCosts from "../../assets/icon5.svg";
import imgMarketingPlan from "../../assets/icon3.svg";
import imgProductMin from "../../assets/icon1.svg";
import imgTeam from "../../assets/icon2.svg";
import imgCompetition from "../../assets/icon6.svg";
import { Switch } from "../../components/atoms/Switch/Switch";
import { Checkbox } from "../../components/atoms/CheckBox/CheckBox";
import { useStorage } from "../../hooks/useStorage";
import { changeVisibility } from "../../services/userPrompts/chageVisibily";
import { toggleAddMyPrompts } from "../../services/userPrompts/toggleAddMyPrompts";
import { addView } from "../../services/userPrompts/addView";
import usePromptDetail from "../../states/prompDetail";
import { getById } from "../../services/userPrompts/getPrompts";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Link from "../../components/atoms/Link/Link";
import { useReportUrl } from "../../states/reportUrl";

const PlanDetail = () => {
  const navigate = useNavigate();
  const { isLogged, userData } = useLogin({});
  const { save } = useStorage();
  const { id, user } = useParams();
  const setPromptDetail = usePromptDetail((state) => state.setPromptDetail);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const setUrl = useReportUrl((state) => state.setUrl);

  useEffect(() => {
    setUrl(window.location.href);
    getById(id, user)
      .then((prompt) => {
        if (!isLogged() && !prompt.isPublic) {
          return navigate(LANDING_PAGE);
        }
        setPromptDetail(prompt);
        setResponse(prompt);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, []);
  const handleSwitch = async (value) => {
    try {
      await changeVisibility({ promptId: response.id, visibility: value });
      setResponse((prev) => ({ ...prev, isPublic: value }));
      alert(value ? "report set to public" : "report set to private");
    } catch (error) {
      alert("someting went wrong, try again");
    }
  };

  const handleCheckBox = async () => {
    try {
      const done = await toggleAddMyPrompts({
        userId: response.userId,
        promptId: response.id,
      });
      alert("listo");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    save("PLAN_DETAIL_URL", window.location.pathname);
    try {
      addView({ userId: response.userId, promptId: response.id });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className={styles.planDetail}>
      {!loading && (
        <section className={styles.content}>
          <LandingPageNav />

          <section className={styles.description}>
            <section className={styles.header}>
              <div className={styles.info}>
                <div className={styles.title}>
                  <Text type="title" bold size={"1.5rem"}>
                    {response.details.title}
                  </Text>
                  {isLogged() && (
                    <div className={styles.inputsHeader}>
                      {userData.uid === response.userId ? (
                        <div style={{ display: "flex" }}>
                          <div className={styles.privatePublicSwitch}>
                            <Text>Private</Text>
                            <Switch
                              defaultChecked={response.isPublic}
                              className="data-[state=checked]:bg-neutral-400"
                              onCheckedChange={handleSwitch}
                            />
                            <Text>Public</Text>
                          </div>
                          {response.isPublic && (
                            <div className={styles.shareLinks}>
                              <Link
                                to={`https://twitter.com/intent/tweet?url=${window.location.href}&text=mira`}
                                extern
                                target="_blank"
                              >
                                <IconButton icon={"twitter"} size="1.2rem" />
                              </Link>
                              <Link
                                to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                extern
                                target="_blank"
                              >
                                <IconButton icon={"facebook"} size="1.2rem" />
                              </Link>
                              <Link
                                to={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                                extern
                                target="_blank"
                              >
                                <IconButton icon={"linkedin"} size="1.2rem" />
                              </Link>
                              <IconButton
                                icon={"clip"}
                                size="1.2rem"
                                onClick={async () => {
                                  await navigator.clipboard.writeText(
                                    window.location.href
                                  );
                                  alert("copiado");
                                }}
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={styles.addToFavorites}>
                          <Checkbox
                            defaultChecked={response.inMyReports}
                            onCheckedChange={handleCheckBox}
                            className="border-neutral-700 w-[40px] h-[40px]"
                          />
                          <Text>Add to my reports</Text>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Text>{response.details.description}</Text>
              </div>
            </section>
            <section className={styles.cardsDetail}>
              <DetailCard
                title={response.title}
                sectionName={"Competition"}
                id="marketAnalisis"
                onShowDetail={() => navigate(PLAN_DETAIL + "/competitions")}
                img={imgCompetition}
              />
              <DetailCard
                title={response.title}
                sectionName={"Target customer"}
                id="marketAnalisis"
                onShowDetail={() => navigate(PLAN_DETAIL + "/targetCustomer")}
                img={imgMarketAnalisis}
              />
              <DetailCard
                title={response.title}
                sectionName={"Product Development"}
                id={"prices"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/mvp")}
                img={imgProductMin}
              />
              <DetailCard
                title={response.title}
                sectionName={"Marketing Plan"}
                id={"marketingPlan"}
                onShowDetail={() => navigate(PLAN_DETAIL + "/marketingPlan")}
                img={imgMarketingPlan}
              />
            </section>
            <section className={styles.inputUser}>
              <InputSection
                freeTime={formatStringToShort(response?.input?.freeTime)}
                budget={formatStringToShort(response?.input?.budget)}
                location={formatStringToShort(response?.input?.location)}
                skills={formatStringToShort(response?.input?.skills)}
                teacher={formatStringToShort(response?.input?.teacher)}
              />
            </section>
          </section>
        </section>
      )}
      <GradientBg opacity={16} />
    </div>
  );
};

export default PlanDetail;
