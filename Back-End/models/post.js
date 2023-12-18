import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
