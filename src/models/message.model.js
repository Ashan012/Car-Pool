import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    from: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    to: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const messageModel =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
