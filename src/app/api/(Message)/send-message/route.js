import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import conversationModel from "@/models/conversation.model";
import messageModel from "@/models/message.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { senderId, reciverId, message } = await req.json();

    console.log(senderId, reciverId, message);
    if (!senderId || !reciverId || !message) {
      throw new ApiError("failed to recive data from frontend", 401);
    }

    await dbConnect();
    let conversation = await conversationModel.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    if (!conversation) {
      conversation = await conversationModel.create({
        participants: [senderId, reciverId],
      });

      if (!conversation) {
        throw new ApiError("failed to create conversation ", 500);
      }
    }

    const sendMessage = await messageModel.create({
      conversationId: conversation._id,
      message,
      senderId,
    });
    if (!sendMessage) {
      throw new ApiError("failed to send message ", 500);
    }

    conversation.lastMessage = message;
    conversation.save();
    return NextResponse.json(
      {
        success: true,
        message: "send message successfuly",
        sendMessage,
        status: 200,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "fail to send message",
        status: error?.status || 400,
      },
      {
        status: error?.status || 400,
      },
    );
  }
}
