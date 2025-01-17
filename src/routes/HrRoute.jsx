import { Spinner } from "flowbite-react";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

const HrRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Spinner aria-label="Default status example" />;
  if (role === "HR") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

export default HrRoute;
