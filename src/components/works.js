import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col gap-6 py-16 bg-orange-600">
      <h2 className="text-6xl text-white font-black ml-20">
        RECENT
        <br />
        WORKS
      </h2>
      <div className="flex flex-row gap-5 overflow-scroll">
        <div className="w-[560px] h-[400px] bg-slate-300 shrink-0 rounded-2xl"></div>
        <div className="w-[560px] h-[400px] bg-slate-300 shrink-0 rounded-2xl"></div>
        <div className="w-[560px] h-[400px] bg-slate-300 shrink-0 rounded-2xl"></div>
        <div className="w-[560px] h-[400px] bg-slate-300 shrink-0 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Work;
