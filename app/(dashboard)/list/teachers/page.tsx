import TableSearch from "@/components/TableSearch";
import Image from "next/image";

export default function TeacherList() {
  return (
    <div className="flex-1 bg-white p-4 rounded-md m-4  mt-0">
      {/* top */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="hidden md:block font-semibold text-lg text-iconAccent">
          All Teacher
        </h2>
        <div className=" flex flex-col md:flex-row gap-4 items-center">
          <TableSearch />
          <div className="">
            <Image src="/filter.svg" alt="filter" width={14} height={14}/>
          </div>
        </div>
      </div>
      {/* lists  */}
      <div>lists </div>
      {/* pagination */}
      <div>pagination </div>
    </div>
  );
}
