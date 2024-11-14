import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import { AuthContex } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const loaction = useLocation();
  console.log(location);
  const { user, loading } = useContext(AuthContex);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
