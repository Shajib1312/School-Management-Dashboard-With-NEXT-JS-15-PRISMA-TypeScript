import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Search bar */}
      <div className="hidden md:block text-xs rounded-full">
        <label
          htmlFor="search"
          className="flex items-center gap-2 p-2 ring-1 ring-iconSecondary rounded-full cursor-pointer"
        >
          <Image src="/search.svg" alt="search icon" width={16} height={16} />
          <input
            className="w-[200px] px-2 bg-transparent text-iconSecondary placeholder:text-iconAccent focus:outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </label>
      </div>
      {/* Icon and User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-iconPrimary/25 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="notification" width={20} height={20} />
        </div>
        <div className="bg-iconPrimary/25 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />

          <span className="absolute top-[-5px] right-[-5px] bg-iconSecondary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-iconAccent leading-3 font-medium">
            Shajib Hasan
          </span>
          <span className="text-[10px] text-iconPrimary text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="user"
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
