import React from "react";
import { Navigate } from "react-router-dom";
function DeliveryProtectedRoute({ children }) {
  let role = sessionStorage.getItem("role");
  return role === "delivery" ? children : <Navigate to="/NotUser" />;
}

export default DeliveryProtectedRoute;
