"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostsDataProps } from "@/app/types";
import { postsData } from "@/app/data";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiHeart } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";
import { BiDislike } from "react-icons/bi";

interface ParamProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: ParamProps) => {
  const [data, setData] = useState<PostsDataProps | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your title"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  //fetchData in useCallback
  const fetchData = useCallback(() => {
    const foundPost = postsData.find((post) => post.id === Number(params.id));
    setData(foundPost || null);
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  //depend on fetchData since it's memoized

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <Link
        href="/"
        className="flex gap-1 items-center text-purple-600 transition-all duration-200 ease-linear hover:text-purple-800"
      >
        <BiArrowBack /> <span>Back to Posts</span>
      </Link>

      <h1 className="my-10 text-4xl font-semibold text-gray-950">
        {data.title}
      </h1>
      <div className="prose prose-slate lg:prose-lg max-w-none relative">
        <div className="w-fit absolute bottom-0 right-0 px-2 py-1 bg-gray-50 text-xs font-semibold text-gray-700 rounded-tl-lg">
          {data.category}
        </div>
        <div className="mb-8">
          <Image
            src={data.img}
            alt={data.title}
            // alt={post.desc.slice(0, 60)}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
        </div>
      </div>

      <div className="pt-10 mb-5">
        <h1 className="mb-3 text-2xl text-gray-950 font-semibold">
          Sub title of the article
        </h1>
        <div className="mt-6">
          <p className="text-base font-normal text-gray-700">{data.desc}</p>
        </div>
      </div>
      <div className="px-10">
        <div className="flex items-center gap-5 mb-5">
          <button className="flex items-center gap-1">
            <BiHeart className="text-lg text-gray-900" />{" "}
            <span className="text-sm">5</span>
          </button>
          <button className="flex items-center gap-1">
            <BiDislike className="text-lg text-gray-900" />{" "}
            <span className="text-sm">0</span>
          </button>
          <button className="flex items-center gap-1">
            <BiComment className="text-lg text-gray-900" />{" "}
            <span className="text-sm">2</span>
          </button>
          <button className="">
            <MdOutlineShare className="text-lg text-gray-900" />
          </button>{" "}
        </div>
        <div className="">
          <h3 className="text-sm text-gray-800 font-bold">All Comments</h3>
          <div className="mt-5 mb-8 py-3 px-4 bg-white">
            <div className="w-[85%] p-3 my-5 bg-gray-100 rounded-md">
              <h2 className="mb-2 text-sm text-gray-800 font-semibold">
                Joy Maxwell
              </h2>
              <p className="ml-4 text-sm text-gray-800 font-normal">
                This is the first comment and the second comment comes below
              </p>
            </div>
            <div className="w-[85%] p-3 my-5 bg-gray-100 rounded-md">
              <h2 className="mb-2 text-sm text-gray-800 font-semibold">
                Raphel John
              </h2>
              <p className="ml-4 text-sm text-gray-800 font-normal">
                This is the first comment and the second comment comes below
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-[80%]">
            <div>
              <label className="text-base text-gray-900 font-medium">
                Add a Comment
              </label>
              <input
                name="title"
                type="text"
                placeholder="Full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`block w-full mt-3 py-2 px-3 text-[14px] text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset placeholder:text-[#8C94A3] placeholder:text-xs md:placeholder:text-sm focus:ring-[1.6px] focus:ring-inset rounded-md shadow-md ${
                  formik.errors.name && formik.touched.name
                    ? "ring-[#ff8585] focus:ring-[#ff8585]"
                    : "ring-gray-300 focus:ring-gray-400"
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-[#fc4f4f] text-xs md:text-sm">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <textarea
              placeholder="Comment.."
              className={`block w-full h-[150px] mt-5 py-2 px-3 text-[14px] text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset ring-gray-300 focus:ring-gray-400  placeholder:text-[#8C94A3] placeholder:text-xs md:placeholder:text-sm focus:ring-[1.6px] focus:ring-inset resize-none rounded-md shadow-md`}
            ></textarea>

            <button className="mt-5 text-sm text-white py-2 px-5 rounded-md font-semibold bg-gray-800 transition-all duration-200 ease-linear hover:bg-gray-900">
              Submit
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Page;
