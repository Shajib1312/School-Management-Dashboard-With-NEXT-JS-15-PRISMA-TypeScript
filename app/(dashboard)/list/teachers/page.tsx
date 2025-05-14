import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

export default function TeacherList() {
  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4  mt-0">
      {/* top */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="hidden md:block font-semibold text-lg text-icon">
          All Teacher
        </h2>
        <div className=" flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 self-end items-center">
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <Image src="/filter.svg" alt="filter" width={18} height={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <Image src="/sort.svg" alt="short" width={18} height={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <Image src="/plus.svg" alt="filter" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      {/* lists  */}

      {/* pagination */}

      <Pagination />
    </div>
  );
}
