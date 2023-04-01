import React, { useEffect, useState } from "react";
import BookMark from "../Bookmark/BookMark";
import SingleBlog from "../SingleBlog/SingleBlog";
import { ToastContainer, toast } from 'react-toastify';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   console.log(blogs);
  const [bookMark,setBookMark]=useState([]);
  const [readTime,setReadTime]=useState([]);

  const handleBookMark=(blog)=>{
    // console.log(blog)
    // if (bookMark.contains(blog)) {
    //     toast("You Have Already Bookmarked This Blog !!")               
    // }
    // else{
        
    // }
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
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5 m-5">
      <div className="lg:col-span-3">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></SingleBlog>
        ))}
      </div>
      <div className="">
        <BookMark bookMark={bookMark} readTime={readTime}></BookMark>
      </div>
    </div>
  );
};

export default Blogs;
