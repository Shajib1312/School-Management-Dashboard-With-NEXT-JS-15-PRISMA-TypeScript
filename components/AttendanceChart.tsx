"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    present: 40,
    absent: 24,
  },
  {
    name: "Mon",
    present: 30,
    absent: 13,
  },
  {
    name: "Tue",
    present: 20,
    absent: 24,
  },
  {
    name: "Wed",
    present: 27,
    absent: 30,
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-full w-full text-iconAccent/65 bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-cardHeading font-bold text-lg">Attendance</h1>
        <Image
          className="transition-transform duration-300 ease-in-out hover:rotate-12 cursor-pointer"
          src="/moreDark.png"
          alt=""
          height={20}
          width={20}
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#154" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#FF7D00" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#FF7D00" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "gray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#15616D"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#001524"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
