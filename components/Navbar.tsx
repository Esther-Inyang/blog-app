"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBrightness } from "react-icons/bi";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isDashboardPath = pathname?.startsWith("/dashboard");

  if (isDashboardPath) return null;

  return (
    <div
      className={`p-10 flex justify-between md:justify-end items-center md:gap-10 lg:gap-20 shadow-sm ${
        pathname === "/dashboard" ? "hidden" : ""
      } 
        ${pathname === "/auth/login" ? "bg-gray-50 shadow-md py-5" : ""}`}
    >
      <div className="flex gap-1">
        <BiBrightness size={30} className="text-gray-800" />
        <span className="text-lg text-gray-800 font-extrabold">Vera</span>
      </div>
      <Link href="/auth/login">
        <button className="py-1.5 px-3 md:py-2 md:px-4 text-xs md:text-sm font-bold text-white bg-gray-700 rounded-full transition-transform ease-linear hover:bg-gray-800 hover:scale-105 cursor-pointer">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
