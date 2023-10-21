import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div
      className=" hidden md:flex items-center justify-between 
    p-5 shadow-md border-b-[1px]"
    >
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="flex gap-5">
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
            hover:text-white"
        >
          Home
        </h2>
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
            hover:text-white"
        >
          History
        </h2>
        <h2
          className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
            hover:text-white"
        >
          Contact Us
        </h2>
      </div>
    </div>
  );
};

export default NavBar;
