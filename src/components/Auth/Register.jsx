"use client";
import { Button, Input } from "@nextui-org/react";

export const Register = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Daftar</h1>
        <Input name="name" placeholder="Masukan Nama Lengkap Anda" />
        <Input name="email" placeholder="Masukan email Anda" />
        <Input
          name="password"
          type="password"
          placeholder="Masukan password Anda"
        />
        <Button color="primary">Daftar</Button>
      </div>
    </main>
  );
};
