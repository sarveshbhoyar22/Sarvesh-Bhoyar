import React from "react";

const Card = ({ title, description, image}) => {
  return (
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 mb-10">
      <div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center sm:w-80 w-60 h-90 bg-neutral-900 text-gray-50">
        <div className="after:duration-500 text-center before:duration-500 duration-500 group-hover:before:translate-x-11 group-hover:before:-translate-y-11 group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-3xl p-3 z-10">
          <h1>{title}</h1>
        </div>
        <img src={image} className="sm:w-60 w-50 sm:h-40 h-35 border-2 rounded-3xl" alt="" />
        {/* <video src="" className="w-60 h-40"></video> */}
        <div className="flex flex-row justify-center text-sm font-thin items-center gap-1">
          {/* <p>{description}</p> */}
          <span>MERN_STACK</span>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
