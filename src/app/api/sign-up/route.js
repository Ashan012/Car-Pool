import { dbConnect } from "@/lib/dbconnect";
import UserModel from "@/models/user.model.js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ApiError } from "@/lib/ApiError.js";

export async function POST(req) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    throw new ApiError("All feilds must required", 401);
  }

  try {
    await dbConnect();

    const existingUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      throw new ApiError("Email is Already Exist", 401);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!user) {
      throw new ApiError("Failed to create user", 500);
    }

    return NextResponse.json({
      success: true,
      message: "Account Create Sucessfully",
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Account Creation Failed",
        status: error?.status || 404,
      },
      {
        status: error?.status || 400,
      },
    );
  }
}
