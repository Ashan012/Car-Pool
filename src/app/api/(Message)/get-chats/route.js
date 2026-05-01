import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import conversationModel from "@/models/conversation.model";
import messageModel from "@/models/message.model";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/option";

export async function GET() {
  try {
    await dbConnect();
    const user = await getServerSession(authOptions);
    let userId = user._id;

    if (!user) {
      throw new ApiError("user not authorize", 404);
    }
    let conversation = await conversationModel
      .find({ participants: userId })
      .populate("participants", "username")
      .lean();

    conversation = conversation.map((conv) => ({
      ...conv,
      participants: conv.participants.filter(
        (p) => p._id.toString() !== userId.toString(),
      ),
    }));
    if (!conversation) {
      throw new ApiError("failed to fetch conversation", 501);
    }

    return NextResponse.json(
      {
        success: true,
        message: "fetch conversation successfuly",
        status: 200,
        conversation,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "fail to fetch conversation",
        status: error?.status || 500,
      },
      {
        status: error?.status || 500,
      },
    );
  }
}
