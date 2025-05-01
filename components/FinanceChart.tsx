"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "January",
    income: 4000,
    expense: 2400,
  },
  {
    name: "February",
    income: 3000,
    expense: 1398,
  },
  {
    name: "March",
    income: 2000,
    expense: 9800,
  },
  {
    name: "April",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "June",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 3490,
    expense: 4300,
  },
  {
    name: "August",
    income: 3490,
    expense: 4300,
  },
  {
    name: "September",
    income: 3490,
    expense: 4300,
  },
  {
    name: "October",
    income: 3490,
    expense: 4300,
  },
  {
    name: "November",
    income: 3490,
    expense: 4300,
  },
  {
    name: "December",
    income: 3490,
    expense: 4300,
  },
];
const FinanceChart = () => {
  return (
    <div className="h-full text-iconAccent/65 bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-cardHeading font-bold text-lg">Finance</h1>
        <Image
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-12"
          src="/moreDark.png"
          alt=""
          height={20}
          width={20}
        />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis axisLine={false} dataKey="name" tickMargin={10} />
            <YAxis axisLine={false} tickMargin={20} />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#001524"
              activeDot={{ r: 8 }}
              strokeWidth={5}
            />
            <Line type="monotone" dataKey="income" stroke="#FF7D00" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
