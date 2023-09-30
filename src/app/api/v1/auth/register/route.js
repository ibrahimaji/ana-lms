import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

export async function GET(){
    try{
        const user = await prisma.user.findMany();
        return NextResponse.json({data:user});
    }
    catch(error){
        return NextResponse.json({error}, {status:500})
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
      {data:createUser, message: "User sukses dibuat!" },
      { status: 201 }
    );
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      if(error.code === 'P2002'){
      console.log(error);
      }
    }
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
