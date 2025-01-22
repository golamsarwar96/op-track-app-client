import { useParams } from "react-router-dom";
import Chart from "../../../../components/Chart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data: emp_Details = [] } = useQuery({
    queryKey: ["emp_Details"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/detail/${id}`
      );
      console.log(emp_Details);
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Employee <span className="text-darkMode">Details</span>
      </h1>
      <div className=" text-black p-10">
        <div className="">
          <div className="bg-primaryColor text-white p-10 flex items-center justify-between gap-10">
            <div>
              <img
                src={emp_Details?.img_URL}
                className="w-20 h-20 object-cover"
                alt=""
              />
            </div>
            <p className="text-xl font-bold">Name : {emp_Details?.name}</p>
            <p className="text-xl font-bold">
              Designation : {emp_Details?.designation}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mt-20">
          <p className="text-3xl text-center font-bold text-primaryColor mb-20">
            Progress <span className="text-darkMode">Chart</span> Of an Employee
            Based On <span className="text-darkMode">Salary vs Month</span>
          </p>
          <Chart email={emp_Details?.email}></Chart>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
