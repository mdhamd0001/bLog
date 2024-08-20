import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Addcat() {
const [input, setInput] = useState({title:""})
const navigate=useNavigate()
const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const token=localStorage.getItem("token")
    if (!token) {
      return setError("User not authenticated. Please log in.");
    }
    const req = await axios.post(
      "http://localhost:8469/api/add/newcat",
      input,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setInput({ title: "" });
    alert(req.data.message);
    navigate("/addblog");
  } catch (error) {
    alert(error.response?.data?.message || "An error occurred"); // Removed 'return' statement here
  }
}
  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Category
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="cat"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <input
                  id="cat"
                  name="title"
                  type="text"
                  value={input.title}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  autoComplete="title"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addcat;
