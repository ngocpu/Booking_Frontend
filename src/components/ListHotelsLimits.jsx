import React from "react";
import { useFetch } from "../hooks/useFetch";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const ListHotelsLimits = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=5");
  console.log(data);
  const slideLefft = () => {
    let sliderLeft = document.getElementById("slider");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500;
  };
  const slideRight = () => {
    let slideRight = document.getElementById("slider");
    slideRight.scrollLeft = slideRight.scrollLeft + 500;
  };
  if (data) {
    return (
      <div className="w-full">
        {loading ? (
          "Loading"
        ) : (
          <div className="relative flex justify-center items-center group">
            <div
              id="slider"
              className="h-full w-full flex overflow-x-scroll whitespace-nowrap scroll-smooth relative "
            >
              <ArrowLeft
                onClick={slideLefft}
                size={35}
                className="bg-light left-0 top-[20%] absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
              />
              {data.map((item) => (
                <div
                  className="flex p-3 flex-col gap-3 justify-center dark:hover:bg-d-card rounded-lg  "
                  key={item._id}
                >
                  <img
                    src={
                      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="flex flex-col items-start px-2 ">
                    <h1 className="text-light font-bold dark:text-d-text">{item?.name}</h1>
                    <h2 className="text-p-text">{item?.city}</h2>
                    <span className="font-semibold text-light dark:text-d-text">Starting from{item?.cheapestPrice}</span>
                    {item?.rating && (
                      <div className="">
                        <button>{item?.rating}</button>
                        <span>Excellent</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <ArrowRight
                onClick={slideRight}
                size={35}
                className="bg-light right-0 top-[20%] absolute opacity-50 hover:opacity-100 rounded-full hidden z-10 group-hover:block cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    );
  } else return 1;
};
