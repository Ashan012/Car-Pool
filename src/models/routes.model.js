import mongoose, { Schema } from "mongoose";

const RouteSchema = new Schema(
  {
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },

    time: {
      type: Date,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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
