import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function GET(){
    try{
        const user = await prisma.user.findMany();
        return NextResponse.json({data:user});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({message:"Error"}, {status:500})
    }
}

export async function POST(req) {
  const { name, email, password } = await req.json();
  try {
    const hashedPassword = await bcrypt.hash(password,10);
    const createUser= await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      { message: "User created succesfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
