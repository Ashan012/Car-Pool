import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import PostModel from "@/models/post.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const posts = await PostModel.find().populate("owner").select("-password");

    if (!posts) {
      throw new ApiError("failed to fetch route in DB", 501);
    }
    return NextResponse.json(
      {
        success: true,
        message: " fetch posts successfully",
        posts,
        status: 201,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to fetch posts",
        status: error?.status || 401,
      },
      { status: error?.status || 400 },
    );
  }
}
