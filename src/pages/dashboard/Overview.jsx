import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      console.log("Fetched Users:", response.data);
      return response.data;
    },
  });

  const { data: workSheet = [], refetch } = useQuery({
    queryKey: ["workSheet"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/work-sheet/${user?.email}`);
      return data;
    },
  });
  return (
    <div className="px-3">
      <h1 className="text-center text-5xl text-darkMode mt-10 font-bold">
        Over<span className="text-primaryColor">view</span>
      </h1>
      <div className="lg:w-[15%] w-[80%] py-20">
        <p className="font-bold mb-2">Total Employee</p>
        <h1 className=" font-bold text-5xl text-center bg-darkMode text-primaryColor p-5">
          {users.length}
        </h1>
      </div>
    </div>
  );
};

export default Overview;
