import React, { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import axios from "axios";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const handleOnclick = async () => {
    const blog = await axios.post("http://localhost:3001/api/blog/createBlog", {
      title,
      img: imageUrl,
      desc,
      userId: "66adbc64bc1a049cc9361daf",
    });
  };

  return (
    <div>
      <NavBar />

      <form className="m-14">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image
            </label>
            <input type="file" id="last_name" required />
          </div>

          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              image URL
            </label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your description here..."
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          onClick={handleOnclick}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
}
