"use client";

import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Totals",
    Counts: 106,

    fill: "#fff ",
  },
  {
    name: "Girls",
    Counts: 53,

    fill: "#001524 ",
  },

  {
    name: "Boys",
    Counts: 53,

    fill: "#FF7D00",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white shadow-bg rounded-xl p-4 w-full h-full">
      {/* title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-cardHeading font-bold text-lg">Students</h1>
        <Image
          className="transition-transform duration-300 ease-in-out hover:rotate-12 cursor-pointer"
          src="/moreDark.png"
          alt="more pic"
          height={20}
          width={20}
        />
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="100%"
            // barSize={30}
            data={data}
          >
            <RadialBar background dataKey="Counts" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
          src="/maleFemale.svg"
          alt=""
          height={70}
          width={70}
        />
      </div>
      {/* bottom  */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-iconSecondary rounded-full" />
          <h1 className="text-cardText font-bold">1232</h1>
          <div className="text-cardHeading text-xs">Boys (55%)</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-iconPrimary rounded-full" />
          <h1 className="text-iconAccent font-bold">1232</h1>
          <div className="text-cardText text-xs">Girls (45%)</div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
