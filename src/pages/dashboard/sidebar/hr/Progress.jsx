import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Table } from "flowbite-react";

const Progress = () => {
  const axiosSecure = useAxiosSecure();
  const { data: workSheet = [], refetch } = useQuery({
    queryKey: ["workSheet"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/work-sheet`);
      return data;
    },
  });
  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Prog<span className="text-darkMode">ress</span>
      </h1>

      {/* Table section */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Employee Name</Table.HeadCell>
              <Table.HeadCell>Task</Table.HeadCell>
              <Table.HeadCell>Submitted Date</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {workSheet.map((workSheet) => (
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
