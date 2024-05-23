import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center min-h-8 gap-4 py-32 lg:gap-8 ">
      <p className="text-2xl font-semibold sm:text-3xl">Hi, I’m Hanif.</p>
      <h1 className="text-6xl font-black text-center lg:text-8xl">
        A VISUAL DEVELOPER
        <br />& DESIGNER
      </h1>
      <button className="flex justify-center text-2xl text-green-600 border-4 rounded-full border-green-600 py-4 px-8">
        BOOK A CALL
      </button>
    </div>
  );
};

export default Hero;
