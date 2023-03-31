import React from 'react';

const BookMark = () => {

    return (
        <div className='sticky top-5'>
            <div className='p-4 bg-gray-100 border border-blue-500 rounded mb-3'>
                <p className='text-center text-blue-500 font-bold'>Spent time on read :  min</p>
            </div>
            <div className='bg-gray-100 rounded p-4'>
                <h4 className='font-bold p-'>Bookmarked Blogs : </h4>
            </div>
        </div>
    );
};

export default BookMark;