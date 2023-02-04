import "./App.css";

import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
import { auth } from "./firebase.js";
import GenerateIdea from "./pages/GenerateIdea/GenerateIdea";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Nav from "./components/compounds/Nav/Nav";

function App() {
  const { theme } = useContext(context);

  return (
    <div className={`App ${theme}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<GenerateIdea />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 not found :C</h1>} />
      </Routes>
    </div>
  );
}

export default App;
