import "./App.css";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
import GenerateIdea from "./pages/GenerateIdea(deprecated)/GenerateIdea";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Response from "./pages/Response/Response";
import Subscribe from "./pages/Subscribe/Subscribe";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartABusiness from "./pages/StartABusiness/StartABusiness";
import PlanResult from "./pages/PlanResult/PlanResult";
import ChooseBusiness from "./pages/ChooseBusiness/ChooseBusiness";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyPromptDetail from "./pages/MyPromptDetail/MyPromptDetail";
import Success from "./pages/Success/Success";
import RedirectEnterByAffiliateLink from "./pages/RedirectEnterByAffiliateLink/RedirectEnterByAffiliateLink";
import ConfigPaymentMethod from "./pages/ConfigPaymentMethod/ConfigPaymentMethod";
import ExpertDashboard from "./pages/ExpertDashboard/ExpertDashboard";
import ExpertLogin from "./pages/ExpertLogin/ExpertLogin";
import Affiliate from "./pages/Affiliate/Affiliate";
import PlanSectionDetail from "./pages/PlanSectionDetail/PlanSectionDetail";
import {
  LOGIN,
  MAIN,
  REGISTER,
  RESPONSE,
  SUBSCRIBE,
  LANDING_PAGE,
  PLAN_DETAIL,
  START_A_BUSINESS,
  AFFILIATE,
  CHOOSE_BUSINESS,
  DASHBOARD,
  MY_PROMPTS_DETAIL,
  AFFILIATE_LINK,
  ACTIVATE_SUCCESS,
  PAYMENT_METHOD,
  EXPERT_DASHBOARD,
  EXPERT_LOGIN,
} from "./utils/constants/routes";
function App() {
  const { theme } = useContext(context);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path={LANDING_PAGE} element={<LandingPage />} />
        <Route path={LOGIN} element={<LoginRegister />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={RESPONSE} element={<Response />} />
        <Route path={PLAN_DETAIL} element={<PlanResult />} />
        <Route path={SUBSCRIBE} element={<Subscribe />} />
        <Route path={START_A_BUSINESS} element={<StartABusiness />} />
        <Route path={AFFILIATE} element={<Affiliate />} />
        <Route path={CHOOSE_BUSINESS} element={<ChooseBusiness />} />
        <Route path={DASHBOARD + "/:section"} element={<Dashboard />} />
        <Route path={MY_PROMPTS_DETAIL + "/:id"} element={<MyPromptDetail />} />
        <Route path={ACTIVATE_SUCCESS} element={<Success />} />
        <Route
          path={PLAN_DETAIL + "/:section"}
          element={<PlanSectionDetail />}
        />
        <Route path={PAYMENT_METHOD} element={<ConfigPaymentMethod />} />
        <Route
          path={AFFILIATE_LINK}
          element={<RedirectEnterByAffiliateLink />}
        />
        <Route path={EXPERT_DASHBOARD} element={<ExpertDashboard />} />
        <Route path={EXPERT_LOGIN} element={<ExpertLogin />} />
        <Route path="*" element={<h1>404 not found :C</h1>} />
      </Routes>
    </div>
  );
}

export default App;
