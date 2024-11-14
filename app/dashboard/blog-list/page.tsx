import Image from "next/image";
import user1 from "@/public/user1.jpeg";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ListDataProps } from "@/app/types";

const BlogList: React.FC<ListDataProps> = () => {
  const listData = [
    {
      id: 1,
      img: user1,
      author: "Eva Grey",
      title: "Blog title posted earlier",
      category: "Politics",
      date: "2022-01-01",
      edit: <FaRegEdit className="font-bold text-purple-700" />,
      delete: <MdDeleteForever className="text-pink-600" />,
    },
    {
      id: 2,
      img: user1,
      author: "Helen Mark",
      title: "Blog title posted earlier",
      category: "programming",
      date: "2024-11-01",
      edit: <FaRegEdit className="font-bold text-purple-700" />,
      delete: <MdDeleteForever className="text-pink-600" />,
    },
    {
      id: 3,
      img: user1,
      author: "Raphael Paul",
      title: "Blog title posted earlier",
      category: "Medicine",
      date: "2023-10-17",
      edit: <FaRegEdit className="font-bold text-purple-700" />,
      delete: <MdDeleteForever className="text-pink-600" />,
    },
  ];
  return (
    <div className="overflow-x-auto md:w-[90%] mx-auto mt-20 p-5 md:p-10 border border-gray-200 rounded-md shadow-inner relative">
      <table className="min-w-[204%] md:min-w-[128%] lg:min-w-full px-4 border-l border-r border-t-4 border-gray-300">
        <thead>
          <tr className="w-full bg-purple-400 rounded-md">
            <th className="text-left p-2 bg-gray-200 text-sm md:text-lg font-normal text-gray-800">
              Author
            </th>
            <th className="text-left p-2 bg-gray-100 text-sm md:text-lg font-normal text-gray-800">
              Blog title
            </th>
            <th className="text-left p-2 bg-gray-200 text-sm md:text-lg font-normal text-gray-800">
              Category
            </th>
            <th className="text-left p-2 bg-gray-100 text-sm md:text-lg font-normal text-gray-800">
              Date
            </th>
            <th className="p-2 bg-gray-200 text-sm md:text-lg font-normal text-gray-800">
              Edit
            </th>
            <th className="p-2 bg-gray-100 text-sm md:text-lg font-normal text-gray-800">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item, index) => {
            return (
              <tr
                key={item.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="h-[100%] p-2 flex flex-col md:flex-row gap-2 items-center">
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <h2 className="text-xs text-center md:text-left md:text-sm text-gray-700">
                    {item.author}
                  </h2>
                </td>
                <td className="p-2">
                  <h2 className="text-xs md:text-sm text-gray-700">
                    {item.title}
                  </h2>
                </td>
                <td className="p-2">
                  <h2 className="text-xs md:text-sm text-gray-700">
                    {item.category}
                  </h2>
                </td>
                <td className="p-2">
                  <h2 className="text-xs md:text-sm text-gray-700">
                    {item.date}
                  </h2>
                </td>
                <td className="p-2 text-center">
                  <button>{item.edit}</button>
                </td>
                <td className="p-2 text-center">
                  <button>{item.delete}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
