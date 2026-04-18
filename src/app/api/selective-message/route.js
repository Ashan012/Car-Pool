import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import messageModel from "@/models/message.model";

export async function GET(req) {
  try {
    const { senderId, reciverId } = await req.json();

    if (!senderId || !reciverId) {
      throw new ApiError("All feilds must required", 401);
    }
    await dbConnect();

    const messages = await messageModel.find({ from: senderId, to: reciverId });
    if (!messages) {
      throw new ApiError("failed to fetch messages", 501);
    }

    return NextResponse.json(
      {
        success: true,
        message: " fetch message Successfully",
        messages,
        status: 200,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to fetch selective message",
        status: error?.status || 401,
      },
      { status: error?.status || 400 },
    );
  }
}
