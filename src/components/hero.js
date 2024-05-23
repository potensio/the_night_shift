import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center min-h-8 gap-8 py-32">
      <p className="text-3xl font-semibold">Hi, I’m Hanif.</p>
      <h1 className="text-5xl font-black text-center sm:text-8xl">
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
