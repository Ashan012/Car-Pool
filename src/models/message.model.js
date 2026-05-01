import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    conversationId: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
const messageModel =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
