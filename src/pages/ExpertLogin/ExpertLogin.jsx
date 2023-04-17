import React, { useState } from "react";
import LabeledInput from "../../components/molecules/LabeledInput/LabeledInput";
import styles from "./expertLogin.module.css";
import Button from "../../components/atoms/Button/Button";
import Text from "../../components/atoms/Text/Text";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { EXPERT_DASHBOARD } from "../../utils/constants/routes";
const ExpertLogin = () => {
  const { login } = useLogin({ type: "experts" });
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input.email, input.password);
      navigate(EXPERT_DASHBOARD);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.expertLogin}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <LabeledInput
          variant="borderBottom"
          label="email"
          onChange={handleChange}
          onErrors={() => {}}
          id={"email"}
        />
        <LabeledInput
          variant="borderBottom"
          label="password"
          onChange={handleChange}
          onErrors={() => {}}
          type="password"
          id={"password"}
        />
        <Button>
          <Text>Log in</Text>
        </Button>
      </form>
    </div>
  );
};

export default ExpertLogin;
