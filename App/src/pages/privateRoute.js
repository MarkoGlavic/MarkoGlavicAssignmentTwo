import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  if (!context.isAuthenticated) {
    return <Navigate to={"/login"} replace state={{ intent: location }} />;
  }

  return children;
};

export default PrivateRoute;
