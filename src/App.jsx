import "./App.css";

import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";

import GenerateIdea from "./pages/GenerateIdea/GenerateIdea";
function App() {
  const { theme } = useContext(context);

  return (
    <div className={`App ${theme}`}>
      <GenerateIdea />
    </div>
  );
}

export default App;
