import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Area,
  Line,
} from "recharts";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Chart = ({ email }) => {
  console.log(email);
  // const myData = [
  //   {
  //     date: "01/01/2025",
  //     amount: "700",
  //   },
  // ];
  // const data = [
  //   {
  //     name: "Page A",
  //     pv: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     pv: 1398,
  //   },
  //   {
  //     name: "Page C",
  //     pv: 9800,
  //   },
  //   {
  //     name: "Page D",
  //     pv: 3908,
  //   },
  //   {
  //     name: "Page E",
  //     pv: 4800,
  //   },
  //   {
  //     name: "Page F",
  //     pv: 3800,
  //   },
  //   {
  //     name: "Page G",
  //     pv: 4300,
  //   },
  // ];
  const axiosSecure = useAxiosSecure();
  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`chart/${email}`);
      console.log(chartData);
      return data;
    },
  });

  const chartDataInfo = chartData.map((entry) => ({
    date: entry.date,
    amount: entry.amount,
  }));
  console.log(chartDataInfo);
  return (
    <ComposedChart width={1000} height={300} data={chartDataInfo}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="amount" barSize={20} fill="#3c2b5c" />
    </ComposedChart>
  );
};

export default Chart;
