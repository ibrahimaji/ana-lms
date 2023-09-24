import { NextResponse } from "next/server";
import * as jose from "jose"; 

export default async function middleware(request) {
  const token = request.token
  const secretKey = new TextEncoder().encode("secret1234567890");
  console.log(secretKey);
  try {
    const isValid = await jose.jwtVerify(token, secretKey);
    console.log(isValid);
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: "/dashboard/:path*",
};
