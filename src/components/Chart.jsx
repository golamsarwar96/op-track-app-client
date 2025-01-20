import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const Chart = ({ id }) => {
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`payment/${id}`);
      console.log(data);
      return data;
    },
  });

  // Format data for the chart
  const chartDataInfo = chartData.map((entry) => ({
    date: entry.date, // X-axis
    amount: entry.amount, // Y-axis
  }));
  console.log(chartDataInfo);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartDataInfo}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          label={{ value: "Date", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Amount", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
