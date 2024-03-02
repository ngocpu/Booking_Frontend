import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Banner } from "../components/Banner";
import { Title } from "../components/Title";
import { Countries } from "../components/Countries";
import { ListPropertyTypes } from "../components/ListPropertyTypes";
import { Link } from "react-router-dom";
import { ListHotelsLimits } from "../components/ListHotelsLimits";
import { Mail } from "../components/Mail";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";

export const Home = () => {
  const [activeTheme, setTheme] = useTheme();
  return (
    <div className=" h-full dark:bg-dark relative">
      <div className="relative flex mx-auto mt-[65px] py-4  items-center w-[98%] rounded-2xl overflow-hidden">
        <Banner />
      </div>
      <div className="absolute top-[10%] left-[18%] z-10">
          <Search />
      </div>
      <div className="flex w-[80%] flex-wrap mx-auto justify-center h-full">
        <div className="flex flex-col w-full gap-2">
          <Title
            title="Offers"
            dess="Promotions, deals and special offers for you"
          />
          <div className="flex w-full justify-center items-center gap-5 px-5 my-2">
            <div className="flex w-[50%] justify-between items-center p-2">
              <div className="flex flex-col items-start gap-3">
                <h2 className="font-bold text-lg dark:text-d-text">
                  Take your longest holiday yet
                </h2>
                <p className="text-p-text text-md dark:text-d-text">
                  Browse properties offering long-term stays, many at reduced
                  monthly rates.
                </p>
                <button className="py-2 px-5 rounded-lg bg-dark text-d-text dark:bg-d-card transition-all hover:translate-y-[-5px] hover:bg-light border hover:border-dark hover:text-light ">
                  Find a stay
                </button>
              </div>
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                alt=""
                className="w-[124px] h-[124px] object-cover rounded-lg"
              />
            </div>
            <div className="flex w-[50%] justify-between items-center p-2">
              <div className="relative w-full">
                <img
                  src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/293799350.jpeg?k=8a6f4e24c37096fbdcd3c3d30c9f3dcea15ce35751448466decf791918012a64&o="
                  alt=""
                  className="w-full h-[156px] rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full bg-dark"></div>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          <Title
            title="Trending destinations"
            dess="Most popular choices for travellers from Vietnam"
          />
          <Countries />
          <Title title={"Browse by property type"} dess={""} />
          <ListPropertyTypes />
          <div className="flex justify-between  items-center">
            <Title title={"Hotels guests love"} dess={""} className="text-xl" />
            <Link to={"/all-hotels"} className="font-bold dark:text-d-text ">
              Discorver Hotel
            </Link>
          </div>
          <ListHotelsLimits />
        </div>
      </div>
      <Mail />
      <Footer />
    </div>
  );
};
