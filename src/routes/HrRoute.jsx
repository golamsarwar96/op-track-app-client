import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading";

const HrRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loading></Loading>;
  if (role === "HR") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

export default HrRoute;
