import React, { useState } from "react";
import styles from "./register.module.css";
import Text from "../../components/styled/Text/Text";
import Button from "../../components/styled/Button/Button";
import Input from "../../components/styled/Input/Input";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, input.email, input.password);
      alert("user created :D");
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
