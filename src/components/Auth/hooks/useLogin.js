
import { useState } from "react";

export const useLogin = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLogin = async () => {
    const {email, password} = loginData;
    const res = await fetch("https://eventmakers-api.vercel.app/api/auth/login",{
      method:"POST",
      body:JSON.stringify({email,password})
    })
    const data = await res.json();
    console.log(data);
  };

  return { loginData, handleEventChange, handleLogin };
};
