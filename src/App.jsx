import "./App.css";
import Button from "./components/styled/Button/Button";
import Text from "./components/styled/Text/Text";
import { context } from "./Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
function App() {
  const { theme } = useContext(context);
  return (
    <div className={`App ${theme}`}>
      <div className="Form">
        <Text type="title">Finance Chatbot (MVP)</Text>
        <Button>
          <Text>Hola mundo</Text>
        </Button>
      </div>
    </div>
  );
}

export default App;
