import React from "react";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const handlerSignout = async () => {
    try {
      await signOut(auth);
      alert("logged out!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Button onClick={handlerSignout}>
      <Text>Logout</Text>
    </Button>
  );
};

export default Logout;
