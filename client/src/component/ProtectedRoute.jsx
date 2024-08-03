import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you are using Redux

const ProtectedRoute = ({ element }) => {
  const token = useSelector((state) => state.user.token); // Adjust according to your state structure

  return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
