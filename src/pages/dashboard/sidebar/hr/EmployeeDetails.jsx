import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const EmployeeDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  return (
    <div>
      <h1>Employee Details : {id}</h1>
      <h1>{user.displayName}</h1>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default EmployeeDetails;
