import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col gap-6 py-10 bg-orange-600 sm:py-20">
      <span className="px-6 lg:px-20">
        <h2 className="text-4xl text-white font-black sm:text-5xl lg:text-6xl">
          Recent
          <br />
          works
        </h2>
      </span>

      <div className="flex flex-row gap-5 pl-6 overflow-scroll lg:pl-20">
        <div className="w-[240px] h-[240px] bg-slate-300 shrink-0 rounded-2xl sm:w-[320px] sm:h-[320px] lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[240px] h-[240px] bg-slate-300 shrink-0 rounded-2xl sm:w-[320px] sm:h-[320px] lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[240px] h-[240px] bg-slate-300 shrink-0 rounded-2xl sm:w-[320px] sm:h-[320px] lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[240px] h-[240px] bg-slate-300 shrink-0 rounded-2xl sm:w-[320px] sm:h-[320px] lg:w-[560px] lg:h-[400px]"></div>
      </div>
    </div>
  );
};

export default Work;
