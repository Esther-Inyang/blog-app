"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { GrUnorderedList } from "react-icons/gr";
import { SideNavDataProps } from "../types";
import { usePathname } from "next/navigation";
import { HiDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const SideNav: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const pathname = usePathname();

  const handleSideNavOpen = () => setIsSideNavOpen(!isSideNavOpen);

  const handleSideNavClose = () => {
    setIsSideNavOpen(false);
  };

  const sideNavData: SideNavDataProps[] = [
    {
      id: 1,
      label: "Add Post",
      href: "/dashboard/add-post",
      icon: FaPlus,
    },
    {
      id: 2,
      label: "Blog List",
      href: "/dashboard/blog-list",
      icon: GrUnorderedList,
    },
  ];

  return (
    <aside
      // isSideNavOpen ? "translate-x-0" : "-translate-x-full"
      className={` ${
        isSideNavOpen
          ? "w-40 px-5 h-full bg-gray-700 "
          : "w-5 h-16 flex flex-col justify-center bg-gray-100 shadow-md"
      }  z-10 transition-all duration-300 ease-in-out absolute md:block md:h-full md:w-48 md:bg-gray-700 md:p-10 md:relative`}
    >
      <div>
        <button
          onClick={handleSideNavOpen}
          className={`${
            isSideNavOpen ? "hidden" : "block"
          } md:hidden cursor-pointer`}
        >
          <HiDotsVertical className="text-xl md:text-2xl" />
        </button>

        <nav
          className={`${
            isSideNavOpen ? "flex" : "hidden"
          } md:flex flex-col gap-4 rounded-sm`}
        >
          <button
            onClick={handleSideNavClose}
            className={`mt-5 flex justify-end md:hidden cursor-pointer`}
          >
            <IoClose className="text-xl md:text-2xl text-white" />
          </button>

          {sideNavData.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleSideNavClose}
                className={`flex gap-3 items-center`}
              >
                <span
                  className={`p-1 text-base rounded-full ${
                    pathname === item.href
                      ? "bg-white text-gray-900"
                      : "text-white"
                  }`}
                >
                  <item.icon />
                </span>
                <span
                  className={`text-base xl:text-xl font-medium ${
                    pathname === item.href ? "text-white" : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
