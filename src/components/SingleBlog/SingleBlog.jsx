import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
  console.log(props);
  const {author_image,author_name,cover_image,title,publish_date,read_time}=props.blog;

  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img
            src={cover_image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex justify-evenly items-center">
                <div><img className="w-10 rounded-full" src={author_image} alt="" /></div>
                <div>
                    <h3 className="font-bold">{author_name}</h3>
                    <p>{publish_date}</p>
                </div>
            </div>
            <div><span>{read_time} min read</span> <span className="ml-1"><FontAwesomeIcon icon={faBookmark} /></span></div>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>#beginners #programming</p>
          <p href="#">Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
