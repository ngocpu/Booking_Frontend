import React, { useState } from "react";
import logo from '../assets/logo.jpg'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate()
  const [register, setRegister] =  useState({
    username:'',
    email:"",
    password:""
  })  
  const handleChange = (e) =>{
      setRegister((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
      const BaseUrl = "http://localhost:3000/api"
      const res = await axios.post(`${BaseUrl}/auth/register`, register)
      console.log(res)
      navigate("/")
      // localStorage.setItem("user", res.data)
    } catch(err){
      console.log(err);
    }
   
  }
  return (
    <div className="relative">
      <div className="absolute top-0 h-screen bg-gray-300 w-full z-10 flex items-center dark:bg-[#131312]">
        <div className="w-1/2">
          <div className="flex flex-col items-center my-4">
            <Link to={"/"}>
              H.O.M.E
            </Link>
          </div>
          <div class="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            {/* {errorMessage && (
              <span className="alert alert-danger" color="red">
                {errorMessage}
              </span>
            )}
            {successMessage && (
              <span className="alert alert-success" color="green">
                {successMessage}
              </span>
            )} */}
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-[#fdfef9]  text-blue-gray-900">
              Register
            </h4>
            <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Nice to meet you! Enter your details to register.
            </p>
            <form
              class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
              onSubmit={handleSubmit}
            >
              <div class="flex flex-col gap-6 mb-1">
                <label
                  htmlFor="lastName"
                  class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                >
                  Username
                </label>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="lastname@mail.com"
                    id="username"
                    onChange={handleChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
                <label
                  htmlFor="email"
                  class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                >
                  Email
                </label>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="name@mail.com"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
                <label
                  htmlFor="password"
                  class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                >
                  Password
                </label>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    placeholder="********"
                    id="password"
                    onChange={handleChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
              </div>
              <button
                class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Register
              </button>
              <p class="block dark:text-gray-600 mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                You already have account?
                <Link
                  to={"/login"}
                  class="font-medium text-gray-900 dark:text-[#fdfef9]"
                >
                Login here!
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={logo}
            alt=""
            className="hidden xl:block h-screen w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
