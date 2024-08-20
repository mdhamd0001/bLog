import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneCard() {
  const {id}=useParams();
  
  const [card, setcard] = useState(null)

  useEffect(() => {
    const fetchBlog = async() => {
      try {
        const res = await axios.get(`http://localhost:8469/api/get/oneblog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res.data);
        setcard(res.data);
      } catch (error) {
        console.error(error); // Log the entire error object
        alert(error.response?.data?.message || "An error occurred"); // Improved error handling
      }
    };
    fetchBlog();
  }, []);
  if (!card) {
    return <p>Blog not found</p>; // Handle case where no data is returned
  }
  
  return (
    <>
      <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
        <a href="#" className="rounded-lg">
          <img
            className="p-3 rounded-lg"
            src={`http://localhost:8469/${card.Thumbnail}`}
            alt="img"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
           {card.Description}
          </p>
          
        </div>
      </div>
    
    </>
  );
}

export default OneCard;
