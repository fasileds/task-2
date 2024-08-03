import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Link, Navigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function SingleProductPage() {
  const location = useLocation();
  const [deleted, setDeleted] = useState(false);
  const pathParts = location.pathname.split("/"); // Split pathname
  const id = pathParts[2]; // Extract id from the path parts

  const [singleBlog, setSingleBlog] = useState({});
  const handleOnClick = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/blog/deleate/${id}`);
      setDeleted(true);
    } catch (error) {
      console.error("Error deleting the item:", error);
    }
  };

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const res = await axios(`http://localhost:3001/api/blog/${id}`);
        setSingleBlog(res.data); // Set the state with the data
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      getSingleBlog(); // Fetch the blog only if id is available
    }
  }, [id]);
  if (deleted) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center p-4">
        <div className="flex-1 flex justify-center">
          <img
            src={singleBlog.img}
            alt={singleBlog.title || "Blog Image"}
            className="w-400 h-400 rounded-2xl object-cover"
            style={{ width: "400px", height: "400px", borderRadius: "20px" }}
          />
        </div>

        <div className="flex-1 p-4">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {singleBlog.title}
            </h1>
            <p className="text-gray-600">{singleBlog.desc}</p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={handleOnClick}
              className="bg-red-500 text-white py-2 px-4 m-2 rounded"
            >
              Delete
            </button>
            <Link to={`/updatePage/${id}`}>
              <button className="bg-green-500 text-white py-2 px-4 m-2 rounded">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
