import { Spinner } from "flowbite-react";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Spinner aria-label="Default status example" />;
  if (role === "Admin") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

export default AdminRoute;
