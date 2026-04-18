import { ApiError } from "@/lib/ApiError";
import { dbConnect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import RouteModel from "@/models/routes.model";

export async function POST(req) {
  try {
    const { to, from, seats, price, time, phone, owner, vehicle } =
      await req.json();

    if (
      !to ||
      !from ||
      !seats ||
      !price ||
      !time ||
      !phone ||
      !owner ||
      !vehicle
    ) {
      throw new ApiError("All feild are required", 404);
    }
    await dbConnect();

    const addRoute = await RouteModel.create({
      to,
      from,
      seats,
      price,
      time,
      phone,
      owner,
      vehicle,
    });
    if (!addRoute) {
      throw new ApiError("failed to addroute in DB", 501);
    }
    return NextResponse.json(
      {
        success: true,
        message: " add route successfully",
        addRoute,
        status: 201,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to add route api",
        status: error?.status || 401,
      },
      { status: error?.status || 400 },
    );
  }
}
