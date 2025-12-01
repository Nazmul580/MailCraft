import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    await dbConnect();

    // check existing user
    const exist = await User.findOne({ email });
    if (exist)
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 409 }
      );

    const hash = await bcrypt.hash(password, 10);

    let user = await User.create({
      name,
      email,
      password: hash,
    });

    user.password = null;

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
