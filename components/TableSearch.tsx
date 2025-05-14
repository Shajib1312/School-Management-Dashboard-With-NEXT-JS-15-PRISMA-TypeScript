import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="hidden md:flex text-xs items-center gap-2 px-2 ring-1 ring-iconPrimary rounded-full cursor-pointer">
      <Image src="/search.svg" alt="search icon" width={16} height={16} />
      <input
        className="w-[200px] p-2 bg-transparent text-iconPrimary placeholder:text-iconAccent focus:outline-none"
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
