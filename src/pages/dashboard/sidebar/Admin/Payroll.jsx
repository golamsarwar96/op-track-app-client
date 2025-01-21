import { Card, Label, Table, TextInput } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentModal from "../../../../components/modal/PaymentModal";
import { useState } from "react";
import { TbColumns3, TbTable } from "react-icons/tb";
import { ImFire } from "react-icons/im";
const Payroll = () => {
  const axiosSecure = useAxiosSecure();
  const [layout, setLayout] = useState("table");
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
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Pay<span className="text-darkMode">roll</span>
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
        ) : (
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 items-center justify-center lg:ml-10 lg:pl-10 mb-10">
            {paymentReq.map((employee) => (
              <div>
                <Card
                  className="w-80"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={employee?.employeeDetails?.image}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {employee?.employeeDetails?.name}
                  </h5>
                  <div className="flex justify-between">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Salary : ${employee.salary}
                    </p>
                    <p>
                      {employee?.month}, {employee?.year}
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div>
                      <button onClick={handleClick}>
                        <PaymentModal
                          setDate={setDate}
                          date={date}
                          employee={employee}
                        ></PaymentModal>
                      </button>{" "}
                    </div>
                    <div className="flex flex-col justify-end items-end">
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

export default Payroll;
