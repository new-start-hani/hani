import React from "react";
import Comment from "./comment";

const detail = () => {
  return (
    <div className="flex flex-col w-[1000px] h-[1000px] bg-[#505050] mx-auto pt-[60px]">
      <div className="w-[900px] h-[150px] bg-[#f0f0f0] ml-[50px] rounded-[10px] ">
        <div className="h-2/3 relative">
          <div className="absolute top-[-35px] left-1/2 -translate-x-1/2">
            <div className="w-[80px] h-[80px] rounded-full bg-black "></div>
            <div className="text-center text-[12px]">name</div>
          </div>
        </div>

        <div className="text-center font-bold">Black Party</div>
      </div>
      <Comment />
    </div>
  );
};

export default detail;
