"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostsDataProps } from "@/app/types";

interface BlogPostProps {
  post: PostsDataProps;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const userLocale = window.navigator.language || "en-US";
    const formatted = new Date(post.date).toLocaleDateString(userLocale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formatted);
  }, [post.date]);

  const createSlug = (desc: string) => {
    return desc
      .toLowerCase()
      .slice(0, 60)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-linear hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Link href={`/blog/${post.id}/${createSlug(post.desc)}`}>
          <Image
            src={post.img}
            alt={post.desc.slice(0, 60)}
            fill
            className="object-cover"
            priority
          />
        </Link>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-sm bg-white rounded-full text-blue-950">
            {post.category}
          </span>
          <time
            dateTime={new Date(post.date).toISOString()}
            className="text-sm text-gray-500"
          >
            {formattedDate ||
              new Date(post.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}

            {/* {new Date(post.date).toLocaleDateString(navigator.language, {
              dateStyle: "full",
            })} */}
          </time>
        </div>

        <h2 className="my-1 text-base md:text-lg font-bold text-[#3e3e3e]">
          {post.title}
        </h2>

        <div className="mb-4">
          <p className="text-gray-700 line-clamp-3">{post.desc}</p>
          <Link
            href={`/blog/${post.id}/${createSlug(post.desc)}`}
            className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more
          </Link>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{post.author}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
