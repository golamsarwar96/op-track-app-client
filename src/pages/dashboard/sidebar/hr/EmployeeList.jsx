import { useQuery } from "@tanstack/react-query";
import useAxiosSecure, { axiosSecure } from "../../../../hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });
  return (
    <div>
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
              <Table.HeadCell>Pay</Table.HeadCell>
              <Table.HeadCell>Varified</Table.HeadCell>
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
                  <Table.Cell>{user?.salary}</Table.Cell>
                  <Table.Cell>
                    {user?.isVerified ? (
                      <div>
                        <RiVerifiedBadgeFill className="text-2xl text-red-700" />
                      </div>
                    ) : (
                      <div>
                        <RxCrossCircled className="text-2xl text-green-700" />
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <IoIosSearch className="text-2xl text-primaryColor" />
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
