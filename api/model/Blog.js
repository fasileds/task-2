import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  userId: {
    type: Array,
    default: [],
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
