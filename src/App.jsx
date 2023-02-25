import "./App.css";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
import GenerateIdea from "./pages/GenerateIdea(deprecated)/GenerateIdea";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Nav from "./components/compounds/Nav/Nav";
import Response from "./pages/Response/Response";
import Subscribe from "./pages/Subscribe/Subscribe";
import LandingPage from "./pages/LandingPage/LandingPage";
import PlanDetail from "./pages/PlanDetail/PlanDetail";
import StartABusiness from "./pages/StartABusiness/StartABusiness";
import PlanResult from "./pages/PlanResult/PlanResult";
import Example1 from "./pages/Example1/Example1";
import Example2 from "./pages/Example2/Example2";
import Example3 from "./pages/Example3/Example3";
import {
  LOGIN,
  MAIN,
  REGISTER,
  RESPONSE,
  SUBSCRIBE,
  LANDING_PAGE,
  PLAN_DETAIL,
  START_A_BUSINESS,
  PLAN_EXAMPLE_1,
  PLAN_EXAMPLE_2,
  PLAN_EXAMPLE_3,
} from "./utils/constants/routes";
function App() {
  const { theme } = useContext(context);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path={LANDING_PAGE} element={<LandingPage />} />
        <Route path={MAIN} element={<GenerateIdea />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={RESPONSE} element={<Response />} />
        <Route path={PLAN_DETAIL} element={<PlanResult />} />
        <Route path={SUBSCRIBE} element={<Subscribe />} />
        <Route path={START_A_BUSINESS} element={<StartABusiness />} />
        <Route path={PLAN_EXAMPLE_1} element={<Example1 />} />
        <Route path={PLAN_EXAMPLE_2} element={<Example2 />} />
        <Route path={PLAN_EXAMPLE_3} element={<Example3 />} />
        <Route path="*" element={<h1>404 not found :C</h1>} />
      </Routes>
    </div>
  );
}

export default App;
