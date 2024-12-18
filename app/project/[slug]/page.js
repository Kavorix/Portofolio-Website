'use client';

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles/${personalData.devUsername}/${params.slug}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchBlog();
  }, [params.slug]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

export default BlogDetails;
