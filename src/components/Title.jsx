import React from "react";

export const Title = ({ title, dess ,className}) => {
  return (
    <>
      
      <h1 className={`text-light font-bold text-xl dark:text-d-text ${className}` }>
        {title}
      </h1>
      <p className="text-md text-p-text dark:text-d-text">
        {dess}
      </p>
    </>
  );
};
