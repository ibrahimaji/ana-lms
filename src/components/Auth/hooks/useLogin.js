
import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading,setLoading] = useState(false);
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
    setLoading(true);
    toast.loading("Logging in...")
    const {email, password} = loginData;
    const res = await fetch("/api/v1/auth/login",{
      method:"POST",
      body:JSON.stringify({email,password})
    })
    const {data, error}= await res.json();
    // Cookies.set("token",data.token);
    
    //handling error
    if(error){
      setLoading(false)
      toast.remove();
      toast.error(error);
      console.log(error);
      return;
    }
    setLoading(false)
    toast.remove();
    toast.success("Login Success!")
    console.log(data);
  };

  return { loading, loginData, handleEventChange, handleLogin };
};
