import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req){
    const {email, password} = await req.json();
    try{
        //find user by email
        const findUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        //user not found
        if(!findUser){
            return NextResponse.json({error: "User tidak ditemukan"});
        }

        //Compare Password
        const hashedPassword = findUser.password;
        const isPasswordValid = await bcrypt.compare(password,hashedPassword);

        if(!isPasswordValid){
            return NextResponse.json({error:"Password salah!"});
        }
        const payload = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email
        }
        const token = jwt.sign({id: findUser.id, name:findUser.id, email:findUser.email},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
        const res =  NextResponse.json({token:token,user:payload,message:"Login sukses!"})
        res.cookies.set("token",token);
        return res;

    } catch(error){
        console.log(error);
        return NextResponse.json({error},{status:500});
    }
}