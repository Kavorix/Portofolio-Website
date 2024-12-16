// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col cursor-pointer">
        <div className="flex justify-end items-center text-[#16f2b3] text-sm pt-2 pr-2">
          {/* <p>{timeConverter(blog.published_at)}</p> */}
          <div className="flex items-center gap-3">
            {blog?.github_url && (
              <Link target="_blank" href={blog.github_url} className="hover:text-pink-500 hover:scale-110 transition-all">
                <p className="flex items-center gap-1">
                  <span><FaGithub size={30} /></span>
                </p>
              </Link>)}
            {blog?.project_url && (
              <Link target="_blank" href={blog?.project_url} className="hover:text-pink-500 hover:scale-110 transition-all">
                <p className="flex items-center gap-1">
                  <span><FiLink size={30} /></span>
                </p>
              </Link>)}
          </div>
        </div>
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium'>
          {blog.title}
        </p>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {/* {`${blog.reading_time_minutes} Min Read`} */}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;