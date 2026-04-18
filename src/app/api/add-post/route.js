import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import PostModel from "@/models/post.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { content, owner } = await req.json();
  console.log(content, owner);

  if (!content || !owner) {
    return NextResponse.json(
      {
        success: false,
        message: "All feilds must required",
        status: 404,
      },
      {
        status: 404,
      },
    );
  }

  try {
    await dbConnect();

    const post = await PostModel.create({
      content,
      owner,
    });

    if (!post) {
      throw new ApiError("Failed to add post in DB", 501);
    }

    return NextResponse.json(
      {
        success: true,
        message: "add post successfully",
        post,
        status: 201,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "fail to add post  ",
        status: 500,
      },
      {
        status: 500,
      },
    );
  }
}
