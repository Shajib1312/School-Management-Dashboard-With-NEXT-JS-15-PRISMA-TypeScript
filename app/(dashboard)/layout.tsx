import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function DashboardLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="p-4  w-[14%] md:w-[8%] lg:w-[16%]">
        <Link
          className="flex items-center justify-center lg:justify-start gap-2 "
          href="/"
        >
          <Image src={logo} alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">UHCS</span>
        </Link>
        <Menu />
      </div>
      <div className=" w-[86%] md:w-[92%] bg-cardBackground overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
