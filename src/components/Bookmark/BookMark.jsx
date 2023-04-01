import React from 'react';

const BookMark = (props) => {
    // console.log(props.bookMark)
    const {bookMark,readTime}=props;

    let time=0;
    for (const single of readTime) {
        // console.log(single.read_time)
        time=time+single.read_time;
    }


    return (
        <div className='sticky top-3'>
            <div className='p-4 bg-gray-200 border border-blue-500 rounded mb-3'>
                <p className='text-center text-blue-500 font-bold'>Spent time on read : {time} min</p>
            </div>
            <div className='bg-gray-200 rounded p-4'>
                <h4 className='font-bold mb-3'>Bookmarked Blogs : {bookMark.length}</h4>
                {
                    bookMark.map(blog =>{
                        return <p className='bg-white p-4 rounded mb-2' key={blog.id}>{blog.title}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default BookMark;