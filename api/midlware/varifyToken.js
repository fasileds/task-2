import jwt from "jsonwebtoken";
import Blog from "../model/Blog.js";

export const varifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Correct way to access the header

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    jwt.verify(token, "fasiledes", (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "Authorization header missing" });
  }
};

export const varifyUser = (req, res, next) => {
  varifyToken(req, res, async () => {
    try {
      const blog = await Blog.findById(req.params.id);

      if (!blog) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      if (blog.userId.toString() === req.user.id || req.user.isAdmin) {
        next();
      } else {
        return res
          .status(403)
          .json({ message: "You are not allowed to do that" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  });
};
