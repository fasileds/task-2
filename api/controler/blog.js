import Blog from "../model/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const getSinglBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
export const getSpecificUserBlog = async (req, res) => {
  try {
    const { userId } = req.query; // Assuming userId is an array of IDs

    const blogs = await Blog.find({ userId: { $in: userId } });

    if (!blogs.length) {
      return res
        .status(404)
        .json({ message: "No blogs found for the given user ID(s)" });
    }

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const delateBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json("blog delated sussfully");
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
