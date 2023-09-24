
import { useState } from "react";

export const useRegister= () => {
  const initialRegisterData = {
    name: "",
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleRegister= async () => {
    const {name,email, password} = registerData;
    const res = await fetch("https://eventmakers-api.vercel.app/api/auth/register",{
      method:"POST",
      body:JSON.stringify({name,email,password})
    })
    const data = await res.json();
    console.log(data);
  };

  return { registerData, handleEventChange, handleRegister};
};
