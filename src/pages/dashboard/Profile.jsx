import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log("User Email:", user?.email);

  // Get axios instance from custom hook
  const axiosSecure = useAxiosSecure();

  // Fetch users using React Query & axiosSecure
  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users"); // Use axios instance properly
      console.log("Fetched Users:", response.data);
      return response.data;
    },
  });

  const singleUser = users.find((oneUser) => oneUser?.email === user?.email);
  console.log(singleUser);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <img
          referrerPolicy="no-referrer"
          src={
            singleUser?.role === "Employee"
              ? singleUser.image
              : singleUser.img_URL
          }
        />
      </div>
    </div>
  );
};

export default Profile;
