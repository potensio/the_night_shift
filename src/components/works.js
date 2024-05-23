import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col gap-6 py-20 bg-orange-600">
      <span className="px-6 lg:px-20">
        <h2 className="text-5xl text-white font-black lg:text-6xl">
          RECENT
          <br />
          WORKS
        </h2>
      </span>

      <div className="flex flex-row gap-5 pl-6 overflow-scroll lg:pl-20">
        <div className="w-[320px] h-[320px] bg-slate-300 shrink-0 rounded-2xl lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[320px] h-[320px] bg-slate-300 shrink-0 rounded-2xl lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[320px] h-[320px] bg-slate-300 shrink-0 rounded-2xl lg:w-[560px] lg:h-[400px]"></div>
        <div className="w-[320px] h-[320px] bg-slate-300 shrink-0 rounded-2xl lg:w-[560px] lg:h-[400px]"></div>
      </div>
    </div>
  );
};

export default Work;
