import React, { useEffect, useState } from "react";
import BookMark from "../Bookmark/BookMark";
import SingleBlog from "../SingleBlog/SingleBlog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   console.log(blogs);
  const [bookMark,setBookMark]=useState([]);
  const [useId,setUseId]=useState([]);
  const [readTime,setReadTime]=useState([]);

  const handleBookMark=(blog,id)=>{
    // console.log(blog)
    if (useId.includes(id)) {
        toast("You Have Already Bookmarked This Blog !!");   
        setBookMark((newArr)=>[...newArr,blog]);
        setUseId((newId)=>[...newId,id]);           
    }
    else{
        setBookMark((newArr)=>[...newArr,blog]);
        setUseId((newId)=>[...newId,id]);
    }
  }

  const handleReadTime=(blog)=>{
    // console.log(blog)
    const newArr=[...readTime,blog];
    setReadTime(newArr);
  }

  useEffect(() => {
    fetch('data.json')
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
