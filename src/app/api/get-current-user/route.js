import { ApiError } from "@/lib/ApiError";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/option";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new ApiError("User not Authorize", 404);
    }
    return NextResponse.json(
      {
        success: true,
        message: "User Authorize Successfully",
        session,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "User Not Authorize",
        status: 404,
      },
      {
        status: 404,
      },
    );
  }
}
