"use client";
import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const {registerData,handleEventChange,handleRegister} = useRegister();
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Daftar</h1>
        <Input name="name" placeholder="Masukan Nama Lengkap Anda" onChange={handleEventChange}/>
        <Input name="email" placeholder="Masukan email Anda" onChange={handleEventChange}/>
        <Input
          name="password"
          type="password"
          placeholder="Masukan password Anda"
          onChange={handleEventChange}
        />
        <Button color="primary" onClick={handleRegister}>Daftar</Button>
      </div>
    </main>
  );
};
