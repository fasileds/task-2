import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";
import { useSelector } from "react-redux";

export default function MyBlogs() {
  const user = useSelector((state) => state.user.user);
  const [blogs, setBlogs] = useState([]);
  console.log(user._id);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const queryString = new URLSearchParams({
          userId: user._id[1],
        }).toString();
        const response = await axios.get(
          `http://localhost:3001/api/blog/userBlog?userId=66adbc64bc1a049cc9361daf`
        );

        setBlogs(response.data); // Update state with fetched blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, [user._id]);
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-between flex-wrap">
        {blogs.map((item) => (
          <Card item={item} />
        ))}
        <Footer />
      </div>
    </div>
  );
}
