"use client";

import Image from "next/image";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#15616D" },
  { name: "Group B", value: 8, fill: "#FF7D00" },

  ,
];

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-4">Performance</h2>
        <Image src="/moreDark.png" alt="" height={16} width={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-bold">9.2</h1>
        <p className="text-xs text-iconAccent">of 10 max LTS</p>
      </div>
      <div className="absolute font-medium text-iconPrimary bottom-16 right-0 left-0 m-auto text-center">1st Semester - 2nd Semester</div>
    </div>
  );
};

export default Performance;
