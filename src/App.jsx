import "./App.css";
import Button from "./components/styled/Button/Button";
import Text from "./components/styled/Text/Text";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
import Slider from "./components/styled/Slider/Slider";
import Input from "./components/styled/Input/Input";

function App() {
  const { theme } = useContext(context);

  return (
    <div className={`App ${theme}`}>
      <div className="Form">
        <Text type="title">Finance Chatbot (MVP)</Text>
        <Slider label="Edad" />
        <Input label="Habilidad" />
        <Input label="Ubicación" />
        <Button>
          <Text>Generar idea de negocio</Text>
        </Button>
      </div>
    </div>
  );
}

export default App;
