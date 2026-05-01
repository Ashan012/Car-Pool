import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import conversationModel from "@/models/conversation.model";
import messageModel from "@/models/message.model";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/option";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const reciverId = searchParams.get("reciverId");

    await dbConnect();
    let senderId = await getServerSession(authOptions);
    senderId = senderId._id;
    if (!senderId || !reciverId) {
      throw new ApiError("cannot find id ", 401);
    }

    let conversation = await conversationModel
      .findOne({
        participants: { $all: [senderId, reciverId] },
      })
      .populate("participants", "username")
      .lean();
    if (conversation == null) {
      return NextResponse.json(
        {
          success: true,
          message: "no message find",
          status: 200,
        },
        {
          status: 200,
        },
      );
    }
    const messages = await messageModel.find({
      conversationId: conversation._id,
    });
    return NextResponse.json(
      {
        success: true,
        message: " message fetch successfully",
        status: 200,
        messages,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "fail to fetch message",
        status: error?.status || 400,
      },
      {
        status: error?.status || 500,
      },
    );
  }
}
