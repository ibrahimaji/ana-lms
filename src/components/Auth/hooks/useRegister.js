
import { useState } from "react";
import toast from "react-hot-toast";
 
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
    toast.loading("Sedang register...");
    const {name,email, password} = registerData; 
    const res  = await fetch("/api/v1/auth/register",{
      method:"POST",    
      body:JSON.stringify({name,email,password})
    }) 
    const {data,message,error} = await res.json();
    if(error){
      toast.remove();
      toast.error("Email sudah ada");
      return
    }
    toast.remove();
    toast.success(message);
  };
 
  return { registerData, handleEventChange, handleRegister};
};
