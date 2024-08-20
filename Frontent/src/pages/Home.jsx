import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
  const [blogs, setBlogs] = useState([]); // Ensure it's initialized as an empty array

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:8469/api/get/allblogs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res.data);
        setBlogs(res.data);
      } catch (error) {
        console.error(error); // Log the entire error object
        alert(error.response?.data?.message || "An error occurred"); // Improved error handling
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap m-2 gap-5 justify-center'>
        {blogs.length > 0 ? (
          <Cards blogs={blogs} />
        ) : (
          <div className=' mx-3 p-10  '>
            <h1 className='text-3xl my-2'>Create a blog</h1>
            <p>Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.</p>
            <button className='bg-indigo-600 rounded-md p-2 text-white my-2'><Link to="/addblog">Get Started</Link></button>
          </div>
          
        )}
      </div>
    </>
  );
}

export default Home;
