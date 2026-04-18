import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import RouteModel from "@/models/routes.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const routes = await RouteModel.find();

    if (!routes) {
      throw new ApiError("failed to fetch route in DB", 501);
    }
    return NextResponse.json(
      {
        success: true,
        message: " fetch routes successfully",
        routes,
        status: 201,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to fetch routes",
        status: error?.status || 401,
      },
      { status: error?.status || 400 },
    );
  }
}
