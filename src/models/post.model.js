import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true },
);

const PostModel = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default PostModel;
