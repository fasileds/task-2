import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";

export default function Products() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/blog");
        const sortedBlogs = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ); // Sort blogs by date
        setBlogs(sortedBlogs); // Get the top 3 most recent blogs
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        // Handle error here, e.g., set an error state
      }
    };
    getBlogs();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-between flex-wrap p-7 m-11">
        {blogs.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
