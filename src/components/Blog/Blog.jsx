import React from 'react';

const Blog = () => {
    return (
        <div className='p-8 shadow-xl'>
            <div className='mb-3'>
                <p className='text-xl font-bold'>Purpose of useEffect other than fetching data?</p>
                <p><span className='text-xl text-cyan-600 font-semibold'>Ans:</span> The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            </div>
            <div className='mb-3'>
                <p className='text-xl font-bold'>How Does React work?</p>
                <p><span className='text-xl text-cyan-600 font-semibold'>Ans:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='mb-3'>
                <p className='text-xl font-bold'>Props vs state</p>
                <p><span className='text-xl text-cyan-600 font-semibold'>Ans:</span> The Data is passed from one component to another.The Data is passed within the component only.Props is Immutable (cannot be modified).State is Mutable ( can be modified).Props can be used with state and functional components.State can be used only with the state components/class component (Before 16.0).Props are read-only.State is both read and write.</p>
            </div>
            <div className='mb-3'>
                <p className='text-xl font-bold'>How does useState work?</p>
                <p><span className='text-xl text-cyan-600 font-semibold'>Ans:</span> UseState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
        </div>
    );
};

export default Blog;