import React from "react";

export const Mail = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center bg-dark mt-[50px] mx-auto text-d-text gap-5 p-[50px] ">
      <h1 className="text-3xl font-bold">Save time, save money!</h1>
      <span className="text-p-text">
        Sign up and we'll send the best deals to you
      </span>
      <div className="flex gap-3 ">
        <input type="text" placeholder="Your Email" className="px-4 py-2 outline-none w-80 rounded-xl" />
        <button className="py-2 bg-d-card rounded-xl px-4 ">Subscribe</button>
      </div>
    </div>
  );
};
