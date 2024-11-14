"use client";

import { useState } from "react";
import BlogPost from "@/components/BlogPost";
import { PostsDataProps } from "@/app/types";

interface PostListProps {
  postsData: PostsDataProps[];
}

const Blog: React.FC<PostListProps> = ({ postsData = [] }) => {
  const [categoryMenu, setCategoryMenu] = useState("All");
  const categories = [
    "All",
    "Education",
    "Medicine",
    "Politics",
    "Programming",
  ];

  if (!postsData) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No posts available</p>
      </div>
    );
  }

  const filteredPosts = postsData.filter(
    (post) => post.category === categoryMenu || categoryMenu === "All"
  );

  // Get post count for current category
  const postCount = filteredPosts.length;

  return (
    <div className="pb-20 md:pb-32">
      <header>
        <div className="my-20 md:mt-20 md:mb-10">
          <h1 className="mb-5 md:mb10 text-2xl lg:text-4xl text-center font-bold text-gray-900">
            Vera Blog
          </h1>
          <p className="w-10/12 md:w-2/4 mx-auto md:my-0 text-sm md:text-base text-center text-gray-600">
            Welcome to Vera blog where we share our thoughts and experiences
            about Life, Education, Politics and Programming
          </p>
        </div>
        <nav className="w-[85%] md:w-[60%] mx-auto p-5">
          <div className="grid grid-cols-2 gap-2 justify-items-center md:grid-cols-none md:flex md:flex-wrap md:justify-center cursor-pointer rounded-sm">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setCategoryMenu(category)}
                className={`w-full md:w-auto px-5 py-2 text-white transition-color duration-200 border border-[#909090] bg-[#6b6b6b] 
                  ${
                    categories.length % 2 !== 0 &&
                    index === categories.length - 1
                      ? "col-span-2"
                      : ""
                  }
                    ${
                      categoryMenu === category
                        ? "bg-gray-800"
                        : "hover:bg-[#787878]"
                    }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
      </header>
      <div className="w-[90%] mx-auto">
        <div className="text-center mt-6">
          <h2 className="text-lg font-bold mb-2">Latest Posts</h2>
          <p className="text-gray-400">
            {categoryMenu === "All"
              ? `Showing all ${postCount} posts`
              : `Showing ${postCount} post ${
                  postCount !== 1 ? "s" : ""
                } in ${categoryMenu}`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-6">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
