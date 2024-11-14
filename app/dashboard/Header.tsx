import Image from "next/image";
import user1 from "@/public/user1.jpeg";

const Header = () => {
  return (
    <div className="h-16 flex flex-col justify-center px-5 md:h-auto md:block md:px-10 md:py-3 shadow-md mb-2 border-b bg-gray-100 border-b-gray-300">
      <div className="flex items-center justify-end gap-4 md:gap-0 md:justify-between">
        <div className="order-2 md:order-1">
          <div className="p-1 relative bg-blue-50 rounded-full">
            <Image src={user1} alt="user" className="w-8 h-8 rounded-full" />
          </div>
        </div>
        <div className="text-sm font-medium md:text-lg text-blue-950">
          Admin Dashboard
        </div>
      </div>
    </div>
  );
};

export default Header;
