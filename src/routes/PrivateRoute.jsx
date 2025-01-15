import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Spinner aria-label="Default status example" />;
  if (user && user?.email) return children;
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
