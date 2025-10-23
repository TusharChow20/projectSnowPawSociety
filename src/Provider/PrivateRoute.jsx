import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthPRovider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  return user && user.email ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/login"></Navigate>
  );
};

export default PrivateRoute;
