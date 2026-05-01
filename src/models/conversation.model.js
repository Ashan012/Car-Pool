import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMessage: {
      type: String,
      default: "Draft",
    },
  },
  { timestamps: true },
);

const conversationModel =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);

export default conversationModel;
