import "./App.css";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
import GenerateIdea from "./pages/GenerateIdea/GenerateIdea";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Nav from "./components/compounds/Nav/Nav";
import Response from "./pages/Response/Response";
import Subscribe from "./pages/Subscribe/Subscribe";
import LandingPage from "./pages/LandingPage/LandingPage";
import PlanDetail from "./pages/PlanDetail/PlanDetail";
import {
  LOGIN,
  MAIN,
  REGISTER,
  RESPONSE,
  SUBSCRIBE,
  LANDING_PAGE,
  PLAN_DETAIL,
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
        <Route path={PLAN_DETAIL} element={<PlanDetail />} />
        <Route path={SUBSCRIBE} element={<Subscribe />} />
        <Route path="*" element={<h1>404 not found :C</h1>} />
      </Routes>
    </div>
  );
}

export default App;
