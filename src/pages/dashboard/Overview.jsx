import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Overview = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      console.log("Fetched Users:", response.data);
      return response.data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-5xl text-darkMode mt-10 font-bold">
        Over<span className="text-primaryColor">view</span>
      </h1>
      <div className="w-[15%] py-20">
        <p className="font-bold">Total Employee</p>
        <h1 className=" font-bold text-5xl text-center bg-darkMode text-primaryColor p-5">
          {users.length}
        </h1>
      </div>
    </div>
  );
};

export default Overview;
