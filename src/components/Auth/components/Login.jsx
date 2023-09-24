"use client";
import { Button, Input } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";


export const Login = () => {
  const {loginData,handleEventChange,handleLogin} = useLogin();
  return (
    <main className="h-screen flex justify-center items-center">
    <div className="w-[260px] space-y-2">
      <h1>Login</h1>
      <Input name="email" placeholder="Masukan email Anda" onChange={handleEventChange} />
      <Input
        name="password"
        type="password"
        placeholder="Masukan password Anda"
        onChange={handleEventChange}
      />
      <Button color="primary" onClick={handleLogin}>Masuk</Button>
    </div>
    </main>
  );
};
