import { Label, Table, TextInput } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentModal from "../../../../components/modal/PaymentModal";
import { useState } from "react";
const Payroll = () => {
  const axiosSecure = useAxiosSecure();
  const [date, setDate] = useState("");
  const { data: paymentReq = [], refetch } = useQuery({
    queryKey: ["paymentReq"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/payment-req");
      console.log(data);
      return data;
    },
  });

  console.log(date);
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      {" "}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Employee Name</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
              <Table.HeadCell>Month</Table.HeadCell>
              <Table.HeadCell>Year</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Make Payment</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {paymentReq.map((employee) => (
                <Table.Row
                  key={employee._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.employeeDetails?.name}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.salary}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.month}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {employee?.year}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div>
                      <TextInput
                        id="input-gray"
                        placeholder="Payment date"
                        onBlur={(e) => setDate(e.target.value)}
                        required
                        name="date"
                        color="gray"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <button onClick={handleClick}>
                      <PaymentModal
                        setDate={setDate}
                        date={date}
                        employee={employee}
                      ></PaymentModal>
                    </button>
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

export default Payroll;
