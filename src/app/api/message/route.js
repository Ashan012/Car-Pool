import { ApiError } from "@/lib/ApiError";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import { NextResponse } from "next/server";
import messageModel from "@/models/message.model";

export async function POST(req) {
  try {
    const { senderId, reciverId, content } = await req.json();

    if (!senderId || !reciverId || !content) {
      throw new ApiError("All feilds are required", 401);
    }

    const message = await messageModel.create({
      from: senderId,
      to: reciverId,
      content,
    });

    if (!message) {
      throw new ApiError("Failed to Add message in DB", 501);
    }
    return NextResponse.json(
      {
        success: false,
        message: "Send Message Successfully",
        status: 201,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to add message",
        status: error?.status || 401,
      },
      { status: error?.status || 401 },
    );
  }
}
