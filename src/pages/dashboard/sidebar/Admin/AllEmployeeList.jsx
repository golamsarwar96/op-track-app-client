import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Table } from "flowbite-react";
import { ImFire } from "react-icons/im";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  //Only getting verified employees
  const verifiedUsers = users.filter((user) => user.isVerified === true);
  console.log(verifiedUsers);

  //Fire user functionality
  const handleFireEmployee = (id) => {
    console.log(id);
    const updatedData = { isFired: true };
    Swal.fire({
      title: `Are you sure you want to fire?`,
      text: "They will no longer be able to log in!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, FIRE 🔥!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/users/${id}`, updatedData)
          .then(() => {
            Swal.fire("Fired!", "success");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        All <span className="text-darkMode">Employee</span> List
      </h1>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Employee Name</Table.HeadCell>
              <Table.HeadCell>Designation</Table.HeadCell>
              <Table.HeadCell>Make HR</Table.HeadCell>
              <Table.HeadCell>Fire</Table.HeadCell>
              <Table.HeadCell>Pay</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {verifiedUsers.map((employee) => (
                <Table.Row
                  key={employee._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.name}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.designation}
                  </Table.Cell>
                  <Table.Cell>Make HR</Table.Cell>
                  <Table.Cell>
                    {employee?.isFired ? (
                      <span className="text-red-500 text-medium font-semibold">
                        Fired
                      </span>
                    ) : (
                      <button onClick={() => handleFireEmployee(employee._id)}>
                        <ImFire className="text-2xl text-yellow-300 bg-red-800 rounded-full p-1" />
                      </button>
                    )}
                  </Table.Cell>
                  <Table.Cell>Pay</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeList;
