import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Card, Table } from "flowbite-react";
import { ImFire } from "react-icons/im";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import AdjustSalary from "../../../../components/modal/AdjustSalary";
import { TbColumns3, TbTable } from "react-icons/tb";
import { useState } from "react";
import CardView from "../../../../components/CardView";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [layout, setLayout] = useState("table");
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
  const verifiedUsers = Array.isArray(users)
    ? users.filter((user) => user.isVerified === true)
    : [];
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
            refetch();
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  //Handle change role
  const handleRole = async (id, changeRoll) => {
    try {
      const updatedData = { role: "HR" };
      console.log(updatedData);
      const { data } = await axiosSecure.patch(
        `/users/role/${id}`,
        updatedData
      );
      console.log(data);
      refetch();
      return data;
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        All <span className="text-darkMode">Employee</span> List
      </h1>
      <div className="flex justify-center mt-8">
        <button
          onClick={() =>
            setLayout((prev) => (prev === "table" ? "grid" : "table"))
          }
          className="flex items-center gap-2 px-[20px] py-4 font-bold bg-primaryColor text-darkMode rounded-full"
        >
          {layout === "table" ? "Grid" : "Table"}
          {layout === "table" ? (
            <TbColumns3 className="text-xl"></TbColumns3>
          ) : (
            <TbTable className="text-2xl"></TbTable>
          )}
        </button>
      </div>

      <div className="mt-10">
        {layout === "table" ? (
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Employee Name</Table.HeadCell>
                <Table.HeadCell>Designation</Table.HeadCell>
                <Table.HeadCell>Salary</Table.HeadCell>
                <Table.HeadCell>Change Salary</Table.HeadCell>
                <Table.HeadCell>Make HR</Table.HeadCell>
                <Table.HeadCell>Fire</Table.HeadCell>
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
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {employee?.salary}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <AdjustSalary employee={employee}></AdjustSalary>
                    </Table.Cell>
                    <Table.Cell>
                      {employee?.role === "HR" ? (
                        <div>
                          <h1>HR</h1>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={() =>
                              handleRole(employee?._id, employee?.role)
                            }
                          >
                            Employee
                          </button>
                        </div>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {employee?.isFired ? (
                        <span className="text-red-500 text-medium font-semibold">
                          Fired
                        </span>
                      ) : (
                        <button
                          onClick={() => handleFireEmployee(employee._id)}
                        >
                          <ImFire className="text-2xl text-yellow-300 bg-red-800 rounded-full p-1" />
                        </button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        ) : (
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 items-center justify-center lg:ml-10 lg:pl-10 mb-10">
            {verifiedUsers.map((employee) => (
              <div>
                <Card
                  className="w-80"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={employee?.img_URL}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {employee?.name}
                  </h5>
                  <div className="flex justify-between">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {employee.designation}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Salary : ${employee.salary}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <AdjustSalary employee={employee}></AdjustSalary>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        {employee?.role === "HR" ? (
                          <div>
                            <h1>HR</h1>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={() =>
                                handleRole(employee?._id, employee?.role)
                              }
                            >
                              Employee
                            </button>
                          </div>
                        )}
                      </div>
                      <div>
                        {employee?.isFired ? (
                          <span className="text-red-500 text-medium font-semibold">
                            Fired
                          </span>
                        ) : (
                          <button
                            onClick={() => handleFireEmployee(employee._id)}
                          >
                            <ImFire className="text-2xl text-yellow-300 bg-red-800 rounded-full p-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEmployeeList;
