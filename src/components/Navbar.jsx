import React, { useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { Link, useFetchers, useNavigate } from "react-router-dom";
import { LogOut, MoonIcon, SunIcon } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
export const Navbar = () => {
  const [activeTheme, setTheme] = useTheme();
  const navigate = useNavigate()
  const {reFetch} = useFetch()
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleLogout =() =>{
    window.localStorage.removeItem("user")
    window.location.reload()
    navigate('/')
  }
  return (
    <nav className=" fixed top-0 z-10 text-lg  w-full max-w-full px-4 bg-light dark:bg-[#13161a] dark:text-d-text shadow-md backdrop-blur-2xl backdrop-saturate-200 border-none lg:px-8 py-2">
      <div className="flex items-center justify-between top-0 ">
        <Link
          to={"/"}
          className="mr-4 dark:text-d-text text-2xl block cursor-pointer py-1.5 font-sans font-medium leading-relaxed text-inherit antialiased"
        >
          H.O.M.E
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block px-5  py-2 rounded-lg  antialiased  leading-normal text-blue-gray-900 dark:bg-d-card">
                <a href="#" class="flex items-center dark:text-d-text">
                  Stays
                </a>
              </li>
              <li className="block px-5 py-2 dark:bg-d-card rounded-lg  antialiased  leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center dark:text-d-text">
                  Flights
                </a>
              </li>
              <li className="block px-5 py-2 dark:bg-d-card rounded-lg  antialiased  leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center dark:text-d-text">
                  Car rentals
                </a>
              </li>
              <button
                onClick={() => setTheme(activeTheme)}
                className="py-2 px-2 hover:cursor-pointer rounded-full hover:bg-neutral-400 flex items-center"
              >
                {activeTheme === "light" ? (
                  <SunIcon size={24} color="white" />
                ) : (
                  <MoonIcon size={24} />
                )}
              </button>
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            {user ? (
              <>
                <span className="text-light">{user.details.username}</span>
                <button onClick={handleLogout} className="hidden md:inline-block px-5 py-1 font-semibold text-center text-d-text dark:text-light bg-dark  dark:bg-light hover:translate-y-[-5px] hover:bg-light hover:border hover:border-dark hover:text-light transition-all rounded-lg"><LogOut /></button>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="hidden md:inline-block px-5 py-1 font-semibold text-center text-d-text dark:text-light bg-dark  dark:bg-light hover:translate-y-[-5px] hover:bg-light hover:border hover:border-dark hover:text-light transition-all rounded-lg "
                  type="button"
                >
                  <span>Log In</span>
                </Link>
                <Link
                  to={"/register"}
                  className="hidden md:inline-block rounded-lg bg-gray-300 py-1 px-5 text-center hover:translate-y-[-5px] font-semibold transition-all border border-dark"
                  type="button"
                >
                  <span>Sign in</span>
                </Link>
              </>
            )}
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
