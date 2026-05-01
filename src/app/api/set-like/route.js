import { ApiError } from "@/lib/ApiError";
import PostModel from "@/models/post.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { postId, userId } = await req.json();

    if (!postId) {
      throw new ApiError("Post id is missing", 400);
    }

    const postUpdate = await PostModel.findByIdAndUpdate(postId, {
      $push: {
        likes: userId,
      },
    });

    if (!postUpdate) {
      throw new ApiError("failed to post update", 501);
    }

    return NextResponse.json(
      {
        success: true,
        message: "  post update successfully",
        status: 200,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to post update",
        status: error?.status || 401,
      },
      { status: error?.status || 400 },
    );
  }
}
