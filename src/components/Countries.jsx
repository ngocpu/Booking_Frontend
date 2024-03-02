import React from "react";

export const Countries = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-3 ">
      <div className="col-span-6 p-3 rounded-xl transition-all overflow-hidden w-full">
        <img
          src="https://media.istockphoto.com/id/1187159242/fr/photo/horizon-de-da-nang.webp?b=1&s=170667a&w=0&k=20&c=WNFr1TNDZx-C03iHZ8su-0HXaHcipJKe0YNN9moD1Jg="
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="col-span-6 p-3 rounded-xl transition-all  overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1324479880/fr/photo/pagode-tran-quoc.webp?b=1&s=170667a&w=0&k=20&c=nqt-Q5hFB6WCYeRFAzqAXHqOxGV46mWWuZ6jGcTGvbs="
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="col-span-4 p-3 rounded-xl transition-all  overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/160179168/fr/photo/ville-de-hano%C3%AF.webp?b=1&s=170667a&w=0&k=20&c=Kd0ZIKkqsorEF-DiYAK7G1m8HhJUUaLfGsGHQ7WwO6U="
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="col-span-4 p-3 rounded-xl transition-all  overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609424360486-c5b2636741d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGElMjBsYXR8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="col-span-4 p-3 rounded-xl transition-all  overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1455508908/fr/photo/p%C3%AAcheur-de-vue-de-drone-dans-le-lac-tuyen-lam.webp?b=1&s=170667a&w=0&k=20&c=uFTYarPU-XWoDBSU08Qq-_-WZ34rhPZVxcY5gaaE9H4="
          alt=""
          className="w-full h-[260px] object-cover rounded-xl hover:scale-110 overflow-hidden cursor-pointer transition-all duration-300"
        />
      </div>
    </div>
  );
};
