import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center min-h-8 gap-4 py-32 lg:gap-8 ">
      <p className="text-xl font-semibold sm:text-2xl lg:text-3xl">
        Hi, I’m Hanif.
      </p>
      <h1 className="text-5xl font-black text-center sm:text-6xl lg:text-8xl">
        A VISUAL DEVELOPER
        <br />& DESIGNER
      </h1>
      <button className="flex justify-center text-l font-semibold text-green-600 border-4 rounded-full border-green-600 py-3 px-8 sm:text-xl">
        BOOK A CALL
      </button>
    </div>
  );
};

export default Hero;
