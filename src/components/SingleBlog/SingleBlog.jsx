import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
//   console.log(props);
  const {author_image,author_name,cover_image,title,publish_date,read_time,id}=props.blog;
  const {handleBookMark,handleReadTime}=props;

  return (
    <div>
      <div className="card shadow-lg p-2">
        <figure><img src={cover_image} alt="" /></figure>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-evenly items-center gap-4">
                <div><img className="w-10 rounded-full" src={author_image} alt="" /></div>
                <div>
                    <h3 className="font-bold">{author_name}</h3>
                    <p>{publish_date}</p>
                </div>
            </div>
            <div><span>{read_time} min read</span> <span onClick={ () =>handleBookMark(props.blog,id)} className="ml-1 cursor-pointer"><FontAwesomeIcon icon={faBookmark} /></span></div>
          </div>
          <h2 className="text-2xl font-bold mt-3 mb-3">{title}</h2>
          <p>#beginners #programming</p>
          <p onClick={()=> handleReadTime(props.blog)} className="w-24 text-blue-600 underline cursor-pointer mt-3">Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
