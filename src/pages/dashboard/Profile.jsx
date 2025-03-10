import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../shared/Loading";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      console.log("Fetched Users:", response.data);
      return response.data;
    },
  });

  const singleUser = users.find((oneUser) => oneUser?.email === user?.email);
  console.log(singleUser);

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <h1 className="text-center text-5xl text-darkMode mt-10 font-bold">
        <span className="text-primaryColor">Pro</span>file
      </h1>
      <div className="flex justify-center items-center mt-10 bg-primaryColor rounded-3xl lg:w-[40%] md:w-[80%] mx-auto flex-col md:py-10 p-3">
        <img
          referrerPolicy="no-referrer"
          className="md:w-[150px] md:h-[150px] w-[90px] h-[90px] rounded-full"
          src={
            singleUser?.role === "Employee"
              ? singleUser?.image
              : singleUser?.img_URL
          }
        />
        <h1 className="text-darkMode font-bold text-xl text-center mt-3">
          {singleUser?.name} {singleUser?.isVerified ? "✅" : "❌"}
        </h1>
        <h1 className="text-darkMode font-bold md:text-xl text-sm text-center mt-3">
          Email: {singleUser?.email}
        </h1>
        <h1 className="text-darkMode font-bold md:text-xl text-sm text-center mt-3">
          Designation: {singleUser?.designation}
        </h1>
        <h1 className="text-darkMode font-bold md:text-xl text-sm text-center mt-3">
          Salary: ${singleUser?.salary}
        </h1>
        <h1 className="text-darkMode font-bold md:text-xl text-sm text-center mt-3">
          Bank Account No. : {singleUser?.bank_account_no}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
