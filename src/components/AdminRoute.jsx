import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  const isAdmin = localStorage.getItem("isAdmin");

  if (!token || isAdmin !== "true") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default AdminRoute;