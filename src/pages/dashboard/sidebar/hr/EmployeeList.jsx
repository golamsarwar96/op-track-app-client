import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import PayButtonModal from "../../../../components/modal/PayButtonModal";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });

  const handleToggle = async (id, status) => {
    try {
      const updatedValue = { isVerified: !status };
      console.log(updatedValue);
      const { data } = await axiosSecure.patch(`/users/${id}`, updatedValue);
      console.log(data);
      refetch();
      toast.success("User status updated successfully");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Employee <span className="text-darkMode">List</span>
      </h1>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Bank Account</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Verified</Table.HeadCell>
              <Table.HeadCell>Pay</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((user) => (
                <Table.Row
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </Table.Cell>
                  <Table.Cell>{user?.email}</Table.Cell>
                  <Table.Cell>{user?.bank_account_no}</Table.Cell>
                  <Table.Cell>{user?.salary}</Table.Cell>

                  <Table.Cell>
                    {user?.isVerified === false ? (
                      <div
                        onClick={() =>
                          handleToggle(user?._id, user?.isVerified)
                        }
                        className="cursor-pointer"
                      >
                        <RxCrossCircled className="text-2xl text-red-700" />
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          handleToggle(user?._id, user?.isVerified)
                        }
                      >
                        <RiVerifiedBadgeFill className="text-2xl text-green-700" />
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <button disabled={!user.isVerified}>
                      <Table.Cell>
                        <PayButtonModal
                          salary={user?.salary}
                          id={user?._id}
                          email={user?.email}
                          name={user?.name}
                          image={user?.img_URL}
                          refetch={refetch}
                        />
                      </Table.Cell>
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/dashboard/details/${user?._id}`}>
                      <IoIosSearch className="text-2xl text-primaryColor" />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
