import { dbConnect } from "@/lib/dbconnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/option";
import { ApiError } from "@/lib/ApiError";

export async function GET() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new ApiError("user not Authorize", 404);
    }
    const userId = session._id;

    const allMessage = await messageModel
      .find({
        $or: [{ from: userId }, { to: userId }],
      })
      .lean();

    if (!allMessage) {
      throw new ApiError("Failed to add message", 501);
    }
    return NextResponse.json(
      {
        success: true,
        message: "fetch All message Successfully",
        allMessage,
        status: 201,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to fetch All message",
        status: error?.status || 401,
      },
      { status: error?.status || 401 },
    );
  }
}
