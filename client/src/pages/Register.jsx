import React, { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnClick = async (e) => {
    e.preventDefault(); // Prevent form default submission
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        {
          userName,
          email,
          password,
        }
      );
      console.log(response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  if (success) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <NavBar />
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleOnClick}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign up to our platform
          </h5>
          <div>
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your userName
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name="userName"
              id="userName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="user name ........."
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <a
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Log in to your account
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
