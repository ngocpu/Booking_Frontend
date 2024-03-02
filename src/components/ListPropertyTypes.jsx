import React from "react";
import { useFetch } from "../hooks/useFetch";


const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
];

export const ListPropertyTypes = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  return (
    <div className="grid grid-cols-10 gap-4">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((item,i) => (
              <div className="col-span-2 p-3 dark:hover:bg-d-card text-light dark:text-d-text rounded-lg" key={i}>
                <img src={item} alt="" className="w-full h-[190px] object-cover rounded-lg mb-3" />
                <div className="text-light dark:text-d-text px-2 ">
                  <h1 className="text-xl font-bold ">{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))
            
            }
        </>
      )}
    </div>
  );
};
