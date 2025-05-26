import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
  id: string;
  date: string;
  subject: string;
  type: "assignment" | "exam";
  class: string;
  teacher: string;
  student: string;
  score: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },

  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

export default function ResultList() {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="text-sm text-iconAccent border-b border- odd:bg-emerald-200/20 hover:bg-paragraph transition-all duration-200 ease-in-out"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex gap-2 items-center">
          <Link href={`/list/result/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer  rounded-full hover:bg-emerald-400/40 transition-all duration-200 ease-in-out">
              <Image src="/plus.svg" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-full hover:bg-priButton/40 transition-all duration-200 ease-in-out">
              <Image src="/delete.svg" alt="view" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex-1 bg-white p-3 rounded-md m-3  mt-0">
      {/* top */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="hidden md:block font-semibold text-lg text-icon">
          All Results
        </h2>
        <div className=" flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-3 self-end items-center">
            <button className="w-8  rounded-full hover:bg-paragraph transition-all duration-300 ease-in-out h-8 flex items-center justify-center cursor-pointer">
              <Image src="/filter.svg" alt="filter" width={18} height={18} />
            </button>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-paragraph transition-all duration-300 ease-in-out">
                <Image src="/sort.svg" alt="short" width={18} height={18} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* lists  */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* pagination */}

      <Pagination />
    </div>
  );
}
