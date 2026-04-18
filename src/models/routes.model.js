import mongoose, { Schema } from "mongoose";

const RouteSchema = new Schema(
  {
    to: {
      type: String,
      required: true,
      trim: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
    },

    time: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    seats: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    vehicle: {
      type: String,
      enum: ["Bus", "Car", "Bike"],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const RouteModel =
  mongoose.models.Route || mongoose.model("Route", RouteSchema);

export default RouteModel;
