import mongoose from "mongoose";
const likesSchema = mongoose.Schema(
  {
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "detaillikes" }
);

export default mongoose.model("Likes", likesSchema);
