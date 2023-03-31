import React from 'react';

const BookMark = (props) => {
    console.log(props.bookMark)
    const {bookMark}=props;

    const readTime=0;


    return (
        <div className='sticky top-5'>
            <div className='p-4 bg-gray-200 border border-blue-500 rounded mb-3'>
                <p className='text-center text-blue-500 font-bold'>Spent time on read :  min</p>
            </div>
            <div className='bg-gray-200 rounded p-4'>
                <h4 className='font-bold mb-3'>Bookmarked Blogs : {bookMark.length}</h4>
                {
                    bookMark.map(blog =>{
                        return <p className='bg-white p-4 rounded mb-2'>{blog.title}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default BookMark;