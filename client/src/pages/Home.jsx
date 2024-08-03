import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Slider from "../component/Slider";
import Card from "../component/Card";
import Footer from "../component/Footer";
import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/blog");
        const sortedBlogs = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ); // Sort blogs by date
        setBlogs(sortedBlogs.slice(0, 3)); // Get the top 3 most recent blogs
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
      <Slider />
      <div className="flex items-center justify-between ">
        {blogs.length > 0 ? (
          blogs.map((item) => (
            <Card key={item.id} item={item} /> // Ensure unique key prop if item.id is unique
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
