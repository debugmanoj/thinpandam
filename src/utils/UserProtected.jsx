import React from "react";
import { Navigate } from "react-router-dom";
function UserProtected({ children }) {
  let role = sessionStorage.getItem("role");
  return role === "user" ? children : <Navigate to="/NotAllowed" />;
}

export default UserProtected;
