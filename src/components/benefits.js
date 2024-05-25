import React from "react";

const Benefit = () => {
  return (
    <div className="py-20 px-5 sm:px-8 lg:py-32 lg:px-20">
      <div className="flex gap-20">
        <div className="flex flex-col max-w-[400px] gap-6">
          <h2 className="text-6xl font-black">
            Subscribe with - <br /> benefits
          </h2>
          <p className="text-xl font-semibold">
            My service replaces unreliable freelancers and expensive agencies
            for one flat monthly fee, with works delivered so fast that it will
            blow your mind.
          </p>
        </div>
        <div className="flex gap-10">
          <img src="speed-go-fast.svg" className="w-60 h-60" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
