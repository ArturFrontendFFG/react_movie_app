import { useState } from "react";
import { ecryptedPassword } from "../components/screens/signup/ecryptedPassword";

export const useReg = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const data = {
    name: name,
    lastname: lastname,
    email: email,
    password: ecryptedPassword(password),
  };

  return {
    setName,
    setLastName,
    setEmail,
    setPassword,
    data,
  };
};
