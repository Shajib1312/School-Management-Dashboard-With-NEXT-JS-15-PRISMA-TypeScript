import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: string;
  teacherId: string;
  name: string;
  email?: string;
  photo?: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
  action: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

export default function TeacherList() {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="text-sm text-iconAccent border-b border- odd:bg-emerald-200/20 hover:bg-paragraph transition-all duration-200 ease-in-out"
    >
      <td className="flex items-center gap-3 p-3">
        <Image
          src={item?.photo || "/default-avatar.png"}
          alt="teacher"
          width={40}
          height={40}
          className="rounded-full md:hidden lg:block w-10 h-10 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-iconAccent">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-sm">{item.teacherId}</td>
      <td className="hidden md:table-cell text-sm">
        {item.subjects.join(",")}
      </td>
      <td className="hidden md:table-cell text-sm ">
        {item.classes.join(",")}
      </td>
      <td className="hidden md:table-cell text-sm ">{item.phone}</td>
      <td className="hidden md:table-cell text-sm ">{item.address}</td>
      <td>
        <div className="flex gap-2 items-center">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer  rounded-full hover:bg-paragraph/80 transition-all duration-200 ease-in-out">
              <Image src="/view.svg" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-full hover:bg-priButton/60 transition-all duration-200 ease-in-out">
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
          All Teacher
        </h2>
        <div className=" flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 self-end items-center">
            <button className="w-8  rounded-full hover:bg-paragraph transition-all duration-300 ease-in-out h-8 flex items-center justify-center cursor-pointer">
              <Image src="/filter.svg" alt="filter" width={18} height={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-paragraph transition-all duration-300 ease-in-out">
              <Image src="/sort.svg" alt="short" width={18} height={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-paragraph transition-all duration-300 ease-in-out ">
              <Image src="/plus.svg" alt="filter" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      {/* lists  */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* pagination */}

      <Pagination />
    </div>
  );
}
