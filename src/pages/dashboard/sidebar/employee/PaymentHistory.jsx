import { Table } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
const PaymentHistory = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payment/${user?.email}`);
      console.log(paymentHistory);
      return data;
    },
  });

  const sortedPaymentHistory = [...paymentHistory].sort((a, b) => {
    const dateA = new Date(a?.date);
    const dateB = new Date(b?.date);
    return dateB - dateA;
  });

  console.log();

  return (
    <div className="pr-10">
      <h1 className="text-5xl text-center font-bold text-primaryColor mt-10">
        Employee <span className="text-darkMode">List</span>
      </h1>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Month</Table.HeadCell>
              <Table.HeadCell>Transaction ID</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {sortedPaymentHistory.map((payment) => (
                <Table.Row
                  key={payment?._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {payment?.amount}
                  </Table.Cell>
                  <Table.Cell>{payment?.date}</Table.Cell>
                  <Table.Cell>{payment?.trans_id}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
