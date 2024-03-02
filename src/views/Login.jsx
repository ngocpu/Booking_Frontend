import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../assets/logo.jpg'
export const Login = () => {
  const BaseUrl = "http://localhost:3000/api"
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${BaseUrl}/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res);
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
    
  };
  return (
    <div className="relative">
      <div className="absolute top-0 h-screen bg-gray-300 w-full z-10 flex items-center dark:bg-[#131312]">
        <div className="w-1/2">
          <div className="flex flex-col items-center my-4">
            {error && (
              <span className="text-red-900" color="red">
                {error.message}
              </span>
            )}
            <Link to={"/"}>H.O.M.E</Link>
          </div>
          <div class="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-[#fdfef9]">
              Login
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
                  class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                >
                  Username
                </label>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="name@mail.com"
                    id="username"
                    type="username"
                    onChange={handleChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
                <label
                  class="block dark:text-[#fdfef9] -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                >
                  Password
                </label>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="name@mail.com"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                class="mt-6 block w-full rounded-lg bg-d-card text-d-text py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Login
              </button>
              <p class="block dark:text-gray-600 mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                You don't have acount?
                <Link
                  to={"/register"}
                  class="font-medium text-gray-900 dark:text-[#fdfef9]"
                >
                  Register here!
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
