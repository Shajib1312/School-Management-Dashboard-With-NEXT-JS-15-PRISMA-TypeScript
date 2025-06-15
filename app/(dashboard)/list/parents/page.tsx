import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: string;
  students: string[];
  name: string;
  email?: string;
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },


  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

export default function ParentList() {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="text-sm text-iconAccent border-b border- odd:bg-emerald-200/20 hover:bg-paragraph transition-all duration-200 ease-in-out"
    >
      <td className="flex items-center gap-4 p-4">
        
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-iconAccent">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-sm">{item.students.join(",")}</td>

      <td className="hidden md:table-cell text-sm ">{item.phone}</td>
      <td className="hidden md:table-cell text-sm ">{item.address}</td>
      <td>
        <div className="flex gap-2 items-center">
          <Link href={`/list/parents/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer  rounded-full hover:bg-paragraph/80 transition-all duration-200 ease-in-out">
              <Image src="/plus.svg" alt="plus" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-full hover:bg-priButton/60 transition-all duration-200 ease-in-out">
              <Image src="/delete.svg" alt="plus" width={16} height={16} />
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
          All Parents
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
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* pagination */}

      <Pagination />
    </div>
  );
}
