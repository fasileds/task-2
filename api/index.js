import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.listen(3001, () => {
  console.log(`the app is running in 3001`);
});

mongoose
  .connect(
    "mongodb+srv://blog:blog@cluster0.fvctclq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb connected scssfully");
  });

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
