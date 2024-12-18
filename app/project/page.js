'use client';

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/project/blog-card";
import { blogData } from "@/utils/data/blogData";

async function page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[rgb(26,20,67)] w-fit text-white p-2 px-5 whitespace-nowrap text-lg sm:text-2xl marker:rounded-md">
            PROJECTS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]">aaa</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogData.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;