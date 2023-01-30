import "./App.css";
import Button from "./components/styled/Button/Button";
import Text from "./components/styled/Text/Text";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext, useState } from "react";
import Slider from "./components/styled/Slider/Slider";
import Input from "./components/styled/Input/Input";
import { parseData } from "./utils/parse/parseData";
import { createText } from "./services/createText/createText";
function App() {
  const { theme } = useContext(context);
  const [input, setInput] = useState({
    edad: "1",
    habilidad: "",
    ubicacion: "",
  });
  const [response, setResponse] = useState("");
  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const parsedData = parseData(input);
    const responseData = await createText(parsedData);
    setResponse(responseData);
  };
  return (
    <div className={`App ${theme}`}>
      <form className="Form" onSubmit={handlerSubmit}>
        <Text type="title">Finance Chatbot (MVP)</Text>
        <Slider label="Edad" id={"edad"} onChange={handlerChange} />
        <Input label="Habilidad" id={"habilidad"} onChange={handlerChange} />
        <Input label="Ubicación" id={"ubicacion"} onChange={handlerChange} />
        <Button>
          <Text>Generar idea de negocio</Text>
        </Button>
      </form>
      <Text>{response}</Text>
    </div>
  );
}

export default App;
