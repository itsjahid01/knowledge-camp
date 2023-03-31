import React, { useEffect, useState } from "react";
import BookMark from "../Bookmark/BookMark";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   console.log(blogs);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-5 p-5">
      <div className="col-span-3">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id}></SingleBlog>
        ))}
      </div>
      <div>
        <BookMark></BookMark>
      </div>
    </div>
  );
};

export default Blogs;
