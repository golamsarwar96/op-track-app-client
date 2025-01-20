import { useParams } from "react-router-dom";
import Chart from "../../../../components/Chart";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const EmployeeDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: details = [] } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`payment/${id}`);
      console.log(details);
      return data;
    },
  });
  return (
    <div>
      <div>
        <h1>Employee Details : {id}</h1>
      </div>
      <div className="mt-20">
        <Chart id={id}></Chart>
      </div>
    </div>
  );
};

export default EmployeeDetails;
