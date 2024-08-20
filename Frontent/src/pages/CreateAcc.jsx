import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function CreateAcc() {
    const navigate=useNavigate()
    const [input, setinput] = useState({name:"",email:"",password:""})
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post("http://localhost:8469/api/user/register",input)
            console.log(res.data.success);
            if(res.data.success){
             alert(res.data.message)
            setinput({name:"", email: "", password: "" });
            navigate("/signin")
            }else{
              alert(res.data.message)
             
            }
        } catch (error) {
          alert(error.response?.data?.message || "An error occurred");
        }
    }
  return (
   
    <>
    <Navbar></Navbar>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit}  className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={input.name}
                  onChange={e=>setinput({...input,[e.target.name]:e.target.value})}
                  autoComplete="name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={e=>setinput({...input,[e.target.name]:e.target.value})}
                  autoComplete="email"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={e=>setinput({...input,[e.target.name]:e.target.value})}

                  autoComplete="current-password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </form>

          
        </div>
      </div>
      </>
  )
}

export default CreateAcc
