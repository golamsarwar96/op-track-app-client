import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import useAuth from "../../../../hooks/useAuth";

const Progress = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  //fetching all data from work-sheet collection
  const { data: workSheet = [], refetch } = useQuery({
    queryKey: ["workSheet"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/work-sheet`);
      console.log(data);
      return data;
    },
  });

  // Filtering work-sheet data to get specific results
  const filteredData = workSheet.filter((workSheet) => {
    const isEmployee =
      selectedEmployee === "" || workSheet.name === selectedEmployee;

    const isMonth =
      selectedMonth === "" ||
      workSheet.formattedDate.startsWith(selectedMonth + "/");

    return isEmployee && isMonth;
  });

  // Unique Names for selection and map
  const employeeNames = [];
  for (let i = 0; i < workSheet.length; i++) {
    if (!employeeNames.includes(workSheet[i].name)) {
      employeeNames.push(workSheet[i].name);
    }
  }

  // Unique months for dropdown
  const months = [];
  for (let i = 0; i < workSheet.length; i++) {
    const month = workSheet[i].formattedDate.split("/")[0];
    if (!months.includes(month)) {
      months.push(month);
    }
  }

  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Prog<span className="text-darkMode">ress</span>
      </h1>
      {/* Dropdown section */}
      <div className="flex justify-center items-center mt-10 gap-12">
        <div className="">
          <div>
            <label className="mr-2 font-medium">Select Employee:</label>
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="p-2 border rounded"
            >
              <option>All Employee</option>
              {employeeNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div>
            <label className="mr-2 font-medium">Select Month:</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">All Months</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Employee Name</Table.HeadCell>
              <Table.HeadCell>Task</Table.HeadCell>
              <Table.HeadCell>Submitted Date</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filteredData.map((workSheet) => (
                <Table.Row
                  key={workSheet._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {workSheet.name}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {workSheet.task}
                  </Table.Cell>
                  <Table.Cell>{workSheet.formattedDate}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Progress;
