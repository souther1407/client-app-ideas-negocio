import React, { useState } from "react";
import styles from "./register.module.css";
import Text from "../../components/styled/Text/Text";
import Button from "../../components/styled/Button/Button";
import Input from "../../components/styled/Input/Input";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../services/authentication/auth";
import { START_A_BUSINESS } from "../../utils/constants/routes";
const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthUser.registerUser(input);
      alert("user created :D");
      navigate(START_A_BUSINESS);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.register}>
      <Text>Register</Text>
      <form className={styles.registerForm} onSubmit={handlerSubmit}>
        <Input label="email" id={"email"} onChange={handlerChange} />
        <Input
          label="password"
          id={"password"}
          type="password"
          onChange={handlerChange}
        />
        <Button>
          <Text>Register</Text>
        </Button>
      </form>
    </div>
  );
};

export default Register;
