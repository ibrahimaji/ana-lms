"use client";
import { Button, Input } from "@nextui-org/react";

export const Login = () => {
  return (
    <main className="h-screen flex justify-center items-center">
    <div className="w-[260px] space-y-2">
      <h1>Login</h1>
      <Input name="email" placeholder="Masukan email Anda" />
      <Input
        name="password"
        type="password"
        placeholder="Masukan password Anda"
      />
      <Button color="primary">Masuk</Button>
    </div>
    </main>
  );
};
