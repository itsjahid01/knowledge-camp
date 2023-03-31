import React, { useEffect, useState } from "react";
import BookMark from "../Bookmark/BookMark";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   console.log(blogs);
  const [bookMark,setBookMark]=useState([]);
  const [readTime,setReadTime]=useState([]);
//   console.log(bookMark)

  const handleBookMark=(blog)=>{
    // console.log(blog)
    const newArr=[...bookMark,blog];
    setBookMark(newArr);
  }

  const handleReadTime=(blog)=>{
    // console.log(blog)
    const newArr=[...readTime,blog];
    setReadTime(newArr);
  }

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 m-5">
      <div className="col-span-3">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></SingleBlog>
        ))}
      </div>
      <div>
        <BookMark bookMark={bookMark} readTime={readTime}></BookMark>
      </div>
    </div>
  );
};

export default Blogs;
