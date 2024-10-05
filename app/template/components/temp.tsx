"use client"
import { useState } from "react";
import { Userset } from "./subcomponent/userset";

const AllTemp = () => {
  const [Toggle , setToggle]= useState(false);
  return (
    <div className="flex h-screen w-screen overflow-y-hidden ">
      <div className={`${Toggle ? "hidden md:block": "block"} flex-1 h-full`}>
        <button  className="block md:hidden" onClick={()=>{setToggle(true)}}>See</button>
        <div className="p-5 md:p-9 md:pt-9 h-full">
            <Userset />
        </div>
      </div>
      <div className={`flex-1 ${Toggle ? "sm:block": "hidden md:block"} bg-red-300`}>
      <button onClick={()=>{setToggle(false)}}>See</button>
          ejrj
      </div>
    </div>
  );
};

export default AllTemp;
