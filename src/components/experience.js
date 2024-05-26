import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="px-6 lg:px-20">
      <div className="relative flex flex-1 h-[428px] bg-black rounded-2xl  lg:h-[480px]">
        <div className="flex flex-1 px-12 justify-center overflow-hidden opacity-20 md:px-28 xl:opacity-100 xl:justify-start">
          <div>
            <img
              src="code-learner.svg"
              className="min-w-[400px] relative scale-[1.6] pl-0 sm:pl-10"
              alt="Logo"
            />
          </div>
        </div>
        <div className="absolute flex px-8 py-16 h-fit left-0 right-0 bottom-0 top-0 lg:px-20 lg:py-20 ">
          <div className="flex flex-1 justify-center xl:justify-end">
            <div className="flex flex-1 flex-col items-center max-w-[560px]">
              <h3 className="text-3xl font-extrabold text-center text-white lg:text-[40px]">
                Unlimited projects, pause & cancel anytime.
              </h3>
              <h3 className="text-[48px] font-extrabold text-center text-white mt-8">
                $1,685
              </h3>
              <p className="hidden text-l font-medium text-center text-white sm:block lg:text-xl">
                Leverage my 5 years of joyful experience in building performant,
                and secure bubble apps.
              </p>
              <button className="w-fit text-xl font-semibold text-white border-[3px] rounded-[18px] border-white py-3 px-5 negative-cta-shadow mt-8 lg:py-4 lg:px-6 md:text-xl lg:text-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
